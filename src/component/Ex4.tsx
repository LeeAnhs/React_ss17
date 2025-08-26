import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <button onClick={handleToggle}>
        {show ? "Ẩn" : "Hiện"}
      </button>
      {show && (
        <div >
          Tiêu đề văn bản
        </div>
      )}
    </div>
  );
};

export default Toggle;