import { Response } from 'express'
import { waitFor, ClearablePromise } from './util.wait'
import EventEmitter from 'eventemitter3'
import { GrpcError } from './util.error'

let event = new EventEmitter()

interface IMessage {
	method: string
	statusCode: number
	message: string
	delay?: number
	data?: Record<string, any> | Record<string, any>[]
}

export const grpcMessage = <T extends Readonly<IMessage>>(incomingMessage: Response, options: T): void => {
	try {
		let opt: IMessage = { ...options }
		let wait = waitFor(opt.delay) as ClearablePromise<void>

		if ((typeof opt.method !== 'string' && opt.method !== undefined) || null) {
			incomingMessage.json({ error: new GrpcError('method must be a string') })
		} else if ((typeof opt.statusCode !== 'number' && opt.statusCode !== undefined) || null) {
			incomingMessage.json({ error: new GrpcError('statusCode must be a number') })
		} else if ((typeof opt.message !== 'string' && opt.message !== undefined) || null) {
			incomingMessage.json({ error: new GrpcError('message must be a string') })
		} else if ((typeof opt.delay !== 'number' && opt.delay !== undefined) || null) {
			incomingMessage.json({ error: new GrpcError('delay must be a number') })
		} else if ((typeof opt.data !== 'object' && opt.data !== undefined) || null) {
			incomingMessage.json({ error: new GrpcError('data must be a object or array') })
		} else {
			event.once('message', (data): void => {
				incomingMessage.status(data.statusCode).json({ ...data })
			})
			event.emit('message', { ...opt })
			event.removeListener('message')
		}
		wait.clear()
	} catch (e) {}
}
