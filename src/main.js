import burger from './scripts/burger'
import collapse from './scripts/collapse'
import highlight from './scripts/highlight'
import open from './scripts/open'
import progress from './scripts/progress'
import top from './scripts/top'

import styles from './main.scss'

const bootstrap = () => {
    document.querySelectorAll('.chroma > table').forEach(highlight)
    document.querySelectorAll('.navbar.is-fixed-top').forEach(collapse)
    document.querySelectorAll('.post-share-container').forEach(item => collapse(item, 240))
    document.querySelectorAll('.navbar-burger').forEach(burger)
    document.querySelectorAll('.progress').forEach(progress)
    document.querySelectorAll('.back-to-top').forEach(top)
    document.querySelectorAll(`a:not([href^="${location.protocol}//${location.hostname}"]):not([href^="#"]):not([href^="/"])`).forEach(open)
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap)
} else {
    setTimeout(bootstrap, 1)
}
