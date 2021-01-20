// package: student
// file: mahasiswa.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as mahasiswa_pb from "./mahasiswa_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IStudentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    insertStudent: IStudentService_IInsertStudent;
}

interface IStudentService_IInsertStudent extends grpc.MethodDefinition<mahasiswa_pb.StudentRequest, mahasiswa_pb.StudentResponse> {
    path: "/student.Student/InsertStudent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mahasiswa_pb.StudentRequest>;
    requestDeserialize: grpc.deserialize<mahasiswa_pb.StudentRequest>;
    responseSerialize: grpc.serialize<mahasiswa_pb.StudentResponse>;
    responseDeserialize: grpc.deserialize<mahasiswa_pb.StudentResponse>;
}

export const StudentService: IStudentService;

export interface IStudentServer extends grpc.UntypedServiceImplementation {
    insertStudent: grpc.handleUnaryCall<mahasiswa_pb.StudentRequest, mahasiswa_pb.StudentResponse>;
}

export interface IStudentClient {
    insertStudent(request: mahasiswa_pb.StudentRequest, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
}

export class StudentClient extends grpc.Client implements IStudentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public insertStudent(request: mahasiswa_pb.StudentRequest, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    public insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    public insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
}
