let inspiration = require('./db.json')
let inspirationID = 2;

inspiration = [
    {
        quote: `“There are two ways of spreading light: to be the candle or the mirror that reflects it.”`,
        source: "- Edith Wharton",
    },
    {
        quote: `“The most wasted of days is one without laughter.”`,
        source: "- E.E. Cummings"
    }

]

    


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

    addInspiration: (req, res) => {
        let {quote, source} = req.body
        inspiration.push(quote, source)

        res.status(200).send(inspiration)
    },

    deleteInspiration: (req, res) => {
        let index = req.params.id

        inspiration.splice(index, 1)

        res.status(200).send(weapons)
    },

    editInspiration: (req, res) => {
        let index = req.params.id
        let {quote, source} = req.body

        inspiration.splice(index, 1, quote, source)

        req.status(200).send(inspiration)
    }   

}

