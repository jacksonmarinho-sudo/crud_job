import cursoservice from "../service/curso_service.js";

async function createcursocontroller(request, response){
    const novocurso = request.body;

    try {
const cursosalvo =  await cursoservice.createcursoservice(novocurso);

     response.status(201).send(cursosalvo);
    } catch (error) {
        response.status(400).send( { error: error.message } );

    }
}

export default {
    createcursocontroller
}