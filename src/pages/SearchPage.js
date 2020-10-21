import React, { useState } from "react";
import NavBar from "../components/NavBar";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { GetBookInfo } from "../core/requests";
import { useConstructor } from "../core/constants";

function SearchPage() {
  const [data, setData] = useState([]);

  useConstructor(async () => {
    const bookData = await GetBookInfo();
    setData(bookData);
  });

  const columns = [
    {
     name: "Media.Title",
     label: "Title",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Author",
     label: "Author",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Media.Genre",
     label: "Genre",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "ISBN",
     label: "ISBN",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    selectableRows: false,
    enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
  };

  const myTheme = createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveScroll: {
          maxHeight: "580px"
          // overflowY: 'scroll',
        }
      }
    }
  });

  return (
    <dev>
      <NavBar />
      <MuiThemeProvider theme={myTheme}>
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </dev>
  );
}

export default SearchPage;
