import { bind, currentScrollX, currentScrollY } from './scrollspy'

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
}

const scroll = () => {
    const duration = 500
    const start = performance.now()

    window.requestAnimationFrame(function loop(time) {
        const cx = currentScrollX()
        const cy = currentScrollY()
        const elapsed = time - start

        window.scroll(cx, easeInOutQuad(elapsed, cy, -cy, duration))

        if (elapsed < duration) {
            window.requestAnimationFrame(loop)
        } else {
            window.requestAnimationFrame(() => {
                window.scroll(cx, 0)
            })
        }
    })

    return false
}

export default element => {
    bind((x, y) => {
        if (y > window.innerHeight / 4) {
            element.classList.add('is-active')
        } else {
            element.classList.remove('is-active')
        }
    })

    element.addEventListener('click', scroll)
}
