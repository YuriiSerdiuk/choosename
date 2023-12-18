import {randomNames, favoritesNames, deletedNames} from '../constants/localStorage'

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key) => {
  localStorage.getItem(key);
}

export const getInitLocalstorageDataEmpty = () => {
  return !(localStorage.getItem(randomNames)
    && localStorage.getItem(favoritesNames)
    && localStorage.getItem(deletedNames));
}

export const setDefaultLocalstorageData = () => {
  setToLocalStorage(randomNames, []);
  setToLocalStorage(favoritesNames, []);
  setToLocalStorage(deletedNames, []);
}