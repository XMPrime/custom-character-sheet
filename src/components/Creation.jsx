import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTextInput,
  setDropdownSelection,
} from "../reducers/creationReducer";
// import Select from "react-select";

import raceData from "../data/races.json";
import bgData from "../data/backgrounds.json";

export default function Creation() {
  const dispatch = useDispatch();
  const creation = useSelector((state) => state.creation);
  const levels = [...Array(20)].map((level, i) => (
    <option key={i + 1}>{i + 1}</option>
  ));
  const alignments = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "Neutral Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ].map((alignment, i) => (
    <option key={i} value={alignment}>
      {alignment}
    </option>
  ));

  const backgrounds = bgData.background.map((bg, i) => (
    <option key={i} value={bg.name}>{`${bg.name} (${bg.source})`}</option>
  ));
  // <option key={i} value={bg.name}>{`${bg.name} (${bg.source})`}</option>

  const classes = [
    "artificer",
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard",
  ].map((charClass, i) => (
    <option key={i} value={charClass}>
      {charClass}
    </option>
  ));

  //   const mcOptions = classes.filter(charClass => charClass !== document.getElementById('charClass'))

  const races = raceData.race.map((race, i) => {
    return (
      <option key={i} value={race.name}>{`${race.name} (${
        race.source[0] + race.source[1] === "UA" ? "UA" : race.source
      })`}</option>
    );
  });
  // race.source[0] + race.source[1] === "UA" ? "UA" :

  function mcOptions(classes) {
    const element = document.getElementById("charClass");
    const startingClass = element.options[element.selectedIndex].value;
    const remainingOptions = classes.filter(
      (charClass) => charClass !== startingClass
    );
    console.log(remainingOptions);
    return remainingOptions;
  }

  function handleDropdownChange(e) {
    e.preventDefault();
    const { id, value } = e.target;
    dispatch(setDropdownSelection(id, value));
  }

  function handleTextInput(e) {
    e.preventDefault();
    const { id, value } = e.target;
    dispatch(setTextInput(id, value));
  }

  return (
    <div className='creation'>
      <div className='creation__col'>
        <input
          id='charName'
          className='name-value seemless-input'
          type='text'
          onChange={handleTextInput}
        >
          {creation.name}
        </input>
        <div className='name-label label'>character name</div>
      </div>
      <div className='creation__col'>
        <select
          className='creation__input background-value'
          onChange={handleDropdownChange}
        >
          {backgrounds}
        </select>
        <div className='background-label label'>background</div>
      </div>
      <div className='creation__col'>
        <select
          className='creation__input race-value'
          onChange={handleDropdownChange}
        >
          {races}
        </select>
        <div className='race-label label'>race</div>
      </div>

      <div className='creation__col'>
        <select
          className='creation__input alignment-value'
          onChange={handleDropdownChange}
        >
          {alignments}
        </select>
        <div className='alignment-label label'>alignment</div>
      </div>
      <div className='creation__col'>
        <div className='experience-value'>4000</div>
        <div className='experience-label label'>experience</div>
      </div>
      <div className='creation__col'>
        <select
          className='creation__input level-value'
          onChange={handleDropdownChange}
        >
          {levels}
        </select>
        <div className='level-label label'>level</div>
      </div>
      <div className='creation__col'>
        <div>
          <select
            className='creation__input class-value'
            onChange={handleDropdownChange}
          >
            {classes}
          </select>
          <select className='creation__input level-value'>{levels}</select>
        </div>

        <div className='class-label label'>starting class</div>
      </div>
      <div className='creation__col'>
        <select
          className='creation__input class-value'
          onChange={handleDropdownChange}
        >
          {classes}
        </select>
        <div className='class-label label'>multiclass</div>
      </div>
    </div>
  );
}
