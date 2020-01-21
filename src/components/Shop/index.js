import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tab from "@material-ui/core/Tab";
import { TabPanel, a11yProps } from "../../common/TabPanel";
import { useStyles } from "./styles";
import ProductShopCard from "../../common/ProductShopCard";
import PricesRange from "../../common/PricesRange";
import { formatRangeForApi } from "../../utils/priceRangesFormat";
const Shop = ({
  category,
  getCategories,
  getProductsBySearch,
  getProductsPriceRanges,
  product,
  errors,
  loading
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const handleChange = (event, newValue) => {
    getProductsBySearch({ category: newValue }, 'category');
    getProductsPriceRanges(newValue);
    setValue(newValue);
  };

  const handleFilters = (filters, filterBy) => {
    if (filterBy === "price") {
      const priceFilter = formatRangeForApi(filters);
      getProductsBySearch({ category: value, price: priceFilter });
    }
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
            <Grid item md={3} lg={3}>
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
                    label={cat.name}
                    {...a11yProps(cat._id)}
                  />
                ))}
              </Tabs>
              {value && (
                <PricesRange
                  productsPriceRanges={product.productsPriceRanges}
                  handleFilters={(filters, filterBy) =>
                    handleFilters(filters, filterBy)
                  }
                />
              )}
            </Grid>
            <Grid item md={9} lg={9}>
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
