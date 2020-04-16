export function toggleSpeedType(speedType) {
  return {
    type: "TOGGLE_SPEED_TYPE",
    speedType,
  };
}

const initialState = {
  type: "walk",
  walkSpeed: 30,
  swimSpeed: 15,
  climbSpeed: 15,
};

const speedReducer = (speedState = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SPEED_TYPE":
      return {
        ...speedState,
        type: action.speedType,
      };
    default:
      return speedState;
  }
};

export default speedReducer;
