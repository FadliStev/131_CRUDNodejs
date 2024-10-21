import express, { Router } from "express";

const router = express.Router();

const minum = [
    {
        jenis: "Air Putih",
        tahun_produksi : 2300,
        nama_produk :"Ini Aqua?",
        tahun_kadaluarsa: 3000
    },
    {
        jenis: "Sirup",
        tahun_produksi : 2700,
        nama_produk :"Jarman",
        tahun_kadaluarsa: 3500
    },
];


router.get("/", (req, res) =>{
    res.send(minum);
});
export default router;