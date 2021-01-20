// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mahasiswa_pb = require('./mahasiswa_pb.js');

function serialize_mahasiswa_StudentPayload(arg) {
  if (!(arg instanceof mahasiswa_pb.StudentPayload)) {
    throw new Error('Expected argument of type mahasiswa.StudentPayload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mahasiswa_StudentPayload(buffer_arg) {
  return mahasiswa_pb.StudentPayload.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "google/protobuf/empty.proto";
//
var StudentService = exports.StudentService = {
  insertStudent: {
    path: '/mahasiswa.Student/InsertStudent',
    requestStream: false,
    responseStream: false,
    requestType: mahasiswa_pb.StudentPayload,
    responseType: mahasiswa_pb.StudentPayload,
    requestSerialize: serialize_mahasiswa_StudentPayload,
    requestDeserialize: deserialize_mahasiswa_StudentPayload,
    responseSerialize: serialize_mahasiswa_StudentPayload,
    responseDeserialize: deserialize_mahasiswa_StudentPayload,
  },
};

exports.StudentClient = grpc.makeGenericClientConstructor(StudentService);
