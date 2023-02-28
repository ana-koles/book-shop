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

const sectionFirstContent = document.createElement('div');
    sectionFirstContent.classList.add('first-section_content');
    sectionFirstContent.classList.add('container');
    sectionFirst.appendChild(sectionFirstContent);

const sectionFirstLeftSide = document.createElement('div');
    sectionFirstLeftSide.classList.add('left-side_first-section');
    sectionFirstContent.appendChild(sectionFirstLeftSide);

const firstSectionHeader = document.createElement('h2');
    firstSectionHeader.classList.add('first-section_h2');
    firstSectionHeader.innerText = 'A wide range of books\n for Young and Old';
    sectionFirstLeftSide.appendChild(firstSectionHeader);

const firstSectionText = document.createElement('p');
    firstSectionText.classList.add('first-section_text');
    firstSectionText.innerText = 'A wide collection of book in different genres. \n If you do not know what to read, this is the right place to find your next book';
    sectionFirstLeftSide.appendChild( firstSectionText);

const shopButton = document.createElement('button');
    shopButton.classList.add('shop-btn');
    shopButton.type = "button";
    shopButton.innerText = "Shop now";
    sectionFirstLeftSide.appendChild(shopButton);

const sectionFirstRightSide = document.createElement('div');
    sectionFirstRightSide.classList.add('right-side_first-section');
    sectionFirstContent.appendChild(sectionFirstRightSide);

const firstBook = document.createElement('img');
    firstBook.classList.add('first-book');
    firstBook.classList.add('book');
    firstBook.src = "../../assets/images/1.jpg";
    firstBook.alt = "book";
    sectionFirstRightSide.appendChild(firstBook);

const secondBook = document.createElement('img');
    secondBook.classList.add('first-book');
    secondBook.classList.add('book');
    secondBook.src = "../../assets/images/2.jpg";
    secondBook.alt = "book";
    sectionFirstRightSide.appendChild(secondBook);

const thirdBook = document.createElement('img');
    thirdBook.classList.add('first-book');
    thirdBook.classList.add('book');
    thirdBook.src = "../../assets/images/3.jpg";
    thirdBook.alt = "book";
    sectionFirstRightSide.appendChild(thirdBook);

/* Second section */

const sectionSecond = document.createElement('section');
    sectionSecond.classList.add('second-section');
    body.appendChild(sectionSecond);

const sectionSecondContent = document.createElement('div');
    sectionSecondContent.classList.add('second-section_content');
    sectionSecondContent.classList.add('container');
    sectionSecond.appendChild(sectionSecondContent);

const secondSectionHeader = document.createElement('h3');
    secondSectionHeader.classList.add('second-section_h3');
    secondSectionHeader.innerText = 'New arrivals';
    sectionSecondContent.appendChild(secondSectionHeader);

/* Book cards */

const secondSectionCards = document.createElement('div');
    secondSectionCards.classList.add('book-cards_wrapper');
    sectionSecondContent.appendChild(secondSectionCards);


    function createBookCards (img, name, author, price) {
        return `
        <div class="book-card">
            <img class="book-img" src=${img} alt="book">
            <h4 class="book-card_header">${name}</h4>
            <p class="book-card_text">${author}</p>
            <p class="book-card_price">${price}</p>
            <a class="learn-more_link" href="#">Learn more</a>
            <button type="button" class="card-button">Add to card</button>
        </div>
        `
    };

    const bookDetails = [
        {img: "../../assets/images/4.jpg", name: 'The Menore We Lost', author: 'Mike Roberts', price: '$10.12'},
        {img: "../../assets/images/14.jpg", name: 'The Family Remains', author: 'Lisa Jewell', price: '$12.12'},
        {img: "../../assets/images/6.jpg", name: 'Sunset Kiss', author: 'Anna Bright', price: '$8.10'},
        {img: "../../assets/images/7.jpg", name: 'Dog Flowers', author: 'Danielle Gellar', price: '$10.05'},
        {img: "../../assets/images/8.jpg", name: 'City of Orange', author: 'David Yoon', price: '$7.20'},
        {img: "../../assets/images/9.jpeg", name: 'The Red of My Blood', author: 'Clover Stroud', price: '$14.10'},
        {img: "../../assets/images/10.jpg", name: 'Wake Uo, Sir', author: 'Jonathan Ames', price: '$8.15'},
        {img: "../../assets/images/11.jpg", name: 'Hang the Moon', author: 'Jeannette Walls', price: '$12.85'},
        {img: "../../assets/images/12.jpg", name: 'Chamber of Secrets', author: 'J.K.Rowling', price: '$15.50'},
        {img: "../../assets/images/13.jpg", name: 'Deatbly Hallows', author: 'J.K.Rowling', price: '$10.10'},
    ]


const secondSectionCardItem = bookDetails.map(book => {
    return createBookCards(book.img, book.name, book.author, book.price);
}).join('');

secondSectionCards.innerHTML = secondSectionCardItem;

console.log(secondSectionCards);










