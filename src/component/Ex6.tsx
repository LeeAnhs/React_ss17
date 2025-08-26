import React, { useState } from "react";

const CountText = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div >
      <textarea
        rows={4}
        cols={40}
        placeholder=""
        value={text}
        onChange={handleChange}
      />
      <div>
        Số ký tự: {text.length}
      </div>
    </div>
  );
};

export default CountText;