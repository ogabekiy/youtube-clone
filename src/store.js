import { create } from "zustand";

const useStore = create((set) => ({
  videos: null,
  setVideos: (videos) => set({videos}) 
}))

export default useStore