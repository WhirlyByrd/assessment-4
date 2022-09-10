let inspiration = require('./db.json')
let inspirationID = 5;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["Be the change you want to see in the world.", "Don't wait for the future, create it.", "To recieve love you must remember to give love.", "Keep practicing and one day you will be the expert."];

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },

    /////// inspiration

    getInspiration: (req, res) => {
            res.status(200).send(inspiration)
        }, 

    
    writeInspiration: (req, res) => {
        const {quote, source} = req.body;

        let newInspiration = {
            quote,
            source,
            id: inspirationID
        }
        console.log(newInspiration);
        inspiration.push(newInspiration)
        inspirationID++;
        res.status(200).send(inspiration)


    },

    deleteInspiration: (req, res) => {
        let index = inspiration.findIndex(elem => elem.id === +req.params.id)
        inspiration.splice(index, 1)
        res.status(200).end(inspiration)
    }

    
    
    

}

