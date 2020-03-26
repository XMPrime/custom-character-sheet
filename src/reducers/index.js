import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import abilityScoresReducer from "./abilityScoresReducer";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
  abilityScores: abilityScoresReducer,
  skills: skillsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
