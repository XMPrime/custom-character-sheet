import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../reducers/creationReducer";
// import Select from "react-select";

import CreationInput from "./CreationInput";

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
    <option className='creation__option' key={i} value={charClass}>
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

  const subraces = raceData.race
    .filter(
      (race) => race.name === creation.race && race.subraces !== undefined
    )
    .map((race, i) => {
      return race.subraces.map((subrace, i) => {
        return (
          <option key={i} value={subrace.name}>{`${subrace.name}`}</option>
        );
      });
    });

  // creation.race &&
  // raceData.race[
  //   raceData.race.findIndex((race) => race.name === creation.race && race.hasOwnProperty('subraces'))
  // ].hasOwnProperty("subraces")
  //   ? raceData.race[
  //       raceData.race.findIndex(
  //         (race) => race.name === creation.race && race.subraces
  //       )
  //     ].subraces.map((subrace, i) => {
  //       return (
  //         <option key={i} value={subrace.name}>{`${subrace.name}`}</option>
  //         //   (${subrace.source})
  //       );
  //     })
  //   : [];

  //   const subraces = [];

  //   function setSubraces(object) {
  //     if (object.hasOwnProperty("subraces")) {
  //       return raceData.race[
  //         raceData.race.findIndex(
  //           (race) => race.name === creation.race && race.subraces
  //         )
  //       ].subraces.map((subrace, i) => {
  //         return (
  //           <option key={i} value={subrace.name}>{`${subrace.name}`}</option>
  //           //   (${subrace.source})
  //         );
  //       });
  //     } else {
  //       return [];
  //     }
  //   }

  function mcOptions(classes) {
    const element = document.getElementById("charClass");
    const startingClass = element.options[element.selectedIndex].value;
    const remainingOptions = classes.filter(
      (charClass) => charClass !== startingClass
    );
    console.log(remainingOptions);
    return remainingOptions;
  }

  //   function handleDropdownChange(e) {
  //     e.preventDefault();
  //     const { name, value } = e.target;
  //     dispatch(setDropdownSelection(name, value));
  //   }

  //   function handleTextInput(e) {
  //     e.preventDefault();
  //     const { id, value } = e.target;
  //     dispatch(setTextInput(id, value));
  //   }

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setUserInput(name, value));
  }

  console.log(
    creation.race &&
      raceData.race[
        raceData.race.findIndex((race) => race.name === creation.race)
      ].subraces
  );

  return (
    <div className='creation'>
      <CreationInput type='text' name='charName' label='character name' />
      <CreationInput
        type='dropdown'
        options={backgrounds}
        name='background'
        label='background'
      />
      <CreationInput type='dropdown' options={races} name='race' label='race' />
      <CreationInput
        type='dropdown'
        options={subraces}
        name='subrace'
        label='subrace'
      />
      <CreationInput
        type='dropdown'
        options={alignments}
        name='alignment'
        label='alignment'
      />
      <CreationInput type='text' name='experience' label='experience' />
      <CreationInput
        type='dropdown'
        options={levels}
        name='charlevel'
        label='level'
      />
      <CreationInput
        type='dropdown'
        multi
        options={classes}
        options2={levels}
        name='startingClass'
        label='starting class'
      />
      <CreationInput
        type='dropdown'
        multi
        options={classes}
        options2={levels}
        name='multiclass'
        label='multiclass'
      />
    </div>
  );
}

{
  /* <div className='creation__col'>
        <input
          name='charName'
          className='name-value seemless-input'
          type='text'
          onChange={handleInputChange}
        >
          {creation.name}
        </input>
        <div className='name-label label'>character name</div>
      </div>
      <div className='creation__col'>
        <select
          name='background'
          className='creation__input background-value'
          onChange={handleInputChange}
        >
          {backgrounds}
        </select>
        <div className='background-label label'>background</div>
      </div>
      <div className='creation__col'>
        <select
          className='creation__input race-value'
          onChange={handleInputChange}
        >
          {races}
        </select>
        <div className='race-label label'>race</div>
      </div>

      <div className='creation__col'>
        <select
          className='creation__input alignment-value'
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        >
          {levels}
        </select>
        <div className='level-label label'>level</div>
      </div>
      <div className='creation__col'>
        <div>
          <select
            className='creation__input class-value'
            onChange={handleInputChange}
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
          onChange={handleInputChange}
        >
          {classes}
        </select>
        <div className='class-label label'>multiclass</div>
      </div> */
}
