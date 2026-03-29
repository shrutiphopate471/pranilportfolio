    //  $(document).ready(function () {

    //         $("#portfolio-flters li").click(function () {
    //             $("#portfolio-flters li").removeClass("filter-active");
    //             $(this).addClass("filter-active");

    //             var filter = $(this).data("filter");

    //             if (filter == "all") {
    //                 $(".portfolio-item").fadeIn();
    //             } else {
    //                 $(".portfolio-item").hide();
    //                 $(filter).fadeIn();
    //             }
    //         });

    //     });
    //     AOS.init({
    //         duration: 800,
    //         easing: 'ease-in-out',
    //         once: true
    //     });
    //     var swiper = new Swiper(".portfolio-slider", {
    //         speed: 800,
    //         loop: true,
    //         autoplay: {
    //             delay: 3000,
    //             disableOnInteraction: false
    //         },
    //         slidesPerView: 1,
    //         spaceBetween: 20,

    //         breakpoints: {
    //             768: {
    //                 slidesPerView: 2
    //             },
    //             992: {
    //                 slidesPerView: 3
    //             }
    //         },

    //         pagination: {
    //             el: ".swiper-pagination",
    //             clickable: true
    //         },

    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev"
    //         }
    //     });

  
        var homeSwiper = new Swiper(".homeSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 }
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".homeSwiper .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".home-next",
                prevEl: ".home-prev"
            }
        });

        var profileSwiper = new Swiper(".profileSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 }
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".profileSwiper .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".profile-next",
                prevEl: ".profile-prev"
            }
        });

        var contactSwiper = new Swiper(".contactSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 }
            },
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".contactSwiper .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".contact-next",
                prevEl: ".contact-prev"
            }
        });


        // 🔥 IMPORTANT FIX (tabs issue)
        document.querySelectorAll('button[data-bs-toggle="pill"]').forEach(tab => {
            tab.addEventListener('shown.bs.tab', function () {

                setTimeout(() => {
                    homeSwiper.update();
                    profileSwiper.update();
                    contactSwiper.update();

                    homeSwiper.slideTo(0);
                    profileSwiper.slideTo(0);
                    contactSwiper.slideTo(0);
                }, 200);

            });
        });