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
      console.log('loggedIn',{
        email: email,
        password: password,
      });
    })
    // this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  signIn() {

  }
}

export default new Authorization();