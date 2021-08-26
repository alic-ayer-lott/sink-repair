//Here we are making an object to hold application state. fetch the API requests state and store that external API state in application state

const applicationState = {
        requests: [] //12. store the data referenced by serviceRequests here
} 

const API = "http://localhost:8088" //7. see that API is referencing a URL here
const mainContainer = document.querySelector("#container")

export const fetchRequests = () => { //5. define function fetchRequests AKA get JSONdata from API and turn into JS
    return fetch(`${API}/requests`) //6. take ${API}/requests and pass it to fetch. what does API reference??
                                    //8. we are fetching the requests data section of the API's webstite
        .then(response => response.json()) //9. take response of promise{} made in step 6 and translate to JS language
        .then(
            (serviceRequests) => { //10. take data that is now in JS and pass into this .then(); data is now called 'serviceRequests'
                applicationState.requests = serviceRequests   // 11. Store the external state in application state
            }
        )
}
export const getRequests = () => { //13. define getRequests(). the purpose is to return service requests data we stored in step 12.
    return applicationState.requests.map(request => ({ //HERE: map COPIES the requests into one new array
        ...request} //HERE: spread operator breaks the array apart into 1 object per request
    ))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
