import { Request, Response } from 'express'
import { ServiceError } from '@grpc/grpc-js'
import { grpcClient } from '../../middlewares/middleware.grpc'
import { StudentPayload } from '../../../server/typedefs/mahasiswa_pb'
import { grpcMessage } from '../../utils/util.message'

export const createStudent = (req: Request, res: Response): void => {
	const client = grpcClient()
	const bodyPayload: InstanceType<typeof StudentPayload> = new StudentPayload()
	bodyPayload.setId(req.body.id)
	bodyPayload.setName(req.body.name)
	bodyPayload.setBid(req.body.bid)
	bodyPayload.setFak(req.body.fak)

	client.insertStudent(bodyPayload, (error: ServiceError, response: StudentPayload): void => {
		if (error) {
			grpcMessage(res, {
				method: req.method,
				statusCode: res.statusCode,
				message: `GrpcErrors: ${error}`
			})
		}

		if (response.toArray().length > 0) {
			grpcMessage(res, {
				method: req.method,
				statusCode: res.statusCode,
				message: 'student already exist'
			})
		}

		grpcMessage(res, {
			method: req.method,
			statusCode: res.statusCode,
			message: 'add student successfully',
			data: response.toObject()
		})
	})
}
