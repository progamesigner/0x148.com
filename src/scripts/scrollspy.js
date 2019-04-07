import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'

let scrollEventHandlers = []
let scrollEventInstalled = false

export const currentScrollX = () => {
    return window.scrollX || window.pageXOffset || 0
}

export const currentScrollY = () => {
    return window.scrollY || window.pageYOffset || 0
}

export const bind = (handler) => {
    scrollEventHandlers.push(handler)

    if (!scrollEventInstalled) {
        const onScrollEvent = () => {
            const x = currentScrollX()
            const y = currentScrollY()
            scrollEventHandlers.forEach(handler => handler(x, y))
        }

        window.addEventListener('scroll', throttle(onScrollEvent, 10))
        window.addEventListener('resize', debounce(onScrollEvent, 50, true))
        window.addEventListener('orientationchange', debounce(onScrollEvent, 50, true))

        scrollEventInstalled = true
    }

    handler(currentScrollX(), currentScrollY())
}
