import { combineReducers } from "redux";
import paymentReducer from "./samplePayment";
import sampleReducer from "./sampleReducer";

export default combineReducers({
  sampleData: sampleReducer,
  paymentData: paymentReducer
});
