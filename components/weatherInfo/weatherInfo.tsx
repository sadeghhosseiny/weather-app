import React from "react";
import { apiTypes } from "../types/allVars.types";
import {
  WiDaySunny,
  WiNightClear,
  WiThermometer,
  WiHumidity,
  WiDirectionDown,
  WiStrongWind,
  WiWindDeg,
} from "weather-icons-react";
import Image from "next/image";

function WeatherInfo({ result }: apiTypes) {
  let temp = (result?.main?.temp - 273.15).toFixed(2);
  let tempMax = (result?.main?.temp_max - 273.15).toFixed(2);
  let tempMin = (result?.main?.temp_min - 273.15).toFixed(2);

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleDateString("default", { month: "long" });
  let day = d.toLocaleDateString("default", { weekday: "long" });

  let Time = [
    d.getHours() < 10 ? "0" + d.getHours() : d.getHours(),
    ":",
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(),
  ];

  let weather = {
    Haze: "text-gray-900",
    Mist: "text-gray-900",
    Fog: "text-gray-900",
    Snow: "text-gray-900",
  };

  return (
    <div
      className={`relative flex justify-center ${
        weather[result.weather[0].main]
          ? weather[result.weather[0].main]
          : "text-slate-200"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto">
        <Image
          src={`https://source.unsplash.com/random/1920x1080/?nature,${result?.weather[0].main}`}
          width={1680}
          height={900}
        />
      </div>
      <div
        className="w-full max-w-4xl border-none xlg:border-2 xlg:border-solid border-slate-400 flex flex-col
       justify-center absolute top-6 backdrop-blur-sm card-screen1:h-50 card-screen2:h-351 card-screen2:w-351 text-screen3:top-0"
      >
        <h1 className="text-xl text-screen1:text-5xl mx-auto my-1 text-screen3:mt-4 text-screen1:my-4">
          {result?.name}
        </h1>
        <div className="flex justify-center items-center flex-row text-screen1:flex-col space-x-10 text-screen1:space-x-0">
          <h1 className="text-xl text-screen1:text-4xl font-extralight text-screen1:mx-auto text-screen1:mb-1">
            {day}, {month} {date}, {year}
          </h1>
          <h2
            suppressHydrationWarning={true}
            className="text-xl text-screen1:text-3xl font-extralight text-screen1:my-2"
          >
            {Time.slice(0, 5)}
          </h2>
        </div>
        <div className="flex flex-col items-center">
          {result?.weather[0]?.icon == "01d" ? (
            <WiDaySunny className="w-20 h-20 text-screen1:h-24 text-screen1:w-24 text-yellow-400" />
          ) : result?.weather[0]?.icon == "01n" ? (
            <WiNightClear className="w-20 h-20 text-screen1:h-24 text-screen1:w-24 text-slate-800" />
          ) : (
            <div className="w-24 h-24 text-screen1:w-full text-screen1:h-full text-screen1:flex justify-center">
              <Image
                src={`http://openweathermap.org/img/wn/${result?.weather[0]?.icon}@2x.png`}
                alt=""
                width={150}
                height={150}
              />
            </div>
          )}
          <h1 className="text-xl text-screen2:text-3xl font-extralight text-screen2:my-4">
            {result?.weather[0]?.main}
          </h1>
          <div className="flex mt-3">
            <span className="text-xl text-screen1:text-4xl font-bold">
              {temp} &deg;C
            </span>
            <WiThermometer className="w-9 h-9 text-red-500 text-screen2:h-14 text-screen2:w-14" />
          </div>
        </div>
        <div className="flex mt-5 mx-auto">
          <span className="text-xl">Max: {tempMax}</span>
          <WiThermometer className="h-10 w-10 text-red-500" />
          <span className="ml-4 text-xl">Min: {tempMin}</span>
          <WiThermometer className="h-10 w-10 text-red-500" />
        </div>
        <div className="hidden text-screen2:flex items-center mx-auto mt-5">
          <h2 className="text-2xl">humidity: {result?.main?.humidity}</h2>
          <WiHumidity className="h-10 w-10 text-blue-300" />
          <h2 className="text-2xl ml-4">pressure: {result?.main?.pressure}</h2>
          <WiDirectionDown className="h-16 w-16 -ml-4 text-blue-300" />
        </div>
        <div className="flex mt-4 mb-10 mx-auto">
          <h2 className="text-2xl">speed of wind: {result?.wind?.speed}</h2>
          <WiStrongWind className="h-10 w-10 text-white" />
          <h2 className="text-2xl ml-4">deg: {result?.wind?.deg}</h2>
          <WiWindDeg className="h-10 w-10 text-white" />
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
