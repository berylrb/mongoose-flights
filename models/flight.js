import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    default: 'Delta',
    enum: ['American Airlines', 'British Airways', 'Delta', 'Southwest', 'United', 'Virgin America'],
  },
  airport: {
    type: String,
    default: 'RDU',
    enum: ['ATL', 'AUS', 'CLT', 'DEN', 'DFW', 'LAX', 'LHR', 'RDU', 'SAN', 'SFO'],
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