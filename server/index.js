const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000

app.use(cors());
app.use(express.json());


// get compliment
const { getCompliment, getFortune, getInspired } = require('./controller')

app.get('/api/compliment', getCompliment);

app.get('/api/fortune', getFortune);

app.get('/api/inspiration', getInspiration);
app.delete('api/inspiration/:id', deleteInspiration)
app.post('api/inspiration', writeInspiration)


//app.listen(4000, () => console.log("Server running on 4000"));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})