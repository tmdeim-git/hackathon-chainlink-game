import { atom, createStore } from "jotai";

export const store = createStore();
export const currentOwnerAtom = atom<string>("");
