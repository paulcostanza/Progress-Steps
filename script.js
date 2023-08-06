const blueline = document.querySelector('.progress')
const circles = document.querySelectorAll('.circle')
const next = document.getElementById('next')
const prev = document.getElementById('prev')


// represents whichever circle is active
let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    // Makes sure we cannot go past the highest node
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    // Adds/removes disabled when necessary
    if (currentActive != circles.length) {
        next.removeAttribute('disabled', '')
        prev.removeAttribute('disabled', '')
    } else {
        next.setAttribute('disabled', '')
    }

    update()
    console.log(currentActive)
})

prev.addEventListener('click', () => {
    currentActive--

    // Makes sure we cannot go past the lowest node
    if (currentActive < 1) {
        currentActive = 1
    }

    // Adds/removes diabled when necessary
    if (currentActive != 1) {
        prev.removeAttribute('disabled', '')
        next.removeAttribute('disabled', '')
    } else {
        prev.setAttribute('disabled', '')
    }

    update()
    console.log(currentActive)
})

// Updates which node is highlighted
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    blueline.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`

    console.log(blueline.style.width)
}