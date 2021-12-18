import React from "react";
import { apiTypes } from "../types/allVars.types";
import {
  WiDaySunny,
  WiThermometer,
  WiHumidity,
  WiDirectionDown,
  WiStrongWind,
  WiWindDeg,
} from "weather-icons-react";

function WeatherInfo({ result }: apiTypes) {
  console.log("RES", result);

  let temp = (result?.main?.temp - 273.15).toFixed(2);
  let tempMax = (result?.main?.temp_max - 273.15).toFixed(2);
  let tempMin = (result?.main?.temp_min - 273.15).toFixed(2);

  return (
    <div className="relative flex justify-center text-slate-200">
      <img
        src={"https://source.unsplash.com/random/1920x1080/?nature,Clouds"}
      />
      <div className="w-full max-w-4xl border-2 border-slate-400 flex flex-col justify-center absolute top-6 backdrop-blur-sm">
        <h1 className="text-5xl mx-auto font-extralight my-4">
          {result?.name}
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={`http://openweathermap.org/img/wn/${result?.weather[0]?.icon}@2x.png`}
            alt=""
          />
          <h1 className="text-3xl font-extralight my-4">
            {result?.weather[0]?.main}
          </h1>
          <div className="flex mt-3">
            <span className="text-4xl font-bold">{temp} &deg;C</span>
            <WiThermometer className="h-14 w-14" />
          </div>
        </div>
        <div className="flex mt-5 mx-auto">
          <span className="text-xl">Max: {tempMax}</span>
          <WiThermometer className="h-10 w-10" />
          <span className="ml-4 text-xl">Min: {tempMin}</span>
          <WiThermometer className="h-10 w-10" />
        </div>
        <div className="flex items-center mx-auto mt-5">
          <h2 className="text-2xl">humidity: {result?.main?.humidity}</h2>
          <WiHumidity className="h-10 w-10 text-blue-300" />
          <h2 className="text-2xl ml-4">pressure: {result?.main?.pressure}</h2>
          <WiDirectionDown className="h-16 w-16 -ml-4" />
        </div>
        <div className="flex mt-4 mb-10 mx-auto">
          <h2 className="text-2xl">speed of wind: {result?.wind?.speed}</h2>
          <WiStrongWind className="h-10 w-10 text-white" />
          <h2 className="text-2xl ml-4">deg: {result?.wind?.deg}</h2>
          <WiWindDeg className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
