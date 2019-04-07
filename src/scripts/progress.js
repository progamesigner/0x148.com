import { bind } from './scrollspy'

export default element => {
    bind((x, y) => {
        const documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight || document.body.offsetHeight || document.documentElement.offsetHeight || document.body.clientHeight || document.documentElement.clientHeight || 0
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

        element.setAttribute('min', 0)
        element.setAttribute('max', documentHeight - windowHeight)
        element.setAttribute('value', y)
    })
}
