import './style.css';

//Tab Elements
const tabs = (() =>{
    
    const home = () => {
        const home = document.createElement(`section`);
        home.setAttribute(`id`,`home`);

        const content = document.createElement(`div`);
        content.classList.add(`content`);

        home.appendChild(content);

        //element creation (about)
        const about = document.createElement(`div`);
        about.classList.add(`about`);
        const aboutH2 = document.createElement(`h2`);
        aboutH2.innerHTML = `about`;
        const aboutP = document.createElement(`p`);
        aboutP.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis et metus at viverra. 
        Nullam dolor mauris, venenatis non mattis id, semper eget risus.`;

        //element creation (schedule)
        const schedule = document.createElement(`div`);
        schedule.classList.add(`schedule`);
        const schedH2 = document.createElement(`h2`);
        schedH2.innerHTML = `open hours`;
        const schedP = document.createElement(`p`);
        schedP.innerHTML = `Sunday: 1pm - 4am <br>
        Monday: 10am - 12am <br>
        Tuesday: 10am - 12am <br>
        Wednesday: 10am - 12am <br>
        Thursday: 10am - 12am <br> 
        Friday: 10am - 12am <br>
        Saturday: 1pm - 4am`;

        //element creation (location)
        const location = document.createElement(`div`);
        location.classList.add(`schedule`);
        const locH2 = document.createElement(`h2`);
        locH2.innerHTML = `located at`;
        const locP = document.createElement(`p`);
        locP.innerHTML = `Agai St., Barangay Inayawan, Muntinlupa City`;

        //appending (about)
        content.appendChild(about);
        about.appendChild(aboutH2);
        about.appendChild(aboutP);

        //appending schedule
        content.appendChild(schedule);
        schedule.appendChild(schedH2);
        schedule.appendChild(schedP);

        //appending location
        content.appendChild(location);
        location.appendChild(locH2);
        location.appendChild(locP);

        return home;
    };

    const menu = () => {
        const menu = document.createElement(`section`);
        menu.setAttribute(`id`,`menu`);

        const content = document.createElement(`div`);
        content.classList.add(`content`);

        menu.appendChild(content);

        const h2 = document.createElement(`h2`);
        h2.innerHTML = `beverages`;

        //element creation (cocktail)
        const cocktail = document.createElement(`div`);
        cocktail.classList.add(`choice`);
        const imgCocktail = document.createElement(`img`);
        imgCocktail.classList.add(`img-choice`);
        imgCocktail.setAttribute(`src`,`../src/cocktail.png`);
        const cocktailH3 = document.createElement(`h3`);
        cocktailH3.innerHTML = `Cocktail | P800`;
        
        //element creation (wine)
        const wine = document.createElement(`div`);
        wine.classList.add(`choice`);
        const imgWine = document.createElement(`img`);
        imgWine.classList.add(`img-choice`);
        imgWine.setAttribute(`src`,`../src/wine.png`);
        const wineH3 = document.createElement(`h3`);
        wineH3.innerHTML = `Wine | P2300`;

        //element creation (soda)
        const soda = document.createElement(`div`);
        soda.classList.add(`choice`);
        const imgSoda = document.createElement(`img`);
        imgSoda.classList.add(`img-choice`);
        imgSoda.setAttribute(`src`,`../src/soda.png`);
        const sodaH3 = document.createElement(`h3`);
        sodaH3.innerHTML = `Soda | P200`;
        
        content.appendChild(h2);

        //appending cocktail
        content.appendChild(cocktail);
        cocktail.appendChild(imgCocktail);
        cocktail.appendChild(cocktailH3);

        //appending wine
        content.appendChild(wine);
        wine.appendChild(imgWine);
        wine.appendChild(wineH3);

        //appending soda
        content.appendChild(soda);
        soda.appendChild(imgSoda);
        soda.appendChild(sodaH3);

        return menu;
    };

    const contact = () => {
        const contact = document.createElement(`section`);
        contact.setAttribute(`id`,`contact`);

        const content = document.createElement(`div`);
        content.classList.add(`content`);

        contact.appendChild(content);

        const h2 = document.createElement(`h2`);
        h2.innerHTML = `Contact`;
        
        const pMobile = document.createElement(`p`);
        pMobile.innerHTML = `Tel: 823416`;

        const pTel = document.createElement(`p`);
        pTel.innerHTML = `Mobile: 1234567890`;

        const pEmail = document.createElement(`p`);
        pEmail.innerHTML = `Email: la.bar@gmail.com`;

        content.appendChild(h2);
        content.appendChild(pMobile);
        content.appendChild(pTel);
        content.appendChild(pEmail);
        
        return contact;
    };

    return {
        home,
        menu,
        contact,
    }

})();

//Initial elements
const component = (() =>{
    const content = document.createElement('div');
    content.setAttribute(`id`,`main-content`);

    const header = () =>  {
        const header = document.createElement(`section`);
        header.setAttribute(`id`,`header`);
        
        //element creation(left side header)
        const logo = document.createElement(`div`);
        logo.classList.add(`logo`);
        const imgLogo = document.createElement(`img`);
        imgLogo.classList.add(`img-logo`);
        imgLogo.setAttribute(`src`,`../src/logo.png`);
        const h1 = document.createElement(`h1`);
        h1.innerHTML = `La <span>Bar</span>`;

        //element creation(right side header)
        const navBar = document.createElement(`div`);
        navBar.classList.add(`navbar`);

        const home = document.createElement(`button`);
        home.classList.add(`btn-home`);
        home.innerHTML = `Home`;
        const menu = document.createElement(`button`);
        menu.classList.add(`btn-menu`);
        menu.innerHTML = `Menu`;
        const contact = document.createElement(`button`);
        contact.classList.add(`btn-contact`);
        contact.innerHTML = `Contact`

        //appending (left side header)
        header.appendChild(logo);
        logo.appendChild(imgLogo);
        logo.appendChild(h1);

        //appending (right side header)
        header.appendChild(navBar);
        navBar.appendChild(home);
        navBar.appendChild(menu);
        navBar.appendChild(contact);

        return header;
    };

    const footer = () => {
        const footer = document.createElement(`section`);
        footer.setAttribute(`id`, `footer`);

        const h1 = document.createElement(`h1`);
        h1.innerHTML = `© Deificz`;
        footer.appendChild(h1);

        return footer;
    };

    content.appendChild(header());
    content.appendChild(tabs.home());
    content.appendChild(footer());
    return {
        header,
        footer,
        content,
    }
})();

//Initial Load of the page
document.body.appendChild(component.content);

//Tab event listeners
const btnHome = document.querySelector(`.btn-home`);
const btnMenu = document.querySelector(`.btn-menu`);
const btnContact = document.querySelector(`.btn-contact`);

btnHome.addEventListener(`click`, () => {
    const content = document.getElementById(`main-content`);

    content.removeChild(content.children[1]);
    content.insertBefore(tabs.home(), content.childNodes[1]);
})

btnMenu.addEventListener(`click`, () => {
    const content = document.getElementById(`main-content`);
   
    content.removeChild(content.children[1]);
    content.insertBefore(tabs.menu(), content.childNodes[1]);
})

btnContact.addEventListener(`click`, () => {
    const content = document.getElementById(`main-content`);

    content.removeChild(content.children[1]);
    content.insertBefore(tabs.contact(), content.childNodes[1]);
})
