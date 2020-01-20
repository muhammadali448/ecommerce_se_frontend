import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function ProductShopCard({ photo, name, description, price }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={photo.url} title={name} />
      <CardContent className={classes.details}>
        <Typography gutterBottom variant="body1" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="p">
          Rs: {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
