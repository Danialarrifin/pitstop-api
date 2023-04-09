const { Vehicle } = require('../models');

const getAllVehicle = async (req, res) => {
    let vehicles;
    if (req.query.vehicleId)
        vehicles = await Vehicle.findByPk(req.query.vehicleId)
    else
        vehicles = await Vehicle.findAll({});

    if (vehicles)
        return res.json(vehicles);
    else
        return res.status(400).json({ message: 'vehicle not found' })
};

const createVehicle = async (req, res) => {
    const vehicle = await Vehicle.create({
        plate_num: req.body.plate_num,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        image_path: req.body.image_path,
    });
    return res.json(vehicle);
};

const updateVehicle = async (req, res) => {
    const vehicle = await Vehicle.update({
        plate_num: req.body.plate_num,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        image_path: req.body.image_path,
    }, {
        where: {
            id: req.query.vehicleId
        }
    });
    return res.json({ message: 'vehicle successfully updated' });
};

const deleteVehicle = async (req, res) => {
    const vehicle = await Vehicle.destroy({
        where: {
            id: req.query.vehicleId
        }
    });
    return res.json({ message: 'vehicle successfully deleted' });
};

module.exports = {
    getAllVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle,
}