import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  shaderBackground: boolean;
  toggleShaderBackground: () => void;

  oneko: boolean;
  toggleOneko: () => void;
  
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
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
      })),
      _hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),
    }),
    {
      name: 'settings-storage', // localStorage key
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
)
