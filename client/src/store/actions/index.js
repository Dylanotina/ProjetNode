import {
  FETCH_ALL_INSTALLATION,
  FETCH_CODE_INSTALLATION,
  FETCH_CODE_EQUIPEMENT,
  FETCH_CODE_ACTIVITE
} from "../constants/actions-types.js";

import axios from "axios";

export const fetchAllInstallation = () => dispatch => {
  console.log("fetching");
  axios
    .get("api/installation")
    .then(response => response.data)
    .then(data => dispatch({ type: FETCH_ALL_INSTALLATION, payload: data }));
};

export const fetchInstallationByCodeInstallation = payload => dispatch => {
  dispatch({ type: FETCH_CODE_INSTALLATION, payload: payload });

  return { type: FETCH_CODE_INSTALLATION, payload };
};

export function fetchEquipementByCode(payload) {
  return { type: FETCH_CODE_EQUIPEMENT, payload };
}

export function fetchActivitesByCode(payload) {
  return { type: FETCH_CODE_ACTIVITE, payload };
}
