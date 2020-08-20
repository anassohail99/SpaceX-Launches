import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, Box } from "@material-ui/core";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: "#2c2c2d",
      color: "#757475",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    box: {},
    missionName: {
      color: "#757475",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root} variant="outlined">
        <Box className={classes.box}>
          <CardContent>
            <Typography variant="h5" className={classes.missionName}>
              Mission:{" "}
              <span style={{ color: launch_success ? "green" : "red" }}>
                {mission_name}
              </span>
            </Typography>
            <Typography variant="p">
              Date:{" "}
              <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
            </Typography>

            <Typography variant="body2"></Typography>
          </CardContent>
        </Box>
        <CardActions style={{ marginRight: 10 }}>
          <Link
            to={`/launch/${flight_number}`}
            size="large"
            style={{ color: "#757475" }}
          >
            Launch Details
          </Link>
        </CardActions>
      </Card>
      <br />
    </Fragment>
  );
};

export default LaunchItem;
