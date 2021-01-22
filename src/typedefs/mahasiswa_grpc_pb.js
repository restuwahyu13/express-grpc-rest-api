// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mahasiswa_pb = require('./mahasiswa_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_student_StudentId(arg) {
  if (!(arg instanceof mahasiswa_pb.StudentId)) {
    throw new Error('Expected argument of type student.StudentId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_student_StudentId(buffer_arg) {
  return mahasiswa_pb.StudentId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_student_StudentList(arg) {
  if (!(arg instanceof mahasiswa_pb.StudentList)) {
    throw new Error('Expected argument of type student.StudentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_student_StudentList(buffer_arg) {
  return mahasiswa_pb.StudentList.deserializeBinary(new Uint8Array(buffer_arg));
}

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
  resultsStudent: {
    path: '/student.Student/ResultsStudent',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mahasiswa_pb.StudentList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_student_StudentList,
    responseDeserialize: deserialize_student_StudentList,
  },
  resultStudent: {
    path: '/student.Student/ResultStudent',
    requestStream: false,
    responseStream: false,
    requestType: mahasiswa_pb.StudentId,
    responseType: mahasiswa_pb.StudentResponse,
    requestSerialize: serialize_student_StudentId,
    requestDeserialize: deserialize_student_StudentId,
    responseSerialize: serialize_student_StudentResponse,
    responseDeserialize: deserialize_student_StudentResponse,
  },
};

exports.StudentClient = grpc.makeGenericClientConstructor(StudentService);
