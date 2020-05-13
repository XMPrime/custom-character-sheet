import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSpeedType } from "../reducers/speedReducer";

export default function Speed() {
  const dispatch = useDispatch();
  const speedState = useSelector((state) => state.speed);

  return (
    <div className='speed border-bg'>
      <div className='speed__text label'>{speedState.type} Speed</div>
      <div className='speed__number number--lg'>
        {speedState[`${speedState.type}Speed`]} ft.
      </div>
      <div className='speed__icons row'>
        <i
          id='swim'
          style={speedState.type === "swim" ? { opacity: "100%" } : {}}
          className='fas fa-swimmer fa-flip-horizontal a'
          onClick={(e) => {
            dispatch(toggleSpeedType(e.target.id));
          }}
        ></i>
        <i
          id='walk'
          style={speedState.type === "walk" ? { opacity: "100%" } : {}}
          className='fas fa-running a'
          onClick={(e) => {
            dispatch(toggleSpeedType(e.target.id));
          }}
        ></i>
        <i
          id='climb'
          style={speedState.type === "climb" ? { opacity: "100%" } : {}}
          className='climb-icon a'
          onClick={(e) => {
            dispatch(toggleSpeedType(e.target.id));
          }}
        ></i>
      </div>
    </div>
  );
}
