// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "CarTypeService.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { CarTypeService } from "./CarTypeService";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CarTypeResponse } from "./CarTypeService";
import type { CarTypeRequest } from "./CarTypeService";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service CarTypeService
 */
export interface ICarTypeServiceClient {
    /**
     * @generated from protobuf rpc: AddNewCarType(CarTypeRequest) returns (CarTypeResponse);
     */
    addNewCarType(input: CarTypeRequest, options?: RpcOptions): UnaryCall<CarTypeRequest, CarTypeResponse>;
}
/**
 * @generated from protobuf service CarTypeService
 */
export class CarTypeServiceClient implements ICarTypeServiceClient, ServiceInfo {
    typeName = CarTypeService.typeName;
    methods = CarTypeService.methods;
    options = CarTypeService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: AddNewCarType(CarTypeRequest) returns (CarTypeResponse);
     */
    addNewCarType(input: CarTypeRequest, options?: RpcOptions): UnaryCall<CarTypeRequest, CarTypeResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CarTypeRequest, CarTypeResponse>("unary", this._transport, method, opt, input);
    }
}