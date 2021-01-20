import 'dotenv/config'
import { Express } from 'express'
import bodyParser from 'body-parser'

export const pluginMiddleware = (app: Express): void => {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
}
