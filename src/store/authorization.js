import { makeAutoObservable, action } from "mobx";
import Api from '../api';

class Authorization {
  isLoggedIn = false;
  token = null;
  userId = null;

  constructor() {
    makeAutoObservable(this, {
      loggedIn: action.bound,
      logOut: action.bound,
      signUp: action.bound
    });
  }

  loggedIn({ email, password }) {
    Api.getSignIn({
      email: email,
      password: password,
    }).then(({ data }) => {
      const { token, userId } = data;

      this.setLoggedInState(true, token, userId);
    });
  }

  logOut() {
    this.setLoggedInState(false, null, null);
  }

  signUp({ email, password }) {
    Api.signUp({
      email: email,
      password: password,
      names: {
        liked: [],
        unliked: [],
      }
    }).then((res) => {
      const { token, user } = res.data;

      this.setLoggedInState(true, token, user._id);
    }).catch((error) => {
      console.log(error)
    })
  }

  // Action to modify state
  setLoggedInState(isLoggedIn, token, userId) {
    this.isLoggedIn = isLoggedIn;
    this.token = token;
    this.userId = userId;
  }
}

// eslint-disable-next-line
export default new Authorization();