import React, { useEffect, Fragment } from "react";
import ProductShopCard from "../../common/ProductShopCard";
import Container from "@material-ui/core/Container";
import ProductCard from "../../common/ProductCard";
import useStyles from "./styles";

export default function ViewProduct({
  productId,
  product,
  getProduct,
  getRelatedProducts
}) {
  const classes = useStyles();
  useEffect(() => {
    getProduct(productId);
    getRelatedProducts(productId);
  }, [getProduct, getRelatedProducts, productId]);
  return (
    <Container maxWidth="lg" className={classes.mt}>
      {product.product._id ? (
        <Fragment>
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
          {product.relatedProducts.length > 0 ? (
            <Fragment>
              <div className={classes.heading}>
                <h2>Related Products</h2>
              </div>
              <div style={{ display: "flex", flex: 1 }}>
                {product.relatedProducts.map(product => (
                  <div style={{ flex: 0.2 }} key={product._id}>
                    <ProductCard viewProduct={true} product={product} />
                  </div>
                ))}
              </div>
            </Fragment>
          ) : null}
        </Fragment>
      ) : (
        <div></div>
      )}
    </Container>
  );
}
