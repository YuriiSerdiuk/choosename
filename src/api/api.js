import axios from "axios";
// eslint-disable-next-line
// import {URL, DEV_URL, URL_PATHS} from "../constants/api.constants";
const URL = 'http://localhost:4000/';

const URL_PATHS = {
  URL: 'http://localhost:4000/',
  SignUp: "/auth/register",
  SignIn: "/auth/login",
  Auth: '/auth'
}

class Api {
  instance = axios.create({
    baseURL: URL_PATHS.URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  async get(url, params) {
    return await this.instance.get(url, {params});
  }

  async post(url, data, options) {
    return await this.instance.post(url, data, options);
  }

  async put(url, data) {
    return await this.instance.put(url, data);
  }


  async delete(url, data) {
    return await this.instance.delete(url, data);
  }

  async getSignIn(params) {
    return await this.post(URL_PATHS.SignIn, params);
  }

  async signUp(params) {
    return await this.post(URL_PATHS.SignUp, params);
  }

  // async getWakeUp() {
  //   const data = await this.get(URL_PATHS.Test);
  //   return data;
  // }

}

export default new Api();