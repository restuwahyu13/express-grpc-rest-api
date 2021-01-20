// package: mahasiswa
// file: mahasiswa.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as mahasiswa_pb from "./mahasiswa_pb";

interface IStudentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    insertStudent: IStudentService_IInsertStudent;
}

interface IStudentService_IInsertStudent extends grpc.MethodDefinition<mahasiswa_pb.StudentPayload, mahasiswa_pb.StudentPayload> {
    path: "/mahasiswa.Student/InsertStudent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mahasiswa_pb.StudentPayload>;
    requestDeserialize: grpc.deserialize<mahasiswa_pb.StudentPayload>;
    responseSerialize: grpc.serialize<mahasiswa_pb.StudentPayload>;
    responseDeserialize: grpc.deserialize<mahasiswa_pb.StudentPayload>;
}

export const StudentService: IStudentService;

export interface IStudentServer extends grpc.UntypedServiceImplementation {
    insertStudent: grpc.handleUnaryCall<mahasiswa_pb.StudentPayload, mahasiswa_pb.StudentPayload>;
}

export interface IStudentClient {
    insertStudent(request: mahasiswa_pb.StudentPayload, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentPayload) => void): grpc.ClientUnaryCall;
    insertStudent(request: mahasiswa_pb.StudentPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentPayload) => void): grpc.ClientUnaryCall;
    insertStudent(request: mahasiswa_pb.StudentPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentPayload) => void): grpc.ClientUnaryCall;
}

export class StudentClient extends grpc.Client implements IStudentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public insertStudent(request: mahasiswa_pb.StudentPayload, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentPayload) => void): grpc.ClientUnaryCall;
    public insertStudent(request: mahasiswa_pb.StudentPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentPayload) => void): grpc.ClientUnaryCall;
    public insertStudent(request: mahasiswa_pb.StudentPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentPayload) => void): grpc.ClientUnaryCall;
}
