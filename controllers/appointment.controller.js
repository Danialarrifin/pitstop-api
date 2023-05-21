const { Op } = require('sequelize');
const { Appointment, Time_slot } = require('../models');

const getAllAppointment = async (req, res) => {
    let appointments;
    if (req.query.appointmentId)
        appointments = await Appointment.findByPk(req.query.appoinmentId)
    else
        appointments = await Appointment.findAll({});

    if (appointments)
        return res.json(appointments);
    else
        return res.status(400).json({ message: 'appointments not found' })
}

const getAppointment = async (req, res) => {
    const appointment = await Appointment.findByPk(req.query.appointmentId)
    return res.json(appointment);
}
const createAppointment = async (req, res) => {
    
        const appointment = await Appointment.create({
            date: req.body.date,
            time_slot_id: req.body.time_slot_id,
            vehicle_id: req.body.vehicle_id,
            service_id: req.body.service_id,
            status: req.body.status,
        });
        return res.json(appointment);
    
};

const updateAppointment = async (req, res) => {
    console.log('req.query.appointmentId', req.query.appointmentId, req.body)
    const appointment = await Appointment.update({
        date: req.body.date,
        time_slot_id: req.body.time_slot_id,
        vehicle_id: req.body.vehicle_id,
        service_id: req.body.service_id,
        status: req.body.status,
    }, {
        where: {
            id: req.query.appointmentId
        }
    });
    return res.json({ message: 'appointment successfully updated' });
};

const deleteAppointment = async (req, res) => {
    const appointment = await Appointment.destroy({
        where: {
            id: req.query.appointmentId
        }
    });
    return res.json({ message: 'appointment successfully deleted' });
};
module.exports = {
    getAllAppointment,
    getAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment
}