import React, { useState } from "react";
import { Select, MenuItem, InputLabel, Box } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function HomePage() {
  const [type, setType] = useState(1);
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <NavBar />
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InputLabel
          id="demo-controlled-open-select-label"
          style={{ marginRight: 20 }}
        >
          Type
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          label="Type"
          onChange={handleChange}
          defaultValue={{ label: "Select type", value: 1 }}
          style={{ marginRight: 20, width: 90 }}
        >
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={2}>Book</MenuItem>
          <MenuItem value={3}>Movie</MenuItem>
          <MenuItem value={4}>Music</MenuItem>
        </Select>

        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{ width: 400 }}
        />
      </div>
    </Box>
  );
}

export default HomePage;

/**
 * Making another page for search
 * 
import React, { useState } from "react";
import { Select, MenuItem, InputLabel, Box, Button} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Header from './Header';



function Home() {
   

    return (
        <Box>
        <NavBar />
        <Header />
        <Link to="/Search" style={{ textDecoration: 'none' }}><Button variant="h6" style={{ color: "black" }}><p>Search</p></Button></Link>
        </Box>      
    );
}

export default Home;
 */