import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";

export default function FilterForm() {
  const style = {
    paperStyle: {
      p: 3,
      my: 3,
    },
    formControlStyle: {
      mt: 2
    }
  }


  return (
    <>
      <Paper
        component="form"
        sx={style.paperStyle}
      >
        <TextField fullWidth id="outlined-basic" label="District" variant="outlined"/>

        <FormControl
          fullWidth
          sx={style.formControlStyle}
        >
          <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="privateCar"
            label="Vehicle Type"
            // onChange={handleChange}
          >
            <MenuItem value="privateCar">Private Car</MenuItem>
            <MenuItem value="LGV">LGV</MenuItem>
            <MenuItem value="HGV">HGV</MenuItem>
            <MenuItem value="coach">coach</MenuItem>
            <MenuItem value="motorCycle">motorcycle</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </>
  );
}