import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify()

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */


//Aqui vao as regras, para limitar quem de fato pode acessar as infromacoes do backend pela API => importante ver
//quando for colocar em producao
app.register(cors)
app.register(appRoutes)

app.listen({
    port:3333
}).then(() => {
    console.log("Server running")
})