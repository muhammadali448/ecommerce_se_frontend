import React, { useEffect } from "react";
import ProductShopCard from "../../common/ProductShopCard";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";

export default function ViewProduct({ productId, product, getProduct }) {
  const classes = useStyles();
  useEffect(() => {
    getProduct(productId);
  }, [getProduct, productId]);
  return (
    <Container maxWidth="lg" className={classes.mt}>
      {product.product._id ? (
        <ProductShopCard
          name={product.product.name}
          description={product.product.description}
          photo={product.product.photo}
          price={product.product.price}
          category={product.product.category.name}
          quantity={product.product.quantity}
          createdAt={product.product.createdAt}
          viewProduct={true}
        />
      ) : (
        <div></div>
      )}
    </Container>
  );
}
