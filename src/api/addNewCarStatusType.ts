import {CarStatusTypeRequest} from "./libs/CarStatusTypeService.ts";
import {CarStatusTypeServiceClient} from "./libs/CarStatusTypeService.client.ts";
import transport from "../config/transport.ts";

export default async function addNewCarStatusType(request: CarStatusTypeRequest) {
    const client = new CarStatusTypeServiceClient(transport);
    const call = await client.addNewCarStatusType(request);

    return call.response
}