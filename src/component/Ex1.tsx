import React, { useState } from "react";

const Name = () => {
  const [name] = useState("Nguyễn Văn A");

  return (
    <div>
      <h1>
        Họ và tên: <b>{name}</b>
      </h1>
    </div>
  );
};

export default Name;