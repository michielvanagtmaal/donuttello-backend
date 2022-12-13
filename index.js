const express = require('express')
const logger = require('./middleware/logger')
const app = express()
const port = 3000
const apiV1Donutsrouter = require('./routers/api/v1/donuts')

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/v1/donuts', apiV1Donutsrouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
