import axios from "axios";
import storageService from "./storage.service";
import { generateURL } from "../signature";
import { accessToken } from "../common/const.config";

class HttpService {
  async get(path, options = { headers: {}, params: {}, body: {} }) {
    return await this.request("GET", path, options);
  }

  async post(path, options = { headers: {}, params: {}, body: {}, auth: {} }) {
    return await this.request("POST", path, options);
  }

  async patch(path, options = { headers: {}, params: {}, body: {} }) {
    return await this.request("PATCH", path, options);
  }

  async delete(path, options = { headers: {}, params: {}, body: {} }) {
    return await this.request("DELETE", path, options);
  }

  async request(method, path, options = { headers: {}, params: {}, body: {} }) {
    const url = generateURL(path);
    const headers = this.generateHttpHeaders(options.headers);
    const res = await axios
      .request({
        method: method,
        url: url,
        headers: headers,
        params: options.params,
        data: options.body,
        auth: options.auth,
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          if (error.response.status == 401) {
            storageService.remove(accessToken);
            window.location.reload();
          } else {
            return error.response.data;
          }
        }
        return {
          success: false,
          data: undefined,
          errors: "Can't connect to server!",
        };
      });

    if (res && (res.status == 200 || res.status == 201)) {
      return {
        success: true,
        data: res.data,
        errors: undefined,
      };
    } else {
      return res;
    }
  }

  generateHttpHeaders(headerInfo) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storageService.get(accessToken)}`,
    };

    if (headerInfo) {
      for (const item of Object.keys(headerInfo)) {
        headers[item] = headerInfo[item];
      }
    }

    return headers;
  }
}

export default HttpService;
