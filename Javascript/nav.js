const content = document.querySelector('.link-container');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

// if i click openbtn nav will show
openBtn.addEventListener('click', () => {
    content.style.right = '0';
});
closeBtn.addEventListener('click', () => {
    content.style.right = '-100%';
});