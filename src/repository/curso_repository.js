import db from "../config/database.js"; 

db.run(`CREATE TABLE IF NOT EXISTS cursos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    area TEXT NOT NULL,
    nivel TEXT NOT NULL,
    modalidade TEXT NOT NULL
)
`);

function createcursorepository(novocurso) {
    return new Promise((resolve, reject) => {
         const { nome, area, nivel, modalidade } = novocurso;

        db.run(`INSERT INTO cursos (nome, area, nivel, modalidade) VALUES (?, ?, ?, ?)`,
             [nome, area, nivel, modalidade],
              function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, ...novocurso });
            }
        });
    });
}
export default {
    createcursorepository
}