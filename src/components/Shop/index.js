import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tab from "@material-ui/core/Tab";
import { TabPanel, a11yProps } from "../../common/TabPanel";
import { useStyles } from "./styles";
import ProductShopCard from "../../common/ProductShopCard";
const Shop = ({
  category,
  getCategories,
  getProductsBySearch,
  product,
  errors,
  loading
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const handleChange = (event, newValue) => {
    getProductsBySearch({ category: newValue });
    setValue(newValue);
  };
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <Container maxWidth="lg" className={classes.container}>
      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={3}>
          <div className={classes.root}>
            <Grid item md={2} lg={2}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                {category.categories.map(cat => (
                  <Tab
                    key={cat._id}
                    value={cat._id}
                    // onClick={() => handleCatProducts(cat._id)}
                    label={cat.name}
                    {...a11yProps(cat._id)}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid item md={10} lg={10}>
              <TabPanel value={value} index={value}>
                {product.productsByCategories.map(
                  ({ _id, name, photo, description, price }) => (
                    <ProductShopCard
                      key={_id}
                      name={name}
                      price={price}
                      photo={photo}
                      description={description}
                    />
                  )
                )}
              </TabPanel>
            </Grid>
          </div>
        </Grid>
      )}
    </Container>
  );
};

export default Shop;
