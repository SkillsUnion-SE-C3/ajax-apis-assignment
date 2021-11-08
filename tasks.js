let tasks = []

/*

Add functionality to getTasks method so that it

1. fetches the tasks for a specific owner using the id that is passed in
2. sets the tasks array to data which comes back from thee api call
3. calls the renderTasks method

*/

const getTasks = async (id) => {
  /* only change the implementation of this function */
}

/*Looks at tasks array and renders all the tasks on the page*/
const renderTasks = () => {

  const tasksContainer = document.querySelector('#tasks')
  tasksContainer.innerHTML = ""
  tasks.forEach((task) => {
    const taskContainer = document.createElement('div')

    const titleElement = document.createElement('h4')
    titleElement.textContent = task.id + ". " + task.title

    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = task.description

    taskContainer.append(titleElement, descriptionElement)
    tasksContainer.append(taskContainer)
  })
}