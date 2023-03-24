import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CircularProgress, SwipeableDrawer } from "@mui/material";

const Header = (props) => {
  const [catFacts, setCatFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => {
        setCatFacts([response.data.fact]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleNextFact = () => {
    if (currentFactIndex < catFacts.length - 1) {
      setCurrentFactIndex(currentFactIndex + 1);
    } else {
      setIsLoading(true);
      axios
        .get("https://catfact.ninja/fact")
        .then((response) => {
          setCatFacts([...catFacts, response.data.fact]);
          setCurrentFactIndex(currentFactIndex + 1);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  };

  const handlePrevFact = useCallback(() => {
    if (currentFactIndex > 0) {
      setCurrentFactIndex(prev => prev -1);
    }
  },[currentFactIndex]);

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
        <CardContent>
          <Typography variant="h5" component="div">
            Random Cat Fact
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Typography variant="body2">{catFacts[currentFactIndex]}</Typography>
          )}
        </CardContent>
      </Card>
      <CardActions>
        <Button onClick={handlePrevFact} disabled={isLoading || currentFactIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNextFact} disabled={isLoading}>
          Next
        </Button>
      </CardActions>
    </Box>
  );
};

export default Header;
