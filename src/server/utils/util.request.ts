import { StudentRequest } from '../../typedefs/mahasiswa_pb'
import { StudentDTO } from '../dto/dto.mhs'

function RequestPayload({ id, name, npm, fak, bid, createdAt, updatedAt }: StudentRequest.AsObject): StudentRequest {
	const studentRequest = new StudentRequest()
	studentRequest.setId(id)
	studentRequest.setName(name)
	studentRequest.setNpm(npm)
	studentRequest.setFak(fak)
	studentRequest.setBid(bid)
	studentRequest.setCreatedAt(new Date(createdAt).toISOString())
	studentRequest.setUpdatedAt(new Date(updatedAt).toISOString())

	return studentRequest
}

export const studentRequest = (results: StudentDTO[]): StudentRequest[] => results.map((results) => RequestPayload(results))
