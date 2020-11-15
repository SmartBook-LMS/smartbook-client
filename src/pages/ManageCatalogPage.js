import React, { useContext } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import { AuthContext } from "../core/constants";
import { CreateMedia } from "../core/requests";

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  onSelect,
  children,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label} onSelect={onSelect}>
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
const genres = [
  "Action",
  "Horror",
  "Fantasy",
  "Thriller",
  "Sci-Fi",
  "Historical Fiction",
  "Romantic Comedy",
  "Mystery",
  "Western",
  "Classical",
  "Jazz",
  "Rock",
  "Rap",
  "Pop",
];

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
  const { authToken } = useContext(AuthContext);
  const { register, handleSubmit, control, watch, errors } = useForm();
  console.log(errors);
  const onSubmit = async (formData) => {
    console.log(formData);
  };
  const selectMediaType = watch("mediaType", "book");
  console.log(selectMediaType);
  const mediaData = {
    mediaType: "book",
    title: "New Book",
    genre: "Action",
    description: "Just a new book",
    author: "Daniel",
    ISBN: "1234",
  };
  return (
    <div>
      <NavBar />
      <Button
        onClick={async () => {
          await CreateMedia(authToken, mediaData);
        }}
      >
        Submit
      </Button>
      <Container maxWidth="sm">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ReactHookFormSelect
                id="mediaType"
                name="mediaType"
                label="Media Type"
                control={control}
                defaultValue="book"
                onSelect={(val) => console.log(val)}
                variant="outlined"
                margin="normal"
                fullWidth
              >
                <MenuItem value="book">Book</MenuItem>
                <MenuItem value="movie">Movie</MenuItem>
                <MenuItem value="music">Music</MenuItem>
              </ReactHookFormSelect>
            </Grid>
            <Grid item xs={6}>
              <ReactHookFormSelect
                id="genre"
                name="genre"
                label="Genre"
                control={control}
                defaultValue="Action"
                variant="outlined"
                margin="normal"
                fullWidth
              >
                {genres.map((genre, index) => (
                  <MenuItem key={index} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </ReactHookFormSelect>
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
                autoFocus
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
                    autoFocus
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
                  <ReactHookFormSelect
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
                  </ReactHookFormSelect>
                </Grid>
              </>
            )}
            {selectMediaType === "music" && (
              <>
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
              </>
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
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default ManageCatalogPage;
