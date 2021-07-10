let modalToggler = document.getElementsByClassName('modal-toggler')

Array.from(modalToggler).forEach(element => {
    element.addEventListener('click', ()=> {
        let dataToggleId = element.getAttribute('data-toggle')
        handleModal(dataToggleId)
    })

})

function handleModal(id) {
    let modalParentElm = document.getElementById(id)
    let modalElm = modalParentElm.children[0]
    function closeModal(){
        
        modalParentElm.classList.remove('show')
        modalElm.classList.add('animate__backOutUp')
        setTimeout(() => {
            modalParentElm.style.display = 'none'
            modalElm.classList.remove('animate__backOutUp')
            return 'Closed'
        // }, 650);
        }, 1000);
    }
    function openModal() {
        modalParentElm.style.display = 'flex'
        modalParentElm.classList.add('show')
        modalElm.classList.add('animate__zoomInDown')
        setTimeout(() => {
            modalElm.classList.remove('animate__zoomInDown')
        }, 1000);

    }
    openModal()
    modalParentElm.addEventListener('click', (e)=> {
        if(e.target === e.currentTarget){
            closeModal()
        }
    })
    let modalCloseBtn = modalParentElm.getElementsByClassName('modal-close-btn')
    Array.from(modalCloseBtn).forEach(element => {
        element.addEventListener('click', (e)=> {
                closeModal()
            
        })
    });
    
}

