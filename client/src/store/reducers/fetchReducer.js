import {
  FETCH_ALL_INSTALLATION,
  FETCH_CODE_INSTALLATION,
  FETCH_CODE_EQUIPEMENT,
  FETCH_CODE_ACTIVITE,
  SET_CODE_INSTALLATION,
  SET_CODE_EQUIPEMENT
} from "../constants/actions-types.js";

const initialState = {
  installations: [],
  equipements: [],
  activites: [],
  installation: [],
  code_installation: "",
  code_equipement: ""
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
        )
      };
    case FETCH_CODE_EQUIPEMENT:
      return {
        ...state,
        equipements: action.payload
      };
    case FETCH_CODE_ACTIVITE:
      return {
        ...state,
        activites: action.payload
      };
    case SET_CODE_INSTALLATION:
      return {
        ...state,
        code_installation: action.payload
      };
    case SET_CODE_EQUIPEMENT:
      return {
        ...state,
        code_equipement: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
