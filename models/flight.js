import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United'], required: true},
  airport: {
    type: String,
    enum: ['DFW', 'DEN', 'AUS', 'LAX', 'SAN', 'RDU', 'SFO'],
    default: 'RDU',
    required: true
  },
  flightNo: {type: Number, required: true, min: 10, max: 9999},
  departs: {type: Date,
  default: function() {
    return new Date().getFullYear()
  }
}
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}