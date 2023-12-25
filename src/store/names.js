import {makeAutoObservable} from "mobx"
import {namesListFemale, namesListMale} from "../constants/names";
import gender from './gender';
import {GENDER_BOY} from "../constants/constants";

class NamesList {
  defaultNamesList = [];
  favoriteNames = [];
  removedNames = [];

  constructor() {
    this.changeGender();
    makeAutoObservable(this)
  }

  changeGender() {
    this.defaultNamesList = gender.gender === GENDER_BOY ? namesListMale : namesListFemale;
  }

  addToFavorites(addedName) {
    this.favoriteNames.push(addedName);
    this.defaultNamesList = this.defaultNamesList.filter((obj)=>obj.name !== addedName );
  }

  removeNameFromNamesList(removedName) {
    this.removedNames.push(removedName);
    this.defaultNamesList = this.defaultNamesList.filter((obj)=>obj.name !== removedName );
  }

  removeFromFavorites(removedName) {
    this.favoriteNames = this.favoriteNames.filter(({name}) => name !== removedName);
  }
}

export default new NamesList();