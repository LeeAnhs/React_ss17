import React, { useState } from "react";


const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

const Checkbox = () => {
  const [checkedList, setCheckedList] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedList([...checkedList, value]);
    } else {
      setCheckedList(checkedList.filter((item) => item !== value));
    }
  };

  return (
    <div >
      <div >
        Sở thích: {JSON.stringify(checkedList)}
      </div>
      <div >
        {options.map((opt) => (
          <div key={opt} >
            <input
              type="checkbox"
              value={opt}
              checked={checkedList.includes(opt)}
              onChange={handleChange}
              id={opt}
            />
            <label htmlFor={opt} >{opt}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;