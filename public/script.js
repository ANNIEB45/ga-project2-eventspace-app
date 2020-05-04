// Modal
// Get the modal
const modal = document.querySelector("#myModal")
console.log(modal)  //showing as null in console
// Get the button that opens the modal
const button = document.querySelectorAll(".myBtn")[0]
console.log(button) //nodelist with one item = RIGHT

// Get the close button
const closeBtn = document.getElementsByClassName("close-btn")[0]
console.log(closeBtn) //empty HTMLCollection LIst

// error message: script.js:14 
    // Uncaught TypeError: button.addEventListener 
    // is not a function

button.addEventListener('click', () =>{
    modal.style.display = 'block'
    console.log("you clicked me")
})

closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
    console.log("you clicked me")


})
 
window.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.display.style = 'none'
    }
    console.log("you clicked me")

})

// for price input field
// let currencyFormat = document.getElementById('currency').value 

// // function priceInput() {
// //     if(currencyFormat.indexOf("$") != 0){
// //         currencyFormat += "$"
// //     }
// //     document.getElementById('currency').value = currencyFormat
// // }

// currencyFormat.addEventLister('change', () =>{
//     if(currencyFormat.indexOf("$") != 0){
//         currencyFormat += "$"
//     }
//     document.getElementById('currency').value = currencyFormat
// })