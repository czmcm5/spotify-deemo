import { useState } from "react";

const codes = ["#ed9282", "#fad57a", "#f48aab", "#87bbe2", "#56b444"];

const useRendomColor = () => {
  const [colorCode, setColorCode] = useState("#56b444");

  const getRandomCode = (): void => {
    const codeList = codes.filter((c) => c !== colorCode);
    const randomidx = Math.floor(Math.random() * codeList.length);
    setColorCode(codeList[randomidx]);
  };

  return { colorCode, getRandomCode };
};

export default useRendomColor;
