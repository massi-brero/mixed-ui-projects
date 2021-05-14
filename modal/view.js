const openButtons = document.querySelectorAll('[data-open]')
const closeButtons = document.querySelectorAll('[data-close]')
const isVisible = 'is-visible'

for (const openButton of openButtons) {
    openButton.addEventListener('click', function () {
        const modalId = this.dataset.open
        console.log(document.getElementById(modalId))
        document.getElementById(modalId).classList.add(isVisible)
    })
}


for (const closeButton of closeButtons) {
    closeButton.addEventListener('click', function () {
        // find the better approach
        this.parentElement.parentElement.parentElement.classList.remove(isVisible)
    })
}

document.addEventListener('click', e => {
    if (e.target === document.querySelector('.modal.isVisible')) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible)
    }
})

document.addEventListener("keyup", e => {
    if (e.key === 'Escape' && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});