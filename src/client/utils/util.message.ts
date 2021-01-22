import { Response } from 'express'
import EventEmitter from 'events'
const event = new EventEmitter()

interface IMessage {
	readonly method: string
	readonly statusCode: number
	readonly message?: string
	readonly errorMessage?: Error
	readonly data?: Record<string, any> | Record<string, any>[]
}

const waitFor = () => new Promise(() => setInterval)

export const grpcMessage = <T extends IMessage>(handler: Response, options: T): void => {
	try {
		const data: IMessage = { ...options }
		event.once(
			'message',
			async (): EventEmitter => {
				handler.status(data.statusCode).json({ ...data })
				await waitFor(2000)
			}
		)
		event.emit('message')
		clearInterval(waitFor)
	} catch (e) {}
}
