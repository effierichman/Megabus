import axios from 'axios'
import bookTrips from '../src/components/bookTrips'

// const departureCity
// const destinationCity
// const departureDate


export const getAllTrips = async()=>{
    const response=  await axios.get(`http://localhost:3000/trips`)
    return response
}

export const getTripData = async()=>{
    const response=  await axios.get(`http://localhost:3000/trips/${departureCity}/${destinationCity}/${departureDate}`)
    return response
}
 