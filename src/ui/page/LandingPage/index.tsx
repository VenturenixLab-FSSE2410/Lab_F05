import TopNavBar from "../../../component/TopNavBar.tsx";
import FilterForm from "./component/FilterForm.tsx";
import {Container} from "@mui/material";
import ResultTable from "./component/ResultTable.tsx";
import {useEffect, useState} from "react";
import {CarkParkInfoDto} from "../../../data/CarParkInfo.type.ts";
import mockData from "./response.json";

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

  useEffect(() => {
    setInfoDto(mockData);
    setIsLoading(false);
  }, []);

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
          !isLoading && infoDto &&
          <ResultTable
            infoDto={infoDto}
            districtFilter={districtFilter}
            vehicleTypeFilter={vehicleTypeFilter}
          />
        }
      </Container>
    </>
  )
}