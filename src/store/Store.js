import { create } from "zustand";

const useStore = create((set) => ({
    folderArray: [],
    categoryclicked: false,
    isfolderopen: false,
    selectedcategory: "All",
    setCategoryclicked: () => set((state) => ({ categoryclicked: !state.categoryclicked })),
    addFolder: (newfolder) => set((state) => ({ folderArray: [...state.folderArray, newfolder] })),
    setIsFolderOpen: () => set((state) => ({ isfolderopen: !state.isfolderopen })),
    setSelectedCategory: (newcategory) => set((state) => ({ selectedcategory: newcategory }))
}))

export default useStore;