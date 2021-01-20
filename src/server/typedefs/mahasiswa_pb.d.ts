// package: student
// file: mahasiswa.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StudentRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): StudentRequest;

    getName(): string;
    setName(value: string): StudentRequest;

    getNpm(): string;
    setNpm(value: string): StudentRequest;

    getBid(): string;
    setBid(value: string): StudentRequest;

    getFak(): string;
    setFak(value: string): StudentRequest;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StudentRequest;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StudentRequest;


    getDateCase(): StudentRequest.DateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StudentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StudentRequest): StudentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StudentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StudentRequest;
    static deserializeBinaryFromReader(message: StudentRequest, reader: jspb.BinaryReader): StudentRequest;
}

export namespace StudentRequest {
    export type AsObject = {
        id: string,
        name: string,
        npm: string,
        bid: string,
        fak: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum DateCase {
        DATE_NOT_SET = 0,
    
    CREATED_AT = 6,

    UPDATED_AT = 7,

    }

}

export class StudentResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): StudentResponse;

    getName(): string;
    setName(value: string): StudentResponse;

    getNpm(): string;
    setNpm(value: string): StudentResponse;

    getBid(): string;
    setBid(value: string): StudentResponse;

    getFak(): string;
    setFak(value: string): StudentResponse;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StudentResponse;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StudentResponse;

    getStatuscode(): string;
    setStatuscode(value: string): StudentResponse;

    getMessage(): string;
    setMessage(value: string): StudentResponse;


    getDateCase(): StudentResponse.DateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StudentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StudentResponse): StudentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StudentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StudentResponse;
    static deserializeBinaryFromReader(message: StudentResponse, reader: jspb.BinaryReader): StudentResponse;
}

export namespace StudentResponse {
    export type AsObject = {
        id: string,
        name: string,
        npm: string,
        bid: string,
        fak: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        statuscode: string,
        message: string,
    }

    export enum DateCase {
        DATE_NOT_SET = 0,
    
    CREATED_AT = 6,

    UPDATED_AT = 7,

    }

}
