AOS.init({ once: true });
let counter = 1;
document.getElementById(`radio${counter}`).checked = true;
counter = 2;
setInterval(function () {
    document.getElementById(`radio${counter}`).checked = true;

    counter++;
    if (counter == 6) {
        counter = 1;
    }
}, 5000);

$(document).ready(
    $(".hamburger").click(function () {
        $("nav .hamburger hr").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $("nav .menu-mobile").toggleClass("active");
    }),
    $(".menu-mobile .produk").click(function () {
        $("nav .menu-mobile").addClass("slide");
        $("nav .hamburger hr").addClass("slide");

        event.preventDefault();
    }),
    $("nav .menu-mobile .back").click(function () {
        $("nav .menu-mobile").removeClass("slide");
        $("nav .hamburger hr").removeClass("slide");
        event.preventDefault();
    }),
    $(".videosec .video .video-cover").click(function () {
        let index = $(".videosec .video .video-cover").index(this);
        $(".videosec .video").eq(index).toggleClass("showvid");
        $(".videosec .video .video-cover").eq(index).toggleClass("showvid");
        $(".video .video-file").eq(index).toggleClass("showvid");
        $(".videosec .video .video-cover svg").eq(index).toggleClass("showvid");
    }),
    $(window).scroll(function () {
        if ($(window).scrollTop() > 90) {
            $("nav").addClass("resize");
            $("nav .logo .text p").addClass("resize");
        } else {
            $("nav").removeClass("resize");
            $("nav .logo .text p").removeClass("resize");
        }
    }),
    $(".odometer").waypoint(
        function () {
            setTimeout(function () {
                $(".odometer").eq(0).html(124);
            }),
                setTimeout(function () {
                    $(".odometer").eq(1).html(7);
                }),
                setTimeout(function () {
                    $(".odometer").eq(2).html(10);
                }),
                setTimeout(function () {
                    $(".odometer").eq(3).html(122);
                });
        },
        {
            offset: "100%",
        }
    ),
    $("section.produk .card a.running-text").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.running-text").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("section.produk .card a.videotron").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.videotron").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("section.produk .card a.jam-sholat-digital").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.jam-sholat-digital").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("section.produk .card a.led-strip").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.led-strip").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".produk-show .cover").click(function () {
        $(".produk-show").removeClass("card-show");
        $(".produk-show .card-full").removeClass("card-show");
        $(".produk-show .cover").removeClass("card-show");
        $("body").removeClass("no-scroll");
    }),
    $(".produk-show .cross ").click(function () {
        $(".produk-show").removeClass("card-show");
        $(".produk-show .card-full").removeClass("card-show");
        $(".produk-show .cover").removeClass("card-show");
        $("body").removeClass("no-scroll");
    }),
    $("nav .menu-mobile .menu-first .home").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("body").removeClass("no-scroll");
        $("nav .hamburger hr").removeClass("active");
    }),
    $("nav .menu-mobile .menu-first .galeri").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("body").removeClass("no-scroll");
        $("nav .hamburger hr").removeClass("active");
    }),
    $("nav .menu-mobile .menu-first .lokasi").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("body").removeClass("no-scroll");
        $("nav .hamburger hr").removeClass("active");
    }),
    $("nav .menu-mobile .menu-first .kontak").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("body").removeClass("no-scroll");
        $("nav .hamburger hr").removeClass("active");
    }),
    $("nav .menu-mobile .menu-second a.running-text").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("nav .hamburger hr").removeClass("active");
        $(".produk-show").addClass("card-show");
        $(".card-full.running-text").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu-mobile .menu-second a.videotron").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("nav .hamburger hr").removeClass("active");
        $(".produk-show").addClass("card-show");
        $(".card-full.videotron").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu-mobile .menu-second a.jam-sholat-digital").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("nav .hamburger hr").removeClass("active");
        $(".produk-show").addClass("card-show");
        $(".card-full.jam-sholat-digital").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu-mobile .menu-second a.led-strip").click(function () {
        $("nav .menu-mobile").removeClass("active");
        $("nav .hamburger hr").removeClass("active");
        $(".produk-show").addClass("card-show");
        $(".card-full.led-strip").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu .dropdown a.running-text").click(function () {
        $(".produk-show").addClass("card-show");
        $(".card-full.running-text").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu .dropdown a.videotron").click(function () {
        $(".produk-show").addClass("card-show");
        $(".card-full.videotron").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu .dropdown a.jam-sholat-digital").click(function () {
        $(".produk-show").addClass("card-show");
        $(".card-full.jam-sholat-digital").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $("nav .menu .dropdown a.led-strip").click(function () {
        $(".produk-show").addClass("card-show");
        $(".card-full.led-strip").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .big-1 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.videotron").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .small-1 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.running-text").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .small-2 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.running-text").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .small-3 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.running-text").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .small-4 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.videotron").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .medium-1 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.jam-sholat-digital").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".galeri .medium-2 .text  a").click(function () {
        event.preventDefault();
        $(".produk-show").addClass("card-show");
        $(".card-full.videotron").addClass("card-show");
        $(".produk-show .cover").addClass("card-show");
        $("body").addClass("no-scroll");
    }),
    $(".produk-show .card-full .text a.contactus").click(function () {
        $(".produk-show").removeClass("card-show");
        $(".produk-show .card-full").removeClass("card-show");
        $(".produk-show .cover").removeClass("card-show");
        $("body").removeClass("no-scroll");
    })
);
