"use client";

import { useState, useEffect } from "react";
import { ConfigProvider, theme,Spin,Flex } from "antd";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import ForecastSection from "./components/ForecastSection";
import SearchLocation from "./components/SearchLocation";
import { WeatherData } from "./types/weather";
import { motion } from "framer-motion";
import cities from "../lib/cities.json";

export default function Home() {
  const cityNames = cities.map((city) => city.name);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("London");

  const fetchWeather = async (searchLocation: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${searchLocation}&days=6&aqi=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const handleSearch = (value: string) => {
    setLocation(value);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#4B9FE1",
          borderRadius: 16,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4 md:p-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <SearchLocation
              onSearch={(value) => handleSearch(value)}
              suggestions={cityNames}
            />;
          </div>
          {loading && 
          <Flex gap="middle" vertical>
            <Spin tip="Loading" size="large"/>
          </Flex>
          }

          {weatherData && (
            <>
              <WeatherCard
                temperature={weatherData.current.temp_c}
                condition={weatherData.current.condition.text}
                icon={weatherData.current.condition.icon}
                humidity={weatherData.current.humidity}
                windSpeed={weatherData.current.wind_kph}
                feelsLike={weatherData.current.feelslike_c}
                location={`${weatherData.location.name}, ${weatherData.location.country}`}
              />

              <ForecastSection
                forecasts={weatherData.forecast.forecastday.map((day) => ({
                  date: day.date,
                  maxTemp: day.day.maxtemp_c,
                  minTemp: day.day.mintemp_c,
                  condition: day.day.condition.text,
                  icon: day.day.condition.icon,
                }))}
              />
            </>
          )}
        </div>
      </motion.div>
    </ConfigProvider>
  );
}