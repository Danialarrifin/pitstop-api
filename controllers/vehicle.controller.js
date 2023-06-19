const { Vehicle } = require('../models');
const sequelize = require('../config/connection');

const getAllVehicle = async (req, res) => {
    let vehicles;
    if (req.query.vehicleId)
        vehicles = await Vehicle.findByPk(req.query.vehicleId)
    else if (req.query.userId) 
        vehicles = await sequelize.query(`SELECT * FROM vehicles WHERE user_id = ${req.query.userId}`);
    else
    vehicles = await sequelize.query(`SELECT * FROM vehicles`);

        if (vehicles) {
            if (vehicles.length > 0)
                return res.json(vehicles[0]);
            else
                return res.json(vehicles);
        }
        els
        return res.status(400).json({ message: 'vehicle not found' })
};

const createVehicle = async (req, res) => {
    const { count, rows } = await Vehicle.findAndCountAll({
        where: {
            plate_num: req.body.plate_num,
        }
    });
    console.log("count", count)
    if (count > 0) {
        // duplicate found, return error
        return res.status(400).json({ message: 'num plate exists' })
    } else {
        const vehicle = await Vehicle.create({
            user_id: req.body.user_id,
            plate_num: req.body.plate_num,
            model: req.body.model,
            manufacturer: req.body.manufacturer,
            image_path: req.body.image_path,
        });
        return res.json(vehicle);
    }

};

const updateVehicle = async (req, res) => {
    const vehicle = await Vehicle.update({
        user_id: req.body.user_id,
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