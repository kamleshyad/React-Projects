import { create } from "zustand";

const initialState = {
    value : 0,
}

export const useCounterStore = create( (set)=> {
    return {
        ...initialState,
        
        inc : () => {
            set((state) => {
                return {
                    value : state.value+1
                }
            })
        }
    }
})