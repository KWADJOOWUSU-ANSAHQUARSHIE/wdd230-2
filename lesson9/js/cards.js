
const dataURL = 'https://kwadjoowusu-ansahquarshie.github.io/wdd230/lesson9/js/json/data.json';
const listDiv = document.querySelector('.list-view');
const cardDiv = document.querySelector('.grid-view');

fetch(dataURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);

        const stalkers = jsonObject['stalkers'];
        stalkers.forEach(displaystalkersInGrid);
        stalkers.forEach(displaystalkersInList);
    });

    function displaystalkersInGrid(stalkers) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let hr = document.createElement('hr');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = `${stalkers.name}`
        phone.textContent = `${stalkers.phone}`
        address.textContent = `${stalkers.address}`
        website.textContent = `${stalkers.website}`
        
        website.setAttribute("href", stalkers.website);
        image.setAttribute("src", stalkers.imageurl);
        image.setAttribute("alt", `Logo of ${stalkers.name}`);
        image.setAttribute("loading", "lazy");
       
        media_card.appendChild(h2);
        media_card.appendChild(image);
        media_card.appendChild(hr);
        media_card.appendChild(phone);
        media_card.appendChild(address);
        media_card.appendChild(website);
            
        cardDiv.appendChild(media_card);
    }

    function displaystalkersInList(stalkers) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = stalkers.name
        phone.textContent = stalkers.phone
        address.textContent = stalkers.address
        website.textContent = stalkers.website
        
       
        media_card.appendChild(h2);
        media_card.appendChild(phone);
        media_card.appendChild(address);
        media_card.appendChild(website);
            
        listDiv.appendChild(media_card);
    }

// Script for Grid and List Views
let viewsButtons = document.querySelectorAll('.links ul li');
let views = document.querySelectorAll('.view-div');

viewsButtons.forEach((link) => {
    link.addEventListener('click', () => {
        viewsButtons.forEach((item) => {
            item.classList.remove('active');
        })
        link.classList.add('active');
        
        let li_view = link.getAttribute('data-view');

        views.forEach((view) => {
            view.style.display = 'none';
        })
        
        if (li_view == 'grid-view') {
            document.querySelector('.' + li_view).style.display = 'grid';
        } else {
            document.querySelector('.' + li_view).style.display = 'block';
        }
    })

})
