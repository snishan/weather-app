"use client";

import { Card, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";

const { Text } = Typography;

interface ForecastProps {
  forecasts: Array<{
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
    icon: string;
  }>;
}

export default function ForecastSection({ forecasts }: ForecastProps) {
  return (
    <div className="mt-8">
      <Row gutter={[16, 16]}>
        {forecasts.map((forecast, index) => (
          <Col key={forecast.date} xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md text-white">
                <div className="text-center">
                  <Text className="block text-lg text-white">
                    {new Date(forecast.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </Text>
                  <img
                    src={forecast.icon}
                    alt={forecast.condition}
                    className="w-16 h-16 mx-auto my-2"
                  />
                  <div className="flex justify-center gap-4">
                    <Text className="text-white">{forecast.maxTemp}°C</Text>
                    <Text className="text-white/60">{forecast.minTemp}°C</Text>
                  </div>
                  <Text className="block text-white/80 mt-2">
                    {forecast.condition}
                  </Text>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}