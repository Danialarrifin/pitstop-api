const { Address } = require('../models');

const getAllAddress = async (req, res) => {
    let addresses;
    if(req.query.addressId)
        addresses = await Address.findByPk(req.query.addressId)
    else
        addresses = await Address.findAll({});

    if(addresses)
        return res.json(addresses);
    else
        return res.status(400).json({ message: 'address not found' })
}

const getAddress = async (req, res) => {
    const address = await Address.findByPk(req.query.addressId)
    return res.json(address);
}
const createAddress = async (req, res) => {
    const address = await Address.create({
        address: req.body.address,
        state: req.body.state,
        postcode: req.body.postcode,
        city: req.body.city,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    return res.json(address);
};


const updateAddress = async (req, res) => {
    const address = await Address.update({
        address: req.body.address,
        state: req.body.state,
        postcode: req.body.postcode,
        city: req.body.city,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    }, {
        where: {
            id: req.query.addressId
        }
    });
    return res.json({ message: 'address successfully updated' });
};

const deleteAddress = async (req, res) => {
    const address = await Address.destroy({
        where: {
            id: req.query.addressId
        }
    });
    return res.json({ message: 'address successfully deleted' });
};
module.exports = {
    getAllAddress,
    getAddress,
    createAddress,
    updateAddress,
    deleteAddress
}