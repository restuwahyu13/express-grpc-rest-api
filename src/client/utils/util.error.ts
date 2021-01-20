export class GrpcError extends Error {
	private name: string
	private code: number
	private message: any

	constructor(options: Error) {
		super(options.message)

		this.name = this.constructor.name
		this.code = options.code
		this.message = options.message
		this.details = options.details

		Error.captureStackTrace(this, this.constructor)
	}
}
