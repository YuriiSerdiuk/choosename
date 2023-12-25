import {makeAutoObservable} from "mobx";

const GENDER_BOY = 'BOY';
const GENDER_GIRL = 'GIRL'
const gender = {
  boy: GENDER_BOY,
  girl: GENDER_GIRL
}

class Gender {
  gender = gender.boy

  constructor() {
    makeAutoObservable(this)
  }

  setBoyGender() {
    this.gender = gender.boy;
  }

  setGirlGender() {
    this.gender = gender.girl;
  }


}

export default new Gender();