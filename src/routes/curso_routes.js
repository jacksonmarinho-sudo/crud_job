import cursocontroller from "../controller/curso_controller.js";
import { Router } from 'express';

const cursoRoutes = Router();
cursoRoutes.post("/curso", cursocontroller.createcursocontroller);

export default cursoRoutes;