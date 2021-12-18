import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/header/header";
// import { apiTypes } from "../components/types/allVars.types";
import WeatherInfo from "../components/weatherInfo/weatherInfo";
import Error from "next/error";

export default function Home({ result }) {
  console.log("MAIN", result.cod);
  return (
    <div>
      <Head>
        <title>Weather-App</title>
      </Head>
      {result.cod != 404 ? (
        <>
          <Header />
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
    `http://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=${API_KEY}`,
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
