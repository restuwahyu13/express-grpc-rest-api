import 'dotenv/config'
import * as grpc from '@grpc/grpc-js'
import { StudentService } from '../src/server/typedefs/mahasiswa_grpc_pb'
import { StudentSeviceImplementation } from '../src/server/services/service.mhs'

// init server
const server = new grpc.Server()

// init all services
server.addService(StudentService, StudentSeviceImplementation)

// init port listening
server.bindAsync(
	`localhost:${process.env.GRPC_PORT}`,
	grpc.ServerCredentials.createInsecure(),
	(error: Error, port: number): void => {
		if (error) console.log(`server is error ${error.message}`)
		console.log(`server is running on ${port}`)
		server.start()
	}
)
