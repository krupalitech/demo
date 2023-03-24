// import React, { useState, useEffect } from 'react';
// //import { makeStyles } from '@mui/styles';
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardActions,
//   IconButton,
//   Fab,
//   Button,
//   Box,
// } from '@mui/material';
// import {
//   Shuffle as ShuffleIcon,
//   Delete as DeleteIcon,
// } from '@mui/icons-material';

// // const useStyles = makeStyles(() => ({
// //   fabGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(11, 1fr)',
// //     gridGap: '8px',
// //   },
// // }));

// const Ticket = () => {
//   //const classes = useStyles();
//   const [count, setCount] = useState(
//     parseInt(localStorage.getItem('count')) || 0
//   );

//   const handleReset = () => {
//     // TODO: implement handleReset function
//   };

//   const deleteCount = () => {
//     // TODO: implement deleteCount function
//   };

//   useEffect(() => {
//     localStorage.setItem('count', count);
//   }, [count]);

//   const fabButtons = Array.from(Array(34).keys()).map((i) => (
//     <Fab key={i} variant="extended" size="small">
//       {i + 1}
//     </Fab>
//   ));

//   return (
//     <Card>
//       <CardHeader
//         title="TICKET 1"
//         action={
//           <>
//             <IconButton onClick={handleReset}>
//               <ShuffleIcon />
//             </IconButton>
//             <IconButton onClick={deleteCount}>
//               <DeleteIcon />
//             </IconButton>
//           </>
//         }
//       />
//       <CardContent>
//         <Box>{fabButtons}</Box>
//       </CardContent>
//       <CardActions>
//         <Button variant="contained" onClick={() => setCount(count + 1)}>
//           Add 1
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Ticket;



// import { useState } from 'react';

// let nextId = 0;

// export default function Ticket() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
     
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
//export default Ticket;



// import React, { useState } from 'react';
// import Button from "@mui/material/Button";
// function Ticket() {
//   const [clickValue, setClickValue] = useState('');

//   const handleClick = (event) => {
//     setClickValue(event.target.innerText);
//   };

//   return (
//     <div>
//       <Button onClick={handleClick} variant="contained" color="primary">
//         Click me!
//       </Button>
//       <p>Clicked value: {clickValue}</p>
//     </div>
//   );
// }
// export default Ticket;


// import React, { useState } from 'react';

// function Ticket() {
//   const [myArray, setMyArray] = useState([]);

//   function handleClick() {
//     const newElement = 'hello';
//     setMyArray([...myArray, newElement]);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Add Element</button>
//       <ul>
//         {myArray.map((element, index) => (
//           <li key={index}>{element}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Ticket;


