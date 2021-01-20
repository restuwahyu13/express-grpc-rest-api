import { Request, Response } from 'express'
import { ServiceError } from '@grpc/grpc-js'
import { grpcClient } from '../../middlewares/middleware.grpc'
import { StudentPayload } from '../../../server/typedefs/mahasiswa_pb'

export const createStudent = (req: Request, res: Response): Response<any> => {
	const client = grpcClient()
	const bodyPayload: InstanceType<typeof StudentPayload> = new StudentPayload()
	bodyPayload.setId(req.body.id)
	bodyPayload.setName(req.body.name)
	bodyPayload.setBid(req.body.bid)
	bodyPayload.setFak(req.body.fak)

	client.insertStudent(bodyPayload, (error: ServiceError, response: StudentPayload): void => {
		if (error) {
			return res.status(500).json({
				method: req.method,
				status: res.statusCode,
				message: 'Internal Server Error',
				error: error
			})
		}

		if (response.toArray().length > 0) {
			return res.status(401).json({
				method: req.method,
				status: res.statusCode,
				message: 'student already exist'
			})
		}

		return res.status(201).json({
			method: req.method,
			status: res.statusCode,
			message: 'add student successfully',
			data: response.toObject()
		})
	})
}
