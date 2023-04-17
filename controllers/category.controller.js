const { Category, Workshop, Address } = require('../models');

const getAllCategory = async (req, res) => {
    let categories;
    if (req.query.categoryId)
        categories = await Category.findByPk(req.query.categoryId)
    else
        categories = await Category.findAll({});

    if (categories)
        return res.json(categories);
    else
        return res.status(400).json({ message: 'categories not found' })
}

const getCategory = async (req, res) => {
    const category = await Category.findByPk(req.query.categoryId)
    return res.json(category);
}
const createCategory = async (req, res) => {
    const { count, rows } = await Category.findAndCountAll({
        where: {
            name: req.body.name,
            workshop_id: req.body.workshop_id,
        }
    });
    console.log("count", count)
    if (count > 0) {
        // duplicate found, return error
        return res.status(400).json({ message: 'name already exists' })
    } else {

        const category = await Category.create({
            name: req.body.name,
            workshop_id: req.body.workshop_id,
        });
        return res.json(category);
    }
};

const updateCategory = async (req, res) => {
    const category = await Category.update({
        name: req.body.name,
        workshop_id: req.body.workshop.id,
    }, {
        where: {
            id: req.query.categoryId
        }
    });
    return res.json({ message: 'category successfully updated' });
};

const deleteCategory = async (req, res) => {
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