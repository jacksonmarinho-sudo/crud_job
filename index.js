import express from "express";
import cursoRoutes from "./src/routes/curso_routes.js"; 

const app = express();

app.use(express.json());
app.use(cursoRoutes);   

app .listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});