
const inspirationContainer = document.querySelector('#inspiration-container')
const form = document.querySelector('form')


const baseURL= 'http://localhost:4000'




///weapons
const weaponRack = document.getElementById('displayWeapons')

const getWeaponsBtn = document.getElementById('getWeaponsBtn')
const getWeapons = () => {
    axios.get(`${baseURL}/api/weapons`)
        .then((res) => {
            console.log(res.data)
            const weapons = res.data

            weaponRack.innerHTML= ''

            for(let i = 0; i < weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i]
                weaponRack.appendChild(newWeapon)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

getWeaponsBtn.addEventListener('click', getWeapons)




// add weapons form
const addForm = document.getElementById('addForm')

const addInput = document.getElementById('addInput')

const addNewItem = (event) => {
    event.preventDefault()
    console.log('front-end hit')
    let bodyObj = {
        item: addInput.value
    }

    // axios.post(`${baseURL}/api/addWeapon`, bodyObj)
    //     .then((res) => {
    //         console.log(res.data)
    //         const weapons = re.data

    //         weaponRack.innerHTML= ''

    //         for(let i = 0; i < weapons.length; i++){
    //             let newWeapon = document.createElement('li')
    //             newWeapon.textContent = weapons[i]
    //             weaponRack.appendChild(newWeapon)
    //         }
    //         addInput.value = ''
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
}

addForm.addEventListener('submit', addInput)


//deleteweapon

const deleteForm = document.getElementById('deleteForm')
const deleteInput = document.getElementById('deleteInput')

const deleteItem = (event) =>{
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteWeapon/${deleteInput.value}`)
        .then((res) => {
            const weapons = res.data
            weaponRack.innerHTML = ''

            for(let i = 0; i < weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i]
                weaponRack.appendChild(newWeapon)
            }

            deleteInput.value = ''
        })
}

deleteForm.addEventListener('submit', deleteItem)

/////edit weapons
const editForm = document.getElementById('editForm')
const editIndex = document.getElementById('editIndex')
const editInput = document.getElementById('editInput')

const editItem = (e) => {
    e.preventDefault()

    let bodyObj = {
        item: editInput.value
    }

    axios.put(`${baseURL}/api/editWeapon/:id${editIndex.value}`, bodyObj)
    .then((res) => {
        const weapons = res.data
            weaponRack.innerHTML = ''

            for(let i = 0; i < weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i]
                weaponRack.appendChild(newWeapon)
            }

            editIndex.value = ''
            editInput.value = ''
    })
}

editForm.addEventListener('submit', editItem)



//// compliment Button
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
// const inspiredBtn = document.getElementById('inspiredBtn')

// const getInspiration = () => {
//     axios.get(`${baseURL}/inspiration`)
//     .then(res => {
//         const data = res.data;

//     })
// }





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



