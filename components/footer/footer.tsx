import React from "react";
import FooterItem from "../footerItem/footerItem";
import Image from "next/image";

function Footer() {
  const items = [
    {
      title: "Product Collections",
      links: [
        {
          link: "Current and Forecast APIs",
        },
        {
          link: "Historical Weather Data",
        },
        {
          link: "Weather Maps",
        },
        {
          link: "Widgets",
        },
      ],
    },
    {
      title: "Subscriptions",
      links: [
        {
          link: "How to Start",
        },
        {
          link: "Pricing",
        },
        {
          link: "Subscribe for free",
        },
        {
          link: "FAQ",
        },
      ],
    },
    {
      title: "About us",
      links: [
        {
          link: "OpenWeather is a team of IT experts and data scientists that has been practising deep weather data science since 2014. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs. Headquarters in London, UK",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-300 ">
      <div className="p-10 flex footer-screen:flex-col">
        {items.map((item, index) => (
          <FooterItem key={index} item={item} />
        ))}
      </div>
      <div className="flex py-10 justify-end footer-screen:justify-start footer-screen:px-10 px-20 space-x-8">
        <div>
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/owm_icons/icon_github.png"
            }
            width={20}
            height={20}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/owm_icons/icon_telegram.png"
            }
            width={20}
            height={20}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/owm_icons/icon_twitter.png"
            }
            width={20}
            height={20}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div>
          <Image
            src={
              "	https://openweathermap.org/themes/openweathermap/assets/img/owm_icons/icon_facebook.png"
            }
            width={20}
            height={20}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
