import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/header/header";

type ResultTypes = {
  result: {
    main: {
      pressure: number;
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    name: string;
    weather: [];
  };
};

export default function Home({ result }) {
  return (
    <div>
      <Head>
        <title>Weather-App</title>
      </Head>
      <Header />
    </div>
  );
}

const API_KEY = "cc1d30e43dbdd38043f79ec7b12af914";

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`,
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
