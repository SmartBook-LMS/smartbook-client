import React, { useState } from "react";
import { Select, MenuItem, InputLabel, useTheme, TextField } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import NavBar from "../components/NavBar";


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { GetBookInfo } from "../core/requests";

function SearchPage() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [q, setQ] = useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const theme = useTheme();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const list = [
    {
      'id': 1,
      'title': '1st Item',
      'description': 'Description here.'
    },
    {
      'id': 2,
      'title': '2nd Item',
      'description': 'Another description here.'
    },
    {
      'id': 3,
      'title': '3rd Item',
      'description': 'Third description here.'
    }
  ];

  const search = (list) => {
    return list.filter(list => list.title.toLowerCase().indexOf(q) > -1)
  }


  return (
    <dev>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 100,
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
          value={select}
          onChange={handleChange}
          style={{ marginRight: 20, width: 90 }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>Book</MenuItem>
          <MenuItem value={2}>Movie</MenuItem>
          <MenuItem value={3}>Music</MenuItem>
        </Select>
        <SearchBar style={{ width: 400 }}>
            <TextField 
              type="text"   
              value={q}        
              onChange={(e) => setQ(e.title.value)}
              onRequestSearch={() => console.log("onRequestSearch")}
            />
        </SearchBar>
      </div>
      <div style={theme.searchpaper}>
        <Table className={theme.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Author</StyledTableCell>
              <StyledTableCell align="right">Media Type</StyledTableCell>
              <StyledTableCell align="right">Genres</StyledTableCell>
              <StyledTableCell align="right">ISBN</StyledTableCell>
              <StyledTableCell align="right">Checked Out</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search(list).map((list) => (
              <StyledTableRow key={list.title}>
                <StyledTableCell component="th" scope="row">
                  {list.title}
                </StyledTableCell>
                <StyledTableCell align="right">{list.id}</StyledTableCell>
                <StyledTableCell align="right">{list.id}</StyledTableCell>
                <StyledTableCell align="right">{list.id}</StyledTableCell>
                <StyledTableCell align="right">{list.id}</StyledTableCell>
                <StyledTableCell align="right">{list.id}</StyledTableCell>
              </StyledTableRow>
            ))}
            </TableBody>
        </Table>
      </div>
    </dev>
  );
}

export default SearchPage;
