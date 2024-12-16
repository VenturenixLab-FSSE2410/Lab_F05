import {Box, CircularProgress} from "@mui/material";

export default function TableLoadingContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
      }}
    >
      <CircularProgress/>
    </Box>
  )
}