import axios from "axios";

import {endpoints} from '../constants/endpoints';

class Api {
  instance = axios.create({
    baseURL: endpoints.URL,
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
    return await this.post(endpoints.SignIn, params);
  }

  async signUp(params) {
    return await this.post(endpoints.SignUp, params);
  }

  async createNewList(params) {
    return await this.post(endpoints.CreateNewList, params);
  }

  async getList(params) {
    return await this.get(endpoints.GetList, params);
  }

  async getLikedNames(params) {
    return await this.get(endpoints.GetLikedName, params);
  }


  async getUnLikedNames(params) {
    return await this.get(endpoints.GetUnLikedName, params);
  }

  async addLikedName(params) {
    return await this.put(endpoints.AddLikedName, params);
  }

  async addUnlikedName(params) {
    return await this.put(endpoints.AddUnlikedName, params);
  }

  async addNameToList(params) {
    return await this.put(endpoints.AddNameToList, params);
  }
}

export default new Api();