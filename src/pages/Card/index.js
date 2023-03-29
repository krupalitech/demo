import React, { useCallback } from "react";
import _, { range, shuffle } from "lodash";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";

import ShuffleIcon from "@mui/icons-material/Shuffle";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import DeleteIcon from "@mui/icons-material/Delete";
import { Margin } from "@mui/icons-material";

// let nextId = 0;

// function longExecuteThisFunction(num) {
//   console.time("longExecuteThisFunction");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   console.timeEnd("longExecuteThisFunction");
//   return num;
// }

const CustCardPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [clickValue, setClickValue] = useState([]);
  const [num, setNum] = useState(0);


  const [selectedStack, setSelectedStack] = useState([]);

  const [shuffledNumbers, setShuffledNumbers] = useState([]);
  
  const handleShuffle = () => {
    const numbers = range(1, 38);
    const shuffled = shuffle(numbers);
    setShuffledNumbers(shuffled);
  };
  // const handleClick12 = (number) => {
  //   if (!selectedNumbers.includes(number)) {
  //     setSelectedNumbers([...selectedNumbers, number]);
  //   } else {
  //     setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
  //   }
  // };
 

 

  const deleteCount = () => {};

  const addNumToStack = (newNum) => {
    if (!selectedStack.includes(newNum)) {
      setSelectedStack((prev) => [...prev, newNum]);
    } else {
      setSelectedStack((prev) => prev.filter((i) => i !== newNum));
    }
  };


  const handleClick = (e) => {
    setClickValue(e.target.innerText);
    addNumToStack(e.target.innerText);
  };

  const handleResetClick = (e) => {
    setSelectedStack('');
  };

  return (
    <>

      <Card sx={{ maxWidth: 445 }}>
        <CardHeader
          action={
            <>
              <IconButton>
                <ShuffleIcon onClick={handleShuffle} />
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={deleteCount} />
              </IconButton>
            </>
          }
          title="TICKET 1"
        />

        <CardContent>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab size="small" aria-label={selectedStack[0] || ""}>
              {selectedStack[0] || ""}
            </Fab>
            <Fab size="small" aria-label={selectedStack[1] || ""}>
              {selectedStack[1] || ""}
            </Fab>
            <Fab size="small" aria-label={selectedStack[2] || ""}>
              {selectedStack[2] || ""}
            </Fab>
            <Fab size="small" aria-label={selectedStack[3] || ""}>
              {selectedStack[3] || ""}
            </Fab>
            <Fab size="small" aria-label={selectedStack[4] || ""}>
              {selectedStack[4] || ""}
            </Fab>
            <Fab size="small" aria-label={selectedStack[5] || ""}>
              {selectedStack[5] || ""}
            </Fab>
          </Box>

          <hr></hr>

          <Box>
            {_.range(1, 38).map((item) => (
                <Fab
                  key={item}
                  size="small"
                  aria-label={item}
                  onClick={handleClick}
                  color={selectedStack.includes(item.toString())
                    ? "primary"
                    : "secondary"}
                  style={{ margin: "10px" }}
                >
                  {item}
                </Fab>
              )
            )}
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 50 }}
            onClick={handleResetClick}
          >
            CLEAR ALL
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CustCardPage;
 