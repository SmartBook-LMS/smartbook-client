import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

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

const data = [
  { title: "Test", genre: " Test", description: "Test", isbn: "1233" },
  { title: "Test2", genre: " Test2", description: "Test2" },
  { title: "Test3", genre: " Test3", description: "Test3" },
];

const mediaFields = ["Title", "Genre", "Description"];

const bookFields = ["Author", "ISBN"];

const movieFields = ["Director", "Rating"];

const musicFields = ["Artist"];

function SearchPage() {
  const [searchResults, setSearchResults] = useState(data);
  const [origData, setOrigData] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [musicList, setMusicList] = useState([]);

  const getData = async () => {
    const mediaList = [];
    const responseBook = await axios.get("http://127.0.0.1:8000/get-books/");
    const booklist = responseBook.data.map((x) => {
      const y = { ...x, ...x.Media };
      delete y.Media;
      return y;
    });
    setBookList(booklist);
    booklist.map((x) => {
      mediaList.push(x);
      return mediaList;
    });

    const responseMusic = await axios.get("http://127.0.0.1:8000/get-music/");
    let musiclist = responseMusic.data.map((x) => {
      const y = { ...x, ...x.Media };
      delete y.Media;
      return y;
    });
    setMusicList(musiclist);
    musiclist.map((x) => {
      mediaList.push(x);
      return mediaList;
    });

    const responseMovie = await axios.get("http://127.0.0.1:8000/get-movies/");
    let movielist = responseMovie.data.map((x) => {
      const y = { ...x, ...x.Media };
      delete y.Media;
      return y;
    });
    setMovieList(movielist);
    movielist.map((x) => {
      mediaList.push(x);
      return mediaList;
    });

    const checkouts = []

    const getCheckouts = await axios.get("http://127.0.0.1:8000/get-checkoutList/");
    getCheckouts.data.checkoutList.map((x) => {
      checkouts.push(x.mediaID[0]);
      return checkouts;
    })

    const finalCheckouts = [];
    mediaList.map((x) => {
      if (!checkouts.includes(x.ID)) {
        finalCheckouts.push(x);
      }
    })

    setSearchResults(finalCheckouts);
    setOrigData(finalCheckouts);
    setListFilter(finalCheckouts);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = async () => {
    const result = [];
    const regex = RegExp(searchText, "i");

    //No Search Tag
    if (searchTags.length == 0) {
      if (searchField === "Title") {
        listFilter
          .filter((obj) => regex.test(obj.Title))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "Genre") {
        listFilter
          .filter((obj) => regex.test(obj.Genre))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "Description") {
        listFilter
          .filter((obj) => regex.test(obj.Description))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "Author") {
        listFilter
          .filter((obj) => regex.test(obj.Author))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "ISBN") {
        listFilter
          .filter((obj) => regex.test(obj.ISBN))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "Director") {
        listFilter
          .filter((obj) => regex.test(obj.Director))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "Rating") {
        listFilter
          .filter((obj) => regex.test(obj.Rating))
          .map((x) => {
            result.push(x);
            return result;
          });
      } else if (searchField === "Artist") {
        listFilter
          .filter((obj) => regex.test(obj.Artist))
          .map((x) => {
            result.push(x);
            return result;
          });
      }
      setSearchResults(result);
    }
    //Search Tag exists
    else {
      const filterResult = [];
      listFilter.map((x) => {
        filterResult.push(x);
        return filterResult;
      });
      for (let i = 0; i < searchTags.length; i++) {
        const regex = RegExp(searchTags[i].value, "i");
        const field = searchTags[i].searchField;
        const result = [];

        if (field === "Title") {
          filterResult
            .filter((obj) => regex.test(obj.Title))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "Genre") {
          filterResult
            .filter((obj) => regex.test(obj.Genre))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "Description") {
          filterResult
            .filter((obj) => regex.test(obj.Description))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "Author") {
          filterResult
            .filter((obj) => regex.test(obj.Author))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "ISBN") {
          filterResult
            .filter((obj) => regex.test(obj.ISBN))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "Director") {
          filterResult
            .filter((obj) => regex.test(obj.Director))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "Rating") {
          filterResult
            .filter((obj) => regex.test(obj.Rating))
            .map((x) => {
              result.push(x);
              return result;
            });
        } else if (field === "Artist") {
          filterResult
            .filter((obj) => regex.test(obj.Artist))
            .map((x) => {
              result.push(x);
              return result;
            });
        }
        filterResult.splice(0, filterResult.length);
        result.map((x) => {
          filterResult.push(x);
          return filterResult;
        });
        setSearchResults(filterResult);
      }
    }
    setListFilter(origData);
  };

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
    if (value === "book") {
      setSearchResults(bookList);
      setListFilter(bookList);
    } else if (value === "movie") {
      setSearchResults(movieList);
      setListFilter(movieList);
    } else if (value === "music") {
      setSearchResults(musicList);
      setListFilter(musicList);
    } else {
      setSearchResults(origData);
      setListFilter(origData);
    }
    setMediaType(value);
    setSearchField("Title");
    setSearchText("");
    setSearchTags([]);
  };

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
              onClick={onSearch}
            >
              Search Media
            </Button>
          </Grid>
        </Paper>
      </Container>
      <Container maxWidth="md">
        <TableContainer component={Paper} style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Search Results</Typography>
          <Table>
            <TableHead>
              <TableRow>
                {fields.map((field) => (
                  <TableCell key={field}>{field}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((row) => (
                <TableRow key={row.name}>
                  {fields.map((field) => (
                    <TableCell scope="row">{row[field]} </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {/* <MuiThemeProvider theme={myTheme}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </MuiThemeProvider> */}
    </div>
  );
}

export default SearchPage;
