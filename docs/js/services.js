let carouselServices = null

document.addEventListener('DOMContentLoaded', () => {
    let lastTouchX = null
    carouselServices = document.querySelector('#carouselServices')
    const carouselControlPrev = document.querySelector('.carousel-control-prev')
    const carouselControlNext = document.querySelector('.carousel-control-next')
    carouselServices.addEventListener('touchstart', handleTouchStart)
    carouselServices.addEventListener('touchend', handleTouchEnd)

    function handleTouchStart(evt) {
        lastTouchX = evt.touches[0].clientX
    }

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

    function getAnimationSettings(animationName, gettingInto = true) {
        return `${animationName} .4s ease-out ${
            gettingInto ? 'normal' : 'reverse'
        } 1 both`
    }
}