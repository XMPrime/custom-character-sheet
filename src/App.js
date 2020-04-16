import React, { Component } from "react";
import "./css/index.css";
import AbilityScores from "./components/AbilityScores";
import Skills from "./components/Skills";
import CharacterCreation from "./components/CharacterCreation";
import ArmorClass from "./components/ArmorClass";
import Initiative from "./components/Initiative";
import Inspiration from "./components/Inspiration";
import SavingThrows from "./components/SavingThrows";
import Portrait from "./components/Portrait";
import Speed from "./components/Speed";
import HitPoints from "./components/HitPoints";

export default function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="column--portrait-left">
          <Inspiration />
          <ArmorClass />
        </div>
        <div className="column--portrait-center">
          <Portrait />
        </div>

        <div className="column--portrait-right">
          <Initiative />
          <Speed />
        </div>
      </div>
      <HitPoints />
      <AbilityScores />

      <Skills />

      {/* <Skills /> <CharacterCreation />
      <ArmorClass />  <Inspriation /> <SavingThrows /> */}
    </div>
  );
}
