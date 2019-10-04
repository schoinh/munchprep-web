import * as c from "./ActionTypes";
import firebaseConfig from "./firebaseConfig";
import firebaseUiConfig from "./firebaseUiConfig";
import { initialState } from "./initialState";

export default {
  firebaseConfig: firebaseConfig,
  firebaseUiConfig: firebaseUiConfig,
  initialState: initialState,
  c: c
};