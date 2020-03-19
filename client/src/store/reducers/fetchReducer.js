import {
  FETCH_ALL_INSTALLATION,
  FETCH_CODE_INSTALLATION,
  FETCH_CODE_EQUIPEMENT,
  FETCH_CODE_ACTIVITE
} from "../constants/actions-types.js";

const initialState = {
  installations: [],
  equipements: [],
  activites: [],
  installation: [],
  code_installation: 0,
  code_equipement: 0
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
      return state;
    case FETCH_CODE_ACTIVITE:
      return state;
    default:
      return state;
  }
}

export default rootReducer;
