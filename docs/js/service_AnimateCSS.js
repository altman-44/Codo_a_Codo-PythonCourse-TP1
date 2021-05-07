document.addEventListener('DOMContentLoaded', () => {
    const animationListDiv = document.querySelector('#animation-list')
    displayAnimations()
    
    function displayAnimations() {
        for(let animationType in ANIMATIONS) {
            // Creo el contenedor del tipo de animacion
            const animationTypeDiv = document.createElement('div')
            // Creo el elemento que va a tener el nombre del tipo de animacion (el titulo del contenedor del tipo de animacion)
            const animationTypeNameText = document.createElement('h3')
            animationTypeNameText.classList.add('animation-type-text')
            animationTypeNameText.innerText = animationType
            // Agrego el nombre del tipo de animacion al contenedor del tipo de animacion
            animationTypeDiv.appendChild(animationTypeNameText)

            const animationTypeContent = document.createElement('div')
            animationTypeContent.classList.add('animation-type-content-container')
            // Recorro cada animacion por tipo de animacion
            for (let animationName of ANIMATIONS[animationType]) {
                // Creo el contenedor de la animacion
                const animationContainer = document.createElement('div')
                animationContainer.classList.add('animation-container')
                // Creo el el elemento que va a tener el nombre de la animacion
                const animationNameText = document.createElement('h4')
                animationNameText.classList.add('animation-name-text')
                animationNameText.innerText = animationName
                // Creo la forma en la que se va a aplicar la animacion
                const animationShape = document.createElement('div')
                animationShape.classList.add('animation-shape')
                animationShape.style.animation = animationName + ' 2s ease normal infinite both'
                // Agrego el nombre de la animacion al contenedor de la animacion
                animationContainer.appendChild(animationNameText)
                // Agrego la forma de la animacion al contenedor de la animacion
                animationContainer.appendChild(animationShape)
                // Agrego el contenedor de la animacion al contenedor del contenido del contenedor del tipo de animacion
                animationTypeContent.appendChild(animationContainer)
                // Agrego el contenedor de la animacion en el contenedor del tipo de animacion
                animationTypeDiv.appendChild(animationTypeContent)
            }
            // Creo un hr para dividir los contenedores de los tipos de animacion entre si
            const divider = document.createElement('hr')
            // Agrego el contenedor del tipo de animacion y el hr a la lista de contenedores
            animationListDiv.appendChild(animationTypeDiv)
            animationListDiv.appendChild(divider)
        }
    }
})

const ANIMATIONS = {
    "Attention seekers": [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shakeX",
        "shakeY",
        "headShake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "heartBeat"
    ],
    "Back entrances": [
        "backInDown",
        "backInLeft",
        "backInRight",
        "backInUp"
    ],
    "Back exits": [
        "backOutDown",
        "backOutLeft",
        "backOutRight",
        "backOutUp"
    ],
    "Bouncing entrances": [
        "bounceIn",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceInUp"
    ],
    "Bouncing exits": [
        "bounceOut",
        "bounceOutDown",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutUp"
    ],
    "Fading entrances": [
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "fadeInUp",
        "fadeInUpBig",
        "fadeInTopLeft",
        "fadeInTopRight",
        "fadeInBottomLeft",
        "fadeInBottomRight"
    ],
    "Fading exits": [
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "fadeOutTopLeft",
        "fadeOutTopRight",
        "fadeOutBottomLeft",
        "fadeOutBottomRight"
    ],
    "Flippers": [
        "flip",
        "flipInX",
        "flipInY",
        "flipOutX",
        "flipOutY"
    ],
    "Lightspeed": [
        "lightSpeedInRight",
        "lightSpeedInLeft",
        "lightSpeedOutRight",
        "lightSpeedOutLeft"
    ],
    "Rotating entrances": [
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight"
    ],
    "Rotating exits": [
        "rotateOut",
        "rotateOutDownLeft",
        "rotateOutDownRight",
        "rotateOutUpLeft",
        "rotateOutUpRight"
    ],
    "Specials": ["hinge", "jackInTheBox", "rollIn", "rollOut"],
    "Zooming entrances": [
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp"
    ],
    "Zooming exits": [
        "zoomOut",
        "zoomOutDown",
        "zoomOutLeft",
        "zoomOutRight",
        "zoomOutUp"
    ],
    "Sliding entrances": [
        "slideInDown",
        "slideInLeft",
        "slideInRight",
        "slideInUp"
    ],
    "Sliding exits": [
        "slideOutDown",
        "slideOutLeft",
        "slideOutRight",
        "slideOutUp"
    ]
}