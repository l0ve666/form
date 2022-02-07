const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const container = document.querySelector(`.container`)

btn1.addEventListener('click', () => {
    container.classList.add("active");
});

btn.addEventListener('click', () => {
    container.classList.remove("active");
});
