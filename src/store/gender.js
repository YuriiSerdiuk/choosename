import { makeAutoObservable } from "mobx";
import { GENDER_BOY, GENDER_GIRL } from "../constants/constants";
import { setToLocalStorage } from "../helpers/helpers";
import { genderCategory } from "../constants/localStorage";
import {namesList} from "../constants/names";

const gender = {
  boy: GENDER_BOY,
  girl: GENDER_GIRL
};

class Gender {
  gender = JSON.parse(localStorage.getItem(genderCategory)) || gender.boy;

  constructor() {
    makeAutoObservable(this);
  }

  setBoyGender() {
    this.gender = gender.boy;
    setToLocalStorage(genderCategory, gender.boy);
    // namesList.changeGender();
  }

  setGirlGender() {
    this.gender = gender.girl;
    setToLocalStorage(genderCategory, gender.girl);
    // namesList.changeGender();
  }
}

const genderInstance = new Gender();
export default genderInstance;
