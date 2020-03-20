import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import abilityScoresReducer from "./abilityScoresReducer";

const rootReducer = combineReducers({
  abilityScores: abilityScoresReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
