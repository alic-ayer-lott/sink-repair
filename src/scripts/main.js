//the whole picture: main.js is responsible for connecting js to html, defining and running the render() function

import { SinkRepair } from "./SinkRepair.js" //SinkRepair.js has sinkRepair() definition
import { fetchRequests } from "./dataAccess.js" // dataAccess.js has the application state object that holds the requests array/ where we are storing data we fetched from API

const mainContainer = document.querySelector("#container") // 2. mainContainer references the html #container so we can write dynamic html

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
const render = () => { // 3. define render function here. 
    fetchRequests().then( // 4. call fetchRequests function from dataAccess.js AKA get the requests state we fetched and stored in dataAccess.js
        () => {
    mainContainer.innerHTML = SinkRepair() //14. call sinkRepair() function; take what it returns and make dynamic html; find function definition
        }
    )
}

render() // 1. call the render function that is defined in step 3

