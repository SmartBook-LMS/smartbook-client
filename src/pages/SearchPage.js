import React, { useState } from "react";
import NavBar from "../components/NavBar";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { GetBookInfo } from "../core/requests";
import { useConstructor } from "../core/constants";
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

const mediaFields = {
  Genre: {
    operators: ["="],
  },
  Title: {
    operators: ["="],
  },
};

const bookFields = {
  Author: {
    operators: ["="],
  },
  ISBN: {
    operators: ["="],
  },
};

const movieFields = {
  Director: {
    operators: ["="],
  },
  Rating: {
    operators: ["="],
  },
};

const musicFields = {
  Artist: {
    operators: ["="],
  },
};
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
      },
    },
    {
      name: "Author",
      label: "Author",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Media.Genre",
      label: "Genre",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "ISBN",
      label: "ISBN",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    selectableRows: false,
    enableNestedDataAccess: ".", // allows nested data separated by "." (see column names and the data structure above)
  };

  const myTheme = createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveScroll: {
          maxHeight: "580px",
        },
      },
    },
  });

  const onSearch = async () => {};

  const [searchTags, setSearchTags] = useState([]);
  const [searchField, setSearchField] = useState("genre");
  const [searchText, setSearchText] = useState("");
  const onSelectSearchField = ({ target: { value } }) => setSearchField(value);
  const onChangeSearchText = ({ target: { value } }) => setSearchText(value);
  const onAddSearchTag = () =>
    setSearchTags([
      ...searchTags,
      { searchField: searchField, value: searchText },
    ]);

  const [mediaType, setMediaType] = useState("all");
  const onSelectMediaType = ({ target: { value } }) => {
    setMediaType(value);
    setSearchField("genre");
    setSearchText("");
    setSearchTags([]);
  };
  return (
    <div>
      <NavBar />
      <Container maxWidth="md">
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Search Catalog</Typography>
          <Box marginBottom={2} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Media Type</InputLabel>
                <Select
                  id="mediaType"
                  value={mediaType}
                  onChange={onSelectMediaType}
                  label="Media Type"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="book">Book</MenuItem>
                  <MenuItem value="movie">Movie</MenuItem>
                  <MenuItem value="music">Music</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box flex={1}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Search Field</InputLabel>
                    <Select
                      id="searchField"
                      value={searchField}
                      onChange={onSelectSearchField}
                      label="Search Field"
                      fullWidth
                    >
                      {Object.keys(mediaFields).map((key, index) => (
                        <MenuItem key={key} value={key.toLowerCase()}>
                          {key}
                        </MenuItem>
                      ))}
                      {mediaType === "book" &&
                        Object.keys(bookFields).map((key, index) => (
                          <MenuItem key={key} value={key.toLowerCase()}>
                            {key}
                          </MenuItem>
                        ))}
                      {mediaType === "movie" &&
                        Object.keys(movieFields).map((key, index) => (
                          <MenuItem key={key} value={key.toLowerCase()}>
                            {key}
                          </MenuItem>
                        ))}
                      {mediaType === "music" &&
                        Object.keys(musicFields).map((key, index) => (
                          <MenuItem key={key} value={key.toLowerCase()}>
                            {key}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box flex={3}>
                  <TextField
                    variant="outlined"
                    onChange={onChangeSearchText}
                    fullWidth
                    placeholder="Field value..."
                    value={searchText}
                  />
                </Box>
                <Box flex={1}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={onAddSearchTag}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid>
              {searchTags.map((tag, index) => (
                <Chip
                  style={{ marginRight: 8, marginBottom: 8 }}
                  key={index}
                  label={`${tag.searchField} = ${tag.value}`}
                  onDelete={() => {
                    console.log(searchTags);
                    searchTags.splice(index, 1);
                    console.log(searchTags);
                    setSearchTags([...searchTags]);
                  }}
                />
              ))}
            </Grid>
            {/* <Grid item xs={6}>
                <FormSelect
                  id="genre"
                  name="genre"
                  label="Genre"
                  control={control}
                  defaultValue={genres[selectMediaType][0]}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                >
                  {genres[selectMediaType].map((genre, index) => (
                    <MenuItem key={index} value={genre}>
                      {genre}
                    </MenuItem>
                  ))}
                </FormSelect>
              </Grid> */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSearch}
            >
              Search Media
            </Button>
          </Grid>
        </Paper>
      </Container>
      {/* <MuiThemeProvider theme={myTheme}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </MuiThemeProvider> */}
    </div>
  );
}

export default SearchPage;
