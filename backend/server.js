import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

// const database = new DatabaseMemory()

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

server.put('/reminders/:id/toggle', async (request, reply) => {
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


// server.post('/users', (request, reply) => {
//     const { username, password } = request.body

//     database.create({
//         username: username,
//         password: password
//     })

//     return reply.status(201).send()
// })

// server.put('/users/:id', (request, reply) => {
//     const userId = request.params.id
//     const { username, password } = request.body

//     database.update(userId, {
//         username,
//         password
//     })

//     return reply.status(204).send()
// })

// server.delete('/users/:id', () => {
//     return 'Hello, world!'
// })



server.listen({
    host: "0.0.0.0",
    port: 3333,
})