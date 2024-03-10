const express = require('express')
const app = express()
const port = 3000

const router = require('./route')

app.get('/', router.root)

app.get('/login', router.loginRoute)
app.get('/register', router.registerRoute)

app.use((req, res, next) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
