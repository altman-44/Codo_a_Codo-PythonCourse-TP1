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

    // Cambiar el comportamiento de los links ancla.
    // Porque sino envía al usuario al target pero el header,
    // al estar con position:sticky, se superpone al target.
    function setAnchorLinksBehavior() {
        // Seleccionar todos los elementos 'a' y, por cada uno...
        document.querySelectorAll('a').forEach((aElement) => {
            // ... dividir el valor del atributo href donde haya un '#'
            // para seleccionar solo los que sean links ancla (si se dividió en 2 en vez de 1)
            const splitted = aElement.href.split('#')
            if (splitted.length > 1)
                // Agregar el evento 'click' a los links ancla
                aElement.addEventListener('click', (e) => {
                    // Prevenir lo que hace el evento por defecto
                    e.preventDefault()
                    // Seleccionar el target
                    const target = document.querySelector(`#${splitted[1]}`)
                    // Subir o bajar hacia donde esté el target, centrándolo en la pantalla
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
