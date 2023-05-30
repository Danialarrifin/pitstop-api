const { Workshop, Address } = require('../models');
const sequelize = require('../config/connection');

const getAllWorkshop = async (req, res) => {
    let workshops, address, newList = [];
    if(req.query.workshopId) {
        workshops = await Workshop.findByPk(req.query.workshopId);
        address = await Address.findByPk(workshops?.address_id);
        workshops.address_id = address;
    } else {
        workshops = await sequelize.query('SELECT w.id, w.name, w.contact_num, w.road_assistance_enabled, w.created_at, w.updated_at, a.address, a.id AS address_id, a.state, a.postcode, a.city FROM workshops AS w LEFT JOIN addresses AS a ON a.id = w.address_id');
        console.log('workshops', workshops[0])
    }
    if(workshops.length > 0)
        return res.json(workshops[0]);
    else if(workshops)
        return res.json(workshops);
    else
        return res.status(400).json({ message: 'workshops not found' })
}

const getWorkshop = async (req, res) => {
    const workshop = await Workshop.findByPk(req.query.workshopId)
    return res.json(workshop);
}
const createWorkshop = async (req, res) => {
    
    // 1. create address
    const address = await Address.create({
        address: req.body.address,
        state: req.body.state,
        postcode: req.body.postcode,
        city: req.body.city,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });

    // 2. create workshop
    const workshop = await Workshop.create({
        name: req.body.name,
        contact_num: req.body.contact_num,
        address_id: address.id,
    });
    return res.json(workshop);
};

// const createWorkshops = async (req, res) => {
//     // 1. create address
//     const address = await Address.create({
//         address: req.body.address,
//         state: req.body.state,
//         postcode: req.body.postcode,
//         city: req.body.city,
//         latitude: req.body.latitude,
//         longitude: req.body.longitude,
//     });

//     // 2. create workshop
//     const workshop = await Workshop.create({
//         ...
//         address_id: address.id,
//     });

//     // 3. join table 
//     const [results, metadata] = await sequelize.query(
//         "SELECT w.name, w.contact_num, w.road_assistance_enaled, a.address, a.state, a.postcode, a.city FROM workshops w LEFT JOIN addresses a ON w.address_id = a.id"
//       );
      
//     console.log(JSON.stringify(results, null, 2));

//     return res.json({ message: 'workshops successfully added', workshop: });
// };

const updateWorkshop= async (req, res) => {
    const workshop = await Workshop.findByPk(req.query.WorkshopId);

    console.log('workshop', workshop)

    // update address
    const address = await Address.update({
        address: req.body.address,
        postcode: req.body.postcode,
        city: req.body.city,
        state: req.body.state,
    }, {
        where: {
            id: workshop.address_id
        }
    });

    // update workshop
    const newworkshop = await Workshop.update({
        name: req.body.name,
        contact_num: req.body.contact_num,
        road_assistance_enabled: req.body.road_assistance_enabled,
      
    }, {
        where: {
            id: workshop.id
        }
    });
    return res.json({ message: 'workshop successfully updated' });
};

const deleteWorkshop= async (req, res) => {
    const workshop = await Workshop.destroy({
        where: {
            id: req.query.workshopId
        }
    });
    return res.json({ message: 'workshop successfully deleted' });
};
module.exports = {
    getAllWorkshop,
    getWorkshop,
    createWorkshop,
    updateWorkshop,
    deleteWorkshop
}