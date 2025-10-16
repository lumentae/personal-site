"use client";

import * as THREE from "three";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import React, { useRef, useMemo, useEffect } from "react";

const CreationMaterial = shaderMaterial(
    {
        iDate: new THREE.Vector4(),
        iTime: 0.,
        iResolution: new THREE.Vector2(),
        iMouse: new THREE.Vector2(),
    },
    `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    `
    uniform float iTime;
    uniform vec2 iResolution;
    varying vec2 vUv;
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        float snow = 0.0;
        float gradient = (1.0-float(fragCoord.y / iResolution.x))*0.15;
        float random = fract(sin(dot(fragCoord.xy,vec2(12.9898,78.233)))* 43758.5453);
        for(int k=0;k<6;k++){
            for(int i=0;i<12;i++){
                float cellSize = 2.0 + (float(i)*3.0);
                float downSpeed = 0.3+(sin(iTime*0.4+float(k+i*20))+1.0)*0.00008;
                vec2 uv = (fragCoord.xy / iResolution.x)+vec2(0.01*sin((iTime+float(k*6185))*0.6+float(i))*(5.0/float(i)),downSpeed*(iTime+float(k*1352))*(1.0/float(i)));
                vec2 uvStep = (ceil((uv)*cellSize-vec2(0.5,0.5))/cellSize);
                float x = fract(sin(dot(uvStep.xy,vec2(12.9898+float(k)*12.0,78.233+float(k)*315.156)))* 43758.5453+float(k)*12.0)-0.5;
                float y = fract(sin(dot(uvStep.xy,vec2(62.2364+float(k)*23.0,94.674+float(k)*95.0)))* 62159.8432+float(k)*12.0)-0.5;
                float randomMagnitude1 = sin(iTime*2.5)*0.7/cellSize;
                float randomMagnitude2 = cos(iTime*2.5)*0.7/cellSize;
                float d = 5.0*distance((uvStep.xy + vec2(x*sin(y),y)*randomMagnitude1 + vec2(y,x)*randomMagnitude2),uv.xy);
                float omiVal = fract(sin(dot(uvStep.xy,vec2(32.4691,94.615)))* 31572.1684);
                if(omiVal<0.08?true:false){
                    float newd = (x+1.0)*0.4*clamp(1.9-d*(15.0+(x*6.3))*(cellSize/1.4),0.0,1.0);
                    snow += newd;
                }
            }
        }
        fragColor = vec4(snow)+gradient*vec4(1.,1.,1.,0.0) + random*0.01;
    }
    void main() {
        mainImage(gl_FragColor, vUv * iResolution.xy);
    }
    `
);

extend({ CreationMaterial });
const ShaderObject = () => {
    const mesh = useRef<THREE.Mesh>();
    const { size, gl } = useThree();

    useFrame((_state, delta: number) => {
        (mesh.current.material as THREE.ShaderMaterial).uniforms.iTime.value += delta;
    });

    const uniforms = useMemo(() => (
        {
            iTime: 1.0,
            iResolution: new THREE.Vector2(),
            iMouse: new THREE.Vector2(),
        }
    ), []);

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[size.width, size.height]} />
            <creationMaterial {...uniforms} iResolution={[size.width, size.height]} />
        </mesh>
    )
}

export default function Background() {
    return (
        <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
            <ShaderObject />
        </Canvas>
    );
}