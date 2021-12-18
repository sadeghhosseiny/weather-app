import React from "react";
import { apiTypes } from "../types/allVars.types";
import { WiDaySunny } from "weather-icons-react";

function WeatherInfo({ result }: apiTypes) {
  return (
    <div className="relative flex justify-center">
      <img
        src={"https://source.unsplash.com/random/1920x1080/?nature,Clouds"}
      />
      <div className="w-full max-w-4xl border-2 border-slate-400 flex flex-col justify-center absolute top-6 backdrop-blur-sm">
        <h1 className="text-5xl font-extralight my-4">{result.name}</h1>
        <WiDaySunny className="h-32 w-60" />
      </div>
    </div>
  );
}

export default WeatherInfo;
