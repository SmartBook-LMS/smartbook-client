import React, { useContext } from "react";
import {
  Button,
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
import { Controller, useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import { AuthContext } from "../core/constants";
import { CreateMedia } from "../core/requests";

const FormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label}>
            {children}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

const ratings = ["G", "PG", "PG-13", "R"];

const genres = {
  book: [
    "Action",
    "Horror",
    "Fantasy",
    "Thriller",
    "Sci-Fi",
    "Historical Fiction",
    "Romantic Comedy",
    "Mystery",
    "Western",
  ],
  movie: [
    "Action",
    "Horror",
    "Fantasy",
    "Thriller",
    "Sci-Fi",
    "Historical Fiction",
    "Romantic Comedy",
    "Mystery",
    "Western",
  ],
  music: ["Classical", "Jazz", "Rock", "Rap", "Pop"],
};

const formErrors = {
  title: "Title cannot be empty",
  description: "Description cannot be empty",
  copies: "Copies must be greater than 0",
  author: "Author cannot be emtpy",
  ISBN: "ISBN must be valid",
  director: "Director cannot be emtpy",
  artist: "Artist cannot be empty",
};

const ManageCatalogPage = () => {
  // Setup form
  const {
    control,
    errors,
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm();

  // Watch for changes in media type to update form rendering
  const selectMediaType = watch("mediaType", "book");
  if (selectMediaType === "music") {
    setValue("genre", genres[selectMediaType][0]);
  }

  // Create a call to get the form values
  const { authToken } = useContext(AuthContext);
  const onSubmit = async (formData) => {
    formData.copies = parseInt(formData.copies);
    await CreateMedia(authToken, formData);
    reset();
    setValue("genre", genres["book"][0]);
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="md">
        <Paper style={{ margin: 32, padding: 32 }}>
          <Typography variant="h6">Add New Media</Typography>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <FormSelect
                  id="mediaType"
                  name="mediaType"
                  label="Media Type"
                  control={control}
                  defaultValue={selectMediaType}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                >
                  <MenuItem value="book">Book</MenuItem>
                  <MenuItem value="movie">Movie</MenuItem>
                  <MenuItem value="music">Music</MenuItem>
                </FormSelect>
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  error={errors.title != null}
                  helperText={errors.title ? formErrors.title : ""}
                  inputRef={register({ required: true, minLength: 1 })}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  error={errors.description != null}
                  helperText={errors.description ? formErrors.description : ""}
                  inputRef={register({ required: true, minLength: 1 })}
                />
              </Grid>
              {selectMediaType === "book" && (
                <>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="author"
                      label="Author"
                      id="author"
                      error={errors.author != null}
                      helperText={errors.author ? formErrors.author : ""}
                      inputRef={register({ required: true, minLength: 1 })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="ISBN"
                      label="ISBN"
                      name="ISBN"
                      error={errors.ISBN != null}
                      helperText={errors.ISBN ? formErrors.ISBN : ""}
                      inputRef={register({ required: true, minLength: 1 })}
                    />
                  </Grid>
                </>
              )}
              {selectMediaType === "movie" && (
                <>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="director"
                      label="Director"
                      id="director"
                      error={errors.director != null}
                      helperText={errors.director ? formErrors.director : ""}
                      inputRef={register({ required: true, minLength: 1 })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormSelect
                      id="rating"
                      name="rating"
                      label="Rating"
                      control={control}
                      defaultValue={ratings[0]}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                    >
                      {ratings.map((rating, index) => (
                        <MenuItem key={index} value={rating}>
                          {rating}
                        </MenuItem>
                      ))}
                    </FormSelect>
                  </Grid>
                </>
              )}
              {selectMediaType === "music" && (
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="artist"
                    label="Artist"
                    id="artist"
                    error={errors.artist != null}
                    helperText={errors.artist ? formErrors.artist : ""}
                    inputRef={register({ required: true, minLength: 1 })}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="copies"
                  label="Number of Copies"
                  id="copies"
                  type="number"
                  error={errors.copies != null}
                  helperText={errors.copies ? formErrors.copies : ""}
                  inputRef={register({ required: true, min: 1, max: 99 })}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Add Media
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ManageCatalogPage;
