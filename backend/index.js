const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const mongoDB = require("./db")
mongoDB();
app.use(cors());

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
})



app.get('/', (req, res) => {
    res.send('Hello World! HI JAFAR')
})

app.use(express.json())
app.use("/api", require("./Routes/routes"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port} JAFAR HIII!`);
})


