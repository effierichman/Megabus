const { User, Trip} = require('../models')


const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// get all trips data

const getAllTrips =  async(req, res)=>{
  try{
    const trips = await Trip.findAll()
    return res.status(200).json({trips})
  } catch (error){
    return res.status(500).send(error.message)
  }
}

const displayTripData= async(req, res)=>{
  try{
  const {departure_city}=  req.params
  const {destination_city}= req.params
  const {travel_date_begin}= req.params
  console.log(req.params.id)
  const selectedTrip = await Trip.findAll({where:{
    departure_city: departure_city,
    destination_city: destination_city,
    travel_date_begin: travel_date_begin
  }})
  if(selectedTrip){
    return res.status(200).json({selectedTrip});
  }
  return res.status(404).send ('Not trips match your criteria');
  } catch (error){
    return res.status(500).send(error.message);
  }
}


const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const [updated] = await User.update(req.body, {
      where: { id: id }
    })
    if (updated) {
      const updatedUser = await User.findOne({ where: { id: id } })
      return res.status(200).json({ user: updatedUser })
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.destroy({
      where: { id: id }
    })
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id }
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
    getAllTrips,
    displayTripData
  }