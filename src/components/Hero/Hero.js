import React from "react";

import "./Hero.css";
import DiscordButton from "../Buttons/DiscordButton/DiscordButton.js";

export default function Intro() {
  return (
    <div className="intro">
      <div id="home">
        <h1 className="visually-hidden">Rhystic Games</h1>
        <img
          src="/images/rhystic-logo.png"
          alt="Rhystic Games"
          className="hero-logo"
        />
        <p className="intro-tagline">
          A new local game store coming soon to New Hampshire
        </p>

        <button className="cta">
          <DiscordButton></DiscordButton>
        </button>
      </div>
    </div>
  );
}
