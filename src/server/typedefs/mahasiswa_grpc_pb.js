// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mahasiswa_pb = require('./mahasiswa_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_student_StudentRequest(arg) {
  if (!(arg instanceof mahasiswa_pb.StudentRequest)) {
    throw new Error('Expected argument of type student.StudentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_student_StudentRequest(buffer_arg) {
  return mahasiswa_pb.StudentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_student_StudentResponse(arg) {
  if (!(arg instanceof mahasiswa_pb.StudentResponse)) {
    throw new Error('Expected argument of type student.StudentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_student_StudentResponse(buffer_arg) {
  return mahasiswa_pb.StudentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StudentService = exports.StudentService = {
  insertStudent: {
    path: '/student.Student/InsertStudent',
    requestStream: false,
    responseStream: false,
    requestType: mahasiswa_pb.StudentRequest,
    responseType: mahasiswa_pb.StudentResponse,
    requestSerialize: serialize_student_StudentRequest,
    requestDeserialize: deserialize_student_StudentRequest,
    responseSerialize: serialize_student_StudentResponse,
    responseDeserialize: deserialize_student_StudentResponse,
  },
};

exports.StudentClient = grpc.makeGenericClientConstructor(StudentService);
