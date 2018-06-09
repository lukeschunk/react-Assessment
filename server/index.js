const express = require('express')
const bodyParser = require('body-parser')
const ac = require(__dirname+'/controllers/animalcontroller')
const cors = require('cors')
const app = express()

app.use( bodyParser.json())
app.use(cors())

const apiBaseUrl = "api/animals"

app.post(apiBaseUrl, ac.create)
app.get(apiBaseUrl, ac.read)
app.put(`${apiBaseUrl}/:desc`)
app.delete(`${apiBaseUrl}/:id`)

const port = 3032
app.listen(port, () => (console.log(`Server is listening on port ${port}.`)))