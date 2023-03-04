const btn = document.querySelector('#rf-btn')
const inputFields = document.querySelectorAll('input')

console.log(btn);

btn.disabled = true

inputFields.forEach(input => {
    input.value = 'aaa'
    input.addEventListener('input', () => {
        btn.disabled = false
    })
})