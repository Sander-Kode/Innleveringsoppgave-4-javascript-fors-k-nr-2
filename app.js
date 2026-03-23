

const products = [
    {
        id: 1,
        name: 'Apple',
        price: 10
    },

    {
        id: 2,
        name: 'Orange',
        price: 12
    },

    {
        id: 3,
        name: 'Kiwi',
        price: 8
    },

    {
        id: 4,
        name: 'Pineapple',
        price: 15
    },

    {
        id: 5,
        name: 'Bread',
        price: 27
    },

    {
        id: 6,
        name: 'Cheese',
        price: 46
    },
]


//Array for produkter brukeren legge i handlekurven
let cart = [];

//Henter HTML elementer fra siden

const productsContainer = document.getElementById("products-container");
const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");


//Funksjon som viser alle produktene

function showProducts() {
    productsContainer.innerHTML = "";

    for (let product of products) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price} NOK</p>
            <button onclick="addToCart(${product.id})">Add to cart</button>


        `;
        productsContainer.appendChild(productCard);
    }

}

//Funksjon som legger til et produkt i handlekurven

function addToCart(productId){
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct);
    showCart();
}

//Funksjon som fjerner et produkt fra handlekurven

function removeFromCart(index){
    cart.splice(index, 1);
    showCart();

}


//Selve funksjonen for å vise handlekurven på siden

function showCart(){
    cartContainer.innerHTML = "";


    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart">Shopping cart is empty</p>`;
        totalPrice.textContent = "Total: 0 NOK";
        return;
    }

    let total = 0;

    for (let i = 0; i <= cart.length; i++) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <h3>${cart[i].name}</h3>
            <p>Price: ${cart[i].price} NOK</p>
            <button onclick="removeFromCart(${i})">Remove from cart</button>        
        `;

        cartContainer.appendChild(cartItem);
        total += cart[i].price;
    }

    totalPrice.textContent = `Total ${total}`;

}

showProducts();
showCart();
