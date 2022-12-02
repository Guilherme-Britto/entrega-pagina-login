
/* 
    <section class="modal__container">
        <form class="modal__form">
            <h1 class="modal__titulo">Recupere sua senha!</h1>
            <input class="madal__input" type="text" placeholder="Digite seu email aqui...">
            <span class="modal__close" id="closeModal" >X</span>
            <button class="modal__enter">Enviar</button>
        </form>
    </section> 
*/

function showModal(){
    const body = document.querySelector('body')
    const openModal = document.querySelector('#openModal')

    openModal.addEventListener('click', (event) => {
        const modal = createModal()
        body.appendChild(modal)
        closeModal()
    })
}

function closeModal() {
    const modalContainer = document.querySelector('.modal__container')
    const closemodal__container = document.querySelector('#closeModal')

    closemodal__container.addEventListener('click', () => {
        modalContainer.remove()
    })

}

function createModal() {
    const section = document.createElement('section')
    const form = document.createElement('form')
    const h1 = document.createElement('h1')
    const input = document.createElement('input')
    const span = document.createElement('span')
    const button = document.createElement('button')

    section.classList.add("modal__container")
    form.classList.add("modal__form")
    h1.classList.add("modal__titulo")
    input.classList.add("madal__input")
    span.classList.add("modal__close")
    button.classList.add("modal__enter")

    h1.innerText = 'Recupere sua senha!'
    span.innerText = 'X'
    button.innerText = 'Enviar'
    input.placeholder = 'Digite seu email aqui..'

    span.id = 'closeModal'
    span.type = 'submit'

    input.type = 'text'

    form.append(h1, input, span, button)
    section.appendChild(form)

    return section
}

showModal()

