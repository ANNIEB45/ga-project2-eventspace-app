// Modal
// Get the modal
const modal = document.querySelector("#myModal")
console.log(modal)
// Get the button that opens the modal
const button = document.querySelectorAll(".myBtn")

// Get the close button
const closeBtn = document.getElementsByClassName("close-btn")
console.log(closeBtn)

button.addEventListener('click', () =>{
    modal.style.display = 'flex'
})
console.log(btn)

closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
})
 
window.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.display.style = 'none'
    }
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