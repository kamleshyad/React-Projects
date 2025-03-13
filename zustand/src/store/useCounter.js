import { prefetchDNS } from "react-dom";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounter = create(
    persist(
        (set) => ({
            count : 0,
            inc : () => ( set((state) => ({count : state.count + 1 }))),
            dec : () => ( set((state) => ({count : state.count - 1 }))),
            reset : () => ( set((state) => ({count : 0})))
        }),
        {
            name: "counter-storage",
        }
    )
)