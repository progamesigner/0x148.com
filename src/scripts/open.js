export default element => {
    const url = element.getAttribute('href')
    element.addEventListener('click', event => {
        window.open(url)
        event.preventDefault()
    })
}
