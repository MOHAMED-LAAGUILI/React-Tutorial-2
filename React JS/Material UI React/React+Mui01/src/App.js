import React from "react";
import "./styles.css";
import {Button, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function App() {

  return (
    <div>
        <Typography variant="myVariant" > Hello</Typography>
        <br />

      <Button 
      variant="contained"
      size="small"
      color="secondary"
      sx={{
        p: 1.5,
        color: "",
        backgroundColor: "#e2f105",
        fontWeight: "bolder"
        }}  >Outlined</Button>


    </div>
  );
}