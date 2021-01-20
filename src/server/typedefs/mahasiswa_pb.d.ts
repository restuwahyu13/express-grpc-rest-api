// package: mahasiswa
// file: mahasiswa.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf'

export class StudentPayload extends jspb.Message {
	getId(): string
	setId(value: string): StudentPayload

	getName(): string
	setName(value: string): StudentPayload

	getNpm(): number
	setNpm(value: number): StudentPayload

	getBid(): string
	setBid(value: string): StudentPayload

	getFak(): string
	setFak(value: string): StudentPayload

	serializeBinary(): Uint8Array
	toObject(includeInstance?: boolean): StudentPayload.AsObject
	static toObject(includeInstance: boolean, msg: StudentPayload): StudentPayload.AsObject
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
	static serializeBinaryToWriter(message: StudentPayload, writer: jspb.BinaryWriter): void
	static deserializeBinary(bytes: Uint8Array): StudentPayload
	static deserializeBinaryFromReader(message: StudentPayload, reader: jspb.BinaryReader): StudentPayload
}

export namespace StudentPayload {
	export type AsObject = {
		id: string
		name: string
		npm: number
		bid: string
		fak: string
	}
}
