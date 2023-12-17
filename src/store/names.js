import { makeAutoObservable } from "mobx"
import { namesList } from "../constants/names";



class NamesList {
    defaultNamesList=  namesList;
    constructor() {
        makeAutoObservable(this)
    }
}

export default  new NamesList();