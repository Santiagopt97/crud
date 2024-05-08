// Import our custom CSS
import '../scss/style.scss';

import { coders } from "./database.js"

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

console.table(coders)
const tbody = document.querySelector("tbody")


function withForOf() {
    for (const coder of coders) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase ">${coder.email}</td>
        </tr>
        `
    }
}

function withForEach() {
    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase ">${coder.email}</td>
        </tr>
        `
    });
}

function withClasicFor() {
    for (let i = 0; i < coders.length; i++) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coders[i].id}</th>
            <td>${coders[i].name}</td>
            <td>${coders[i].lastName}</td>
            <td class="text-lowercase ">${coders[i].email}</td>
        </tr>
        `
    }
}

function withForIn() {
    for (const i in coders) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coders[i].id}</th>
            <td>${coders[i].name}</td>
            <td>${coders[i].lastName}</td>
            <td class="text-lowercase ">${coders[i].email}</td>
        </tr>
        `
    }
}


