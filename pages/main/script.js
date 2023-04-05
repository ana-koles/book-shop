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

    const basketImg = document.createElement('img');
    basketImg.classList.add('basket-img');
    basketImg.classList.add('header-img');
    basketImg.src = "../../assets/icons/cart.png";
    basketImg.alt = "basket";

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

const sectionSecondLeftContent = document.createElement('div');
    sectionSecondLeftContent.classList.add('second-section_left-wrapper');
    sectionSecondContent.appendChild(sectionSecondLeftContent);

const secondSectionHeader = document.createElement('h3');
    secondSectionHeader.classList.add('second-section_h3');
    secondSectionHeader.innerText = 'New arrivals';
    sectionSecondLeftContent.appendChild(secondSectionHeader);

/* Book cards */

const secondSectionCards = document.createElement('div');
    secondSectionCards.classList.add('book-cards_wrapper');
    sectionSecondLeftContent.appendChild(secondSectionCards);


    function createBookCards (id, img, name, author, price) {
        return `
        <div class="book-card" id=${id}>
            <img class="book-img" src=${img} alt="book">
            <h4 class="book-card_header">${name}</h4>
            <p class="book-card_text">${author}</p>
            <p class="book-card_price">${price}</p>
            <a class="learn-more_link" href="#">Show more</a>
            <button type="button" class="card-button">Add to cart</button>
        </div>
        `
    };

    const bookDetails = [
        {id: 1, img: "../../assets/images/4.jpg", name: 'Secrets of the JavaScript Ninja', author: 'John Resig and Bear Bibeault', price: '$10.12', description: "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up"},
        {id: 2, img: "../../assets/images/14.jpg", name: 'The Family Remains', author: 'Lisa Jewell', price: '$12.12', description: "From the #1 New York Times bestselling author Lisa Jewell comes an intricate and affecting novel about twisted marriages, fractured families, and deadly obsessions in this stand-alone sequel to the “brilliantly chilling” (Ruth Ware, New York Times bestselling author) The Family Upstairs"},
        {id: 3, img: "../../assets/images/6.jpg", name: 'Node.js in Action', author: 'Bradley Meck Alex Young and Mike Cantelon', price: '$38.10', "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications"},
        {id: 4, img: "../../assets/images/7.jpg", name: 'Dog Flowers', author: 'Danielle Gellar', price: '$10.05', description: "A daughter returns home to the Navajo reservation to retrace her mother’s life in a memoir that is both a narrative and an archive of one family’s troubled history"},
        {id: 5, img: "../../assets/images/8.jpg", name: 'City of Orange', author: 'David Yoon', price: '$7.20', description: "A man who can not remember his own name wakes up in an apocalyptic landscape, injured and alone. He has vague memories of life before, but he can't see it clearly and can't grasp how his current situation came to be. He must learn to survive by finding sources of water and foraging for food. Then he encounters a boy--and he realizes nothing is what he thought it was, neither the past nor the present"},
        {id: 6, img: "../../assets/images/9.jpeg", name: 'The Red of My Blood', author: 'Clover Stroud', price: '$14.10', description: "A few weeks before Christmas, Clover's sister died of breast cancer, aged forty-six. Just days before, she had been given years to live. Her sudden death split Clover's life apart. The Red of My Blood charts Clover's fearless passage through the first year after her sister's death"},
        {id: 7, img: "../../assets/images/10.jpg", name: 'Wake Up, Sir', author: 'Jonathan Ames', price: '$8.15', description: "Alan Blair, the hero of Wake Up, Sir!, is a young, loony writer with numerous problems of the mental, emotional, sexual, spiritual, and physical variety. He's very good at problems. But luckily for Alan, he has a personal valet named Jeeves, who does his best to sort things out for his troubled master. And Alan does find trouble wherever he goes. He embarks on a perilous and bizarre road journey, his destination being an artists colony in Saratoga Springs. There Alan encounters a gorgeous femme fatale who is in possession of the most spectacular nose in the history of noses. Such a nose can only lead to a wild disaster for someone like Alan, and Jeeves tries to help him, but...well, read the book and find out!"},
        {id: 8, img: "../../assets/images/11.jpg", name: 'Hang the Moon', author: 'Jeannette Walls', price: '$12.85', description: "Sallie Kincaid is the daughter of the biggest man in a small town, the charismatic Duke Kincaid. Born at the turn of the 20th century into a life of comfort and privilege, Sallie remembers little about her mother who died in a violent argument with the Duke. By the time she is just eight years old, the Duke has remarried and had a son, Eddie. While Sallie is her father’s daughter, sharp-witted and resourceful, Eddie is his mother’s son, timid and cerebral. When Sallie tries to teach young Eddie to be more like their father, her daredevil coaching leads to an accident, and Sallie is cast out"},
        {id: 9, img: "../../assets/images/12.jpg", name: 'Chamber of Secrets', author: 'J.K.Rowling', price: '$15.50', description: "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as through turned to stone . Dobby's sinister predictions seem to be coming true.These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON "},
        {id: 10, img: "../../assets/images/new_10.jpg", name: 'JavaScript: The Good Parts: The Good Parts', author: 'Douglas Crockford', price: '$30.00', description: "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"},
        {id: 11, img: "../../assets/images/new_11.jpg", name: "You Don't Know JS Yet: Get Started", author: 'Kyle Simpson', price: '$20.00', description: "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"},
        {id: 12, img: "../../assets/images/new_12.jpg", name: 'JavaScript: The Definitive Guide', author: 'David Flanagan', price: '$40.50', "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"},
        {id: 13, img: "../../assets/images/new_13.jpg", name: 'Programming JavaScript Applications', author: 'Eric Elliott', price: '$15.50', "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows"},
        {id: 14, img: "../../assets/images/new_14.jpg", name: 'Learning JavaScript Design Patterns', author: 'Addy Osmani', price: '$20.50',"description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you"},
        {id: 15, img: "../../assets/images/new_15.jpg", name: 'Programming TypeScript', author: 'Boris Cherny', price: '$25.50', "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system"},
    ]

    let cartArray = [];


