import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkill } from "../reducers/skillsReducer";
import { calcTotalBonus } from "../js/utils";

export default function ProficiencyRadial(props) {
  const dispatch = useDispatch();
  const firstWord = props.skillName.split(" ")[0];
  const skillState = useSelector(state => state.skills[`${firstWord}`]);

  function proficiencyToggle(e, skillState) {
    e.preventDefault();
    switch (skillState.proficiency) {
      case "expertise":
        dispatch(updateSkill({ ...skillState, proficiency: "not-proficient" }));
        break;
      case "proficient":
        dispatch(updateSkill({ ...skillState, proficiency: "expertise" }));
        break;
      default:
        dispatch(updateSkill({ ...skillState, proficiency: "proficient" }));
        break;
    }
  }
  return (
    <div className="skill__prof">
      <div
        id={`${skillState.skillName}-radial`}
        className="proficiency-radial"
        proficiency={skillState.proficiency}
        onClick={e => {
          proficiencyToggle(e, skillState);
        }}
      >
        <div className={`proficiency-radial--${skillState.proficiency}`}></div>
        {skillState.proficiency === "expertise" ? (
          <div className="expertise"></div>
        ) : null}
      </div>
    </div>
  );
}
