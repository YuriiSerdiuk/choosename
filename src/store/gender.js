import { makeAutoObservable } from "mobx";

import {GENDER_BOY, GENDER_GIRL, GENDER_GROUP} from "../constants/constants";
// import { setToLocalStorage } from "../helpers/helpers";
// import { genderCategory } from "../constants/localStorage";
// import {namesList} from "../constants/names";

const gender = {
  boy: GENDER_BOY,
  girl: GENDER_GIRL
};

class Gender {
  gender: string = gender.boy;
  genderGroup: any = GENDER_GROUP.male;
  // gender = JSON.parse(localStorage.getItem(genderCategory)) || gender.boy;

  constructor() {
    makeAutoObservable(this);
  }

  setBoyGender() {
    this.gender = gender.boy;
    this.genderGroup = GENDER_GROUP.male;
    // setToLocalStorage(genderCategory, gender.boy);
    // namesList.changeGender();
  }

  setGirlGender() {
    this.gender = gender.girl;
    this.genderGroup = GENDER_GROUP.female;
    // setToLocalStorage(genderCategory, gender.girl);
    // namesList.changeGender();
  }
}

// eslint-disable-next-line
export default new Gender();