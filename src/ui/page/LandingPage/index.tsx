import TopNavBar from "../../../component/TopNavBar.tsx";
import FilterForm from "./component/FilterForm.tsx";
import {Container} from "@mui/material";
import ResultTable from "./component/ResultTable.tsx";
import {useEffect, useState} from "react";
import {CarkParkInfoDto} from "../../../data/CarParkInfo.type.ts";
import * as carkParkInfoApi from "../../../api/carParkInfoApi.ts";
import TableLoadingContainer from "./component/TableLoadingContainer.tsx";

export default function LandingPage() {
  const [infoDto, setInfoDto] = useState<CarkParkInfoDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [districtFilter, setDistrictFilter] = useState<string>("");
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState<string>("privateCar");

  const handleDistrictFilterChange = (newDistrictFilter: string) => {
    setDistrictFilter(newDistrictFilter);
  }

  const handleVehicleTypeFilterChange = (newVehicleType: string) => {
    setVehicleTypeFilter(newVehicleType);
  }

  const fetchCarParkInfo = async () => {
    try {
      const responseData = await carkParkInfoApi.getCarParkInfo()
      setInfoDto(responseData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const debounce = setTimeout(() => {
      fetchCarParkInfo();
    }, 1000);

    return () => {
      clearTimeout(debounce);
    }
  }, [districtFilter]);

  return (
    <>
      <TopNavBar/>
      <Container>
        <FilterForm
          districtFilter={districtFilter}
          handleDistrictFilterChange={handleDistrictFilterChange}
          vehicleTypeFilter={vehicleTypeFilter}
          handleVehicleTypeFilterChange={handleVehicleTypeFilterChange}
        />
        {
          (!isLoading && infoDto)
            ? (
              <ResultTable
                infoDto={infoDto}
                districtFilter={districtFilter}
                vehicleTypeFilter={vehicleTypeFilter}
              />
            ) : (
              <TableLoadingContainer/>
            )
        }
      </Container>
    </>
  )
}