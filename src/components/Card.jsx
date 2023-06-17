import React, { useState } from "react";
import Paper from "@mui/material/Paper";
// Box component serves as a container for most of UI components, all properties are available through 'sx' prop
import Box from "@mui/material/Box";
import { Grid, Typography, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

function Card() {
  const [rate, setRate] = useState();
  return (
    <>
      <Grid item xs={6} sm={4} md={3} xl={2}>
        <Paper elevation={10}>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />

          <Box paddingLeft={1} sx={{ display: "flex", alignItems: "center" }}>
            {/* <AccessTime sx={{width:12.5}}/> */}
            <Typography variant="body2">My Card</Typography>
          </Box>
          <Box paddingLeft={0.5}>
            <Rating
              value={2}
              precision={0.5}
              onChange={(event, ratingValue) => {
                setRate(ratingValue);
              }}
            ></Rating>
          </Box>
        </Paper>
      </Grid>
    </>
    // </Box>
  );
}

export default Card;
