import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharClasses, setRaces } from "../reducers/characterCreationReducer";

export default function CharacterCreation() {
  const axios = require("axios");
  const dispatch = useDispatch();
  const { charClasses, races } = useSelector(state => state.characterCreation);

  const classOptions = charClasses
    ? charClasses.map(charClass => {
        return <option value={charClass.index}>{charClass.name}</option>;
      })
    : "";
  const raceOptions = races
    ? races.map(race => {
        return <option value={race.index}>{race.name}</option>;
      })
    : "";
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    axios
      .get(corsAnywhere + "http://dnd5eapi.co/api/classes")
      .then(response => {
        dispatch(setCharClasses(response.data.results));
      });
    axios.get(corsAnywhere + "http://dnd5eapi.co/api/races").then(response => {
      dispatch(setRaces(response.data.results));
    });
  }, []);
  return (
    <div className="character-creation">
      <select className="starting-class" onChange="">
        {classOptions}
      </select>
      <select className="race" onChange="">
        <option value="">Select a race...</option>
        {raceOptions}
      </select>
      <select className="subrace" onChange=""></select>
      <select className="background" onChange=""></select>
    </div>
  );
}

{
  /* <div className="subclass"></div>
      <div className="alignment"></div> */
}
