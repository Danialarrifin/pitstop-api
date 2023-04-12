const { Workshop, Address } = require('../models');

const getAllWorkshop = async (req, res) => {
    let workshops;
    if(req.query.userId)
        workshops = await Workshop.findByPk(req.query.workshopId)
    else
        workshops = await Workshop.findAll({});

    if(workshops)
        return res.json(workshops);
    else
        return res.status(400).json({ message: 'workshops not found' })
}

const getWorkshop = async (req, res) => {
    const workshop = await Workshop.findByPk(req.query.workshopId)
    return res.json(workshop);
}
const createWorkshop = async (req, res) => {
    //     // 1. create address
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
        contact_num: req.body.contact_no,
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

const updateWorkshop = async (req, res) => {
    const workshop = await Workshop.update({
        name: req.body.name,
        contact_num: req.body.contact_no,
        address_id: address.id,
    }, {
        where: {
            id: req.query.workshopId
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