import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbilityScore } from "../reducers/abilityScoresReducer";
import { modifierCalc } from "../js/utils";

export default function Ability(props) {
  const dispatch = useDispatch();
  const abilityScores = useSelector((state) => state.abilityScores);
  const prevId = useSelector((state) => state.general.prevId);
  const raceBonuses = useSelector(
    (state) => state.characterCreation.raceBonuses
  );
  const varEdit = `${props.id}Edit`;

  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById(varEdit).blur();
  }

  function handleBlur(e) {
    document.getElementById(prevId).value = abilityScores[props.id];
  }

  function handleChange(e) {
    dispatch(
      setAbilityScore(props.id, Number(e.target.value) - raceBonuses.str)
    );
  }

  useEffect(() => {});

  return (
    <div className="ability border-bg">
      <div className="ability__name label">{props.name}</div>
      <div className="ability__modifier number--lg">
        {props.score >= 10 ? <span className="sign">+</span> : ""}
        <span className="number">{modifierCalc(props.score)}</span>
      </div>

      <form
        name={props.id}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          id={varEdit}
          className="ability__score"
          type="text"
          value={props.score}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        ></input>
      </form>
    </div>
  );
}
