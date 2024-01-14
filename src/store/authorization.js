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
      console.log(data);
      this.token = token;
      this.userId = `${userId}`;
      this.isLoggedIn = true;
    });
  }

  logOut() {
    this.loggedIn = false;
  }

  signUp({ email, password }) {
    Api.signUp({
      email: email,
      password: password,
    })
  }
}

export default new Authorization();