const secondSectionCardItem = bookDetails.map(book => {
    return createBookCards(book.id, book.img, book.name, book.author, book.price);
}).join('');

secondSectionCards.innerHTML = secondSectionCardItem;

/* right side */

const sectionSecondRightContent = document.createElement('div');
    sectionSecondRightContent.classList.add('second-section_right-wrapper');
    sectionSecondContent.appendChild(sectionSecondRightContent);

const cartWrapper = document.createElement('div');
    cartWrapper.classList.add('cart-wrapper');
    sectionSecondRightContent.appendChild(cartWrapper);

const cartHeader = document.createElement('h3');
    cartHeader.classList.add('cart_h3');
    cartHeader.innerText = 'Cart';
    cartWrapper.appendChild(cartHeader);

const generalBookWrapper = document.createElement('div');
    generalBookWrapper.classList.add('book-wrapper_general');
    cartWrapper.appendChild(generalBookWrapper);


/* drag and drop */

let bookCard = document.querySelectorAll(".book-card");

bookCard.forEach(card => {
    card.draggable = true;
    card.addEventListener('dragstart', onDrag);
});

function onDrag (event) {
    event.dataTransfer.setData('id', event.target.id);
}

let dropImageArea = document.querySelector('.cart-wrapper');
dropImageArea.addEventListener('dragover', dropAllow);

function dropAllow(event) {
    event.preventDefault();
};

dropImageArea.addEventListener('drop', drop);

function drop (event) {
    let bookId = event.dataTransfer.getData('id');
    let oBook = getBookObject(bookId);

    if(oBook) {
        addToCart(oBook);
    }

    drawBookCardInCart (oBook.id, oBook.name, oBook.author, oBook.price, oBook.img);
}

function getBookObject(id) {
    for (let i = 0; i < bookDetails.length; i++) {
        if (bookDetails[i].id == id) {
            return bookDetails[i];
        }
    }
}

function addToCart (oBook) {
    let bookFound = false;
    let oCart = { id:  oBook.id, img: oBook.img, name: oBook.name, author: oBook.author, price: oBook.price, totalPrice: oBook.price, quantity: 1};
    cartArray.forEach(cart => {
        if (cart.id === oBook.id) {
            bookFound = true;
            cart.quantity = cart.quantity + 1;
            cart.totalPrice = cart.totalPrice + oBook.price;
        }
    });

    if (!bookFound) {
        cartArray.push(oCart);
    }
}

/* Add book to a cart by clicking on a button*/

let cardButton = document.querySelectorAll('.card-button');
for (let i = 0; i < cardButton.length; i++) {
    let button = cardButton[i];
    button.addEventListener('click', addToCartByButton);
}

