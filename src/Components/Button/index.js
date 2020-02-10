import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState(1);

  const handleClick = () => {
    return setButtonText(buttonText + 1);
  };

  return <button onClick={handleClick}>{buttonText}</button>;
}
