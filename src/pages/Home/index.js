import React from "react";
import axios from "axios";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";

const HomePage = (props) => {
  const [catFacts, setCatFacts] = useState([]); 
  const [currentFactIndex, setCurrentFactIndex] = useState(0);                                                
  const handleNextFact = () => {
    if (currentFactIndex < catFacts.length - 1) {
      setCurrentFactIndex(currentFactIndex + 1);
    } else {
      axios.get("https://catfact.ninja/fact")
        .then(response => {
          setCatFacts([...catFacts, response.data.fact]);
          setCurrentFactIndex(currentFactIndex + 1);
        })
        .catch(error => console.log(error));
    }
  };
  

  const handlePrevFact = () => {
    if (currentFactIndex > 0) {
      setCurrentFactIndex(currentFactIndex - 1);
    }
    console.log('previous');
  };
  
  return (
    <Box>
      {/* <AppBar component={"nav"} sx={{bgcolor:"black"}}>
      <Toolbar>
      <Typography>
       <LocalHospitalIcon/>
      Zocdoc
    </Typography>
      </Toolbar>
    </AppBar> */}
      <Card sx={{ minWidth: 275 }}>
        <h1>Random Cat Fact</h1>
        <p>{catFacts[currentFactIndex]}</p>
        
      </Card>
      <CardActions>
      <Button onClick={handlePrevFact}>Previous</Button>
      <Button onClick={handleNextFact}>Next</Button>
      </CardActions>
    </Box>
  );
};

export default HomePage;






// explain for the below code
//catFacts empty Array currentfactindex-index(0) 
// const catfacts,currentfactindex,->use state hook
// const  setcurrentfactindex ->0









// import React from 'react';
// import Layout from "../../components/Layout/Layout";
// const HomePage = () => {
//   return (
//     <Layout>
//     krupali
//   </Layout>
//   )
// }

// export default HomePage;