import React, { useState } from "react";

const list = [
  {
    name: "Madhya Pradesh",
    description: "Madhya Pradesh is a state in central India.",
    cities: [
      {
        name: "Bhopal",
        description: "Bhopal is the capital city of Madhya Pradesh.",
        landmarks: [
          {
            name: "Upper Lake",
            description: "Upper Lake is a famous lake in Bhopal.",
          },
          {
            name: "Sanchi Stupa",
            description: "Sanchi Stupa is a famous Buddhist monument.",
          },
        ],
      },
      {
        name: "Indore",
        description: "Indore is a major city of Madhya Pradesh.",
        landmarks: [
          {
            name: "Rajwada Palace",
            description: "Rajwada Palace is a historic palace in Indore.",
          },
          {
            name: "Lal Bagh Palace",
            description: "Lal Bagh Palace is a historic palace in Indore.",
          },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "Maharashtra is a state in western India.",
    cities: [
      {
        name: "Mumbai",
        description: "Mumbai is the capital city of Maharashtra.",
        landmarks: [
          {
            name: "Gateway of India",
            description: "Gateway of India is a famous monument in Mumbai.",
          },
          {
            name: "Marine Drive",
            description: "Marine Drive is a famous coastal road in Mumbai.",
          },
        ],
      },
      {
        name: "Pune",
        description: "Pune is a major city in Maharashtra.",
        landmarks: [
          {
            name: "Shaniwar Wada",
            description: "Shaniwar Wada is a historic fortification in Pune.",
          },
          {
            name: "Aga Khan Palace",
            description: "Aga Khan Palace is a historic landmark in Pune.",
          },
        ],
      },
    ],
  },
];

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  // Selected State
  const selectedState = list[stateIndex];

  // Cities belonging to selected State
  const cities = selectedState.cities;

  // Selected City
  const selectedCity = cities[cityIndex];

  // Landmarks belonging to selected City
  const landmarks = selectedCity.landmarks;

  // Selected Landmark
  const selectedLandmark = landmarks[landmarkIndex];

  // State change
  const handleStateChange = (event) => {
    const newStateIndex = Number(event.target.value);

    setStateIndex(newStateIndex);

    // Reset dependent dropdowns
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  // City change
  const handleCityChange = (event) => {
    const newCityIndex = Number(event.target.value);

    setCityIndex(newCityIndex);

    // Reset dependent dropdown
    setLandmarkIndex(0);
  };

  // Landmark change
  const handleLandmarkChange = (event) => {
    setLandmarkIndex(Number(event.target.value));
  };

  return (
    <div>
      {/* STATE */}

      <select
        id="state"
        value={stateIndex}
        onChange={handleStateChange}
      >
        {list.map((state, index) => (
          <option
            key={index}
            value={index}
          >
            {state.name}
          </option>
        ))}
      </select>

      <div id="state-name">
        {selectedState.name}
      </div>

      <div id="state-description">
        {selectedState.description}
      </div>


      {/* CITY */}

      <select
        id="city"
        value={cityIndex}
        onChange={handleCityChange}
      >
        {cities.map((city, index) => (
          <option
            key={index}
            value={index}
          >
            {city.name}
          </option>
        ))}
      </select>

      <div id="city-name">
        {selectedCity.name}
      </div>

      <div id="city-description">
        {selectedCity.description}
      </div>


      {/* LANDMARK */}

      <select
        id="landmark"
        value={landmarkIndex}
        onChange={handleLandmarkChange}
      >
        {landmarks.map((landmark, index) => (
          <option
            key={index}
            value={index}
          >
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

export default App;import React, { useState } from "react";

const list = [
  {
    name: "Madhya Pradesh",
    description: "Madhya Pradesh is a state in central India.",
    cities: [
      {
        name: "Bhopal",
        description: "Bhopal is the capital city of Madhya Pradesh.",
        landmarks: [
          {
            name: "Upper Lake",
            description: "Upper Lake is a famous lake in Bhopal.",
          },
          {
            name: "Sanchi Stupa",
            description: "Sanchi Stupa is a famous Buddhist monument.",
          },
        ],
      },
      {
        name: "Indore",
        description: "Indore is a major city of Madhya Pradesh.",
        landmarks: [
          {
            name: "Rajwada Palace",
            description: "Rajwada Palace is a historic palace in Indore.",
          },
          {
            name: "Lal Bagh Palace",
            description: "Lal Bagh Palace is a historic palace in Indore.",
          },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    description: "Maharashtra is a state in western India.",
    cities: [
      {
        name: "Mumbai",
        description: "Mumbai is the capital city of Maharashtra.",
        landmarks: [
          {
            name: "Gateway of India",
            description: "Gateway of India is a famous monument in Mumbai.",
          },
          {
            name: "Marine Drive",
            description: "Marine Drive is a famous coastal road in Mumbai.",
          },
        ],
      },
      {
        name: "Pune",
        description: "Pune is a major city in Maharashtra.",
        landmarks: [
          {
            name: "Shaniwar Wada",
            description: "Shaniwar Wada is a historic fortification in Pune.",
          },
          {
            name: "Aga Khan Palace",
            description: "Aga Khan Palace is a historic landmark in Pune.",
          },
        ],
      },
    ],
  },
];

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  // Selected State
  const selectedState = list[stateIndex];

  // Cities belonging to selected State
  const cities = selectedState.cities;

  // Selected City
  const selectedCity = cities[cityIndex];

  // Landmarks belonging to selected City
  const landmarks = selectedCity.landmarks;

  // Selected Landmark
  const selectedLandmark = landmarks[landmarkIndex];

  // State change
  const handleStateChange = (event) => {
    const newStateIndex = Number(event.target.value);

    setStateIndex(newStateIndex);

    // Reset dependent dropdowns
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  // City change
  const handleCityChange = (event) => {
    const newCityIndex = Number(event.target.value);

    setCityIndex(newCityIndex);

    // Reset dependent dropdown
    setLandmarkIndex(0);
  };

  // Landmark change
  const handleLandmarkChange = (event) => {
    setLandmarkIndex(Number(event.target.value));
  };

  return (
    <div>
      {/* STATE */}

      <select
        id="state"
        value={stateIndex}
        onChange={handleStateChange}
      >
        {list.map((state, index) => (
          <option
            key={index}
            value={index}
          >
            {state.name}
          </option>
        ))}
      </select>

      <div id="state-name">
        {selectedState.name}
      </div>

      <div id="state-description">
        {selectedState.description}
      </div>


      {/* CITY */}

      <select
        id="city"
        value={cityIndex}
        onChange={handleCityChange}
      >
        {cities.map((city, index) => (
          <option
            key={index}
            value={index}
          >
            {city.name}
          </option>
        ))}
      </select>

      <div id="city-name">
        {selectedCity.name}
      </div>

      <div id="city-description">
        {selectedCity.description}
      </div>


      {/* LANDMARK */}

      <select
        id="landmark"
        value={landmarkIndex}
        onChange={handleLandmarkChange}
      >
        {landmarks.map((landmark, index) => (
          <option
            key={index}
            value={index}
          >
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
