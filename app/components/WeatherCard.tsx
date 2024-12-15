"use client";

import { Card, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import { Cloud, Droplets, Wind } from "lucide-react";

const { Title, Text } = Typography;

interface WeatherCardProps {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  location: string;
}

export default function WeatherCard({
  temperature,
  condition,
  icon,
  humidity,
  windSpeed,
  feelsLike,
  location,
}: WeatherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-xl rounded-xl"
        bordered={false}
      >
        <div className="text-center mb-4">
          <Title level={2} className="!text-white mb-0">
            {location}
          </Title>
          <Text className="text-white/80">{condition}</Text>
        </div>

        <div className="flex justify-center items-center gap-4 mb-6">
          <img src={icon} alt={condition} className="w-20 h-20" />
          <Title level={1} className="!text-white mb-0">
            {temperature}°C
          </Title>
        </div>

        <Row gutter={16}>
          <Col span={8}>
            <div className="text-center">
              <Droplets className="mx-auto mb-2" />
              <Text className="block text-white/80">Humidity</Text>
              <Text strong className="text-white">
                {humidity}%
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <Wind className="mx-auto mb-2" />
              <Text className="block text-white/80">Wind</Text>
              <Text strong className="text-white">
                {windSpeed} km/h
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <Cloud className="mx-auto mb-2" />
              <Text className="block text-white/80">Feels Like</Text>
              <Text strong className="text-white">
                {feelsLike}°C
              </Text>
            </div>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
}