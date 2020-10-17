import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { BookOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
  loadingContainer: {
    position: "relative",
  },
  loadingIcon: {
    color: theme.palette.primary.contrastText,
    position: "absolute",
    top: 12,
    left: 12,
  },
  message: {
    color: theme.palette.primary.contrastText,
  },
}));

const LoadingPage = () => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={styles.root}
    >
      <Box className={styles.loadingContainer}>
        <BookOutlined className={styles.loadingIcon} />
        <CircularProgress color="secondary" size={48} />
      </Box>
      <Box m={1} />
      <Typography className={styles.message}>
        Loading your library content...
      </Typography>
    </Box>
  );
};

export default LoadingPage;
