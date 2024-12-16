import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ResultTableRow from "./ResultTableRow.tsx";
import {CarkParkInfoDto} from "../../../../data/CarParkInfo.type.ts";

type Props = {
  infoDto: CarkParkInfoDto,
  districtFilter: string,
  vehicleTypeFilter: string
}

export default function ResultTable({infoDto, districtFilter, vehicleTypeFilter}: Props) {
  const renderVehicleVacancyHead = () => {
    if (vehicleTypeFilter === "privateCar") {
      return "Total Vacancy"
    } else if (vehicleTypeFilter === "LGV") {
      return "LGV"
    } else if (vehicleTypeFilter === "HGV") {
      return "HGV"
    } else if (vehicleTypeFilter === "coach") {
      return "Coach"
    } else {
      return "Motor Cycle"
    }
  }


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>{renderVehicleVacancyHead()}</TableCell>
              <TableCell>Google Map</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              infoDto.results
                .filter((result) => (
                  result.district.toLowerCase().includes(districtFilter.toLowerCase())
                ))
                .map((result) => (
                  <ResultTableRow key={result.park_Id} result={result} vehicleTypeFilter={vehicleTypeFilter}/>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}