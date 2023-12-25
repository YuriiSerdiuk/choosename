import {makeAutoObservable} from "mobx"
import {namesListFemale, namesListMale} from "../constants/names";
import gender from './gender';
import {GENDER_BOY} from "../constants/constants";
import {getFromLocalStorage, setToLocalStorage} from "../helpers/helpers";
import {deletedNames, favoritesNames, genderCategory} from "../constants/localStorage";

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
    this.defaultNamesList = gender.gender === GENDER_BOY ? namesListMale : namesListFemale;
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