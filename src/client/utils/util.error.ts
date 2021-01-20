import { ServiceError, Metadata } from '@grpc/grpc-js'

export class GrpcError extends Error {
	public name: string
	public code: number
	public message: string
	public metadata: InstanceType<typeof Metadata>
	public details: string

	constructor(options: ServiceError) {
		super(options.message)

		this.name = this.constructor.name
		this.code = options.code
		this.message = options.message
		this.metadata = options.metadata
		this.details = options.details

		Error.captureStackTrace(this, this.constructor)
	}
}
