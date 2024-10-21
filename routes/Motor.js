import express, { Router } from "express";

const router = express.Router();

const motor = [
    {
        merk :"Honda",
        model :"Fiz-r",
        warna :"Black Mamba",
        roda :"5",
        tahun_keluar :2024,
        pajak_mati :2050
    },
    {
        merk :"Suzuki",
        model :"RR",
        warna :"Red Dragon",
        roda :"5",
        tahun_keluar :2024,
        pajak_mati :2060
    },
    {
        merk :"Yamaha",
        model :"PP",
        warna :"Blue Rim",
        roda :"6",
        tahun_keluar :2028,
        pajak_mati :2050
    }
];

router.get("/", (req, res) =>{
    res.send(motor);
});
export default router;