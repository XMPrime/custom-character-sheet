export function toggleSaveProf(name) {
  return {
    type: "TOGGLE_SAVE_PROF",
    name
  };
}

const initialState = {
  str: false,
  dex: false,
  con: false,
  int: false,
  wis: false,
  cha: false
};

const savingThrowsReducer = (savingThrowsState = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SAVE_PROF":
      return {
        ...savingThrowsState,
        [action.name]: !savingThrowsState[action.name]
      };
    default:
      return savingThrowsState;
  }
};

export default savingThrowsReducer;
