import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import generalReducer from "./generalReducer";
import abilityScoresReducer from "./abilityScoresReducer";
import skillsReducer from "./skillsReducer";
import characterCreationReducer from "./characterCreationReducer";
import savingThrowsReducer from "./savingThrowsReducer";
import statusReducer from "./statusReducer";
import speedReducer from "./speedReducer";
import creationReducer from "./creationReducer";

const rootReducer = combineReducers({
  general: generalReducer,
  abilityScores: abilityScoresReducer,
  skills: skillsReducer,
  creation: creationReducer,
  characterCreation: characterCreationReducer,
  savingThrows: savingThrowsReducer,
  status: statusReducer,
  speed: speedReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
