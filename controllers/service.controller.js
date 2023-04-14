const { Category, Service, } = require('../models');

const getAllService = async (req, res) => {
    let services;
    if (req.query.userId)
        services = await Service.findByPk(req.query.serviceId)
    else
        services = await Service.findAll({});

    if (services)
        return res.json(services);
    else
        return res.status(400).json({ message: 'services not found' })
}

const getService = async (req, res) => {
    const service = await Service.findByPk(req.query.serviceId)
    return res.json(service);
}
const createService = async (req, res) => {
    // 3. create service
    const service = await Service.create({
        image_path: req.body.image_path,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category_id,
        road_assistance_enabled: req.body.road_assistance_enabled,
    });
    return res.json(service);
};

const updateService = async (req, res) => {
    const service = await Service.update({
        image_path: req.body.image_path,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category_id,
        road_assistance_enabled: req.body.road_assistance_enabled,
    }, {
        where: {
            id: req.query.serviceId
        }
    });
    return res.json({ message: 'service successfully updated' });
};

const deleteService = async (req, res) => {
    const service = await Service.destroy({
        where: {
            id: req.query.serviceId
        }
    });
    return res.json({ message: 'service successfully deleted' });
};
module.exports = {
    getAllService,
    getService,
    createService,
    updateService,
    deleteService
}