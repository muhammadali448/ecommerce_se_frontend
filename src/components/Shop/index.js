import React, { useEffect, useState, Fragment } from "react";
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
import Pagination from "../../common/Pagination";
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
  const [myFilters, setMyFilters] = useState({});
  const [value, setValue] = useState(false);
  const [checked, setChecked] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage, setProductsPerPage] = useState(10);
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  const handleChange = (event, newValue) => {
    getProductsBySearch({ category: newValue });
    getProductsPriceRanges(newValue);
    setMyFilters({ category: newValue });
    setValue(newValue);
    setChecked([]);
  };

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    setChecked(filters);
    if (filterBy === "price") {
      const price = formatRangeForApi(filters);
      newFilters[filterBy] = price;
    }
    setMyFilters(newFilters);
    getProductsBySearch(newFilters);
  };
  // let currentProducts = [];
  // if (product.productsByCategories.currentPage) {
  //   console.log("--clicked");
  //   const indexOfLastProduct =
  //     product.productsByCategories.currentPage * productsPerPage; // 10
  //   const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0
  //   currentProducts = product.productsByCategories.filterProducts.slice(
  //     indexOfFirstProduct,
  //     indexOfLastProduct
  //   ); // 0 - 10
  // }
  console.log("--newFilters: ", myFilters);
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
                  checked={checked}
                  category={value}
                  productsPriceRanges={product.productsPriceRanges}
                  handleFilters={(filters, filterBy) =>
                    handleFilters(filters, filterBy)
                  }
                />
              )}
            </Grid>
            <Grid item md={9} lg={9}>
              <TabPanel value={value} index={value}>
                {value && (
                  <Fragment>
                    {product.productsByCategories.currentPage && (
                      <Pagination
                        pages={product.productsByCategories.pages}
                        paginate={pageNo =>
                          getProductsBySearch(myFilters, pageNo)
                        }
                      />
                    )}
                    {product.productsByCategories.filterProducts &&
                      product.productsByCategories.filterProducts.map(
                        ({
                          _id,
                          name,
                          photo,
                          description,
                          price,
                          quantity
                        }) => (
                          <ProductShopCard
                            key={_id}
                            name={name}
                            price={price}
                            quantity={quantity}
                            photo={photo}
                            description={description}
                          />
                        )
                      )}
                  </Fragment>
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
