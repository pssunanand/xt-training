import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Slider from "@mui/material/Slider";

export default function InputSlider(props) {
  const [value, setValue] = React.useState(props.value | 10);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.setValue(newValue);
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 10}
            onChange={handleSliderChange}
            min={props.min}
            max={props.max}
            tabIndex={1}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
