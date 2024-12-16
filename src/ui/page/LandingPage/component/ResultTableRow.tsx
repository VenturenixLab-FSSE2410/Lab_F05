import {Button, TableCell, TableRow} from "@mui/material";
import {Result, VehicleType} from "../../../../data/CarParkInfo.type.ts";

type Props = {
  result: Result,
  vehicleTypeFilter: string
}

export default function ResultTableRow({result, vehicleTypeFilter}: Props) {
  const renderCarkParkImage = () => {
    if (!result.renditionUrls) {
      return <></>
    } else if (result.renditionUrls.square) {
      return (
        <div
          style={{
            backgroundImage: `url(${result.renditionUrls.square})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: 240,
            height: 120
          }}
        >
        </div>
      )
    } else if (result.renditionUrls.carpark_photo) {
      return (
        <div
          style={{
            backgroundImage: `url(${result.renditionUrls.carpark_photo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: 240,
            height: 180
          }}
        >
        </div>
      )
    } else {
      return <></>
    }
  }

  const handleMapBtnOnClick = () => {
    window.open(`https://maps.google.com/maps?q=${result.latitude},${result.longitude}`, "_blank")
  }

  const renderVehicleVacancy = () => {
    if (!(result[vehicleTypeFilter as VehicleType])) {
      return "NA"
    } else {
      return result[vehicleTypeFilter as VehicleType]!.space
    }
  }

  return (
    <>
      <TableRow>
        <TableCell>
          {renderCarkParkImage()}
        </TableCell>
        <TableCell>{result.name}</TableCell>
        <TableCell>{result.displayAddress}</TableCell>
        <TableCell>{renderVehicleVacancy()}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            onClick={handleMapBtnOnClick}
          >
            MAP
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}