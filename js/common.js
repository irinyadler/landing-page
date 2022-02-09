/*var ismobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i)
var ispad = navigator.userAgent.match(/(iPad)/i)*/


$(document).ready(function () {
    /*(function(w, d) {
        var strid = '__cookie_bar__';
        if (d.cookie.indexOf(strid) !== -1) return;
        var cookieAbort = function() {
            d.cookie = strid + '=1; expires=' + (new Date((new Date()).getTime() + 1000 * 365 * 24 * 60 * 60)).toGMTString() + '; path=/';
            d.getElementById('cookiebar').style.display = 'none';
        };
        d.getElementById('cookiebar').style.display = 'block';
        d.getElementById('cookiebar-btn').onclick = cookieAbort;
        w.onclick = cookieAbort;
        if (0) d.getElementById('cookie-wrapper').addEventListener('click', cookieAbort, true);
        if (0) w.addEventListener('scroll', cookieAbort, false);
    })(window, document);*/

    //cookie

    /* function setCookie(name, value, days) {
         var expires = "";
         if (days) {
             var date = new Date();
             date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
             expires = "; expires=" + date.toUTCString();
         }
         document.cookie = name + "=" + (value || "") + expires + "; path=/";
     }
     function getCookie(name) {
         var nameEQ = name + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
             var c = ca[i];
             while (c.charAt(0) == ' ') c = c.substring(1, c.length);
             if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
         }
         return null;
     }
 
     function eraseCookie(name) {
         document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     }
 
     function cookieConsent() {
         if (!getCookie('allowCookies')) {
             $('#cookiebar').show();
         }
     }
 
     $('#btnDeny').click(function () {
         eraseCookie('allowCookies')
         $('#cookiebar').hide();
     });
 
     $('#btnAccept').click(function () {
         setCookie('allowCookies', '1', 7)
         $('#cookiebar').hide();
     });
 
     // load
     cookieConsent();*/



    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {

            e.preventDefault();
            if (this.classList.contains("is-active") === true) {
                this.classList.remove("is-active");
                $('.nav-item.dropdown .dropdown-menu').removeClass('show');
            } else
                this.classList.add("is-active");
        });
    }

    /*$("#form button").click(function () {
        var consenso;
        if (checkForm()) {
            if ($("#consenso")[0].checked == true)
                consenso = 'Y';
            else
                consenso = 'N';

            jQuery.ajax({
                method: "POST",
                url: "ws.php",
                dataType: "json",
                data: {
                    token: "0123456",
                    action: "invioDati",
                    name: ($("#name").val().trim()),
                    email: ($("#email").val().trim()),
                    phone: ($("#phone").val().trim()),
                    consenso: (consenso)
                },
                success: function (response) {
                    console.log(response);
                    if (response != undefined) {
                        if (response.datipresenti != undefined) {
                            swal('Utente gia\' presente');
                        } else if (response.datiinseriti != undefined) {
                            swal('Grazie per esserti iscritto');
                        }
                    }
                },
                error: function (status) {
                    console.log(status);
                }
            });
        }
    });

    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $('html, body').stop().animate({
            scrollTop: $(target).position().top
        }, 600, function () {
            //location.hash = target; 
        });

        return false;
    });*/

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

});

$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play(); $(this).children(".video-button").fadeOut();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".video-button").fadeIn();
    }
});



$(".brand").hover(function () {
    $(this).find(".onhover").addClass("active", 2000);
    $(this).find('.brand-logo').css("visibility", "hidden");
},
    function () {
        $(this).find(".onhover").removeClass("active", 2000);
        $(this).find('.brand-logo').css("visibility", "visible");

    });



window.addEventListener('scroll', function () {
    const vh = window.innerHeight;
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > vh);
})

//GSAP ANIMATION ON SCROLL
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
    // desktop only
    "(min-width: 993px)": function () {
        gsap.to(".scroll-img", {
            scrollTrigger: {
                trigger: ".scroll-img",
                start: "top top",
                end: "2400px",
                toggleActions: "restart pause reverse pause",
                scrub: true
            },
            y: 2200,
            rotation: 360,
            duration: 5,
        });
    }
});


/*$(window).scroll(function () {

}).scroll();

$(window).on("load", function () {
    $('#mixedSlider').multislider({
        duration: 750,
        interval: 0,
        continuous: false,
        slideAll: false
    });
});

$(window).resize(function () {

});


function checkForm() {
    var tuttok = true;

    $("#name").removeClass("error");
    $("#email").removeClass("error");

    if (($("#name").val() + "").trim().length < 1) {
        tuttok = false;
        $("#name").addClass("error");
    }
    if (($("#email").val() + "").trim().length < 1) {
        tuttok = false;
        $("#email").addClass("error");
    }

    return tuttok;
}*/


