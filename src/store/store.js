import { legacy_createStore as createStore} from "redux";
import countReducer from "./countReducer";

export const store = createStore(countReducer)