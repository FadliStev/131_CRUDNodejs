import express, { Router } from "express";

const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: 2021,
    },
    {
        merk: "Lambo",
        model: "Aventador",
        warna: "Merah",
        tahun: 2024,
    },
];

router.get("/", (req, res) => {
    res.send(mobil);
});
export default router;