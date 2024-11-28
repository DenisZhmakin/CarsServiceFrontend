import transport from "../config/transport.ts";
import {CarRequest, CarResponse} from "./libs/CarService.ts";
import {CarServiceClient} from "./libs/CarService.client.ts";

export default async function addNewCar(request: CarRequest): Promise<CarResponse> {
    const client = new CarServiceClient(transport);
    const call = await client.addNewCar(request);

    return call.response
}