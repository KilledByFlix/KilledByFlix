var products = [
    {
        name: "Männerjacke",
        price: 24.99,
        description: "Jacke für Männer",
        rating: 4.5,
        image: "Bilder/7.jpg",
    },
    // Weitere Produkte hier hinzufügen
];

var productGrid = document.querySelector('.product-grid');

// Produkte dynamisch generieren
products.forEach(function(product) {
    var productElement = document.createElement('div');
    productElement.classList.add('product');

    var imageElement = document.createElement('img');
    imageElement.src = product.image;
    productElement.appendChild(imageElement);

    var nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);

    var priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.textContent = product.price.toFixed(2) + ' EUR';
    productElement.appendChild(priceElement);
var descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = product.description;
    productElement.appendChild(descriptionElement);

    var ratingElement = document.createElement('div');
    ratingElement.classList.add('rating');
    var starsElement = document.createElement('span');
    starsElement.classList.add('stars');
    starsElement.style.width = (product.rating / 5) * 100 + '%';
    ratingElement.appendChild(starsElement);
    var countElement = document.createElement('span');
    countElement.classList.add('count');
    countElement.textContent = '(' + product.rating + ')';
    ratingElement.appendChild(countElement);
    productElement.appendChild(ratingElement);

    var wishlistHeartElement = document.createElement('span');
    wishlistHeartElement.classList.add('wishlist-heart');
    wishlistHeartElement.addEventListener('click', function() {
        wishlistHeartElement.classList.toggle('clicked');
        // Hier den Code einfügen, um das Produkt zur Wunschliste hinzuzufügen oder zu entfernen
    });
    productElement.appendChild(wishlistHeartElement);

    productGrid.appendChild(productElement);
});