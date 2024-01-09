const textarea = document.querySelector("textarea");
const count = document.querySelector('.count');

function countLetters() {
    const text = textarea.value;
    const textLength = text.length;
    count.innerText = `${textLength}`;
}
