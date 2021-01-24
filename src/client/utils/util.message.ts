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

const waitFor = (): Promise<number> => new Promise(() => setInterval)

export const grpcMessage = async <T extends IMessage>(handler: Response, options: T): Promise<void> => {
	try {
		const data: IMessage = { ...options }
		event.once('message', (): void => {
			handler.status(data.statusCode).json({ ...data })
			waitFor().then(() => 2000)
		})
		event.emit('message')
		clearInterval(await waitFor())
	} catch (e) {}
}
