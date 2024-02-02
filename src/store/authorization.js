import { makeAutoObservable } from "mobx";

import Api from '../api';

class Authorization {

  constructor(props) {
    this.isLoggedIn = false;
    this.token = null;
    this.userId = null;
    makeAutoObservable(this);
  }

  loggedIn({ email, password }) {
    Api.getSignIn({
      email: email,
      password: password,
    }).then(({ data }) => {
      const { token, userId } = data;
      this.token = token;
      this.userId = `${userId}`;
      this.isLoggedIn = true;
      return this;
    });
  }

  logOut() {
    this.isLoggedIn = false;
    this.token = null;
    this.userId = null;
  }

  signUp({ email, password }) {
    Api.signUp({
      email: email,
      password: password,
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      const { response } = error;
      const { data } = response;
      console.log(data)
    })
  }
}

export default new Authorization();