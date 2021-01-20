import { Request, Response } from 'express'
import { ServiceError } from '@grpc/grpc-js'
import { grpcClient } from '../../middlewares/middleware.grpc'
import { StudentRequest, StudentResponse } from '../../../server/typedefs/mahasiswa_pb'
import { grpcMessage } from '../../utils/util.message'
import { GrpcError } from '../../utils/util.error'

export const createStudent = (req: Request, res: Response): void => {
	const client = grpcClient()
	const bodyPayload: InstanceType<typeof StudentRequest> = new StudentRequest()
	bodyPayload.setName(req.body.name)
	bodyPayload.setNpm(req.body.npm)
	bodyPayload.setBid(req.body.bid)
	bodyPayload.setFak(req.body.fak)

	client.insertStudent(bodyPayload, (error: ServiceError, response: StudentResponse): void => {
		if (error) {
			grpcMessage(res, {
				statusCode: +response.getStatuscode(),
				message: response.getMessage(),
				errorMessage: new GrpcError({ ...error })
			})
		}

		if (response !== undefined && response.toArray().length > 0) {
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
