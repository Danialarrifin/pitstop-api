const { User, Workshop , Vehicle, Appointment} = require('../models');

const getAllUser = async (req, res) => {
    let users;
    if (req.query.userId)
        users = await User.findByPk(req.query.userId)
    else
        users = await User.findAll({});

    if (users)
        return res.json(users);
    else
        return res.status(400).json({ message: 'user not found' })
}

const getUser = async (req, res) => {
    const user = await User.findByPk(req.query.userId)
    return res.json(user);
}

const getDashboardData = async (req, res) => {
    const user = await User.count();
    const workshops = await Workshop.count();
    const vehicles = await Vehicle.count();
    const appointments = await Appointment.count();


    return res.json({
        user,
        workshops,
        vehicles,
        appointments,
    });
}

const createUser = async (req, res) => {
    const { count, rows } = await Vehicle.findAndCountAll({
        where: {
            email: req.body.email,
        }
    });
    console.log("count", count)
    if (count > 0) {
        // duplicate found, return error
        return res.status(400).json({ message: 'email plate exists' })
    } else {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        return res.json(user);
    }

};

const updateUser = async (req, res) => {
    const user = await User.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }, {
        where: {
            id: req.query.userId
        }
    });
    return res.json({ message: 'user successfully updated' });
};

const deleteUser = async (req, res) => {
    const user = await User.destroy({
        where: {
            id: req.query.userId
        }
    });
    return res.json({ message: 'user successfully deleted' });
};


module.exports = {
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    getDashboardData,
}