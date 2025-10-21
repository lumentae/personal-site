import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  shaderBackground: boolean;
  toggleShaderBackground: () => void;

  oneko: boolean;
  toggleOneko: () => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      shaderBackground: true,
      toggleShaderBackground: () => set((state) => ({ 
        shaderBackground: !state.shaderBackground 
      })),
      oneko: true,
      toggleOneko: () => set((state) => ({
        oneko: !state.oneko
      }))
    }),
    {
      name: 'settings-storage', // localStorage key
    }
  )
)
