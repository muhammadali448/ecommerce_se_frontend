import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";

export default function PricesRange({ prices }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const [checked, setChecked] = React.useState(false);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleCheckbox = event => {
    setChecked(event.target.checked);
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
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckbox}
                value={checked}
                color="primary"
              />
            }
            label="Rs.30,000 - Rs.39,999 (1)"
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
