const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
    card.addEventListener("click",function(){
        const linkId = card.getAttribute("id")
        /*pra abrir uma nova página*/
        window.location.href= `/courses/${linkId}`

        /*pra abrir um modal*/
        /*modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${linkId}`*/
    })
}

const closeModal = document.querySelector('.close-modal').addEventListener("click", function(){
    let isMaximized = modal.classList.contains("maximize")
    if(isMaximized){
        modal.classList.remove('maximize')
    }    modalOverlay.classList.remove("active") 
    modalOverlay.querySelector("iframe").src = ""
})

const expandModal = document.querySelector('.expand-modal').addEventListener("click", function(){
    let isMaximized = modal.classList.contains("maximize")
    if(isMaximized){
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})