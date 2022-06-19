import { Flight} from "../models/flight.js"


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
  for (let key in req.body) {
    if (key === departs) {
      if (new Date(req.body[key]) < new Date()) {
        req.body[colorClass] = 'red'
      } else {
        req.body[colorClass] = 'none'
      }
    }
  }
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
  .then(flight => {
    res.render('flights/show', {
    flight: flight,
    title: 'Flight Details'
  })
})
.catch(error => {
  console.log(error)
  res.redirect('/skills')
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

export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  edit,
  update
}

