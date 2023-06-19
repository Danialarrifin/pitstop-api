const { Op } = require('sequelize');
const { Appointment, Time_slot } = require('../models');
const sequelize = require('../config/connection');

const getAllAppointment = async (req, res) => {
    let appointments;
    if (req.query.appointmentId)
        appointments = await Appointment.findByPk(req.query.appoinmentId)
    else if (req.query.userId && req.query.workshopId) {
        appointments = await sequelize.query(`
            SELECT a.id, a.date, a.status, a.time_slot_id, a.vehicle_id, a.service_id, a.workshop_id, a.user_id, u.name AS user_name, w.name AS workshop_name, s.name AS service_name, t.start_time, t.end_time, t.slot_limit, v.model, v.plate_num FROM appointments AS a 
            LEFT JOIN time_slots AS t ON a.time_slot_id = t.id
            LEFT JOIN vehicles AS v ON a.vehicle_id = v.id
            LEFT JOIN services AS s ON a.service_id = s.id
            LEFT JOIN workshops AS w ON a.workshop_id = w.id
            LEFT JOIN users AS u ON a.user_id = u.id
            WHERE a.user_id = ${req.query.userId}
            AND a.workshop_id = ${req.query.workshopId}
        `);
    }
    else if (req.query.userId) {
        appointments = await sequelize.query(`
            SELECT a.id, a.date, a.status, a.time_slot_id, a.vehicle_id, a.service_id, a.workshop_id, a.user_id, u.name AS user_name, w.name AS workshop_name, s.name AS service_name, t.start_time, t.end_time, t.slot_limit, v.model, v.plate_num FROM appointments AS a 
            LEFT JOIN time_slots AS t ON a.time_slot_id = t.id
            LEFT JOIN vehicles AS v ON a.vehicle_id = v.id
            LEFT JOIN services AS s ON a.service_id = s.id
            LEFT JOIN workshops AS w ON a.workshop_id = w.id
            LEFT JOIN users AS u ON a.user_id = u.id
            WHERE a.user_id = ${req.query.userId}
        `);
    }
    else if (req.query.workshopId) {
        appointments = await sequelize.query(`
            SELECT a.id, a.date, a.status, a.time_slot_id, a.vehicle_id, a.service_id, a.workshop_id, a.user_id, u.name AS user_name, w.name AS workshop_name, s.name AS service_name, t.start_time, t.end_time, t.slot_limit, v.model, v.plate_num FROM appointments AS a 
            LEFT JOIN time_slots AS t ON a.time_slot_id = t.id
            LEFT JOIN vehicles AS v ON a.vehicle_id = v.id
            LEFT JOIN services AS s ON a.service_id = s.id
            LEFT JOIN workshops AS w ON a.workshop_id = w.id
            LEFT JOIN users AS u ON a.user_id = u.id
            WHERE a.workshop_id = ${req.query.workshopId}
        `);
    }
    else {
        // appointments = await Appointment.findAll({});
        appointments = await sequelize.query(`
            SELECT a.id, a.date, a.status, a.time_slot_id, a.vehicle_id, a.service_id, a.workshop_id, a.user_id, u.name AS user_name, w.name AS workshop_name, s.name AS service_name, t.start_time, t.end_time, t.slot_limit, v.model, v.plate_num FROM appointments AS a 
            LEFT JOIN time_slots AS t ON a.time_slot_id = t.id
            LEFT JOIN vehicles AS v ON a.vehicle_id = v.id
            LEFT JOIN services AS s ON a.service_id = s.id
            LEFT JOIN workshops AS w ON a.workshop_id = w.id
            LEFT JOIN users AS u ON a.user_id = u.id
        `);
        console.log('appointments', appointments[0])
    }

    if (appointments.length > 0)
        return res.json(appointments[0]);
    else if (appointments)
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
        user_id: req.body.user_id,
        workshop_id: req.body.workshop_id,
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
        user_id: req.body.user_id,
        workshop_id: req.body.workshop_id,
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