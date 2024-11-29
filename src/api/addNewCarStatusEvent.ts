import transport from "../config/transport.ts";
import {CarStatusEventsRequest, CarStatusEventsResponse} from "./libs/CarStatusEventsService.ts";
import {CarStatusEventsServiceClient} from "./libs/CarStatusEventsService.client.ts";

export default async function addNewCarStatusEvent(request: CarStatusEventsRequest): Promise<CarStatusEventsResponse>{
    const client = new CarStatusEventsServiceClient(transport);
    const call = await client.addNewCarStatusEvents(request);

    return call.response
}