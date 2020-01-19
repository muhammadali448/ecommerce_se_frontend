import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { BASE_URL } from "../../store/actions/admin";
export default function ProductCard({ name, description, price, photo }) {
  const classes = useStyles();
  console.log("--photo: ", photo);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo.url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" color="primary">
            {name.split("").slice(0, 46)}...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description.split("").slice(0, 60)}
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            Rs: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Product
        </Button>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
