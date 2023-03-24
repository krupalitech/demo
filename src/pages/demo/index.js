import React from "react";
import { useState, useEffect } from "react";
//import Button from "@mui/material/Button";
import { Button} from "@mui/material";

const CardPage = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount) : 0;
  });
  const decrementCount = () => {
    setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={incrementCount}>Increment</Button>
      
      <Button onClick={decrementCount}>decrement</Button>
    </div>
  );
};

export default CardPage;
