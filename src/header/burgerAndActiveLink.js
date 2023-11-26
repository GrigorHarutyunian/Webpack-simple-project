export function burgerMenu() {
    const nav = document.getElementById('nav');
    const body = document.body;

    document.getElementById('burgerMenu').addEventListener('click', () => {
        nav.classList.toggle('active');
        body.classList.toggle('disabled');
        body.classList.toggle('burger_menu');
    });

    document.querySelectorAll('nav ul li a').forEach(e => {
        e.addEventListener('click', () => {
            nav.classList.remove('active');
            body.classList.remove('disabled');
            body.classList.remove('burger_menu');
        });
    })
}

export function activeLink() {
    document.querySelectorAll('nav ul li a').forEach(e => {
        e.addEventListener('click', () => {
            const active = document.querySelector('.activeLink')
            if (active) {
                active.classList.remove('activeLink');
            }
            e.classList.add('activeLink');
        });
    });
}

export function activeLinkByScroll() {
    const menuItems = document.querySelectorAll('nav ul li a');
    
    for (let link = 0; link < menuItems.length; ++link) {
        const sectionName = menuItems[link].href.split("/");
        const sectionId = sectionName.pop();
        const section = document.querySelector(sectionId);
        const sectionOffsetTop = section.offsetTop;
        const sectionOffsetHeight = section.offsetHeight;
        const activeLink = document.querySelector('.activeLink');

        if (window.pageYOffset >= sectionOffsetTop - 350 && window.pageYOffset <= sectionOffsetTop + sectionOffsetHeight) {

            if (activeLink) {
                activeLink.classList.remove('activeLink');
            }

            menuItems[link].classList.add('activeLink');
        }
    }
}