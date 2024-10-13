const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    await Airport.deleteMany()
    
    const airports = [
        {
            name: "Los Angeles International Airport",
            location: "Los Angeles, California",
            code: "LAX"
        },
        {
            name: "Hartsfield-Jackson Atlanta International Airport",
            location: "Atlanta, Georgia",
            code: "ATL"
        },
        {
            name: "O'Hare International Airport",
            location: "Chicago, Illinois",
            code: "ORD"
        },
        {
            name: "John F. Kennedy International Airport",
            location: "New York City, New York",
            code: "JFK"
        }
    ]
    await Airport.insertMany(airports)
    console.log('created airports')
    console.log(airports)
}

const run = async () => {
    await main()
    db.close()
}
    run()