

////////////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#land-nav').addClass('sticky')
    } else {
        $('#land-nav').removeClass('sticky')

    }

});



(function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();

//////////////////////////////////////////
// Navbar-scroll

// $('a[href^="#"]').on('click', function (e) {
//     var target = this.hash,
//         $target = $(target);

//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top - 70
//     }, 200, 'swing', function () {
//         window.location.hash = target;
//     });
// });


/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".land-nav")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
}


openBtn.addEventListener("click", mobileMenu)



/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});





// const contactForm = document.querySelector("#contact-form");
// if (contactForm) {
//     $("#contact-form").submit((e) => {
//         e.preventDefault()
//         console.log();
//         $.ajax({
//             url: $("#contact-form").attr('action'),
//             crossDomain: true,
//             data: $("#contact-form").serialize(),
//             method: "POST",
//             type: 'json',
//             beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
//                 $('#form-btn').addClass('d-none')
//                 $('.loaderr').removeClass('d-none')

//             },
//             success: function (response) {

//                 swal("Your data has  submitted successfuly. please contact us  +91 80781 55047", "", "success");
//                 $("#contact-form")[0].reset()

//                 //window.location.href="https://google.com"
//             },
//             error: function (err) {
//                 alert("Something Error")

//             },
//             complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
//                 $('#form-btn').removeClass('d-none')
//                 $('.loaderr').addClass('d-none')
//             },
//         })
//     })

// }

// //////////////////
//GALLERY

// const info = document.querySelectorAll(".projects__info");
// const projectBtns = document.querySelectorAll(".projects__btn");
// let clickedBtn;

// projectBtns.forEach(el => {
//     el.addEventListener("click", () => {
//         clickedBtn = el.closest(".projects__info")

//         console.log(clickedBtn);
//     })
// })
// $('.projects__btn').magnificPopup({
//     type: 'image',
//     gallery: {
//         enabled: true
//     },
//     callbacks: {
//         open: function () {
//             $.magnificPopup.instance.close = function () {
//                 $.magnificPopup.proto.close.call(this);
//                 clickedBtn.style.bottom = "0rem"
//                 setTimeout(() => {
//                     clickedBtn.style.bottom = "-6rem"
//                 }, 200)
//             };

//         }
//     }
// })

// //////////////////////////
// // project

// const projectBtn = document.querySelectorAll(".projects__single-item")

// projectBtn.forEach((btn) => {
//     btn.addEventListener("click", (el) => {
//         let projectInfo = el.target.closest(".projects__outer");

//         console.log(projectInfo.style);
//         projectInfo.style.bottom = "-6rem"
//     })
// })



// AOS.init({ once: true });

// const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } })

// tl.fromTo('.header__circle', { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 })
// tl.fromTo('.header__circle-div img', { scale: 0, zIndex: 0 }, { scale: 1, zIndex: 2, duration: 0.5 }, '<50%')
// tl.fromTo('.text-only', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<50%')
// tl.fromTo('.text-milk', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')
// tl.fromTo('.text-avil', { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }, '<50%')
// // tl.fromTo('.header__title', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<50%')
// tl.fromTo('.header__features', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<50%')
// tl.fromTo('.header__btn', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<')
// tl.fromTo('.header__sub-title', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<')
// tl.fromTo('.header__title--mobile', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<')