// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function previneComportamento(event) {
    event.preventDefault();
}

HREF_LINK.addEventListener('click', previneComportamento)
INPUT_CHECKBOX.addEventListener('click', previneComportamento)

INPUT_TEXT.addEventListener('keypress', (event) => {
    if (event.key !== 'a') {
        event.preventDefault()
    }
})