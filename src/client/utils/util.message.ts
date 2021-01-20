import { Response } from 'express'
import EventEmitter from 'events'
import { StudentPayload } from '../../server/typedefs/mahasiswa_pb'
const event = new EventEmitter()

interface IMessage {
	readonly method: string
	readonly statusCode: number
	readonly message?: string
	readonly errorMessage?: Error
	readonly data?: StudentPayload.AsObject | StudentPayload.AsObject[]
}

export const grpcMessage = <T extends IMessage>(handler: Response, options: T): void => {
	try {
		const data: IMessage = { ...options }
		event.once('message', (): EventEmitter => handler.status(data.statusCode).json({ ...data }))
		event.emit('message')
	} catch (e) {}
}