function addToCartByButton (event) {
    let button = event.target;
    let bookItem = button.parentElement;
    let bookItemName = bookItem.querySelector('.book-card_header').innerText;
    let bookItmeAuthor = bookItem.querySelector('.book-card_text').innerText;
    let bookItemPrice = bookItem.querySelector('.book-card_price').innerText;
    let bookItemImg = bookItem.querySelector('.book-img').src;
    let bookId = bookItem.getAttribute('id');

    console.log(bookItemImg);

    let oBook = getBookObject(bookId);

    if(oBook) {
        addToCart(oBook);
    }

    drawBookCardInCart (bookId, bookItemName, bookItmeAuthor, bookItemPrice, bookItemImg );
}

/* Count total price when adding the book */

function increaseTotalPrice (bookPrice) {
    let price = parseFloat(bookPrice.replace('$', ''));
    totalCostAmount.innerText = +totalCostAmount.innerText + price;
}

function drawBookCardInCart (bookItemId, bookItemName,
    bookItmeAuthor, bookItemPrice,bookItemImg ) {

        increaseTotalPrice (bookItemPrice);

    let arrayBookCartWrapper = dropImageArea.querySelectorAll('.cart-book-wrapper');
        for (let i = 0; i < arrayBookCartWrapper.length; i++) {
        if (arrayBookCartWrapper[i].getAttribute('id') ==  bookItemId) {
            let quantityInput =  arrayBookCartWrapper[i].querySelector('.item-quantity');
            quantityInput.innerText = +quantityInput.innerText + 1;
            return;
        };
    }

    let bookWrapper = document.createElement('div');
        bookWrapper.classList.add('cart-book-wrapper');
        bookWrapper.setAttribute('id', bookItemId);
        generalBookWrapper.appendChild(bookWrapper);


    let bookCartContent = `
        <img class="cart-img" src=${bookItemImg} alt="book image">
        <div class="item-text_wrapper">
            <div class ="cart-item_text">
                <h4>${bookItemName}</h4>
                <p cart-item_author>${bookItmeAuthor}</p>
                <div class="price-quantity">
                    <p class="item-price"> ${bookItemPrice} x&nbsp</p>
                    <p class="item-quantity"> 1</p>
                </div>
            </div>

            <button class="cart-item_btn" type='submit'>Remove</button>
        </div>
        `
    bookWrapper.innerHTML = bookCartContent;

    /* Remove books from the cart */
    const removeBookButton = bookWrapper.querySelector('.cart-item_btn');
    removeBookButton.addEventListener('click', (event) => {
            const bookWrapper = event.target.parentElement.parentElement;
            decreaseTotalPrice(bookWrapper);
            bookWrapper.remove();
        });
}

    /* Count total price when remove  the book */
function decreaseTotalPrice (bookWrapper) {
    let bookPrice = bookWrapper.querySelector('.item-price');
    let bookQuanity = bookWrapper.querySelector('.item-quantity');
    let price = parseFloat(bookPrice.innerText.replace('$', ''));
    let quantity = +bookQuanity.innerText;
    let bookTotalPrice = price * quantity;
    totalCostAmount.innerText = +totalCostAmount.innerText - bookTotalPrice;
}

const totalCostWrapper = document.createElement('div');
    totalCostWrapper.classList.add('total-cost');
    cartWrapper.appendChild(totalCostWrapper);

const totalCostText = document.createElement('p');
    totalCostText.classList.add('total-cost_text');
    totalCostWrapper.appendChild(totalCostText);
    totalCostText.innerHTML = 'Total price: $';

const totalCostAmount = document.createElement('p');
    totalCostAmount.classList.add('total-cost_amount');
    totalCostWrapper.appendChild(totalCostAmount);

const chattBtnWrapper = document.createElement('div');
    chattBtnWrapper.classList.add('cart-link_wrapper');
    cartWrapper.appendChild(chattBtnWrapper);

const chattButton = document.createElement('a');
   chattButton.classList.add('cart-link');
   chattButton.innerText = "Place order";
   chattButton.href = "../delivery-form/index.html";
   chattBtnWrapper.appendChild(chattButton);


/* Learn more pop-up */

const popupContent = document.createElement('div');
    popupContent.classList.add('pop-up_content');
    body.appendChild(popupContent);

const popupHeaderWrapper = document.createElement('div');
    popupHeaderWrapper.classList.add('pop-up_header-wrapper');
    popupContent.appendChild(popupHeaderWrapper);

