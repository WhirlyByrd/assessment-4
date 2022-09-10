
const inspirationContainer = document.querySelector('#inspiration-container')
const form = document.querySelector('form')


const baseURL= `http://localhost:4000/api/`




//// compliment Button
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
         
    });
};

complimentBtn.addEventListener('click', getCompliment)




////// fortune Button

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)





////// Show inspiration object

const inspirationCallback = ({data: inspiration}) => displayInspiration(inspiration)

const errCallback = err => console.log(err)

const getInspiration = () => axios.get(baseURL).then(inspirationCallback).catch(errCallback)

const writeInspiration = body => axios.post(baseURL, body).then(inspirationCallback).catch(errCallback)

const deleteInspiration = id => axios.delete(`${baseURL}/${id}`).then(inspirationCallback).catch(errCallback)


// submit new inspiration
 function submitHandler(e) {
    e.preventDefault()

    let quote = document.querySelector('#quote')
    let source = document.querySelector('#source')

    let bodyObj = {
        quote: quote.value,
        source: source.value,
    }

    writeInspiration(bodyObj)
 }
//// inner html for inpiration objects
 function createInspirationCard(inspiration) {
    const inspirationCard = document.createElement('div')
    inspirationCard.classList.add('inspiration-card')

    inspirationCard.innerHTML = `<p class="quote">${inspiration.quote}</p>
    <h3 class="source">${inspiration.source}</h3>
    <button onclick="deleteInspiration(${inspiration.id})">delete</button>`

    inspirationContainer.appendChild(inspirationCard)
 }


 //// to see 
 function displayInspiration(arr) {
    inspirationContainer.innerHTML = ``
    for (let i =0; i < arr.length; i++) {
        createInspirationCard(arr[i])
    }
 }

 form.addEventListener('submit', submitHandler)

 getInspiration()

