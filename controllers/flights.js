import { Flight} from "../models/flight.js"


function newFlight(req, res) {
  res.render("flights/new", {
    title: 'Add Flight'
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    console.log(flight)
    // SEND A GET REQUEST TO THIS URL!
    res.redirect(`/flights`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}


export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete
}