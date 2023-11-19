export function burgerMenu() {
    document.getElementById('burgerMenu').addEventListener('click', () => {
        const nav = document.getElementById('nav');
        const body = document.body;
        nav.classList.toggle('active');
        body.classList.toggle('disabled');
        body.classList.toggle('burger_menu');
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