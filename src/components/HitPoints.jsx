import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTempHP, setCurHP, changeHP } from "../reducers/statusReducer";
import { setPrevId } from "../reducers/generalReducer";

export default function HitPoints() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const { curHP, maxHP, tempHP } = useSelector((state) => state.status);
  let hpInput = 0;

  const abilityScores = useSelector((state) => state.abilityScores);
  const prevId = useSelector((state) => state.general.prevId);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   document.getElementById(varEdit).blur();
  // }

  // function handleBlur(e) {
  //   document.getElementById(prevId).value = abilityScores[props.id];
  // }

  function heal(amount) {
    dispatch(changeHP(amount));
    document.getElementById("hp-input").value = "";
  }

  function damage(amount) {
    if (amount >= tempHP) {
      dispatch(changeHP(tempHP - amount)); //negative
      dispatch(setTempHP(0));
    } else {
      dispatch(setTempHP(tempHP - amount));
    }

    document.getElementById("hp-input").value = "";
  }

  function handleHealDamage(e) {
    hpInput = e.target.value;
  }

  function handleChange(e) {
    if (e.target.id === "tempHP") {
      dispatch(setTempHP(Number(e.target.value)));
    } else if (e.target.id === "curHP") {
      if (e.target.value > maxHP) {
        dispatch(setCurHP(Number(maxHP)));
      } else {
        dispatch(setCurHP(Number(e.target.value)));
      }
    }
  }

  function handleBlur() {
    document.getElementById(prevId).value = status[prevId];
  }

  function clearOnFocus(e) {
    const targetId = e.target.id;
    const curElement = document.getElementById(targetId);
    if (document.activeElement === curElement) {
      dispatch(setPrevId(targetId));
      curElement.value = "";
    }
  }

  function inputWidth(e) {
    return { width: `${e.target.value.length}rem` };
  }

  useEffect(() => {
    document.addEventListener("click", (e) => clearOnFocus(e));
  }, []);

  return (
    <div className='hit-points border-bg'>
      <div className='label--lg row'>Hit Points</div>
      <div className='row'>
        <div className='hit-points__left column'>
          <div className='label'>temp</div>
          <input
            id='tempHP'
            className='hit-points__number seemless-input number--lg'
            value={tempHP === 0 ? "-" : tempHP}
            onBlur={() => handleBlur()}
            onChange={(e) => handleChange(e)}
            style={{ width: tempHP.toString().length + "rem" }}
          />
        </div>
        <div className='hit-points__center column'>
          <div className='column'>
            <div className='label'>current</div>
            <input
              id='curHP'
              className='hit-points__number seemless-input number--lg'
              value={curHP}
              onBlur={() => handleBlur()}
              onChange={(e) => handleChange(e)}
              style={{ width: curHP.toString().length + "rem" }}
            />
          </div>
          <div className='column'>
            <div className='hit-points__empty label'> </div>
            <div className='hit-points__divider hit-points__number number--lg '>
              /
            </div>
          </div>
          <div className='column'>
            <div className='label'>max</div>
            <div className='hit-points__number number--lg'>{maxHP}</div>
          </div>
        </div>
        <div className='hit-points__right column'>
          <button className='heal-btn label' onClick={() => heal(hpInput)}>
            heal
          </button>
          <input
            id='hp-input'
            className='hit-points__heal-damage'
            type='text'
            onChange={(e) => handleHealDamage(e)}
          ></input>
          <button className='damage-btn label' onClick={() => damage(hpInput)}>
            damage
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* 
<div className="label--lg row">Hit Points</div>
        <div className="hit-points__left column">
          <button className="heal-btn">heal</button>
          <input className="hit-points__input" type="text"></input>
          <button className="damage-btn">damage</button>
        </div>
        <div className="hit-points__center column">
            <span className="label--lg">current</span>
            <span className="label--lg">max</span>
        </div>
        <div className="hit-points__center column">
            <span className="number--lg">21</span>
            <span className="hit-points__divider">/</span>
            <span className="number--lg">26</span>
        </div>
        </div>
        <div className="hit-points__right column">
          <div className="label--lg">temp</div>
          <div className="number--lg">--</div>
        </div>
      </div>
    </div> */
}
