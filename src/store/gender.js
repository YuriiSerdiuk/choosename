import {makeAutoObservable} from "mobx";
import namesList from '../store/names'
import {GENDER_BOY, GENDER_GIRL} from "../constants/constants";
import {setToLocalStorage} from "../helpers/helpers";
import {genderCategory} from "../constants/localStorage";

const gender = {
  boy: GENDER_BOY,
  girl: GENDER_GIRL
}

class Gender {
  gender = JSON.parse(localStorage.getItem(genderCategory)) || gender.boy;

  constructor() {
    makeAutoObservable(this)
  }

  setBoyGender() {
    this.gender = gender.boy;
    setToLocalStorage(genderCategory,gender.boy);
    namesList.changeGender();
  }

  setGirlGender() {
    this.gender = gender.girl;
    setToLocalStorage(genderCategory,gender.girl);
    namesList.changeGender();
  }


}

export default new Gender();