var swiper = new Swiper(".menu-Swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".menu__slider-next",
        prevEl: ".menu__slider-prev",
    },
    center: true,
    centeredSlides: true,
    breakpoints: {
        400: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 50,
        }
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
});
var swiper2 = new Swiper(".menu-slider-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".items-1__slider-next",
        prevEl: ".items-1__slider-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 70,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
});
var swiper5 = new Swiper(".menu-slider-Swiper-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".items-2__slider-next",
        prevEl: ".items-2__slider-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 70,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
});
var swiper3 = new Swiper(".outlets-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".outlets__slider .swiper-button-next",
        prevEl: ".outlets__slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    },

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
});
var swiper4 = new Swiper(".guest-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".guest__slider-next",
        prevEl: ".guest__slider-prev",
    },
    centeredSlides: false,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

//////////////////


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


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





//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});


/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.add("active");
    nav_list.classList.add("active")
    overlay.classList.remove("hidden")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
    overlay.classList.add("hidden")
}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)
overlay.addEventListener("click", mobileMenuClose)

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





const contactForm = document.querySelector("#contact-form");
if (contactForm) {
    $("#contact-form").submit((e) => {
        e.preventDefault()
        console.log();
        $.ajax({
            url: $("#contact-form").attr('action'),
            crossDomain: true,
            data: $("#contact-form").serialize(),
            method: "POST",
            type: 'json',
            beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
                $('#form-btn').addClass('d-none')
                $('.loaderr').removeClass('d-none')

            },
            success: function (response) {

                swal("Your data has  submitted successfuly. please contact us  +91 80781 55047", "", "success");
                $("#contact-form")[0].reset()

                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")

            },
            complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                $('#form-btn').removeClass('d-none')
                $('.loaderr').addClass('d-none')
            },
        })
    })

}

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



AOS.init({ once: true });

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } })

tl.fromTo('.header__circle', { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 })
tl.fromTo('.header__circle-div img', { scale: 0, zIndex: 0 }, { scale: 1, zIndex: 2, duration: 0.5 }, '<50%')
tl.fromTo('.text-only', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<50%')
tl.fromTo('.text-milk', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')
tl.fromTo('.text-avil', { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }, '<50%')
// tl.fromTo('.header__title', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<50%')
tl.fromTo('.header__features', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<50%')
tl.fromTo('.header__btn', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<')
tl.fromTo('.header__sub-title', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<')
tl.fromTo('.header__title--mobile', { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '<')