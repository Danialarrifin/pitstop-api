const { Review } = require('../models');

const getAllReview = async (req, res) => {
    let reviews;
    if (req.query.userId)
        reviews = await Review.findByPk(req.query.reviewId)
    else
        reviews = await Review.findAll({});

    if (reviews)
        return res.json(reviews);
    else
        return res.status(400).json({ message: 'reviews not found' })
}

const getReview = async (req, res) => {
    const review = await Review.findByPk(req.query.reviewId)
    return res.json(review);
}
const createReview = async (req, res) => {
    // 3. create review
    const review = await Review.create({
        rating: req.body.rating,
        remarks: req.body.remarks,
        reviewer: req.body.reviewer,
        workshop_id: req.body.workshop_id,
    });
    return res.json(review);
};

const updateReview = async (req, res) => {
    const review = await Review.update({
        rating: req.body.rating,
        remarks: req.body.remarks,
        reviewer: req.body.reviewer,
        workshop_id: req.body.workshop_id,
    }, {
        where: {
            id: req.query.reviewId
        }
    });
    return res.json({ message: 'review successfully updated' });
};

const deleteReview= async (req, res) => {
    const review = await Review.destroy({
        where: {
            id: req.query.reviewId
        }
    });
    return res.json({ message: 'review successfully deleted' });
};
module.exports = {
    getAllReview,
    getReview,
    createReview,
    updateReview,
    deleteReview
}