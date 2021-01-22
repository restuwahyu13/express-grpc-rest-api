import { ServerUnaryCall as UnaryCall, sendUnaryData as UnaryData } from '@grpc/grpc-js'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { IStudentServer } from '../../typedefs/mahasiswa_grpc_pb'
import { StudentRequest, StudentResponse, StudentList } from '../../typedefs/mahasiswa_pb'
import { studentSchema } from '../models/model.mhs'
import { StudentDTO } from '../dto/dto.mhs'
import { studentRequest } from '../utils/util.request'

export const StudentSeviceImplementation: IStudentServer = {
	insertStudent: (call: UnaryCall<StudentRequest, StudentResponse>, callback: UnaryData<StudentResponse>) => {
		const studentResponse = new StudentResponse()

		studentSchema.find({ $or: [{ npm: call.request.getNpm() }] }, (error: any, results: StudentDTO[]) => {
			if (error) {
				studentResponse.setStatuscode('500')
				studentResponse.setMessage('Internal Server Error')
				callback(null, studentResponse)
			}

			if (results.length > 0) {
				studentResponse.setId(results[0].id)
				studentResponse.setName(results[0].name)
				studentResponse.setNpm(results[0].npm)
				studentResponse.setFak(results[0].fak)
				studentResponse.setBid(results[0].bid)
				studentResponse.setStatuscode('409')
				studentResponse.setMessage('student already exist')
				callback(null, studentResponse)
			} else {
				const saveUser = studentSchema.create({
					name: call.request.getName(),
					npm: call.request.getNpm(),
					fak: call.request.getFak(),
					bid: call.request.getBid(),
					created_at: call.request.getCreatedAt()
				})

				if (saveUser) {
					studentResponse.setStatuscode('201')
					studentResponse.setMessage('add new student successfully')
					callback(null, studentResponse)
				} else {
					studentResponse.setStatuscode('403')
					studentResponse.setMessage('add new student failed')
					callback(null, studentResponse)
				}
			}
		})
	},
	resultsStudent: (call: UnaryCall<Empty, Empty>, callback: UnaryData<StudentList>) => {
		const studentList = new StudentList()

		studentSchema.find({}, (error: any, results: StudentDTO[]) => {
			if (error) {
				studentList.setStatuscode('500')
				studentList.setMessage('internal server error')
				callback(error, studentList)
			}

			if (results.length > 0) {
				studentList.setStudentsList(studentRequest(results))
				studentList.setStatuscode('200')
				studentList.setMessage('student data already to use')
				callback(null, studentList)
			} else {
				studentList.setStudentsList(studentRequest(results))
				studentList.setStatuscode('404')
				studentList.setMessage('student data is not exist')
				callback(null, studentList)
			}
		})
	}
	// resultStudent: (call: UnaryCall<PayloadId, Payload>, callback: WritableStream<Payload, Payload>) => {
	// 	// studentSchema.findOne({ _id: call.request.getId() }, (error, result) => {
	// 	// 	if (error) callback.write(error)
	// 	// 	callback.write(result)
	// 	// 	callback.end()
	// 	// })
	// },
	// deleteStudent: (call: UnaryCall<PayloadId, Empty>, callback: UnaryData<Empty>) => {
	// 	// studentSchema.findByIdAndDelete({ _id: call.request.getId() }, () => {
	// 	// 	// if (error) callback(error, new Empty())
	// 	// 	callback(null, new Empty())
	// 	// })
	// },
	// updateStudent: (call: UnaryCall<Payload, Payload>, callback: UnaryData<Payload>) => {
	// 	// studentSchema.findByIdAndUpdate(
	// 	// 	{ _id: call.request.getId() },
	// 	// 	{
	// 	// 		$set: {
	// 	// 			name: call.request.getName(),
	// 	// 			npm: call.request.getNpm(),
	// 	// 			fak: call.request.getFak(),
	// 	// 			bid: call.request.getBid(),
	// 	// 			updated_at: call.request.getUpdatedAt()
	// 	// 		}
	// 	// 	},
	// 	// 	(error) => {
	// 	// 		if (error) callback(error, null)
	// 	// 		callback(null, call.request)
	// 	// 	}
	// 	// )
	// }
}
