# Next.js Weather Application

A beautiful and modern weather application built with Next.js 14, Ant Design, and Framer Motion. Get real-time weather updates, hourly forecasts, and 5-day predictions with a sleek, responsive interface.

<img width="959" alt="weather-app" src="https://github.com/user-attachments/assets/dc9793c2-c079-48f3-8d69-908815c95533" />

## ✨ Features

- 🌡️ Real-time weather data
- 📱 Responsive design for all devices
- 🎨 Beautiful UI with smooth animations
- 🔍 Location search functionality
- 📊 5-day weather forecast
- 🌓 Dark theme with gradient backgrounds
- 💨 Wind speed and humidity information
- 🌡️ "Feels like" temperature

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **UI Library:** Ant Design
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **API Integration:** Axios
- **Icons:** Lucide React, Ant Design Icons
- **Type Safety:** TypeScript

## 📦 Project Structure

```
├── app/
│   ├── components/
│   │   ├── WeatherCard.tsx
│   │   ├── ForecastSection.tsx
│   │   └── SearchLocation.tsx
│   ├── types/
│   │   └── weather.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
├── package.json
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your WeatherAPI key:
```env
NEXT_PUBLIC_WEATHER_API_KEY=your_weatherapi_key_here
```

4. Start the development server:
```bash
npm run dev
```

## 🔑 Environment Variables

The application requires the following environment variable:

- `NEXT_PUBLIC_WEATHER_API_KEY`: Your WeatherAPI.com API key

## 📱 Components

### WeatherCard
Displays current weather information including:
- Temperature
- Weather condition
- Humidity
- Wind speed
- Feels like temperature

### ForecastSection
Shows a 5-day weather forecast with:
- Daily high and low temperatures
- Weather conditions
- Weather icons

### SearchLocation
Provides location search functionality with:
- Search input field
- Auto-focus
- Enter key support

## 🌐 API Integration

The application uses the WeatherAPI.com API to fetch weather data. The following endpoints are used:

- Current weather data
- 6-day forecast
- Location search

## 🎨 Styling

- Custom gradient backgrounds
- Responsive design using Tailwind CSS
- Smooth animations with Framer Motion
- Dark theme optimization

## 📈 Performance Optimization

- Client-side caching
- Optimized images
- Lazy loading components
- Minimized bundle size

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing the weather data
- [Ant Design](https://ant.design/) for the UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Next.js](https://nextjs.org/) for the awesome framework

## Live Link: 

https://weather-app-two-black-95.vercel.app/

