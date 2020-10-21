import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  useTheme,
  TextField,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import NavBar from "../components/NavBar";
import MaterialTable from "material-table";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { GetBookInfo } from "../core/requests";
import { useConstructor } from "../core/constants";

function SearchPage() {
  const [data, setData] = useState([]);

  useConstructor(async () => {
    const bookData = await GetBookInfo();

    // Transform data here

    setData(bookData);
  });

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

  return (
    <dev>
      <NavBar />
      <MaterialTable
        icons={{
          Check: Check,
          DetailPanel: ChevronRight,
          Export: SaveAlt,
          Filter: FilterList,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          Search: Search,
          ThirdStateCheck: Remove,
        }}
        title=""
        columns={[
          { title: "Title", field: "title" },
          { title: "Author", field: "author" },
          { title: "Genres", field: "genres" },
          {
            title: "Type",
            field: "type",
            lookup: { 10: "Movie", 20: "Book", 30: "Music" },
          },
          {
            title: "Checked Out",
            field: "checked",
            lookup: { 10: "IN", 20: "OUT" },
          },
        ]}
        data={[
          {
            title: "Mehmet",
            author: "Baran",
            genres: 1987,
            type: 10,
            checked: 10,
          },
          {
            title: "Zerya Betül",
            author: "Baran",
            genres: 2017,
            type: 20,
            checked: 20,
          },
        ]}
        options={{
          filtering: true,
        }}
      />
    </dev>
  );
}

export default SearchPage;
