import transport from "../config/transport.ts";
import {ListCarTypeResponse} from "./libs/CarTypeService.ts";
import {CarTypeServiceClient} from "./libs/CarTypeService.client.ts";

export default async function getAllCarTypes(): Promise<ListCarTypeResponse> {
    const client = new CarTypeServiceClient(transport);
    const call = await client.getAllCarTypes({});

    return call.response
}