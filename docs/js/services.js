// Se usa mas adelante
let carouselServices = null

document.addEventListener('DOMContentLoaded', () => {
    // Variable que se usa para guardar la posición sobre el eje X cuando
    // el usuario toca y deja de tocar la pantalla para saber hacia donde
    // arrastró.
    let lastTouchX = null

    // Agarro el elemento con el id 'carouselServices'
    carouselServices = document.querySelector('#carouselServices')

    // Agarro los elementos que se usan para ir al item previo y siguiente
    // en el carousel
    const carouselControlPrev = document.querySelector('.carousel-control-prev')
    const carouselControlNext = document.querySelector('.carousel-control-next')
    // Se le agregan los eventos para detectar si el usuario movio el dedo sobre la pantalla
    // (sobre el carousel) hacia la izquierda o derecha.
    carouselServices.addEventListener('touchstart', handleTouchStart)
    carouselServices.addEventListener('touchend', handleTouchEnd)

    // Maneja el inicio del toque de la pantalla en dispositivos moviles
    function handleTouchStart(evt) {
        lastTouchX = evt.touches[0].clientX
    }

    // Maneja el fin del toque de pantalla en dispositivos moviles
    function handleTouchEnd(evt) {
        if (lastTouchX) {
            const newTouchX = evt.changedTouches[0].clientX
            if (newTouchX > lastTouchX) {
                toggleServiceRollAnimation(carouselControlPrev)
            } else if (newTouchX < lastTouchX) {
                toggleServiceRollAnimation(carouselControlNext)
            }
            lastTouchX = null
        }
    }
})

// Alterna la animacion que se le va a aplicar al contenedor del servicio.
// Si se ejecuta la orden de ir al item previo en el carousel, se le aplica la animacion
// hacia el lado izquierdo, y viceversa con la orden de ir al siguiente.
function toggleServiceRollAnimation(sender) {
    if (carouselServices) {
        const action = sender.dataset['slide']
        let targets = carouselServices.querySelectorAll('.service-container')
        targets.forEach((t) => {
            if (action === 'prev') {
                t.style['animation'] = getAnimationSettings('rollIn', true)
            } else {
                t.style['animation'] = getAnimationSettings('rollOut', false)
            }
        })
    }

    // Me devuelve un string con las configuraciones de la animacion
    function getAnimationSettings(animationName, gettingInto = true) {
        return `${animationName} .4s ease-out ${
            gettingInto ? 'normal' : 'reverse'
        } 1 both`
    }
}