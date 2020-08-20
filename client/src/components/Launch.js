import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = (props) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      //   backgroundColor: "#2c2c2d",
      color: "#757475",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "space-between",
      marginTop: 50,
    },
    box: {},
    missionName: {
      color: "#757475",
      margin: "30px 0",
    },
    heading: {
      color: "#757475",
      margin: "10px 0",
    },
    top: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  const classes = useStyles();

  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  return (
    <Fragment>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);
          console.log(data);
          const {
            mission_name,
            flight_number,
            launch_success,
            launch_year,
            rocket: { rocket_id, rocket_name, rocket_type },
          } = data.launch;
          return (
            <Fragment>
              <Box className={classes.root}>
                <Box className={classes.top}>
                  <Typography variant="h2" className={classes.missionName}>
                    Mission:{" "}
                    <span style={{ color: "#fff" }}>{mission_name}</span>
                  </Typography>

                  <Link to="/" className="btn btn-secondary">
                    Back
                  </Link>
                </Box>
                <Typography variant="h4" className={classes.heading}>
                  Launch Details
                </Typography>
                <Typography variant="h5">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Flight Number : {rocket_id}
                    </li>
                    <li className="list-group-item">
                      Launch Year : {launch_year}
                    </li>
                    <li className="list-group-item">
                      Launch Success :{" "}
                      <span
                        style={{
                          color: launch_success ? "green" : "red",
                        }}
                      >
                        {launch_success ? "Yes" : "No"}
                      </span>
                    </li>
                  </ul>
                </Typography>

                <Typography variant="h4" className={classes.heading}>
                  Rocket Details
                </Typography>
                <Typography variant="h5">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rocket ID : {flight_number}
                    </li>
                    <li className="list-group-item">
                      Rocket Name : {rocket_name}
                    </li>
                    <li className="list-group-item">
                      Rocket Type : {rocket_type}
                    </li>
                  </ul>
                </Typography>
              </Box>
              <br />
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Launch;
