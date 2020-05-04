// Modal
// Get the modal
const modal = document.getElementById("myModal")
console.log(modal)
// Get the button that opens the modal
const btn = document.querySelector(".myBtn")

// Get the close button
const closeBtn = document.getElementsByClassName("close-btn")

btn.addEventLister('click', () =>{
    modal.style.display = 'block'
})
console.log(btn)

closeBtn.addEventLister('click', () =>{
    modal.style.display = 'none'
})
 
window.addEventLister('click', (e) =>{
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