const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000


app.use(express.json());
app.use(cors());


// get compliment
const { getCompliment, getFortune, getInspiration, deleteInspiration, writeInspiration, getWeapons, addWeapon, deleteWeapon, editWeapon } = require('./controller');

app.get('/api/weapons', getWeapons);
app.post('/api/addWeapon', addWeapon);
app.delete('/api/deleteWeapon/:id', deleteWeapon)
app.put('/api/editWeapon/:id', editWeapon)

app.get('/api/compliment', getCompliment);

app.get('/api/fortune', getFortune);

app.get('/api/inspiration', getInspiration);
app.delete('api/inspiration/:id', deleteInspiration)
app.post('api/inspiration', writeInspiration)



//app.listen(4000, () => console.log("Server running on 4000"));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})