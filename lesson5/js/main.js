// DATE
const currentDate = document.querySelector('#currentDate');
const currentYear = document.querySelector('#currentYear');

const now = new Date()
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
const Year = now.getFullYear()

currentDate.innerHTML = fulldate
currentYear.innerHTML = Year

// LAST MODIFICATION
const lastModif = document.querySelector('#lastModif');

const update = document.lastModified

lastModif.innerHTML = update

// RESPONSIVE NAVIGATION
function toggleMenu() {
    document.querySelector('#mainNav').classList.toggle('open');
    document.querySelector('#menuButton').classList.toggle('open');
}

const openNav = document.querySelector('#menuButton');
openNav.onclick = toggleMenu;