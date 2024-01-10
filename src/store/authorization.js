import {makeAutoObservable} from "mobx";

import Api from '../api';

class Authorization {
  isLoggedIn: false;

  constructor(props) {
    makeAutoObservable(this);
  }

  loggedIn({email, password}) {

    Api.getSignIn({
      email: email,
      password: password,
    }).then(()=>{
      this.loggedIn = true;
    })
  }

  logOut() {
    this.loggedIn = false;
  }

  signIn({email, password}) {
    Api.signUp({
      email: email,
      password: password,
    })
  }
}

export default new Authorization();