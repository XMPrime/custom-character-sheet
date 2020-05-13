import React, { Component } from "react";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Creation from "./components/Creation";
import AbilityScores from "./components/AbilityScores";
import Skills from "./components/Skills";
import CharacterCreation from "./components/CharacterCreation";
import ArmorClass from "./components/ArmorClass";
import Initiative from "./components/Initiative";
import Inspiration from "./components/Inspiration";
import Portrait from "./components/Portrait";
import Speed from "./components/Speed";
import HitPoints from "./components/HitPoints";
import MiscProfs from "./components/MiscProfs";
import InfoBox from "./components/InfoBox";
import ContentButton from "./components/ContentButton";
import ContentSubButton from "./components/ContentSubButton";
import ContentBox from "./components/ContentBox";
import SavingThrows from "./components/SavingThrows";

export default function App() {
  return (
    <div className='app'>
      {/* <Test /> */}
      <Creation />
      {/* <ContentBox />
      <ContentButton />
      <ContentSubButton /> */}
      {/* <InfoBox /> */}
      <div className='grid-container--portrait'>
        {/* <div className='column--portrait-left col-sm'> */}

        <Inspiration />
        <ArmorClass />
        {/* </div> */}
        {/* <div className='column--portrait-center'> */}
        <Portrait />
        {/* </div> */}

        {/* <div className='column--portrait-right'> */}
        <Initiative />
        <Speed />
        {/* </div> */}
        <HitPoints />
        <SavingThrows />
      </div>
      <div className='content-box grid-container--content-box'>
        <AbilityScores />
        <Skills />
        <MiscProfs />
        <MiscProfs />
      </div>

      {/* <Skills /> <CharacterCreation />
      <ArmorClass />  <Inspriation /> <SavingThrows /> */}
    </div>
  );
}
