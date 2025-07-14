import express from 'express'
import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
            data: {
                email: req.email,
                name: req.body.name,
                age: req.body.age
            }
    })
    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findmany()
    res.status(200).json(users)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso!'})
})

app.listen(3000)