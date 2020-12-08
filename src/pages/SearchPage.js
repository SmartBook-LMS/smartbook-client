import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";

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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { GetBooks, GetMovies, GetMusic } from "../core/requests";
import { BagContext, useConstructor } from "../core/constants";

// const data = [
//   { title: "Test", genre: " Test", description: "Test", isbn: "1233" },
//   { title: "Test2", genre: " Test2", description: "Test2" },
//   { title: "Test3", genre: " Test3", description: "Test3" },
// ];

const mediaFields = ["Title", "Genre", "Description"];

const bookFields = ["Author", "ISBN"];

const movieFields = ["Director", "Rating"];

const musicFields = ["Artist"];

function SearchPage() {
  const { addItem } = useContext(BagContext);

  const [searchResults, setSearchResults] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [searchField, setSearchField] = useState("Title");
  const [searchText, setSearchText] = useState("");
  const onSelectSearchField = ({ target: { value } }) => setSearchField(value);
  const onChangeSearchText = ({ target: { value } }) => setSearchText(value);
  const onAddSearchTag = () => {
    if (searchText === "") return;
    if (
      searchTags.some(
        (tag) => tag.searchField === searchField && searchText === tag.value
      )
    )
      return;
    setSearchTags([...searchTags, { searchField, value: searchText }]);
  };

  const [mediaType, setMediaType] = useState("all");
  const onSelectMediaType = ({ target: { value } }) => {
    setMediaType(value);
    setSearchField("Title");
    setSearchText("");
    setSearchTags([]);
  };

  const onSearchMedia = async () => {
    const tags = {};
    searchTags.forEach(
      (item) => (tags[item.searchField.toLowerCase()] = item.value)
    );

    if (mediaType === "book") {
      const books = (await GetBooks(tags)).map((item) => ({
        ...item,
        ...item.Media,
      }));
      setSearchResults(books);
    } else if (mediaType === "music") {
      const music = (await GetMusic(tags)).map((item) => ({
        ...item,
        ...item.Media,
      }));
      setSearchResults(music);
    } else if (mediaType === "movie") {
      const movies = (await GetMovies(tags)).map((item) => ({
        ...item,
        ...item.Media,
      }));
      setSearchResults(movies);
    } else {
      const books = (await GetBooks(tags)).map((item) => ({
        ...item,
        ...item.Media,
      }));

      const music = (await GetMusic(tags)).map((item) => ({
        ...item,
        ...item.Media,
      }));

      const movies = (await GetMovies(tags)).map((item) => ({
        ...item,
        ...item.Media,
      }));

      const mediaList = [...books, ...music, ...movies];
      setSearchResults(mediaList);
    }
  };

  useConstructor(async () => {
    const books = (await GetBooks()).map((item) => ({
      ...item,
      ...item.Media,
    }));

    const music = (await GetMusic()).map((item) => ({
      ...item,
      ...item.Media,
    }));

    const movies = (await GetMovies()).map((item) => ({
      ...item,
      ...item.Media,
    }));

    const media = [...books, ...music, ...movies];

    setSearchResults(media);
  });

  let fields = mediaFields;
  if (mediaType === "book") fields = [...fields, ...bookFields];
  if (mediaType === "movie") fields = [...fields, ...movieFields];
  if (mediaType === "music") fields = [...fields, ...musicFields];

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
                      {fields.map((field) => (
                        <MenuItem key={field} value={field}>
                          {field}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box flex={3} padding={1}>
                  <TextField
                    variant="outlined"
                    onChange={onChangeSearchText}
                    fullWidth
                    placeholder="Field value..."
                    value={searchText}
                  />
                </Box>
                <Box flex={1} padding={1}>
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
                  label={`${tag.searchField} = "${tag.value}"`}
                  onDelete={() => {
                    searchTags.splice(index, 1);
                    setSearchTags([...searchTags]);
                  }}
                />
              ))}
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSearchMedia}
            >
              Search Media
            </Button>
          </Grid>
        </Paper>
      </Container>
      <Container maxWidth="md">
        <TableContainer component={Paper} style={{ margin: 0, padding: 32 }}>
          <Typography variant="h6">Search Results</Typography>
          <Table>
            <TableHead>
              <TableRow>
                {mediaType === "all" && <TableCell>Type</TableCell>}
                {fields.map((field) => (
                  <TableCell key={field}>{field}</TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((row) => (
                <TableRow key={row.ID}>
                  {mediaType === "all" && (
                    <TableCell>{row.Media_Type}</TableCell>
                  )}
                  {fields.map((field) => (
                    <TableCell key={field} scope="row">
                      {row[field]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button onClick={() => addItem(row)}>ADD</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default SearchPage;
