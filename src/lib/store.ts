import { create } from 'zustand'

interface StoreState {
  navIsOpen: boolean
  setNavIsOpen: (toggle: boolean) => void
  contactIsOpen: boolean
  setContactIsOpen: (toggle: boolean) => void
  selectedProject: boolean | undefined
  setSelectedProject: (value: boolean) => void
  galleryVisible: boolean
  setGalleryVisible: (value: boolean) => void
  showThanks: boolean
  setShowThanks: (showThanks: boolean) => void
  lenis: unknown
  setLenis: (lenis: unknown) => void
  overflow: boolean
  setOverflow: (overflow: boolean) => void
  triggerTransition: string
  setTriggerTransition: (triggerTransition: string) => void
}

export const useStore = create<StoreState>((set) => ({
  navIsOpen: false,
  setNavIsOpen: (toggle) => set({ navIsOpen: toggle, overflow: !toggle }),
  contactIsOpen: false,
  setContactIsOpen: (toggle) => set({ contactIsOpen: toggle, overflow: !toggle }),
  selectedProject: false,
  setSelectedProject: (value) => set({ selectedProject: value }),
  galleryVisible: false,
  setGalleryVisible: (value) => set({ galleryVisible: value }),
  showThanks: false,
  setShowThanks: (showThanks) => set({ showThanks }),
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
  triggerTransition: '',
  setTriggerTransition: (triggerTransition) => set({ triggerTransition })
}))