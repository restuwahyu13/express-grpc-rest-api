import { ServerUnaryCall as UnaryCall, sendUnaryData as UnaryData } from '@grpc/grpc-js'
import { IStudentServer } from '../typedefs/mahasiswa_grpc_pb'
import { StudentPayload as Payload } from '../typedefs/mahasiswa_pb'

export const StudentSeviceImplementation: IStudentServer = {
	insertStudent: (call: UnaryCall<Payload, Payload>, callback: UnaryData<Payload>): void => {
		if (call.request.toArray().length < 1) {
			const error = new Error()
			error.message = 'payload is not exist'
			callback(error, null)
			return
		}
		callback(null, call.request)
	}
}
