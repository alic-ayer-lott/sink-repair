import { getRequests, deleteRequest } from "./dataAccess.js"



export const Requests = () => { //16. 
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map((request)=> {
                    return `<li>${request.description} has a budget of ${request.budget}.         
                    <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button></li>`
                })
                .join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

