import {GrpcWebFetchTransport} from "@protobuf-ts/grpcweb-transport";

const transport = new GrpcWebFetchTransport({
    baseUrl: "http://127.0.0.1:8080/",
});

export default transport;