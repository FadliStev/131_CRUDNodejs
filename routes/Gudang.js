import express, { Router } from "express";

const router = express.Router();

const gudang = [
    {
        letak : "Jateng",
        kapasitas :5000,
        cabang : "Sukodono",
        status : "penuh"        
    },
    {
        letak : "Kaltim",
        kapasitas :5000,
        cabang : "IKN",
        status : "kosong"

    }
];


router.get("/", (req, res) =>{
    res.send(gudang);
});
export default router;