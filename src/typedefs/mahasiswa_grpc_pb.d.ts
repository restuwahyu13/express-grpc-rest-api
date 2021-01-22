// package: student
// file: mahasiswa.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as mahasiswa_pb from "./mahasiswa_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IStudentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    insertStudent: IStudentService_IInsertStudent;
    resultsStudent: IStudentService_IResultsStudent;
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
interface IStudentService_IResultsStudent extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, mahasiswa_pb.StudentList> {
    path: "/student.Student/ResultsStudent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<mahasiswa_pb.StudentList>;
    responseDeserialize: grpc.deserialize<mahasiswa_pb.StudentList>;
}

export const StudentService: IStudentService;

export interface IStudentServer extends grpc.UntypedServiceImplementation {
    insertStudent: grpc.handleUnaryCall<mahasiswa_pb.StudentRequest, mahasiswa_pb.StudentResponse>;
    resultsStudent: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, mahasiswa_pb.StudentList>;
}

export interface IStudentClient {
    insertStudent(request: mahasiswa_pb.StudentRequest, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    resultsStudent(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentList) => void): grpc.ClientUnaryCall;
    resultsStudent(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentList) => void): grpc.ClientUnaryCall;
    resultsStudent(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentList) => void): grpc.ClientUnaryCall;
}

export class StudentClient extends grpc.Client implements IStudentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public insertStudent(request: mahasiswa_pb.StudentRequest, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    public insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    public insertStudent(request: mahasiswa_pb.StudentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentResponse) => void): grpc.ClientUnaryCall;
    public resultsStudent(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentList) => void): grpc.ClientUnaryCall;
    public resultsStudent(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentList) => void): grpc.ClientUnaryCall;
    public resultsStudent(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mahasiswa_pb.StudentList) => void): grpc.ClientUnaryCall;
}
