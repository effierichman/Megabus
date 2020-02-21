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

const signUp = async (req, res) => {
	try {
		console.log(req.body)
		const { username, email, password } = req.body
		const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
		const user = await User.create({
			username,
			email,
			password_digest
		})
		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		}

		const token = jwt.sign(payload, TOKEN_KEY)
		return res.status(201).json({ user, token })
	} catch (error) {
		console.log(
			'You made it to the signUp controller, but there was an error :('
		)
		return res.status(400).json({ error: error.message })
	}
}

const signIn = async (req, res) => {
	try {
		console.log(req.body)
		const { username, password } = req.body
		const user = await User.findOne({
			where: {
				username
			}
		})
		if (await bcrypt.compare(password, user.dataValues.password_digest)) {
			const payload = {
				id: user.id,
				username: user.username,
				email: user.email
			}

			const token = jwt.sign(payload, TOKEN_KEY)
			return res.status(201).json({ user, token })
		} else {
			res.status(401).send('Invalid Credentials')
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}


const createItem = async (req, res) => {
	try {
		console.log('req.body:', req.body)
		const { title, link } = req.body
		//create a new object literal called "item"
		const item = {title, link, userId: res.locals.user.id}
		const createdItem = await Item.create(item)

		return res.status(201).json({
			item: {
				createdItem
			}
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: error.message })
	}
}


module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById,
    getAllTrips,
    displayTripData,
    signIn,
    signUp
  }