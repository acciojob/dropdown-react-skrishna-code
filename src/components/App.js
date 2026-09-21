
import React, { useState } from "react";

const data = [
  {
    name: "Madhya Pradesh",
    description: "Heart of India",
    cities: [
      {
        name: "Bhopal",
        description: "The capital city of Madhya Pradesh",
        landmarks: [
          {
            name: "Upper Lake",
            description: "A beautiful lake in Bhopal",
          },
          {
            name: "Sanchi Stupa",
            description: "A famous Buddhist monument",
          },
        ],
      },
      {
        name: "Indore",
        description: "The largest city of Madhya Pradesh",
        landmarks: [
          {
            name: "Rajwada Palace",
            description: "A historic palace in Indore",
          },
          {
            name: "Lal Bagh Palace",
            description: "A beautiful historical palace",
          },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "A state in western India",
    cities: [
      {
        name: "Mumbai",
        description: "The capital city of Maharashtra",
        landmarks: [
          {
            name: "Gateway of India",
            description: "A famous monument in Mumbai",
          },
          {
            name: "Marine Drive",
            description: "A famous seaside promenade",
          },
        ],
      },
      {
        name: "Pune",
        description: "A major city in Maharashtra",
        landmarks: [
          {
            name: "Shaniwar Wada",
            description: "A historic fortification",
          },
          {
            name: "Aga Khan Palace",
            description: "A historic palace in Pune",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(0);

  const state = data[selectedState];
  const city = state.cities[selectedCity];
  const landmark = city.landmarks[selectedLandmark];

  const handleStateChange = (e) => {
    setSelectedState(Number(e.target.value));
    setSelectedCity(0);
    setSelectedLandmark(0);
  };

  const handleCityChange = (e) => {
    setSelectedCity(Number(e.target.value));
    setSelectedLandmark(0);
  };

  const handleLandmarkChange = (e) => {
    setSelectedLandmark(Number(e.target.value));
  };

  return (
    <div>
      {/* State */}
      <select
        id="state"
        value={selectedState}
        onChange={handleStateChange}
      >
        {data.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id="state-name">{state.name}</div>
      <div id="state-description">{state.description}</div>

      {/* City */}
      <select
        id="city"
        value={selectedCity}
        onChange={handleCityChange}
      >
        {state.cities.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id="city-name">{city.name}</div>
      <div id="city-description">{city.description}</div>

      {/* Landmark */}
      <select
        id="landmark"
        value={selectedLandmark}
        onChange={handleLandmarkChange}
      >
        {city.landmarks.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id="landmark-name">{landmark.name}</div>
      <div id="landmark-description">{landmark.description}</div>
    </div>
  );
}

export default App;

