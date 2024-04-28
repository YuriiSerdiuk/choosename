import {makeAutoObservable} from "mobx"

// import {namesListFemale, namesListMale} from "../constants/names";
import {GENDER_BOY, nameListId} from "../constants/constants";
import {getFromLocalStorage, setToLocalStorage} from "../helpers/helpers";
import {deletedNames, favoritesNames} from "../constants/localStorage";
import gender from './gender';

import Api from '../api';

class NamesList {
  defaultNamesList = [];
  favoriteNames = [];
  removedNames = [];

  constructor() {
    this.setInnitDefaultNamesList();
    this.favoriteNames = getFromLocalStorage(favoritesNames) || [];
    this.removedNames = getFromLocalStorage(deletedNames) || [];
    makeAutoObservable(this);
  }

  async setInnitDefaultNamesList() {
    const data = await Api.getList({id: nameListId.GLOBAL});
    this.defaultNamesList = data?.data?.list?.children[gender.gender === GENDER_BOY ? 'male' : 'female'] || [];

    // todo configured with localstorage for unlogged user

    // const namesList = gender.gender === GENDER_BOY ? namesListMale : namesListFemale;
    // setToLocalStorage(generalNames, namesList);
    // const namesToRemove = getFromLocalStorage(deletedNames) || [];
    // const favoriteNames = getFromLocalStorage(favoritesNames) || [];
    // this.defaultNamesList = namesList
    //   .filter(nameObj => !namesToRemove.includes(nameObj.name))
    //   .filter((nameObj) => !favoriteNames.includes(nameObj.name));
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

// eslint-disable-next-line
export default new NamesList();