import transport from "../config/transport.ts";
import {CarStatusEventsCarIdRequest, CarStatusEventsResponse} from "./libs/CarStatusEventsService.ts";
import {CarStatusEventsServiceClient} from "./libs/CarStatusEventsService.client.ts";

export default async function getAllCarStatusEventsByCarId(request: CarStatusEventsCarIdRequest): Promise<CarStatusEventsResponse[]> {
    const client = new CarStatusEventsServiceClient(transport);
    const call = await client.getAllCarStatusEventsByCarID(request);

    return call.response.statuses;
}