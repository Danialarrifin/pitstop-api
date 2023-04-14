const { Item, Workshop, Address } = require('../models');

const getAllItem = async (req, res) => {
    let items;
    if (req.query.userId)
        items = await Item.findByPk(req.query.itemId)
    else
        items = await Item.findAll({});

    if (items)
        return res.json(items);
    else
        return res.status(400).json({ message: 'items not found' })
}

const getItem = async (req, res) => {
    const item = await Item.findByPk(req.query.itemId)
    return res.json(item);
}
const createItem = async (req, res) => {
    const item = await Item.create({
        name: req.body.name,
        price: req.body.price,
        workshop_id: req.body.workshop_id,
    });
    return res.json(item);
};

const updateItem = async (req, res) => {
    const item = await Item.update({
        name: req.body.name,
        price: req.body.price,
        workshop_id: req.body.workshop.id,
    }, {
        where: {
            id: req.query.itemId
        }
    });
    return res.json({ message: 'item successfully updated' });
};

const deleteItem = async (req, res) => {
    const item = await Item.destroy({
        where: {
            id: req.query.itemId
        }
    });
    return res.json({ message: 'items uccessfully deleted' });
};
module.exports = {
    getAllItem,
    getItem,
    createItem,
    updateItem,
    deleteItem
}