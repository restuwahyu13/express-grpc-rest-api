import { Response } from 'express'
import EventEmitter from 'events'
import { StudentPayload } from '../../server/typedefs/mahasiswa_pb'

interface IMessage {
	readonly method: string
	readonly statusCode: number
	readonly message?: string
	readonly errorMessage?: Error
	readonly data?: StudentPayload
}

export const grpcMessage = <T extends IMessage>(handler: Response, options: T): void => {
	try {
		const event = new EventEmitter()
		const data: IMessage = { ...options }
		event.on('message', (): EventEmitter => handler.status(data.statusCode).json({ ...data }))
		event.emit('message')
	} catch (err) {
		return new Error(err)
	}
}
