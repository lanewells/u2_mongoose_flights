const mongoose = require('mongoose')
const airportSchema = require('./airports')
const flightSchema = require('./flights')

const Airport = mongoose.model('Airport', airportSchema)
const Flight = mongoose.model('Flight', flightSchema)

module.exports = {
    Airport,
    Flight
}