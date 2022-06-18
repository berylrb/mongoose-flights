import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    default: 'Delta',
    enum: ['American', 'Southwest', 'United', 'Delta'],
  },
  airport: {
    type: String,
    default: 'RDU',
    enum: ['DFW', 'DEN', 'AUS', 'LAX', 'SAN', 'RDU', 'SFO'],
  },
  flightNo: {type: Number, min: 10, max: 9999},
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