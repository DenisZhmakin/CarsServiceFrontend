import transport from "../config/transport.ts";
import {CarTypeRequest, CarTypeResponse} from "./libs/CarTypeService.ts";
import {CarTypeServiceClient} from "./libs/CarTypeService.client.ts";

export default async function addNewCarType(request: CarTypeRequest): Promise<CarTypeResponse> {
    const client = new CarTypeServiceClient(transport);
    const call = await client.addNewCarType(request);

    return call.response
}