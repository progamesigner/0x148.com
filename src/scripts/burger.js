export default element => {
    element.addEventListener('click', () => {
        element.classList.toggle('is-active')
        element.parentNode.parentNode.querySelector('.navbar-menu').classList.toggle('is-active')
    })
}
