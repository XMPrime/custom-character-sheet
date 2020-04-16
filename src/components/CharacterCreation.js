import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCharClasses,
  setRaces,
  setBackgrounds,
  setRace,
  setSubraces,
  addRaceBonus,
  clearRaceBonuses,
  setStartingClass
} from "../reducers/characterCreationReducer";
import { setAbilityScore } from "../reducers/abilityScoresReducer";

export default function CharacterCreation() {
  const races = require("../data/races.json").race.filter(
    race => race.source === "PHB" && race.ability
  );
  const subraces = require("../data/races.json").race.filter(
    race => race.name === "Elf"
  ).subraces;

  const backgrounds = require("../data/backgrounds.json").background;

  const axios = require("axios");
  const dispatch = useDispatch();
  const {
    charClasses,
    // races,
    // subraces,
    // backgrounds,
    raceBonuses
  } = useSelector(state => state.characterCreation);
  const abilityScores = useSelector(state => state.abilityScores);

  const classOptions = charClasses
    ? charClasses.map(charClass => {
        return <option value={charClass.index}>{charClass.name}</option>;
      })
    : "";
  const raceOptions = races.map(race => {
    const abilityBonuses = Object.entries(race.ability[0]).map(bonus => {
      return ` ${bonus[1] > 0 ? "+" : ""}${bonus[1]} ${bonus[0].toUpperCase()}`;
    });
    return (
      <option value={race.name}>
        {`${race.name} ${abilityBonuses} ${race.source}`}
      </option>
    );
  });
  const subraceOptions =
    subraces !== undefined
      ? subraces.map(subrace => {
          return <option value={subrace.name}>{subrace.name}</option>;
        })
      : "";
  const backgroundOptions = backgrounds.map(background => {
    return <option value={background.name}>{background.name}</option>;
  });
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  function changeRace(e) {
    const selectValue = e.target.value;

    dispatch(setRace(selectValue));
    Object.entries(raceBonuses).forEach(bonus => {
      dispatch(setAbilityScore(bonus[0], abilityScores[bonus[0]] - bonus[1]));
    });

    axios
      .get(corsAnywhere + "http://dnd5eapi.co/api/races/" + selectValue)
      .then(response => {
        console.log(response.data);
        const race = response.data;
        dispatch(setSubraces(race.subraces));
        dispatch(clearRaceBonuses());
        race.ability_bonuses.forEach(bonus => {
          const lowerCasedName = bonus.name.toLowerCase();
          console.log({ [lowerCasedName]: bonus.bonus });
          dispatch(addRaceBonus({ [lowerCasedName]: bonus.bonus }));
          console.log(abilityScores[lowerCasedName]);
          dispatch(
            setAbilityScore(
              lowerCasedName,
              abilityScores[lowerCasedName] + bonus.bonus
            )
          );
        });
      });
    console.log(abilityScores);
  }

  useEffect(() => {
    axios
      .get(corsAnywhere + "http://dnd5eapi.co/api/classes")
      .then(response => {
        dispatch(setCharClasses(response.data.results));
      });
    axios
      .get(corsAnywhere + "http://dnd5eapi.co/api/races")
      .then(response => {
        dispatch(setRaces(response.data.results));
      })
      .then();
    axios
      .get(corsAnywhere + "https://api.open5e.com/backgrounds/")
      .then(response => {
        dispatch(setBackgrounds(response.data.results));
      });
  }, []);
  return (
    <div className="character-creation">
      <select
        className="starting-class"
        onChange={e => dispatch(setStartingClass(e.target.value))}
      >
        <option value="">Select your starting class...</option>
        {classOptions}
      </select>
      <select className="race" onChange={e => changeRace(e)}>
        <option value="">Select your race...</option>
        {raceOptions}
      </select>
      <select className="subrace" onChange="">
        {subraceOptions}
      </select>
      <select className="background" onChange="">
        <option value="">Select a background...</option>
        {backgroundOptions}
      </select>
      <div>{raceBonuses.dex}</div>
    </div>
  );
}

{
  /* <div className="subclass"></div>
      <div className="alignment"></div> */
}
// dispatch(setBackgrounds(response.data.results));
