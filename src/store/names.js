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
  removedNames = [];

  // constructor() {
  //   this.setInnitDefaultNamesList();
  //   // this.favoriteNames = getFromLocalStorage(favoritesNames) || [];
  //   // this.removedNames = getFromLocalStorage(deletedNames) || [];
  //   makeAutoObservable(this);
  // }


  constructor() {
    this.setInnitDefaultNamesList();
    makeAutoObservable(this);

    // Реакція на зміни поля gender
    reaction(
      () => gender.gender,
      () => {
        this.setInnitDefaultNamesList();
      }
    );
  }

  async setInnitDefaultNamesList() {
    const {data} = await Api.getList({id: nameListId.GLOBAL});
    if (authorization.isLoggedIn) {
      const res = await Api.getLikedNames({id: authorization.userId});
      this.likedNames = res.data.candidate.names.liked || [];
      this.defaultNamesList = data?.list?.children[gender.gender === GENDER_BOY ? 'male' : 'female']
        .filter(item => !toJS(this.likedNames).some(obj => obj.name === item.name));
    } else {
      this.defaultNamesList = data.list.children[gender.gender === GENDER_BOY ? 'male' : 'female'] || [];
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