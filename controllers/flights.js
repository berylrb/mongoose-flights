import { Flight} from "../models/flight.js"


function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    console.log(flight)
    // SEND A GET REQUEST TO THIS URL!
    res.redirect(`/flight/new`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flight/new')
  })
}

// function index(req, res) {
//   Flight.findOne({})
//   .then(flights => {
//     res.render('flights/index', {
//       flights: flights
//     })
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/')
//   })
// }


export {
  newFlight as new,
  create
}