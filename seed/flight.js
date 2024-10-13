const db = require('../db')
const { Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
   await Flight.deleteMany()
   console.log(Flight)
       
    const lax = await Airport.findOne({code: "LAX"})
    const atl = await Airport.findOne({code: "ATL"})
    const ord = await Airport.findOne({code: "ORD"})
    const jfk = await Airport.findOne({code: "JFK"})

    if (!lax || !atl || !ord || !jfk) {
        console.error('at least one airp not found!')
        return
    }

    const flights = [
        {
            airline: "Delta Airlines",
            flight_number: 1234,
            price: 250,
            number_of_seats: 180,
            departing_airport: lax._id,
            arrival_airport: atl._id,
            departure_date_time: {
                dateTime: new Date("2024-10-18T14:45:00")
            }
        },
        {
            airline: "American Airlines",
            flight_number: 5678,
            price: 320,
            number_of_seats: 160,
            departing_airport: jfk._id,
            arrival_airport: ord._id,
            departure_date_time: {
                dateTime: new Date("2024-10-18T14:45:00")
            }
        },
        {
            airline: "United Airlines",
            flight_number: 9101,
            price: 400,
            number_of_seats: 200,
            departing_airport: atl._id,
            arrival_airport: lax._id,
            departure_date_time: {
                dateTime: new Date("2024-10-20T11:00:00")
            }
        },
        {
            airline: "Southwest Airlines",
            flight_number: 1213,
            price: 150,
            number_of_seats: 175,
            departing_airport: ord._id,
            arrival_airport: atl._id,
            departure_date_time: {
                dateTime: new Date("2024-10-21T08:15:00")
            }
        },
        {
            airline: "JetBlue Airways",
            flight_number: 1415,
            price: 220,
            number_of_seats: 150,
            departing_airport: jfk._id,
            arrival_airport: lax._id,
            departure_date_time: {
                dateTime: new Date("2024-10-22T16:30:00")
            }
        },
        {
            airline: "Spirit Airlines",
            flight_number: 1617,
            price: 120,
            number_of_seats: 190,
            departing_airport: atl._id,
            arrival_airport: ord._id,
            departure_date_time: {
                dateTime: new Date("2024-10-25T07:00:00")
            }
        },
        {
            airline: "Alaska Airlines",
            flight_number: 1819,
            price: 270,
            number_of_seats: 140,
            departing_airport: lax._id,
            arrival_airport: jfk._id,
            departure_date_time: {
                dateTime: new Date("2024-10-27T13:15:00")
            }
        },
        {
            airline: "Frontier Airlines",
            flight_number: 2021,
            price: 100,
            number_of_seats: 155,
            departing_airport: ord._id,
            arrival_airport: lax._id,
            departure_date_time: {
                dateTime: new Date("2024-10-30T10:00:00")
            }
        }
    ]          
    await Flight.insertMany(flights)  
    console.log('created flight with airports')   
    console.log(flights)
}

const run = async () => {
    await main()
    db.close()
}

run()