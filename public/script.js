// Modal
// Get the modal
const modal = document.querySelector("#myModal")

console.log(modal)  //showing as null in console
// Get the button that opens the modal
const button = document.querySelectorAll(".myBtn")[0]
console.log(button) //nodelist with one item = RIGHT

// Get the close button
const closeBtnTop = document.querySelector(".close-btn-topOne")
console.log(closeBtnTop)

const closeBtn = document.getElementsByClassName("close-btn")[0]
console.log(closeBtn) 

const deleteBtn = document.querySelector('.delete-btn ')



button.addEventListener('click', () =>{
    modal.style.display = 'block'
    console.log("you clicked me")
})

closeBtnTop.addEventListener('click', () =>{
    modal.style.display = 'none'
    console.log("you clicked me")
})

closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
    console.log("you clicked me")
})
 
window.addEventListener = ('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})