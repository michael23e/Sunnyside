const listItems = document.querySelectorAll('.nav li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on: ${item.textContent}  This is a static page`);
    });
});
const ham = document.querySelectorAll('.hamburger');

ham.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on: Hamburger  This is a static page`);
    });
});
const scrollImage = document.getElementById('scrollImage');

scrollImage.addEventListener('click', () => {
    window.scrollBy({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});