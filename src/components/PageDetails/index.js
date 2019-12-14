import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
export const PageDetails = ({
  title = "Title",
  description = "Description"
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
