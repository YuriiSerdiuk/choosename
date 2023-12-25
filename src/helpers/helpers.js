import {favoritesNames, deletedNames, genderCategory, generalNames} from '../constants/localStorage'
import {GENDER_BOY} from "../constants/constants";
import gender from "../store/gender";

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key) => {
 return  JSON.parse(localStorage.getItem(key))
}

export const getInitLocalstorageDataEmpty = () => {
  return !(localStorage.getItem(generalNames)
    && localStorage.getItem(favoritesNames)
    && localStorage.getItem(deletedNames)
    && localStorage.getItem(genderCategory)
  );
}

export const setDefaultLocalstorageData = () => {
  setToLocalStorage(generalNames, []);
  setToLocalStorage(favoritesNames, []);
  setToLocalStorage(deletedNames, []);
  setToLocalStorage(genderCategory, GENDER_BOY);
}

export const isMasculineGender = () => {
  return gender.gender === GENDER_BOY;
}