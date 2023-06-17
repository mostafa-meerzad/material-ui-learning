import React from "react";

//Container is the most basic layout element, centers elements horizontally

// Grid is a layout element that serves similar to css-grid, grid component it self is the grid-container and the grid-item
import { Container, Grid } from "@mui/material";
import Card from "./components/Card";

import "./App.css";
import PrimarySearchAppBar from "./components/AppBar";
function App() {
  return (
    <>
        <PrimarySearchAppBar/>

    </>
  );
}

export default App;
