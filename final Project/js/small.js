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

// Banner display

const banner = document.querySelector('#top-page-banner');

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}
// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})

  // Adding onClick event listener
  resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
  });

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
  