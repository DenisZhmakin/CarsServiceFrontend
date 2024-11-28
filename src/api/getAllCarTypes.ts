import transport from "../config/transport.ts";
import {CarTypeServiceClient} from "./libs/CarTypeService.client.ts";
import {CarTypeResponse} from "./libs/CarTypeService.ts";

export default async function getAllCarTypes(): Promise<CarTypeResponse[]> {
    const client = new CarTypeServiceClient(transport);
    const call = await client.getAllCarTypes({});

    return call.response.carTypes
}