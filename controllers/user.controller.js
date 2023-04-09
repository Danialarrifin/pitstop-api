const { User } = require('../models');

const getAllUser = async (req, res) => {
    let users;
    if(req.query.userId)
        users = await User.findByPk(req.query.userId)
    else
        users = await User.findAll({});

    if(users)
        return res.json(users);
    else
        return res.status(400).json({ message: 'user not found' })
}

const getUser = async (req, res) => {
    const user = await User.findByPk(req.query.userId)
    return res.json(user);
}

module.exports = {
    getAllUser,
    getUser,
}