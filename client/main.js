
// const inspirationContainer = document.querySelector('#inspiration-container')
// const form = document.querySelector('form')


const baseURL= 'http://localhost:4000'


// compliment Button
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
         
    });
};

complimentBtn.addEventListener('click', getCompliment)




////// fortune Button

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)







//inspiration
const inspirationList = document.getElementById('displayInspiration')

const getInspirationBtn = document.getElementById('getInspirationBtn')

function getInspiration() {
    axios.get(`http://localhost:4000/api/inspiration`)
        .then((res) => {
            console.log(res.data);
            const inspiration = res.data;

            inspirationList.innerHTML = '';

            for (let i = 0; i < inspiration.length; i++) {
                let newInspiration = document.createElement('li');
                newInspiration.textContent = inspiration[i];
                inspirationList.appendChild(newInspiration);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

getInspirationBtn.addEventListener('click', getInspiration)

//add inspiration form
const addForm = document.getElementById('addForm')

const addInput= document.getElementById('addInput')


const addNewInspiration = (event) => {
    event.preventDefault()
    console.log('front-end hit')

    let bodyObj = {
        item: addInput.value
    }

    axios.post(`${baseURL}/api/addInspiration`, bodyObj)
        .then((res) => {
            console.log(res.data)
            const inspiration = res.data

            inspirationList.innerHTML = ''

            for(let i = 0; i < inspiration.length; i++){
                let newInspiration = document.createElement('li')
                newInspiration.textContent = inspiration[i]
                inspirationList.appendChild(newInspiration)
            }
            addInput.value = ''
        
        })
        .catch((err) => {
            console.log(err)
        })
}

addForm.addEventListener('submit', addInput)


//delete inspiration
const deleteForm = document.getElementById('deleteForm')
const deleteInput = document.getElementById('deleteInput')

const deleteQuote = (event) => {
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteQuote/${deleteInput.value}`)
        .then((res) => {
            const inspiration = res.data
            inspirationList.innerHTML = ''

            for(let i =0; i < inspiration.length; i++){
                let newInspiration = document.createElement('li')
                newInspiration.textContent = inspiration[i]
                inspirationList.appendChild(newInspiration)
            }

            deleteInput.value = ''
        })
}

deleteForm.addEventListener('submit', deleteQuote)


///edit inspiration

const editForm = document.getElementById('editForm')
const editIndex = document.getElementById('editIndex')
const editQuote = document.getElementById('editQuote')

const editInspiration = (event) => {
    event.preventDefault()

    let bodyObj = {
        item: editInput.value
    }

    axios.put(`${baseURL}/api/editInspiration/:id${editIndex.value}`, bodyObj)
        .then((res) => {
            const inspiration = res.data
            inspirationList.innerHTML = ''

            for(let i = 0; i < inspiration.length; i++){
                let newInspiration = document.createElement('li')
                newInspiration.textContent = inspiration[i]
                inspirationList.appendChild(newInspiration)
            }
            
            editIndex.value = ''
            editQuote.value = ''
        })
}
editForm.addEventListener('submit', editInspiration)
