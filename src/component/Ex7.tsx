import React, { useState } from "react";

const cities = [
  "",
  "Hà Nội",
  "Hà Nam",
  "Ninh Bình",
  "Thanh Hóa",
  "Nghệ An"
];

const Select = () => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div >
      <div >
        <label >Thành phố:</label>
        <select
          value={city}
          onChange={handleChange}
        >
          <option value="">-- Chọn thành phố --</option>
          {cities.slice(1).map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>
      {city && (
        <div >
          Thành phố: <b>{city}</b>
        </div>
      )}
    </div>
  );
};

export default Select;