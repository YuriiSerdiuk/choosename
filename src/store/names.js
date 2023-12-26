import {makeAutoObservable} from "mobx"

import {namesListFemale, namesListMale} from "../constants/names";
import gender from './gender';
import {GENDER_BOY} from "../constants/constants";
import {getFromLocalStorage, setToLocalStorage} from "../helpers/helpers";
import {deletedNames, favoritesNames, generalNames} from "../constants/localStorage";

class NamesList {
  defaultNamesList = [];
  favoriteNames = [];
  removedNames = [];

  constructor() {
    this.changeGender();
    this.favoriteNames = getFromLocalStorage(favoritesNames) || [];
    this.removedNames = getFromLocalStorage(deletedNames) || [];
    makeAutoObservable(this);
  }

  changeGender() {
    const namesList = gender.gender === GENDER_BOY ? namesListMale : namesListFemale;
    setToLocalStorage(generalNames, namesList);
    const namesToRemove = getFromLocalStorage(deletedNames) || [];
    const favoriteNames = getFromLocalStorage(favoritesNames) || [];
    this.defaultNamesList = namesList
      .filter(nameObj => !namesToRemove.includes(nameObj.name))
      .filter((nameObj) => !favoriteNames.includes(nameObj.name));
  }

  addToFavorites(addedName) {
    this.favoriteNames.push(addedName);
    this.defaultNamesList = this.defaultNamesList.filter((obj) => obj.name !== addedName);
    setToLocalStorage(favoritesNames, this.favoriteNames);
  }

  removeNameFromNamesList(removedName) {
    this.removedNames.push(removedName);
    this.defaultNamesList = this.defaultNamesList.filter((obj) => obj.name !== removedName);
    setToLocalStorage(deletedNames, this.removedNames);
  }

  removeFromFavorites(removedName) {
    this.favoriteNames = this.favoriteNames.filter(({name}) => name !== removedName);
  }
}

export default new NamesList();