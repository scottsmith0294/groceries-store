let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").addEventListener("click", () => {
    searchForm.classList.toggle("active");
     shoppingCart.classList.remove("active");
     loginForm.classList.remove("active");
     navBar.classList.remove("active");
});

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").addEventListener("click", () => {
    shoppingCart.classList.toggle("active");
     searchForm.classList.remove("active");
     loginForm.classList.remove("active");
     navBar.classList.remove("active");
});

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").addEventListener("click", () => {
    loginForm.classList.toggle("active");
     searchForm.classList.remove("active");
     shoppingCart.classList.remove("active");
     navBar.classList.remove("active");
});

let navBar = document.querySelector(".navbar");
document.querySelector("#menu-btn").addEventListener("click", () => {
    navBar.classList.toggle("active");
     searchForm.classList.remove("active");
     shoppingCart.classList.remove("active");
     loginForm.classList.remove("active")
});

 window.onscroll = () => {
   searchForm.classList.remove("active");
   shoppingCart.classList.remove("active");
   loginForm.classList.remove("active");
     navBar.classList.remove("active");
    
};
const btnss = document.createElement('button')
btnss.textContent = 'click me'
document.body.appendChild(btnss)
btnss.addEventListener('click', () => {
    console.log('click by sophie')
})

let items = document.querySelectorAll('.items')
console.log(items);
document.items.addEventListener('click', () => {
    console.log('buy pizza');
    
})