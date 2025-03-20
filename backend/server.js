import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgres()

server.get('/reminders', async (request) => {
    const search = request.query.search

    const reminders = await database.list(search)

    return reminders
})

server.post('/reminders', async (request, reply) => {
    const { title, completed } = request.body

    await database.create({
        title: title,
        completed: completed
    })

    return reply.status(201).send()
})


server.patch('/reminders/:id/toggle', async (request, reply) => {
    const reminderId = request.params.id
    const updatedReminder = await database.toggleReminder(reminderId)
    reply.send(updatedReminder)
})

server.put('/reminders/:id', async (request, reply) => {
    const reminderId = request.params.id
    const { title, completed } = request.body

    await database.update(reminderId, {
        title,
        completed
    })

    return reply.status(204).send()

})

server.delete('/reminders/:id', async (request, reply) => {
    const reminderId = request.params.id

    await database.delete(reminderId)

    return reply.status(204).send()
})

server.listen({ host: "0.0.0.0", port: 3333, }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Servidor rodando em ${address}`)
})