import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import abilityScoresReducer from "./abilityScoresReducer";
import skillsReducer from "./skillsReducer";
import characterCreationReducer from "./characterCreationReducer";

const rootReducer = combineReducers({
  abilityScores: abilityScoresReducer,
  skills: skillsReducer,
  characterCreation: characterCreationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
