// Modal
// Get the modal
const modal = document.getElementById("myModal")
// Get the button that opens the modal
const btn = document.querySelector(".myBtn")

// Get the close button
const closeBtn = document.getElementsByClassName("close-btn")

btn.addEventLister('click', () =>{
    modal.style.display = 'block';
})

closeBtn.addEventLister('click', () =>{
    modal.style.display = "none"
})
 
window.addEventLister('click', (e) =>{
    if(e.target === modal){
        modal.display.style = 'none'
    }
})