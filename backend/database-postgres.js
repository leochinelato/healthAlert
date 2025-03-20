import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    async list(search) {
        let reminders

        if (search) {
            reminders = await sql`select * from reminders where title ilike ${'%' + search + '%'}`
        } else {
            reminders = await sql`select * from reminders`
        }

        return reminders

    }

    async create(reminder) {
        const reminderId = randomUUID()

        const { title } = reminder

        await sql`insert into reminders (id, title, completed) VALUES (${reminderId}, ${title}, false)`
    }

    async update(id, reminder) {
        const { title, completed } = reminder

        await sql`update reminders set title = ${title}, completed = ${completed} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from reminders WHERE id = ${id}`
    }

    async toggleReminder(id) {
        try {
            const result = await sql`
                UPDATE reminders 
                SET completed = NOT completed 
                WHERE id = ${id} 
                RETURNING *`;

            if (result.length === 0) {
                throw new Error("Lembrete não encontrado");
            }

            return result[0];
        } catch (error) {
            console.error("Erro ao alternar lembrete:", error);
            throw error;
        }
    }
}