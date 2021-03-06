import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
})


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
      let newDate = new Date()
      newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset());
      return newDate.toISOString().slice(0,16)
    }
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}