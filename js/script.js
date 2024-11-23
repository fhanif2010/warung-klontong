const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active'); //.toggle menambahkan class active pada navbarNav
}

// Klik di luar Sidebar untuk menutup Sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active'); //.remove menghapus class active yang ada pada navbarNav
    }
})