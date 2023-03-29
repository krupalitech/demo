// import React from 'react'

// const DemoTest = () => {
//   return (
//     <>
    
//     </>
//   )
// }

// export default DemoTest;


import React, { useState } from "react";
import _ from "lodash";

const  DemoTest = () => {
  const [myArray, setMyArray] = useState([1, 2, 3, 4, 5]);

  const shuffleArray = () => {
    setMyArray(_.shuffle(myArray));
  };

  return (
    <div>
      <button onClick={shuffleArray}>Shuffle Array</button>
      <ul>
        {myArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default  DemoTest;


// import React, { useState } from "react";
// import _ from "lodash";

// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import ShuffleIcon from "@mui/icons-material/Shuffle";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
// import DeleteIcon from "@mui/icons-material/Delete";

// const CustCardPage = () => {
//   const [selectedStack, setSelectedStack] = useState([]);
//   const [selectedNumbers, setSelectedNumbers] = useState(_.range(1, 38));

//   const handleShuffle = () => {
//     setSelectedNumbers(_.shuffle(_.range(1, 38)));
//   };

//   const addNumToStack = (newNum) => {
//     if (!selectedStack.includes(newNum)) {
//       setSelectedStack((prev) => [...prev, newNum]);
//     } else {
//       setSelectedStack((prev) => prev.filter((i) => i !== newNum));
//     }
//   };

//   const handleClick = (e) => {
//     setClickValue(e.target.innerText);
//     addNumToStack(e.target.innerText);
//   };

//   const handleResetClick = (e) => {
//     setSelectedStack([]);
//   };

//   return (
//     <>
//       <Card sx={{ maxWidth: 445 }}>
//         <CardHeader
//           action={
//             <>
//               <IconButton>
//                 <ShuffleIcon onClick={handleShuffle} />
//               </IconButton>
//               <IconButton>
//                 <DeleteIcon />
//               </IconButton>
//             </>
//           }
//           title="TICKET 1"
//         />

//         <CardContent>
//           <Box sx={{ "& > :not(style)": { m: 1 } }}>
//             {selectedStack.map((num) => (
//               <Fab size="small" key={num} aria-label={num}>
//                 {num}
//               </Fab>
//             ))}
//           </Box>

//           <hr />

//           <Box>
//             {selectedNumbers.map((item) => (
//               <Fab
//                 key={item}
//                 size="small"
//                 aria-label={item}
//                 onClick={() => addNumToStack(item)}
//                 color={selectedStack.includes(item) ? "primary" : "secondary"}
//                 style={{ margin: "10px" }}
//               >
//                 {item}
//               </Fab>
//             ))}
//           </Box>
//         </CardContent>
//         <CardActions disableSpacing>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ borderRadius: 50 }}
//             onClick={handleResetClick}
//           >
//             CLEAR ALL
//           </Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// };

// export default CustCardPage;


