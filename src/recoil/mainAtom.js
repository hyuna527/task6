import { atom } from "recoil"

export const menuAtom = atom({
    "key" : "menuAtom",
    "default" : false
})/// 항상 두개의 값을 갖는다 key는 필수 그냥 넣고~


export const pageAtom = atom({
    "key" : "pageAtom",
    "default" : "Home"
})
