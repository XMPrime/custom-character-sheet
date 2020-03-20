// import React from "react";

// export default function Ability(props) {

//   return (
//     <div className="ability">
//       <div className="ability__name">{props.name}</div>
//       <div className="ability__modifier">
//         <span className="sign">+</span>
//         <span className="number">5</span>
//       </div>
//       <div className="ability__score">20</div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbilityScore,
  toggleEdit,
  setPrevId
} from "../reducers/abilityScoresReducer";

export default function Ability(props) {
  const dispatch = useDispatch();
  const abilityScores = useSelector(state => state.abilityScores);
  const varEdit = `${props.id}Edit`;

  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById(varEdit).blur();
  }

  function handleOnBlur(e) {
    document.getElementById(abilityScores.prevId).value =
      abilityScores[props.id];
  }

  useEffect(() => {});

  return (
    <div className="ability">
      <div className="ability__name">{props.name}</div>
      <div className="ability__modifier">
        <span className="sign">+</span>
        <span className="number">5</span>
      </div>

      <form
        name={props.id}
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          id={varEdit}
          className="ability__edit"
          type="text"
          value={props.score}
          onChange={e => dispatch(setAbilityScore(props.id, e.target.value))}
          onBlur={e => handleOnBlur(e)}
        ></input>
      </form>
    </div>
  );
}

// (
//   <div
//     name={props.id}
//     className="ability__score"
//     onClick={e => {
//       dispatch(toggleEdit(props.id));
//       // getFocus(e);
//     }}
//   >
//     {props.score}
//   </div>
// )
