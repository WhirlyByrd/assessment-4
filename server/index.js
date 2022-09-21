const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000


app.use(express.json());
app.use(cors());


// get compliment
const { getCompliment, getFortune, getInspiration, addInspiration, deleteInspiration, editInspiration} = require('./controller');






app.get('/api/compliment', getCompliment);

app.get('/api/fortune', getFortune);


app.get('/api/inspiration', getInspiration);
app.post('api/addInspiration', addInspiration)
app.delete('api/deleteInspiration/:id', deleteInspiration)
app.put('api/editInspiration/:id', editInspiration)



//app.listen(4000, () => console.log("Server running on 4000"));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})