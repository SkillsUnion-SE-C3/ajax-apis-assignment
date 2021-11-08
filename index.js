// Define the owners array 
let owners = [{
  name: "Linda",
  id: 1
}]

// Get all of the owners from the api
// Set oweners array to the data coming from from the api
// Render the list of owners
const getOwners = async () => {
  const response = await fetch("https://mod2-api.herokuapp.com/owner")
  const data = await response.json()
  owners = data
  renderOwners()
}

// const getOwner = (id) => {
//   fetch(`https://mod2-api.herokuapp.com/owner/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }


// Get one owner using async await and log it to the console.
const getOwner = async (id) => {
  const response = await fetch(`https://mod2-api.herokuapp.com/owner/${id}`)
  const data = await response.json()
  console.log(data)
}

getOwner(3)

// Delete one owner by its id and render the owners list
const deleteOwner = async (id) => {
  try {
    await fetch(`https://mod2-api.herokuapp.com/owner/${id}`, {
      method: 'DELETE'
    })

    owners = owners.filter((owner) => {
      return owner.id !== id
    })
  } catch (error) {
    console.log(error)
  }

  renderOwners()
}

/* Render owners from owners array */
const renderOwners = () => {

  const ownersContainer = document.querySelector('#owners')
  ownersContainer.innerHTML = ""
  owners.forEach((owner) => {
    const ownerContainer = document.createElement('div')

    const nameElement = document.createElement('h3')
    nameElement.textContent = owner.name
    nameElement.addEventListener('click', () => {
      getTasks(owner.id)
    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', () => {
      deleteOwner(owner.id)
    })

    ownerContainer.append(nameElement, deleteButton)
    ownersContainer.append(ownerContainer)
  })
}

/*
Listen for clicks on add button, take the input value 
and call the createOwner method with that value
*/
const addButton = document.querySelector('#add-owner')

addButton.addEventListener('click', () => {
  const name = document.querySelector('input').value
  createOwner(name)
})
/* 
Create an owner based on a given name 
*/
const createOwner = async (name) => {
  const response = await fetch('https://mod2-api.herokuapp.com/owner', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(name)
  })
  const data = await response.json()
  /*Add the newly created owner to owners array*/
  owners = [...owners, data]
  /*Render the owners onto the page*/
  renderOwners()
}

/*Call get owners to populate owners array and render the list of owners*/
getOwners()



