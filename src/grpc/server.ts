import 'dotenv/config'
// import { resolve } from 'path'
import { Server, loadPackageDefinition, ServerCredentials, ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { ServerOptions, RequestType as Req, ResponseType as Res } from '../interface/grpc.server'
import { ServerHandlers } from '../interface/grpc.client'

// init all proto files
// const protoFiles = resolve(process.cwd(), 'resolvers/mahasiswa.proto')

// grpc proto handler method
const protoHandler: ServerHandlers = {
	insertMahasiswa: (call: ServerUnaryCall<Req, Res>, callback: sendUnaryData<Res>) => {
		const req = call.request
		callback(null, req)
	}
}

// load GRPC proto buffer file
const grpcResolvers = loadSync(process.cwd() + '/resolvers/mahasiswa.proto')

// init GRPC server
const server = new Server()

// return GRPC proto service definition
const grpcTypeDefs = (loadPackageDefinition(grpcResolvers) as any) as ServerOptions

// add GRPC service
server.addService(grpcTypeDefs.Mahasiswa.service, protoHandler)

// running GRPC Server
server.bind(`localhost:${process.env.GRPC_PORT}`, ServerCredentials.createInsecure())
console.log(`server is running on ${process.env.GRPC_PORT}`)
server.start()
