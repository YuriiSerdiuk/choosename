import {makeAutoObservable} from "mobx"
import {namesList} from "../constants/names";

class NamesList {
  defaultNamesList = namesList;
  favoriteNames = [];

  constructor() {
    makeAutoObservable(this)
  }

  addToFavorites(name) {
    this.favoriteNames.push(name);
  }

  removeFromFavorites(removedName) {
    this.favoriteNames = this.favoriteNames.filter(({name}) => name !== removedName);
  }
}

export default new NamesList();