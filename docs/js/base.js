// Ejecutar cuando el contenido del DOM haya cargado
document.addEventListener('DOMContentLoaded', () => {
    setMainHeight()

    // Como mínimo, el height del elemento main y el del header tiene que
    // ocupar toda la pantalla para que no queden espacios vacíos
    function setMainHeight() {
        let headerHeight = document.querySelector('header').clientHeight
        document.querySelector('main').style.minHeight =
            window.screen.height - headerHeight + 'px'
        const menu = document.querySelector('.menu')
        if (window.screen.width < 768) {
            menu.style.minHeight = window.screen.height + 'px'
            menu.style.top = headerHeight + 'px'
        } else {
            menu.style.minHeight = '100%'
        }
    }

    // Detectar cuando la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        setMainHeight()
    })
})
