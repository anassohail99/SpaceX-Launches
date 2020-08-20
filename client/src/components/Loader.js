import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => {
  const useStyles = makeStyles({
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <CircularProgress color="secondary" className={classes.spinner} />
    </Fragment>
  );
};

export default Loader;
