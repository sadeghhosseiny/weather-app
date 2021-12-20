import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import WeatherInfo from "../components/weatherInfo/weatherInfo";
import Error from "next/error";
import { useState } from "react";
import MiddleSection from "../components/middleSection/middleSection";
import Footer from "../components/footer/footer";

export default function Home({ result, ctx }) {
  const [input, setInput] = useState<string>("Tehran");

  return (
    <div className="bg-gray-100 min-w-700">
      <Head>
        <title>Weather-App</title>
      </Head>
      {result.cod != 404 ? (
        <>
          <Header input={input} setInput={setInput} />
          <WeatherInfo result={result} />
          <MiddleSection />
          <Footer />
        </>
      ) : (
        <Error statusCode={result.cod} />
      )}
    </div>
  );
}

const API_KEY = "cc1d30e43dbdd38043f79ec7b12af914";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const city = context.query.city;
  const req = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${
      city || "Tehran"
    }&appid=${API_KEY}`,
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
