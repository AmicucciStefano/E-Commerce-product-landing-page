/* Todo bien hecho de aca para abajo */
/* carrusel de fotos */

const slides = document.querySelectorAll(".slide")
const right = document.querySelector(".arrowright")
const left = document.querySelector(".arrowleft")

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
})
let counter = 0;
right.addEventListener("click", function(){
    counter++
    carousel()
})
left.addEventListener("click", function(){
    counter--
    carousel()
})

function carousel(){
    if (counter === slides.length) {
        counter = 0
    }
    if(counter < 0) {
        counter = slides.length - 1
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

/* Menu toggle button */
const menuToggle = document.querySelector(".menu-toggle")
const links = document.querySelector(".links")
const cross = document.querySelector(".cross")

menuToggle.addEventListener("click", function() {
    links.classList.toggle("show-links")
})

cross.addEventListener("click", function() {
    links.classList.toggle("show-links")
})

/* Button add to cart */
const btnAddToCart = document.querySelector(".button-addtocart")
const modalText = document.querySelector(".div-modal-text")
btnAddToCart.addEventListener("click", function(){
    if(integer === 0) {
        return
    } else
    showAmount()
    modalText.style.paddingTop = "20px"
    modalText.innerHTML = `
    <div class="product center">
        <div>
            <img class="img-product" src="images/image-product-1-thumbnail.jpg" alt="thumbnail1">
        </div>
        <div class="text-product">
            <p>Fall Limited Edition Sneakers...</p>
            <p>125.00$ x ${integer} <span class="result">$${integer * 125}.00</span></p>
        </div>
        <div class="div-trash">
            <i class="trash fa-solid fa-trash-can"></i>
        </div>
    </div>
    <button class="checkout">Checkout</button>
    `
    integer = 0;
    number.innerHTML = "0";

    /* Button trash */
    const trashBtn = document.querySelector(".div-trash")
    trashBtn.addEventListener("click", function() {
        modalText.style.paddingTop = "4rem"
        modalText.innerHTML = '<p class="modal-text">Your cart is empty.</p>'
        showAmount()
    })
})

/* Modal button */
const cart = document.querySelector(".cart")
const modal = document.querySelector(".modal")
cart.addEventListener("click", function() {
    modal.classList.toggle("show-modal")
})

/*button add and rest  */
const add = document.querySelector(".add")
const rest = document.querySelector(".rest")
const number = document.querySelector(".number")

let integer = 0;

/* amount in cart text */
const amounInCart = document.querySelector(".amountInCart")
function showAmount() {
    if(integer === 0){
        amounInCart.classList.add("hidden")
    } else {
        amounInCart.classList.remove("hidden")
        amounInCart.textContent = `${integer}`
    }
}
showAmount()

add.addEventListener("click", function() {
    integer = integer + 1;
    number.textContent = `${integer}`
})

rest.addEventListener("click", function() {
    if(integer === 0) {
        return 
    } else
    integer = integer - 1;
    number.textContent = `${integer}`
})


/* change photos by click thumbnails*/
const thumbnails = document.querySelectorAll(".thumbnail")
thumbnails.forEach(img => {
    img.addEventListener("click", onThumbClick)
})

function onThumbClick(e){
    thumbnails.forEach(img => {
        img.classList.remove("active");
    });
    e.target.classList.add("active");

    let index = e.currentTarget.id
    counter = index
    carousel()
}

/* modal for the main image */
const modalImage = document.querySelector(".modal-image")
const images = document.querySelector(".images")

slides.forEach(img => {
    if(window.innerWidth >= 1200) {
        img.addEventListener("click", function(){
            modalImage.classList.remove("hidden")
            if(modalImage.childElementCount == 1){
                const newNode = images.cloneNode(true);
                modalImage.appendChild(newNode)
            }
            /* Esto esta dentro del event porque sino no puedo declarar las constantes con los respectivos elementos dentro del modalImage ya que se crea cuando le doy click a la imagen! */
            /* Apartir de aca esta copiado el codigo del carousel para mover en el modal de la foto con zoom, deberia modificarlo para no copiar y pegar tanto codigo!!!! */
            const slidesModal = modalImage.querySelectorAll(".slide")
            const rightModal = modalImage.querySelector(".arrowright")
            const leftModal = modalImage.querySelector(".arrowleft")

            slidesModal.forEach(function(slide, index) {
                slide.style.left = `${index * 100}%`
            })
            let counterModal = 0;
            rightModal.addEventListener("click", function(){
                counterModal++
                carouselModal()
            })
            leftModal.addEventListener("click", function(){
                counterModal--
                carouselModal()
            })

            function carouselModal(){
                if (counterModal === slidesModal.length) {
                    counterModal = 0
                }
                if(counterModal < 0) {
                    counterModal = slidesModal.length - 1
                }
                slidesModal.forEach(function(slide){
                    slide.style.transform = `translateX(-${counterModal * 100}%)`
                })
            }
            /* Aca termina el carousel copiado!!!! */
            const allImagesModal = modalImage.querySelectorAll(".thumbnail")

            allImagesModal.forEach(img => {
                img.addEventListener("click", onThumbClickModal)
            })
            
            function onThumbClickModal(e){
                allImagesModal.forEach(img => {
                    img.classList.remove("active");
                });
                e.target.classList.add("active");
                let indexmodal = e.currentTarget.id
                counterModal = indexmodal
                carouselModal()
            }

        })
        const modalCross = document.querySelector(".modalcross")

        modalCross.addEventListener("click", function(){
            modalImage.classList.add("hidden")
        })
    }
})
