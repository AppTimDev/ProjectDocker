const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.json([{
        title: "testing docker",
        message: "ok"
    }])
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})