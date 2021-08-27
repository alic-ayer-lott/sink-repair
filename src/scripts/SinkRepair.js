//Main reason this exists is to be our overall blue print

import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => { //15. found SinkRepair() function; this will run the returned html; holding what the viewer sees; what we used to make in html file
    return `  
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}       
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `
}