import { Document } from 'mongoose'

export interface IStudent extends Document {
	readonly id: string
	readonly name: string
	readonly npm: string
	readonly bid: string
	readonly fak: string
	readonly created_at: any
	readonly updated_at: any
}
