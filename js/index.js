window.onload = function() {

    // main slider start
    let slides = document.querySelectorAll(".main-slider__item");
    if(document.querySelector(".main-slider__item")){
        let slider_leftBTN = document.querySelector(".slider-arrow__left");
        let slider_rightBTN = document.querySelector(".slider-arrow__right");
        let visibleSlide = 0;

        slides.forEach(i =>{
            let sliderDotsInner = document.querySelector(".slider-dots");
            sliderDotsInner.innerHTML += '<div class="slider-dot"><span class="slider-dot__inner"></span></div>';
        })
        let sliderDots = document.querySelectorAll(".slider-dot");
        sliderDots[0].classList.add("selected");

        let changeSlide = (pos, tp = -1)=>{
            let oldSlide = visibleSlide;
            slides.forEach(i =>{
                i.classList.remove("visible");
                i.classList.remove("hiding");
            })
            slides[oldSlide].classList.add("hiding");
            const myTimeout = setTimeout(()=>{
                slides[oldSlide].classList.remove("hiding");
            }, 500);
            if(tp < 0){
                visibleSlide = visibleSlide + pos;
            }
            else{
                visibleSlide = tp;
            }
            if(visibleSlide === slides.length){
                visibleSlide = 0;
            }
            else if(visibleSlide <0){
                visibleSlide =  slides.length - 1;
            }
            slides[visibleSlide].classList.add("visible");
            
            sliderDots.forEach((i)=>{
                i.classList.remove("selected");
            })
            sliderDots[visibleSlide].classList.add("selected");
        }
        slider_rightBTN.addEventListener("click", ()=>{changeSlide(1)});
        slider_leftBTN.addEventListener("click", ()=>{changeSlide(-1)});
        sliderDots.forEach ((item, num)=>{
            item.addEventListener('click', ()=>{
                changeSlide(0, num);
            })
        })
    }
    
    // main slider end

    // menu fixed start
    window.addEventListener("scroll", (e)=>{
        let menu = document.querySelector(".main-menu");
        let goUPbtn = document.querySelector(".fixed-up");
        let pageHead = document.querySelector(".page-head__wrapper");
        if(pageHead.getBoundingClientRect().y <=-100){
            if(!menu.classList.contains("menu-fixed")){
                menu.classList.add("menu-fixed");
                goUPbtn.classList.add("visible");
            }
        }
        else{
            if(menu.classList.contains("menu-fixed")){
                menu.classList.remove("menu-fixed");
                goUPbtn.classList.remove("visible");
            }
        }
    })
    // menu fixed end

    // mobile burger menu start
    let menuBurgerBTN = document.querySelector("#menu-burger");
    menuBurgerBTN.addEventListener("click", ()=>{
        let navbar = document.querySelector(".navbar-collapse");
        navbar.classList.toggle("collapse");
    })
    // mobile burger menu end

    // go up start
    let goUPbtn = document.querySelector(".fixed-up");
    goUPbtn.addEventListener('click', ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        return false;
    })
    // go up end

    
};




// owl carousel 
$(document).ready(function(){
    if(document.querySelector(".gallery__owl-carousel")){
        $(".gallery__owl-carousel").lightGallery({
            thumbnail: true,
        });
        $('.gallery__owl-carousel').owlCarousel({
            loop:false,
            rewind: true,
            nav:true,
            navText : ["<div class='carousel__arrow-btn'><i class='fa fa-chevron-left'></i></div>","<div class='carousel__arrow-btn'><i class='fa fa-chevron-right'></i></div>"],
            dots:false,
            autoplay:true,
            autoplayTimeout:7500,
            autoplaySpeed:1000,
            lazyLoad:true,
            responsive:{
                0:{
                    items:1
                },
                651:{
                    items:2
                },
                992:{
                    items:4
                }
            }
        })
        
    }
    if(document.querySelector('.feedback__owl-carousel')){
        $('.feedback__owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            navContainer:".feedback-nav",
            navText : ["<div class='carousel__arrow-btn feedback__arrow-btn'><i class='fa fa-chevron-left'></i></div>","<div class='carousel__arrow-btn feedback__arrow-btn'><i class='fa fa-chevron-right'></i></div>"],
            dots:false,
            autoplay:true,
            autoplayTimeout:6000,
            autoplaySpeed:1000,
            lazyLoad:true,
            responsive:{
                0:{
                    items:1
                },
                992:{
                    items:2
                }
            }
        })
    }
    
});

