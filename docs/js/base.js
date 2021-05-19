// Ejecutar cuando el contenido del DOM haya cargado
document.addEventListener('DOMContentLoaded', () => {
    setMainHeight()
    setAnchorLinksBehavior()

    // Como mínimo, el height del elemento main y el del header tiene que
    // ocupar toda la pantalla para que no queden espacios vacíos
    function setMainHeight() {
        let headerHeight = document.querySelector('header').clientHeight
        document.querySelector('main').style.minHeight =
            window.innerHeight - headerHeight + 'px'
        const menu = document.querySelector('.menu')
        if (window.screen.width < 768) {
            menu.style.minHeight = window.innerHeight + 'px'
            menu.style.top = headerHeight + 'px'
        } else {
            menu.style.minHeight = '100%'
        }
    }

    function setAnchorLinksBehavior() {
        document.querySelectorAll('a').forEach((aElement) => {
            const splitted = aElement.href.split('#')
            if (splitted.length > 1)
                aElement.addEventListener('click', (e) => {
                    e.preventDefault()
                    const target = document.querySelector(`#${splitted[1]}`)
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })
                })
        })
    }

    // Detectar cuando la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        setMainHeight()
    })
})
