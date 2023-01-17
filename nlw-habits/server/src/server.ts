import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient()

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */


//Aqui vao as regras, para limitar quem de fato pode acessar as infromacoes do backend pela API => importante ver
//quando for colocar em producao
app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Tomar'
            }
        }
    })

    return habits
})

app.listen({
    port:3333
}).then(() => {
    console.log("Server running")
})