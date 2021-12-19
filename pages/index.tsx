import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import WeatherInfo from "../components/weatherInfo/weatherInfo";
import Error from "next/error";
import { useState } from "react";

export default function Home({ result }) {
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <Head>
        <title>Weather-App</title>
      </Head>
      {result.cod != 404 ? (
        <>
          <Header value={input} setInput={setInput} />
          <WeatherInfo result={result} />
        </>
      ) : (
        <Error statusCode={result.cod} />
      )}
    </div>
  );
}

const API_KEY = "cc1d30e43dbdd38043f79ec7b12af914";

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${API_KEY}`,
  );
  const result = await req.json();

  // const req2 = await fetch(
  //   `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${API_KEY}`,
  // );
  // const result2 = await req2.json();

  return {
    props: {
      result,
      // result2,
    },
  };
};
