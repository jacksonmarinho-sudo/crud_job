import cursorepository from "../repository/curso_repository.js";

async function createcursoservice(novocurso) {
   const cursosalvo = await cursorepository.createcursorepository(novocurso);
   if (!cursosalvo) {
       throw new Error("Erro ao criar curso!");
   }
   return cursorepository;
}

export default {
    createcursoservice

}    