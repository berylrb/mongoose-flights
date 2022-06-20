import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)
router.get('/new', flightsCtrl.new)
router.delete('/:id', flightsCtrl.delete)
router.get('/:id', flightsCtrl.show)
router.put('/:id', flightsCtrl.update)
router.get('/:id/edit', flightsCtrl.edit)
router.post('/:id/tickets', flightsCtrl.createTicket)


export {
  router
}
