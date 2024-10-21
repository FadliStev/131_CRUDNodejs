import express, { Router } from "express";

const router = express.Router();

const makan = [
    {
        jenis: "Ciki",
        tahun_produksi : 2000,
        nama_produk :"Chitato",
        tahun_kadaluarsa: 3000
    },
    {
        jenis: "Chocolate",
        tahun_produksi : 2500,
        nama_produk :"Silverquen",
        tahun_kadaluarsa: 3500
    },
];


router.get("/", (req, res) =>{
    res.send(makan);
});
export default router;