import Fastify from "fastify";

const app = Fastify()

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */

app.get('/', () => {
    return 'Hello world'
})

app.listen({
    port:3333
}).then(() => {
    console.log("Server running")
})