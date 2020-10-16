import { Box, CircularProgress, useTheme } from "@material-ui/core";
import React from "react";

const LoadingScreen = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default LoadingScreen;
