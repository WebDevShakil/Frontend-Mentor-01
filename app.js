 const plusBtn = document.querySelector(".cart-plus");
        const minusBtn = document.querySelector(".cart-minus");
        const showcase = document.querySelector(".showcase");
        const thubmnailbtns = document.getElementsByClassName("thubmnail-img");
        const cartshow =document.querySelector(".cart-screen")
        let cart = 0;

        plusBtn.addEventListener("click", () => {
            cart++;
            cartshow.textContent = cart;
        });

        minusBtn.addEventListener("click", () => {
            if (cart > 0) {
                cart--;
                cartshow.textContent = cart;
            }
        });

        for (let i = 0; i < thubmnailbtns.length; i++) {
            thubmnailbtns[i].addEventListener("click", () => {
                showcase.src = `images/image-product-${i + 1}.jpg`;
                
                for (let j = 0; j < thubmnailbtns.length; j++) {
                    thubmnailbtns[j].removeAttribute("id");
                }
                thubmnailbtns[i].setAttribute("id", "product-active");
            });
        }
const menuOpen = document.querySelector(".menu-btn")
const menuExit = document.querySelector(".nav-menu-exit")
const menu = document.querySelector("nav")
 menuOpen.addEventListener("click",()=>{
    menu.style.display="block"
 })
 menuExit.addEventListener("click",()=>{
    menu.style.display="none"
 })