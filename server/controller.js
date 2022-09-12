let inspiration = require('./db.json')
let inspirationID = 5;

///Kyle example
weapons = ['Lightsaber', 'The One Ring', 'The Elder Wand']
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getWeapons: (req, res) => {
        res.status(200).send(weapons)
    },

    addWeapon: (req, res) => {
        let {item} = req.body
        weapons.push(item)

        res.status(200).send(weapons)

    },

    deleteWeapon: (req, res) => {
        let index = req.params.id

        weapons.splice(index, 1)

        res.status(200).send(weapons)
    },

    editWeapon: (req, res) => {
        let index = req.prams.id
        let {item} = req.body//destructured item other do req.body.item
        weapons.splice(index, 1, item)

        req.status(200).send(weapons)
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

