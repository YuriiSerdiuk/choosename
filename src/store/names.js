import {makeAutoObservable, reaction, toJS} from "mobx"

// import {namesListFemale, namesListMale} from "../constants/names";
import {GENDER_BOY, nameListId} from "../constants/constants";
// import {getFromLocalStorage, setToLocalStorage} from "../helpers/helpers";
// import {deletedNames, favoritesNames} from "../constants/localStorage";
import gender from './gender';
import authorization from "./authorization";

import Api from '../api';

class NamesList {
  defaultNamesList = [];
  likedNames = [];
  unlikedNames = [];

  // constructor() {
  //   this.setInnitDefaultNamesList();
  //   // this.favoriteNames = getFromLocalStorage(favoritesNames) || [];
  //   // this.removedNames = getFromLocalStorage(deletedNames) || [];
  //   makeAutoObservable(this);
  // }


  constructor() {
    this.setInnitDefaultNamesList();
    makeAutoObservable(this);

    reaction(
      () => gender.gender,
      () => {
        this.setInnitDefaultNamesList();
      }
    );

    reaction(
      () => authorization.isLoggedIn,
      () => {
        console.log('isLoggedIn');
        this.setInnitDefaultNamesList();
      }
    );
  }

  async setInnitDefaultNamesList() {
    const {data: {list}} = await Api.getList({id: nameListId.GLOBAL});
    const globalNamesArray = list?.children[gender.gender === GENDER_BOY ? 'male' : 'female'];
    if (authorization.isLoggedIn) {
      const {data: {likedNamesArray}} = await Api.getLikedNames({id: authorization.userId});
      const {data: {unlikedNamesArray}} = await Api.getUnLikedNames({id: authorization.userId});

      this.likedNames = likedNamesArray || [];
      this.unlikedNames = unlikedNamesArray || [];
      this.defaultNamesList = globalNamesArray
        .filter(item => !toJS(this.likedNames).some(obj => obj.name === item.name))
        .filter(item => !toJS(this.unlikedNames).some(obj => obj.name === item.name));
    } else {
      this.defaultNamesList = globalNamesArray || [];
    }

    // todo configured with localstorage for unlogged user
    // const namesList = gender.gender === GENDER_BOY ? namesListMale : namesListFemale;
    // setToLocalStorage(generalNames, namesList);
    // const namesToRemove = getFromLocalStorage(deletedNames) || [];
    // const favoriteNames = getFromLocalStorage(favoritesNames) || [];
    // this.defaultNamesList = namesList
    //   .filter(nameObj => !namesToRemove.includes(nameObj.name))
    //   .filter((nameObj) => !favoriteNames.includes(nameObj.name));
  }

  //
  // addToFavorites(addedName) {
  //   this.favoriteNames.push(addedName);
  //   this.defaultNamesList = this.defaultNamesList.filter((obj) => obj.name !== addedName);
  //   setToLocalStorage(favoritesNames, this.favoriteNames);
  // }
  //
  // removeNameFromNamesList(removedName) {
  //   this.removedNames.push(removedName);
  //   this.defaultNamesList = this.defaultNamesList.filter((obj) => obj.name !== removedName);
  //   setToLocalStorage(deletedNames, this.removedNames);
  // }
  //
  // removeFromFavorites(removedName) {
  //   this.favoriteNames = this.favoriteNames.filter(({name}) => name !== removedName);
  // }
}

// eslint-disable-next-line
export default new NamesList();