import { Request, Response } from 'express'
import { ServiceError } from '@grpc/grpc-js'
import { grpcClient } from '../../middlewares/middleware.grpc'
import { StudentId, StudentResponse } from '../../../typedefs/mahasiswa_pb'
import { grpcMessage } from '../../utils/util.message'

export const deleteStudent = (req: Request, res: Response): void => {
	const client = grpcClient()
	const params = new StudentId()
	params.setId(req.params.id)

	client.deleteStudent(params, (error: ServiceError, response: StudentResponse): void => {
		if (error) {
			grpcMessage(res, {
				method: req.method,
				statusCode: +response.getStatuscode(),
				message: response.getMessage()
			})
		}

		if (response !== undefined && response.getId() !== '') {
			grpcMessage(res, {
				method: req.method,
				statusCode: +response.getStatuscode(),
				message: response.getMessage()
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
