import {create} from 'zustand';

const useSidebar = create((set)=> ({
    isOpen: true,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false}),
    onToggle: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useSidebar;