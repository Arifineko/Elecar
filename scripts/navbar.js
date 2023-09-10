

const hamburgeMenuEl = document.querySelector('.js-remove-class');
const navEl = document.querySelectorAll('.js-nav-link')
const navSecond = document.querySelector('.js-nav-second')

navEl.forEach(nav => {
    nav.addEventListener('click', () => {

        navEl.forEach(item => {
            item.classList.remove('active');
        });

        nav.classList.add('active');

        navSecond.classList.add('none')

    });
});

hamburgeMenuEl.addEventListener('click', () => {
    navSecond.classList.remove('none')
})








