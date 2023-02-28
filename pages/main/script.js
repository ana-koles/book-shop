/* Header */

const header = document.createElement('header');
    header.classList.add('header');
    const body = document.body;
    body.appendChild(header);

const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    headerContainer.classList.add('container');
    header.appendChild(headerContainer);


/* Logo */

const logoWrapper = document.createElement('div');
    logoWrapper.classList.add('logo-wrapper');
    headerContainer.appendChild(logoWrapper);

const h1 = document.createElement('h1');
    h1.classList.add('logo-name');
    h1.innerHTML = 'BookLab';
    logoWrapper.appendChild(h1);

const headerImgWrapper = document.createElement('div');
    headerImgWrapper.classList.add("header-image_wrapper");
    headerContainer.appendChild(headerImgWrapper);

const basketImg = document.createElement('img');
    basketImg.classList.add('basket-img');
    basketImg.classList.add('header-img');
    basketImg.src = "../../assets/icons/cart.png";
    basketImg.alt = "basket";
    headerImgWrapper.appendChild(basketImg);


const likeImg = document.createElement('img');
    likeImg.classList.add('like-img');
    likeImg.classList.add('header-img');
    likeImg.src = "../../assets/icons/heart.png";
    likeImg.alt = "like";
    headerImgWrapper.appendChild(likeImg);

const accountImg = document.createElement('img');
    accountImg.classList.add('account-img');
    accountImg.classList.add('header-img');
    accountImg.src = "../../assets/icons/contact.png";
    accountImg.alt = "contact";
    headerImgWrapper.appendChild(accountImg);


/* Navigation */

/* const navMenu = document.createElement('nav');
    navMenu.classList.add('nav-menu');
    headerContainer.appendChild(navMenu);


let navMenuItemNames = ['Home', 'Shop','Categories', 'Bestsellers'];
let navMenuList = document.createElement('ul');
    navMenuList.classList.add('.nav-menu_list');
let navMenuItem = document.createElement('li');
    navMenuItem.classList.add('.nav-menu_item');


function createNavMenuList (navMenuItemNames) {
    for (let i = 0; i < navMenuItemNames.length; i++) {
        navMenuItem.appendChild(document.createTextNode(navMenuItemNames[i]));
        navMenuItem.style.marginRight = "20px";
        navMenuList.appendChild(navMenuItem);
    }
    return navMenuList;
}

navMenu.appendChild(createNavMenuList (navMenuItemNames));  */

const contactButtonWrapper = document.createElement('div');
    contactButtonWrapper.classList.add('contact-button_wrapper');
    headerContainer.appendChild(contactButtonWrapper);

const contactButton = document.createElement('button');
    contactButton.classList.add('contact-btn');
    contactButton.type = "button";
    contactButton.innerText = "Contact";
    contactButtonWrapper.appendChild(contactButton);

/* First section */

const sectionFirst = document.createElement('section');
    sectionFirst.classList.add('first-section');
    body.appendChild(sectionFirst);

const sectionFirstHeader = document.createElement('div');
    sectionFirstHeader.classList.add('first-section_header');
    sectionFirstHeader.classList.add('container');
    sectionFirst.appendChild(sectionFirstHeader);




