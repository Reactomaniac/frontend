import React from 'react';
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import MoreDetails from "./MoreDetails";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "940px",
    margin: "10px auto"
  },
  paper: {
    padding: theme.spacing(1.7),
    margin: "auto",
    maxWidth: "auto"
  },
  button: {
    textTransform: "capitalize",
    color: "#1b5e20"
  },
  chip: {
    borderRadius: "4px",
    padding: "5px 0px 5px 0px",
    height: "auto"
  },
  primary: {
    background: "#2e7d32",
    color: "white"
  },
  secondary: {
    background: "#f9a825",
    color: "black"
  },
  leftBorder: {
    borderLeft: "1px solid lightgrey"
  }
}));

export default function FlightDetails(props) {
  let handleMoreDetailsUpdate  = props.handleMoreDetailsUpdate;
  let handleMoreDetailsDelete  = props.handleMoreDetailsDelete;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={10}>
          <Grid item>
            <b>{moment(props.scheduledArrival).format("HH:mm")}</b>
          </Grid>
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs align="left" className={classes.leftBorder}>
                <Typography gutterBottom variant="subtitle1">
                  <b>{props.sourcePortName}</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.flightCode} {props.flightProvider}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Chip
                className={classes.chip + " " + (props.status === "DELAYED" ? classes.secondary : classes.primary)}
                label={props.status}
              />
            </Grid>
          </Grid>
          <Grid item xs={5} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs align="left" className={classes.leftBorder} m={1}>
                <Typography gutterBottom variant="subtitle1">
                  {props.destinationPortName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <MoreDetails
                id={props.id}
                flightCode={props.flightCode}
                flightProvider={props.flightProvider}
                sourcePortName={props.sourcePortName}
                sourcePortCode={props.sourcePortCode}
                destinationPortName={props.destinationPortName}
                destinationPortCode={props.destinationPortCode}
                scheduledArrival={props.scheduledArrival}
                scheduledDeparture={props.scheduledDeparture}
                status={props.status}
                handleMoreDetailsUpdate={handleMoreDetailsUpdate}
                handleMoreDetailsDelete={handleMoreDetailsDelete}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
