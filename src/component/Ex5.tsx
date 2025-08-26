import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={value}
        onChange={handleChange}

      />
      <div >
        {value}
      </div>
    </div>
  );
};

export default Form;