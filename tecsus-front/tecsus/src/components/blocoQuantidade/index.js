import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 230,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function CardQtd({ info, quantidade }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.card}>
        <Typography variant="h5">{info}</Typography>
        <Typography variant="h8" component="h2">
          {quantidade}
        </Typography>
      </CardContent>
    </Card>
  );
}
