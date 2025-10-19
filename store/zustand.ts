import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  shaderBackground: boolean;
  toggleShaderBackground: () => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      shaderBackground: true,
      toggleShaderBackground: () => set((state) => ({ 
        shaderBackground: !state.shaderBackground 
      })),
    }),
    {
      name: 'settings-storage', // localStorage key
    }
  )
)
