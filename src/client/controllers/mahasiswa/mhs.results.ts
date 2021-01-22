import { Request, Response } from 'express'
import { ServiceError } from '@grpc/grpc-js'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { grpcClient } from '../../middlewares/middleware.grpc'
import { StudentList } from '../../../typedefs/mahasiswa_pb'
import { grpcMessage } from '../../utils/util.message'

export const resultsStudent = (req: Request, res: Response): void => {
	const client = grpcClient()

	client.resultsStudent(new Empty(), (error: ServiceError, response: StudentList): void => {
		if (error) {
			grpcMessage(res, {
				method: req.method,
				statusCode: +response.getStatuscode(),
				message: response.getMessage()
			})
		}

		if (response !== undefined && response.toArray().length > 0) {
			grpcMessage(res, {
				method: req.method,
				statusCode: +response.getStatuscode(),
				message: response.getMessage(),
				data: response.toObject().studentsList
			})
		} else {
			grpcMessage(res, {
				method: req.method,
				statusCode: +response.getStatuscode(),
				message: response.getMessage()
			})
		}
	})
}
