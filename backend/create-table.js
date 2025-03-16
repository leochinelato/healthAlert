import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS reminders`.then(() => {
//     console.log("Tabela apagada.")
// })

sql`
    CREATE TABLE reminders (
        id          TEXT PRIMARY KEY,
        title       TEXT NOT NULL,
        completed   BOOLEAN DEFAULT FALSE
    );
`.then(() => {
    console.log('tabela criada.')
})