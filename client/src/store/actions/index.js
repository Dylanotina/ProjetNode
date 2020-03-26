import {
  FETCH_ALL_INSTALLATION,
  FETCH_CODE_INSTALLATION,
  FETCH_CODE_EQUIPEMENT,
  FETCH_CODE_ACTIVITE,
  SET_CODE_INSTALLATION,
  SET_CODE_EQUIPEMENT,
  GET_CODE_POSTAL,
  SELECT_BY_CODE_POSTAL
} from "../constants/actions-types.js";

import axios from "axios";

export const fetchAllInstallation = () => dispatch => {
  console.log("fetching");
  axios
    .get("http://localhost:3001/api/installation")
    .then(response => response.data)
    .then(data => dispatch({ type: FETCH_ALL_INSTALLATION, payload: data }));
};

export const fetchInstallationByCodeInstallation = payload => dispatch => {
  dispatch({ type: FETCH_CODE_INSTALLATION, payload: payload });
};

export const fetchEquipementByCode = payload => dispatch => {
  axios
    .get(`http://localhost:3001/api/equipement/installation/${payload}`)
    .then(res => res.data)
    .then(data => dispatch({ type: FETCH_CODE_EQUIPEMENT, payload: data }));
};

export const fetchActivitesByCode = payload => dispatch => {
  axios
    .get(`http://localhost:3001/api/activite/equipement/${payload}`)
    .then(res => res.data)
    .then(data => dispatch({ type: FETCH_CODE_ACTIVITE, payload: data }));
};

export const setCodeInstallation = payload => dispatch => {
  dispatch({ type: SET_CODE_INSTALLATION, payload: payload });
};

export const setCodeEquipement = payload => dispatch => {
  dispatch({ type: SET_CODE_EQUIPEMENT, payload: payload });
};

export const getCodePostal = () => dispatch => {
  axios
    .get("http://localhost:3001/api/installation/code")
    .then(res => res.data)
    .then(data => dispatch({ type: GET_CODE_POSTAL, payload: data }));
};

export const selectByCode = payload => dispatch => {
  console.log("ca marche");
  dispatch({ type: SELECT_BY_CODE_POSTAL, payload: payload });
};
