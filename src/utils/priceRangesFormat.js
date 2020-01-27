export const formatPriceRange = range => {
  let prices = range.split("-");
  range = `Rs.${prices[0]}${
    range.includes("100,000") ? "" : ` - Rs.${prices[1]}`
  }`;
  return range;
};

const replaceCAndStr = no => {
  return parseInt(no.replace(/\,/g, ""), 10);
};
export const formatRangeForApi = ranges => {
  const priceFilter = [];
  ranges.forEach(element => {
    let prices = element.split("-");
    priceFilter.push(
      prices[1]
        ? [replaceCAndStr(prices[0]), replaceCAndStr(prices[1])]
        : [replaceCAndStr(prices[0])]
    );
  });
  return priceFilter;
};
