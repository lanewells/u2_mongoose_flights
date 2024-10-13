const { Schema } = require('mongoose')

const dateTimeSchema = new Schema(
    {
        dateTime: {type: Date, required: true},
    }
)

const flightSchema = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: Number, required: true},
        price: {type: Number, required: true},
        number_of_seats: {type: Number, required: true},
        departing_airport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        arrival_airport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        departure_date_time: dateTimeSchema
    },
    { timestamps: true }
)

module.exports = flightSchema