import React, { useState } from "react";
import { Select, MenuItem, InputLabel, Box} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import { SearchIcon } from "@material-ui/icons";
import NavBar from "./NavBar";

function Search() {

    const [open, setOpen] = useState(false);
    const [age, setAge] = useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        <dev>
            <NavBar />
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 250, alignItems: 'center', justifyContent:'center'}}>
            <InputLabel id="demo-controlled-open-select-label" style={{marginRight: 20}}>Type</InputLabel>

            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                style={{marginRight: 20, width: 90}}
                >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>Book</MenuItem>
                <MenuItem value={2}>Movie</MenuItem>
                <MenuItem value={3}>Music</MenuItem>
            </Select>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{width: 400}}
            />          
        </div>
        </dev>
    );
}

export default Search;
