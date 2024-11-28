import transport from "../config/transport.ts";
import {CarResponse} from "./libs/CarService.ts";
import {CarServiceClient} from "./libs/CarService.client.ts";

export default async function getAllCars(): Promise<CarResponse[]> {
    const client = new CarServiceClient(transport);
    const call = await client.getAllCars({});

    return call.response.cars;
}