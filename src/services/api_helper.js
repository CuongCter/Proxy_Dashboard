import HttpService from "./http-service";
import {
  AUTH,
  AUTH_LOGOUT,
  BILLING,
  BILLINGS,
  COUNTRY,
  PROXYS,
  RATE,
  USER,
  USER_ME,
} from "../common/const.api";

const http = new HttpService();

export const apiCreateUser = async (email, password, name) => {
  const body = {
    email,
    password,
    name,
  };
  return await http.post(USER, { body });
};

export const apiLogin = async (email, password) => {
  const auth = {
    username: email,
    password,
  };

  return await http.post(AUTH, { auth });
};

export const apiLogout = async () => {
  return await http.post(AUTH_LOGOUT);
};

export const apiGetUserInfo = async () => {
  return await http.get(USER_ME);
};

export const apiGetBillings = async () => {
  return await http.get(BILLING);
};

export const apiGetListProxy = async () => {
  return await http.get(PROXYS);
};

export const apiGetPricing = async () => {
  return await http.get(RATE);
};

export const apiGetListCountry = async () => {
  return await http.get(COUNTRY);
};

export const apiCreateProxy = async (country, geo, rotate) => {
  const body = { ...geo, countryId: country.id, rotate };
  return await http.post(PROXYS, { body });
};

export const apiDeleteProxy = async (id) => {
  return await http.delete(`${PROXYS}/${id}`);
};

export const apiBuyBandwidth = async (bandwidth, month) => {
  const body = { bandwidth, month };
  return await http.post(BILLINGS, { body });
};
