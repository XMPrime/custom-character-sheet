export function setAbilityScore(name, score) {
  return {
    type: "SET_ABILITY_SCORE",
    name,
    score
  };
}

const initialState = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10
};

const abilityScoresReducer = (abilityScoresState = initialState, action) => {
  switch (action.type) {
    case "SET_ABILITY_SCORE":
      return {
        ...abilityScoresState,
        [action.name]: action.score
      };

    default:
      return abilityScoresState;
  }
};

export default abilityScoresReducer;
