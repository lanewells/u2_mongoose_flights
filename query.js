const db = require('./db')
const { Flight, Airport } = require('./models')

//access index of all flights
const findFlights = async () => {
    const flights = await Flight.find()
    console.log(flights)
}
//access a flight using its object id number
const findFlightById = async () => {
    let id = '670c22e44bb83c2c10167bf9'
    const flights = await Flight.findById(id)
    console.log(flights)
}

//access index of all airports
const findAirports = async () => {
    const airports = await Airport.find()
    console.log(airports)
}

//access an airport using its object id number
const findAirportById = async () => {
    let id = '670c21e1da1c1d02eea81455'
    const airport = await Airport.findById(id)
    console.log(airport)
}

//access list of all flights' flight number, airline, departing airport, and departure date/time only
const findFlightsInfo = async () => {
    const flights = await Flight.find({}, 'flightNumber airline departing_airport departure_date_time')
        .populate('departing_airport')
    console.log(flights)
}

//create a flight 
const createFlight = async () => {
    const flight = await Flight.findOne()
  
    let newFlight = await Flight.create({
        airline: "Test Airline",
        flight_number: 4444,
        price: 1,
        number_of_seats: 1,
        departing_airport: '670c21e1da1c1d02eea81452',
        arrival_airport: '670c21e1da1c1d02eea81455',
        departure_date_time: {
            dateTime: new Date("2024-11-11T14:45:00")
        }
    })
    console.log(newFlight)
  }
  
  //update a flight's info
  const updateFlight = async () => {
    const updatedFlight = await Flight.updateOne(
       { flight_number: 4444 },
       { $set: { price: 3 }}
   )
   console.log(updatedFlight)
  }
  
  //delete a flight
  const deleteFlight = async () => {
    let deleted = await Flight.deleteOne({ flight_number: 4444 })
    console.log(deleted)
  }

async function main() {
    try {
        await findFlights()
        // await findAirports()
        // await findFlightById()
        // await findFlightsInfo()
        // await findAirportById()
        // await createFlight()
        // await updateFlight()
        // await deleteFlight()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()