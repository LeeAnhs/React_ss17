import React, { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor("red");
  };

  return (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <h3 style={{ color: color }}>Tiêu đề văn bản</h3>
      <button onClick={handleChangeColor} style={{ marginTop: 10 }}>
        Thay đổi màu
      </button>
    </div>
  );
};

export default ChangeColor;