import {makeAutoObservable} from "mobx"
import {namesList} from "../constants/names";

class NamesList {
  defaultNamesList = namesList;
  favoriteNames = [];
  removedNames = [];

  constructor() {
    makeAutoObservable(this)
  }

  addToFavorites(addedName) {
    this.defaultNamesList = this.defaultNamesList.filter(({name}) => name !== addedName);
    this.favoriteNames.push(addedName);

  }

  removeNameFromNamesList(removedName) {
    this.removedNames.push(removedName);
    this.defaultNamesList = this.defaultNamesList.filter(({name}) => name !== removedName);
  }

  removeFromFavorites(removedName) {
    this.favoriteNames = this.favoriteNames.filter(({name}) => name !== removedName);
  }
}

export default new NamesList();