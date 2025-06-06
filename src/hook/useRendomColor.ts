import { useState } from "react";

const codes = ["#ed9282", "#fad57a", "#f48aab", "#87bbe2", "#56b444"];

const useRendomColor = () => {
  const [code, setCode] = useState("#56b444");

  const getRandomCode = () => {
    const codeList = codes.filter((c) => c !== code);
    const randomidx = Math.floor(Math.random() * codeList.length);
    setCode(codeList[randomidx]);
  };

  return { code, getRandomCode };
};

export default useRendomColor;
