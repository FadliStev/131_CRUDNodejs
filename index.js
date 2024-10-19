import express  from "express"; 
import bodyParser from "body-parser";
import mobilRoute from "./routes/Mobil.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/Mobil", mobilRoute);
app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagii");
});

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server berjalan di port : http://localhost:${PORT}`));

