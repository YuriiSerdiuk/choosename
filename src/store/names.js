import { makeAutoObservable } from "mobx"

export const names = () => makeAutoObservable({
    names: [{},{}],
});