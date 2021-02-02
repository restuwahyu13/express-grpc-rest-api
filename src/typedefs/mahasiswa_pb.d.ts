// package: student
// file: mahasiswa.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'

export class StudentRequest extends jspb.Message {
	getId(): string
	setId(value: string): StudentRequest

	getName(): string
	setName(value: string): StudentRequest

	getNpm(): string
	setNpm(value: string): StudentRequest

	getBid(): string
	setBid(value: string): StudentRequest

	getFak(): string
	setFak(value: string): StudentRequest

	getCreatedAt(): string
	setCreatedAt(value: string): StudentRequest

	getUpdatedAt(): string
	setUpdatedAt(value: string): StudentRequest

	serializeBinary(): Uint8Array
	toObject(includeInstance?: boolean): StudentRequest.AsObject
	static toObject(includeInstance: boolean, msg: StudentRequest): StudentRequest.AsObject
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
	static serializeBinaryToWriter(message: StudentRequest, writer: jspb.BinaryWriter): void
	static deserializeBinary(bytes: Uint8Array): StudentRequest
	static deserializeBinaryFromReader(message: StudentRequest, reader: jspb.BinaryReader): StudentRequest
}

export namespace StudentRequest {
	export type AsObject = {
		id: string
		name: string
		npm: string
		bid: string
		fak: string
		createdAt: string
		updatedAt: string
	}
}

export class StudentResponse extends jspb.Message {
	getId(): string
	setId(value: string): StudentResponse

	getName(): string
	setName(value: string): StudentResponse

	getNpm(): string
	setNpm(value: string): StudentResponse

	getBid(): string
	setBid(value: string): StudentResponse

	getFak(): string
	setFak(value: string): StudentResponse

	getCreatedAt(): string
	setCreatedAt(value: string): StudentResponse

	getUpdatedAt(): string
	setUpdatedAt(value: string): StudentResponse

	getStatuscode(): number
	setStatuscode(value: number): StudentResponse

	getMessage(): string
	setMessage(value: string): StudentResponse

	serializeBinary(): Uint8Array
	toObject(includeInstance?: boolean): StudentResponse.AsObject
	static toObject(includeInstance: boolean, msg: StudentResponse): StudentResponse.AsObject
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
	static serializeBinaryToWriter(message: StudentResponse, writer: jspb.BinaryWriter): void
	static deserializeBinary(bytes: Uint8Array): StudentResponse
	static deserializeBinaryFromReader(message: StudentResponse, reader: jspb.BinaryReader): StudentResponse
}

export namespace StudentResponse {
	export type AsObject = {
		id: string
		name: string
		npm: string
		bid: string
		fak: string
		createdAt: string
		updatedAt: string
		statuscode: number
		message: string
	}
}

export class StudentList extends jspb.Message {
	clearStudentsList(): void
	getStudentsList(): Array<StudentRequest>
	setStudentsList(value: Array<StudentRequest>): StudentList
	addStudents(value?: StudentRequest, index?: number): StudentRequest

	getStatuscode(): number
	setStatuscode(value: number): StudentList

	getMessage(): string
	setMessage(value: string): StudentList

	serializeBinary(): Uint8Array
	toObject(includeInstance?: boolean): StudentList.AsObject
	static toObject(includeInstance: boolean, msg: StudentList): StudentList.AsObject
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
	static serializeBinaryToWriter(message: StudentList, writer: jspb.BinaryWriter): void
	static deserializeBinary(bytes: Uint8Array): StudentList
	static deserializeBinaryFromReader(message: StudentList, reader: jspb.BinaryReader): StudentList
}

export namespace StudentList {
	export type AsObject = {
		studentsList: Array<StudentRequest.AsObject>
		statuscode: number
		message: string
	}
}

export class StudentId extends jspb.Message {
	getId(): string
	setId(value: string): StudentId

	serializeBinary(): Uint8Array
	toObject(includeInstance?: boolean): StudentId.AsObject
	static toObject(includeInstance: boolean, msg: StudentId): StudentId.AsObject
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
	static serializeBinaryToWriter(message: StudentId, writer: jspb.BinaryWriter): void
	static deserializeBinary(bytes: Uint8Array): StudentId
	static deserializeBinaryFromReader(message: StudentId, reader: jspb.BinaryReader): StudentId
}

export namespace StudentId {
	export type AsObject = {
		id: string
	}
}
