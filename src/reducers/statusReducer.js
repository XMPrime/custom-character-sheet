export function toggleInspiration() {
  return {
    type: "TOGGLE_INSPIRATION",
  };
}

export function setTempHP(tempHP) {
  return {
    type: "SET_TEMP_HP",
    tempHP,
  };
}

export function changeHP(amount) {
  return {
    type: "CHANGE_HP",
    amount,
  };
}

const initialState = {
  inspiration: false,
  conditions: ["none"],
  buffs: [],
  debuffs: [],
  curHP: 21,
  maxHP: 26,
  tempHP: 8,
};

const statusReducer = (statusState = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_INSPIRATION":
      return {
        ...statusState,
        inspiration: !statusState.inspiration,
      };
    case "SET_TEMP_HP":
      return {
        ...statusState,
        tempHP: action.tempHP,
      };
    case "CHANGE_HP":
      if (statusState.curHP + action.amount > statusState.maxHP) {
        return {
          ...statusState,
          curHP: statusState.maxHP,
        };
      } else {
        return {
          ...statusState,
          curHP: statusState.curHP + action.amount,
        };
      }

    default:
      return statusState;
  }
};

export default statusReducer;
