import {makeAutoObservable} from "mobx"
import {namesList} from "../constants/names";
import {Login} from "@mui/icons-material";

class NamesList {
  defaultNamesList = namesList;
  favoriteNames = [];
  removedNames = [];

  constructor() {
    makeAutoObservable(this)
  }

  addToFavorites(addedName, genderCode) {
    this.defaultNamesList = this.defaultNamesList.filter((ob) => ob[genderCode].name !== addedName)
    this.favoriteNames.push(addedName);
  }

  removeNameFromNamesList(removedName, genderCode) {
    this.removedNames.push(removedName);
    this.defaultNamesList = this.defaultNamesList.filter((ob) => ob[genderCode].name !== removedName)
  }

  removeFromFavorites(removedName) {
    this.favoriteNames = this.favoriteNames.filter(({name}) => name !== removedName);
  }
}

export default new NamesList();