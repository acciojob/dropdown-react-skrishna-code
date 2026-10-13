
import React, { useState } from "react";

// Use your assignment's provided list structure here.
const data = [
  {
    name: "Madhya Pradesh",
    description: "A central state of India.",
    cities: [
      {
        name: "Bhopal",
        description: "The capital city of Madhya Pradesh.",
        landmarks: [
          {
            name: "Taj-ul-Masajid",
            description: "A famous mosque in Bhopal.",
          },
          {
            name: "Upper Lake",
            description: "A popular lake in Bhopal.",
          },
        ],
      },
      {
        name: "Indore",
        description: "A major city known for its food.",
        landmarks: [
          {
            name: "Rajwada Palace",
            description: "A historic palace in Indore.",
          },
          {
            name: "Lal Bagh Palace",
            description: "A historic palace and museum.",
          },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "A state in western India.",
    cities: [
      {
        name: "Mumbai",
        description: "The capital of Maharashtra.",
        landmarks: [
          {
            name: "Gateway of India",
            description: "A historic monument in Mumbai.",
          },
          {
            name: "Marine Drive",
            description: "A famous seaside promenade.",
          },
        ],
      },
      {
        name: "Pune",
        description: "A city known for education and IT.",
        landmarks: [
          {
            name: "Shaniwar Wada",
            description: "A historic fortification in Pune.",
          },
          {
            name: "Aga Khan Palace",
            description: "A historic palace in Pune.",
          },
        ],
      },
    ],
  },
];

function App() {
  // Initialize all dropdowns to the first available item.
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const selectedState = data[stateIndex];
  const cities = selectedState.cities;
  const selectedCity = cities[cityIndex];
  const landmarks = selectedCity.landmarks;
  const selectedLandmark = landmarks[landmarkIndex];

  return (
    <div>
      <h1>Dropdown React</h1>

      {/* State dropdown */}
      <select
        id="state"
        value={stateIndex}
        onChange={(e) => {
          setStateIndex(Number(e.target.value));
          setCityIndex(0);
          setLandmarkIndex(0);
        }}
      >
        {data.map((state, index) => (
          <option key={state.name} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">
        {selectedState.description}
      </div>

      {/* City dropdown */}
      <select
        id="city"
        value={cityIndex}
        onChange={(e) => {
          setCityIndex(Number(e.target.value));
          setLandmarkIndex(0);
        }}
      >
        {cities.map((city, index) => (
          <option key={city.name} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">
        {selectedCity.description}
      </div>

      {/* Landmark dropdown */}
      <select
        id="landmark"
        value={landmarkIndex}
        onChange={(e) =>
          setLandmarkIndex(Number(e.target.value))
        }
      >
        {landmarks.map((landmark, index) => (
          <option key={landmark.name} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      <div id="landmark-name">
        {selectedLandmark.name}
      </div>
      <div id="landmark-description">
        {selectedLandmark.description}
      </div>
    </div>
  );
}

export default App;
