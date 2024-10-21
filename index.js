import express  from "express"; 
import bodyParser from "body-parser";
import mobilRoute from "./routes/Mobil.js";
import motorRoute from "./routes/Motor.js";
import gudangRoute from "./routes/Gudang.js";
import makanRoute from "./routes/Makan.js";
import minumRoute from "./routes/Minum.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/Minum", minumRoute);
app.use("/Makan", makanRoute);
app.use("/Gudang", gudangRoute);
app.use("/Motor", motorRoute);
app.use("/Mobil", mobilRoute);
app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagii");
});

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server berjalan di port : http://localhost:${PORT}`));

