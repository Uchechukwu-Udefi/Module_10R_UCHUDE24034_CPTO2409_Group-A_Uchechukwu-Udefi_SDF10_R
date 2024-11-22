/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-c9428-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingCartInDB = ref(database, "cart")

let shoppingCart = []
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