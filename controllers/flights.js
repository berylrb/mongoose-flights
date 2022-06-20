import { Flight} from "../models/flight.js"
import { Meal } from "../models/meal.js"


function newFlight(req, res) {
  res.render("flights/new", {
    title: 'Add Flight'
  })
}

function create(req, res) {
  console.log(req.body, "REQ.BODY")
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    console.log(flight, "created flight")
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


function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .exec(function(err, flight) {
    Meal.find({_id: {$nin: flight.meal}}, function(err, meals) {
      res.render('flights/show', {
        title: 'Flight Details',
        flight: flight,
        meals: meals
      })
    })
  })
}


function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      flight: flight,
      title: 'Edit Flight'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}


function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}


function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}



export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  edit,
  update,
  createTicket
}

