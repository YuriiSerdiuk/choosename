import {makeAutoObservable} from "mobx";

import Api from '../api';

class Authorization {

  constructor(props) {
    this.isLoggedIn = false;
    this.token = null;
    this.userId = null;
    makeAutoObservable(this);
  }

  loggedIn({email, password}) {
    Api.getSignIn({
      email: email,
      password: password,
    }).then(({data}) => {
      const {token, userId} = data;

      this.isLoggedIn = true;
      this.token = token;
      this.userId = userId;
    });
  }

  logOut() {
    this.isLoggedIn = false;
    this.token = null;
    this.userId = null;
  }

  signUp({email, password,}) {
    Api.signUp({
      email: email,
      password: password,
      names: {
        liked: [],
        unliked: [],
      }
    }).then((res) => {
      const {token, user} = res.data;

      this.isLoggedIn = true;
      this.token = token;
      this.userId = user._id;
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default new Authorization();