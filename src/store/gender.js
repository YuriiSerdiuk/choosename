import {makeAutoObservable} from "mobx";
import namesList from '../store/names'
import {GENDER_BOY, GENDER_GIRL} from "../constants/constants";

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
    namesList.changeGender();
  }

  setGirlGender() {
    this.gender = gender.girl;
    namesList.changeGender();
  }


}

export default new Gender();