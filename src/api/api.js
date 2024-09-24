import axios from "axios";
import { endpoints } from '../constants/endpoints';

const defaultHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

class Api {
  instance = axios.create({
    baseURL: endpoints.URL,
    headers: defaultHeaders,
    // timeout: 10000, // 10 секунд
  });

  async request(method, url, dataOrParams, options) {
    try {
      return await this.instance[method](url, dataOrParams, options);
    } catch (error) {
      console.error(`Error during ${method.toUpperCase()} request to ${url}:`, error);
      throw error;
    }
  }

  async get(url, params) {
    return await this.request('get', url, { params });
  }

  async post(url, data, options) {
    return await this.request('post', url, data, options);
  }

  async put(url, data) {
    return await this.request('put', url, data);
  }

  async delete(url, data) {
    return await this.request('delete', url, data);
  }

  async getSignIn(params) {
    return this.post(endpoints.SignIn, params);
  }

  async signUp(params) {
    return this.post(endpoints.SignUp, params);
  }

  async createNewList(params) {
    return this.post(endpoints.CreateNewList, params);
  }

  async getList(params) {
    return this.get(endpoints.GetList, params);
  }

  async getLikedNames(params) {
    return this.get(endpoints.GetLikedName, params);
  }

  async getUnLikedNames(params) {
    return this.get(endpoints.GetUnLikedName, params);
  }

  async addLikedName(params) {
    return this.put(endpoints.AddLikedName, params);
  }

  async addUnlikedName(params) {
    return this.put(endpoints.AddUnlikedName, params);
  }

  async addNameToList(params) {
    return this.put(endpoints.AddNameToList, params);
  }
}

// eslint-disable-next-line
export default new Api();