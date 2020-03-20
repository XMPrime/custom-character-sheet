import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbilityScore } from "../reducers/abilityScoresReducer";

export default function Ability(props) {
  const dispatch = useDispatch();
  const abilityScores = useSelector(state => state.abilityScores);
  const varEdit = `${props.id}Edit`;
  const modifier = (abilityScores[props.id] - 10) / 2;

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
        {modifier >= 0 ? <span className="sign">+</span> : null}
        <span className="number">{modifier}</span>
      </div>

      <form
        name={props.id}
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          id={varEdit}
          className="ability__score"
          type="text"
          value={props.score}
          onChange={e => dispatch(setAbilityScore(props.id, e.target.value))}
          onBlur={e => handleOnBlur(e)}
        ></input>
      </form>
    </div>
  );
}
