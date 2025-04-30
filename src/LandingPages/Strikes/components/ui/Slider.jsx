import React from "react";
import { Slider } from "react-tech-slider"; //Paquete de NPM
import { useState } from "react";
import Ball1 from "../../assets/img/Ball1.webp";
import Ball2 from "../../assets/img/Ball2.webp";
import Ball3 from "../../assets/img/Ball3.webp";
import Ball4 from "../../assets/img/Ball4.webp";
import Ball5 from "../../assets/img/Ball5.webp";
import Ball6 from "../../assets/img/Ball6.webp";
import Ball7 from "../../assets/img/Ball7.webp";

const BowlingBall = [
  {
    id: 1,
    name: "Ball 1",
    img: Ball1,
  },
  {
    id: 2,
    name: "Ball 2",
    img: Ball2,
  },
  {
    id: 3,
    name: "Ball 3",
    img: Ball3,
  },
  {
    id: 4,
    name: "Ball 4",
    img: Ball4,
  },
  {
    id: 5,
    name: "Ball 5",
    img: Ball5,
  },
  {
    id: 6,
    name: "Ball 6",
    img: Ball6,
  },
  {
    id: 7,
    name: "Ball 7",
    img: Ball7,
  },
];

export default function BowlingBallSlider() {
  return (
    <div className="max-w-[80rem] h-auto p-4 m-auto">
      <Slider
        brandsList={BowlingBall}
        borderWidth={2}
        borderColor="#ff6900"
        backgroundColor="#00000033"
        className="w-full h-auto"
        isPlay={true}
        pauseOnHoverActive={false}
        durationMs={20000}
      />
    </div>
  );
}
