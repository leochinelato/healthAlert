import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #reminders = new Map()

    list(search) {
        return Array.from(this.#reminders.entries())
            .map((reminderArray) => {
                const id = reminderArray[0]
                const data = reminderArray[1]

                return { id, ...data }
            })
            .filter(reminder => {
                if (search) {
                    return reminder.title.includes(search)
                }
                return true
            })
    }

    create(reminder) {
        const reminderId = randomUUID() // id unico universal

        this.#reminders.set(reminderId, reminder)
    }

    update(id, reminder) {
        this.#reminders.set(id, reminder)
    }

    delete(id) {
        this.#reminders.delete(id)
    }
}