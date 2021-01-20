import { Router } from 'express'
import { controller } from '../controllers/mahasiswa'

const router: Router = Router()

router.post('/mhs', controller.createStudent)
router.get('/mhs', controller.resultsStudent)
router.get('/mhs', controller.resultStudent)
router.delete('/mhs', controller.deleteStudent)
router.put('/mhs', controller.updateStudent)

export default router
