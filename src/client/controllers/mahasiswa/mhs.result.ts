import { Request, Response } from 'express'
import { ServiceError } from '@grpc/grpc-js'
import { grpcClient } from '../../middlewares/middleware.grpc'
import { StudentId, StudentResponse } from '../../../typedefs/mahasiswa_pb'
import { grpcMessage } from '../../utils/util.message'

export const resultStudent = (req: Request, res: Response): void => {
	const client = grpcClient()
	const params = new StudentId()
	params.setId(req.params.id)

	client.resultStudent(params, (error: ServiceError, response: StudentResponse): void => {
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
				message: response.getMessage(),
				data: {
					id: response.getId(),
					name: response.getName(),
					npm: response.getNpm(),
					fak: response.getFak(),
					bid: response.getBid(),
					createdAt: response.getCreatedAt(),
					updatedAt: response.getUpdatedAt()
				}
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
