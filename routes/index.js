const express = require('express');

const authRoutes = require("./auth.route");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

router.all('*', (req, res) => res.status(400).json({ message: 'Bad Request.' }))

module.exports = router;
