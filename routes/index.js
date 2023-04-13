const express = require('express');

const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const vehicleRoutes = require("./vehicle.route");
const addressRoutes = require("./address.route");
const workshopRoutes = require("./workshop.route");
const invoiceRoutes = require("./invoice.route");
const categoryRoutes = require("./category.route");
const itemRoutes = require("./item.route");






const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoutes,
    },
    {
        path: "/users",
        route: userRoutes,
    },
    {
        path: "/vehicles",
        route: vehicleRoutes,
    },
    {
        path: "/addresses",
        route: addressRoutes,
    },
    {
        path: "/workshops",
        route: workshopRoutes,
    },
    {
        path: "/invoices",
        route: invoiceRoutes,
    },
    {
        path: "/categories",
        route: categoryRoutes,
    },
    {
        path: "/items",
        route: itemRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

router.all('*', (req, res) => res.status(400).json({ message: 'Bad Request.' }))

module.exports = router;
