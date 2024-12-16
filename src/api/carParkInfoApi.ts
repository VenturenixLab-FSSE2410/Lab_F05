import axios from "axios";
import {CarkParkInfoDto} from "../data/CarParkInfo.type.ts";

export async function getCarParkInfo() {
  const response = await axios.get<CarkParkInfoDto>("https://api.data.gov.hk/v1/carpark-info-vacancy");
  return response.data;
}