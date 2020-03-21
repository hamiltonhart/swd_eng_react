import React from "react";

import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    display: "block",
    margin: "10% auto 0 auto",
    borderRadius: "5px",
    maxWidth: "500px"
  },
  formInput: {
    margin: "10px 0"
  },
  pageHeading: {
    textTransform: "uppercase"
  }
});

export const Error = ({ error }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer} boxShadow={3} p={5}>
      <Typography color="primary" variant="h2" align="center">
        Error
      </Typography>

      <Typography variant="body1">{error.message}</Typography>
    </Box>
  );
};
