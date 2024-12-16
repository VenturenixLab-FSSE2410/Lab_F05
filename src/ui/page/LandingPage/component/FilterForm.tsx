import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";

type Props = {
  districtFilter: string,
  vehicleTypeFilter: string,
  handleDistrictFilterChange: (newDistrictFilter: string) => void,
  handleVehicleTypeFilterChange: (newVehicleType: string) => void
}

export default function FilterForm({
                                     districtFilter,
                                     vehicleTypeFilter,
                                     handleDistrictFilterChange,
                                     handleVehicleTypeFilterChange
                                   }: Props) {
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
        <TextField
          fullWidth
          id="outlined-basic"
          label="District"
          variant="outlined"
          value={districtFilter}
          onChange={(event) => {
            handleDistrictFilterChange(event.target.value);
          }}
        />

        <FormControl
          fullWidth
          sx={style.formControlStyle}
        >
          <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vehicleTypeFilter}
            label="Vehicle Type"
            onChange={(event) => {
              handleVehicleTypeFilterChange(event.target.value)
            }}
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