const popupName = document.createElement('h3');
    popupName.classList.add('pop-up_name');
    popupHeaderWrapper.appendChild(popupName);
    popupName.innerText = 'Header';

const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    popupHeaderWrapper.appendChild(closeBtn);
    closeBtn.innerHTML = '&times;';

const popupDesciption = document.createElement('p');
    popupDesciption.classList.add('pop-up_description');
    popupContent.appendChild(popupDesciption);

const popupBackground = document.createElement('div');
    popupBackground.classList.add('pop-up_background');
    body.appendChild(popupBackground);

const learMorePopups = document.querySelectorAll('.learn-more_link');

console.log(learMorePopups);

learMorePopups.forEach(popup => {
        popup.addEventListener('click', openPopup);
    });

function openPopup (event) {
    let link = event.target;
    let linkParent = link.parentElement;
    let linkId = linkParent.getAttribute('id');

    let oLink = getBookObject(linkId);
    popupDesciption.innerText= oLink.description;
    popupName.innerText = oLink.name;

    popupContent.classList.add('active');
    popupBackground.classList.add('active');
}

const closePopupBtns = document.querySelectorAll('.close-btn');
closePopupBtns.forEach(button => {
    button.addEventListener('click', closePopup);
});

function closePopup (event) {
    popupContent.classList.remove('active');
    popupBackground.classList.remove('active');
}

popupBackground.addEventListener('click', closePopup);


/* Footer */

const footer = document.createElement('footer');
    footer.classList.add('footer');
    body.appendChild(footer);

const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.classList.add('container');
    footer.appendChild(footerContent);

const footerLeftSide = document.createElement('div');
    footerLeftSide.classList.add('footer_left-side');
    footerContent.appendChild(footerLeftSide);

const footerHeader = document.createElement('h3');
    footerHeader.classList.add('footer_h3');
    footerHeader.innerText = 'Contact us to get\n more information';
    footerLeftSide.appendChild(footerHeader);

const contactIconsWrapper = document.createElement('div');
    contactIconsWrapper.classList.add('contact-icons_wrapper');
    footerLeftSide.appendChild(contactIconsWrapper);

const fbIcon = document.createElement('img');
    fbIcon.src = "../../assets/icons/facebook.png";
    fbIcon.alt = "facebook";
    fbIcon.classList.add('contact-icons');
    fbIcon.classList.add('fb-icon');
    contactIconsWrapper.appendChild(fbIcon);


const telegramIcon = document.createElement('img');
    telegramIcon.src = "../../assets/icons/telegram.png";
    telegramIcon.alt = "telegram";
    telegramIcon.classList.add('contact-icons');
    telegramIcon.classList.add('telegram-icon');
    contactIconsWrapper.appendChild(telegramIcon);

const instIcon = document.createElement('img');
    instIcon.src = "../../assets/icons/instagram.png";
    instIcon.alt = "instagram";
    instIcon.classList.add('contact-icons');
    instIcon.classList.add('inst-icon');
    contactIconsWrapper.appendChild(instIcon);


const footerRightSide = document.createElement('div');
    footerRightSide.classList.add('footer_right-side');
    footerContent.appendChild(footerRightSide);

const footerFirstBook = document.createElement('img');
    footerFirstBook.classList.add('footer_first-book');
    footerFirstBook.classList.add('footer-book');
    footerFirstBook.src = "../../assets/images/15.jpg";
    footerFirstBook.alt = "book";
    footerRightSide.appendChild(footerFirstBook);

const footerSecondBook = document.createElement('img');
    footerSecondBook.classList.add('footer_second-book');
    footerSecondBook.classList.add('footer-book');
    footerSecondBook.src = "../../assets/images/14.jpg";
    footerSecondBook.alt = "book";
    footerRightSide.appendChild(footerSecondBook);

const footerThirdBook = document.createElement('img');
    footerThirdBook.classList.add('footer_third-book');
    footerThirdBook.classList.add('footer-book');
    footerThirdBook.src = "../../assets/images/13.jpg";
    footerThirdBook.alt = "book";
    footerRightSide.appendChild(footerThirdBook);

const footerFourthBook = document.createElement('img');
    footerFourthBook.classList.add('footer_fourth-book');
    footerFourthBook.classList.add('footer-book');
    footerFourthBook.src = "../../assets/images/12.jpg";
    footerFourthBook.alt = "book";
    footerRightSide.appendChild(footerFourthBook);





