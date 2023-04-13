const { Category, Workshop, Address} = require('../models');

const getAllCategory = async (req, res) => {
    let categories;
    if(req.query.userId)
        categories = await Category.findByPk(req.query.categoryId)
    else
        categories = await Category.findAll({});

    if(categories)
        return res.json(categories);
    else
        return res.status(400).json({ message: 'categories not found' })
}

const getCategory = async (req, res) => {
    const category= await Category.findByPk(req.query.categoryId)
    return res.json(category);
}
const createCategory = async (req, res) => {
     //     // 1. create address
    const address = await Address.create({
        address: req.body.address,
        state: req.body.state,
        postcode: req.body.postcode,
        city: req.body.city,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    //     // 2. create workshop
    const workshop = await Workshop.create({
        name: req.body.name,
        contact_num: req.body.contact_no,
        address_id: address.id,
    });

    // 3. create category
    const category = await Category.create({
        name: req.body.name,
        workshop_id: workshop.id,
    });
    return res.json(category);
};

const updateCategory= async (req, res) => {
    const category = await Category.update({
        name: req.body.name,
        workshop_id: workshop.id,
    }, {
        where: {
            id: req.query.categoryId
        }
    });
    return res.json({ message: 'category successfully updated' });
};

const deleteCategory= async (req, res) => {
    const category = await Category.destroy({
        where: {
            id: req.query.categoryId
        }
    });
    return res.json({ message: 'category successfully deleted' });
};
module.exports = {
    getAllCategory,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}