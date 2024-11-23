/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
//import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

/* const appSettings = {
    databaseURL: "https://playground-c9428-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingCartInDB = ref(database, "cart")
*/


/*
let shoppingCart = document.getElementsByClassName("cart-items")
const shoppingCart = []
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const cartFromLocalStorage = JSON.parse( localStorage.getItem("shoppingCart"))

if (cartFromLocalStorage) {
    shoppingCart = cartFromLocalStorage
    render(shoppingCart)
}
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    shoppingCart.push(inputValue)
    
    render( `${inputValue} added to cart`)
})

*/


const addButtonEl = document.getElementById("add-button")
const shoppingCart = []
const inputFieldEl = document.getElementById("input-field")
const ulEl = document.getElementById("ul-el")

/* const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
*/

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
       listItems += `
       <li>
            <a target='_blank' 
                href='${myLeads[i]}'
                > ${myLeads[i]}
            </a>
        </li>
    `  
    }
    ulEl.innerHTML = listItems
}