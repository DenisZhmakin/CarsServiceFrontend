import transport from "../config/transport.ts";
import {CarStatusTypeServiceClient} from "./libs/CarStatusTypeService.client.ts";
import {CarStatusTypeResponse} from "./libs/CarStatusTypeService.ts";

export default async function getAllCarStatusTypes(): Promise<CarStatusTypeResponse[]> {
    const client = new CarStatusTypeServiceClient(transport);
    const call = await client.getAllCarStatusTypes({});

    return call.response.carStatusTypes
}