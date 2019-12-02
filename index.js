const express = require('express')
const app = express()

const port = 5000
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, client, build, 'index.html'))
});

app.listen(port, () => console.log(`Hello port ${port}!`))