import React, { useEffect } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import { formatPriceRange } from "../../utils/priceRangesFormat";

export default function PricesRange({
  productsPriceRanges,
  handleFilters,
  category,
  checked
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  // const [checked, setChecked] = React.useState([]);

  // useEffect(() => {
  //   console.log("--hit")
  //   setChecked([]);
  // }, [category]);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleToggle = r => () => {
    const currentPriceRange = checked.indexOf(r);
    const newPriceRange = [...checked];
    if (currentPriceRange === -1) {
      newPriceRange.push(r);
    } else {
      newPriceRange.splice(currentPriceRange, 1);
    }
    // setChecked(newPriceRange);
    handleFilters(newPriceRange, "price");
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ backgroundColor: "#E7E7E7" }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="body1" className={classes.heading}>
            Price Range
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup>
            {productsPriceRanges.map((r, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checked.indexOf(r.range) !== -1}
                    onChange={handleToggle(r.range)}
                    value={checked.indexOf(r.range) === -1}
                    color="primary"
                  />
                }
                label={`${formatPriceRange(r.range)} (${r.count})`}
              />
            ))}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
