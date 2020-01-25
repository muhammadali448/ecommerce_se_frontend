import React, { useState } from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SubtractIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { updateItem, removeItem } from "../../helpers/cart";
import useStyles from "./styles";
import "./input.css";

export default function ProductCartView({
  product,
  removeFromCart,
  setRun = f => f, // default value of function
  run = undefined
}) {
  const [count, setCount] = useState(product.count);
  const classes = useStyles();

  const handleAddCount = () => {
    setRun(!run);
    setCount(count + 1);
    updateItem(count + 1, product._id);
  };

  const handleSubtractCount = () => {
    setRun(!run);
    setCount(count - 1);
    updateItem(count - 1, product._id);
  };

  const handleRemove = () => {
    removeItem(product._id)
    setRun(!run);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={product.photo.url}
        title={product.name}
      />
      <CardContent className={classes.details}>
        <div className={classes.main}>
          <Typography variant="body1" color="primary">
            <Link className={classes.name} to={`/view-product/${product._id}`}>
              {product.name}
            </Link>
          </Typography>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <Input
              id="filled-adornment-password"
              className="number"
              disabled
              type="number"
              value={count < 1 ? 1 : count}
              startAdornment={
                <InputAdornment position="start" onClick={handleAddCount}>
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end" onClick={handleSubtractCount}>
                  <IconButton
                    disabled={count === 1}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SubtractIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            color="secondary"
            onClick={handleRemove}
            className={classes.remove}
          >
            Remove
          </Button>
        </div>

        <div className={classes.price}>
          <Typography variant="body1" align="right" color="secondary">
            Rs.{product.price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
