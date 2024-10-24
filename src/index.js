import "dotenv/config"
import express from 'express'
import cors from 'cors'

const app = express()
const origin = process.env.ORIGIN
app.use(express.json())
// app.use(cors({
//   origin,  // Your frontend URL
//   methods: 'POST',
// }))
app.use(cors())

const port = process.env.BE_PORT

import postAI from './routes/post/ai.js'

app.use('/', postAI)

app.get('/', (req, res) => {
  res.json({msg: 'connected'})
})

app.listen(port, () =>  {
  console.log(`server runing on port ${port}`)
})