import { create } from "zustand";

const useStore = create((set) => ({
    folderArray : ['All'],
    categoryclicked : false,
    isfolderopen : false,
    setCategoryclicked: () => set((state) => ({categoryclicked: !state.categoryclicked})),
    addFolder :  (newfolder) => set((state) => ({folderArray : [...state.folderArray, newfolder]})),
    setIsFolderOpen: () => set((state) => ({isfolderopen: !state.isfolderopen}))
}))

export default useStore;