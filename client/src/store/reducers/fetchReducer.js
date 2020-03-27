import {
  FETCH_ALL_INSTALLATION,
  FETCH_CODE_INSTALLATION,
  FETCH_CODE_EQUIPEMENT,
  FETCH_CODE_ACTIVITE,
  SET_CODE_INSTALLATION,
  SET_CODE_EQUIPEMENT,
  GET_CODE_POSTAL,
  SELECT_BY_CODE_POSTAL,
  GET_VILLE,
  SELECT_BY_VILLE
} from "../constants/actions-types.js";

const initialState = {
  installations: [],
  equipements: [],
  activites: [],
  installation: [],
  code_installation: "",
  code_equipement: "",
  code_postaux: [],
  villes: [],
  activiteChargee: false,
  dataChange: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_INSTALLATION:
      return {
        ...state,
        installations: action.payload
      };
    case FETCH_CODE_INSTALLATION:
      return {
        ...state,
        installation: state.installations.filter(
          installation =>
            parseInt(installation.noDeLInstallation) ===
            parseInt(action.payload)
        ),
        activiteChargee: false,
        activites: [],
        code_equipement: "",
        dataChange: false
      };
    case FETCH_CODE_EQUIPEMENT:
      return {
        ...state,
        equipements: action.payload
      };
    case FETCH_CODE_ACTIVITE:
      return {
        ...state,
        activites: action.payload,
        activiteChargee: true
      };
    case SET_CODE_INSTALLATION:
      return {
        ...state,
        code_installation: action.payload
      };
    case SET_CODE_EQUIPEMENT:
      return {
        ...state,
        code_equipement: action.payload,
        activiteChargee: false
      };
    case GET_CODE_POSTAL:
      return {
        ...state,
        code_postaux: action.payload
      };
    case SELECT_BY_CODE_POSTAL:
      return {
        ...state,
        installations: state.installations.filter(
          installation =>
            parseInt(installation.codePostal) === parseInt(action.payload)
        ),
        dataChange: true
      };
    case GET_VILLE:
      return {
        ...state,
        villes: action.data
      };
    case SELECT_BY_VILLE:
      return {
        ...state,
        installations: state.installations.filter(
          installation => installation.nomDeLaCommune === action.payload
        )
      };
    default:
      return state;
  }
}

export default rootReducer;
