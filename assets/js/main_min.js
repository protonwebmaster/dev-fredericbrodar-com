!function(o){"use strict";o(window).on("load",function(){o("#preloader").length&&o("#preloader").delay(100).fadeOut("slow",function(){o(this).remove()})});var e=o("#header").outerHeight()-21;window.matchMedia("(max-width: 991px)").matches&&(e+=20),o(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=o(this.hash);if(a.length){t.preventDefault();var l=a.offset().top-e;return"#header"==o(this).attr("href")&&(l=0),o("html, body").animate({scrollTop:l},1500,"easeInOutExpo"),o(this).parents(".nav-menu, .mobile-nav").length&&(o(".nav-menu .active, .mobile-nav .active").removeClass("active"),o(this).closest("li").addClass("active")),o("body").hasClass("mobile-nav-active")&&(o("body").removeClass("mobile-nav-active"),o(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),o(".mobile-nav-overly").fadeOut()),!1}}}),o(document).ready(function(){if(window.location.hash){var t=window.location.hash;if(o(t).length){var a=o(t).offset().top-e;o("html, body").animate({scrollTop:a},1500,"easeInOutExpo")}}});var t=o("section"),a=o(".nav-menu, .mobile-nav");if(o(window).on("scroll",function(){var e=o(this).scrollTop()+200;t.each(function(){var t=o(this).offset().top,l=t+o(this).outerHeight();e>=t&&e<=l&&(e<=l&&a.find("li").removeClass("active"),a.find('a[href="#'+o(this).attr("id")+'"]').parent("li").addClass("active")),e<300&&o(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass("active")})}),o(".nav-menu").length){var l=o(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"});o("body").append(l),o("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),o("body").append('<div class="mobile-nav-overly"></div>'),o(document).on("click",".mobile-nav-toggle",function(e){o("body").toggleClass("mobile-nav-active"),o(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),o(".mobile-nav-overly").toggle()}),o(document).on("click",".mobile-nav .drop-down > a",function(e){e.preventDefault(),o(this).next().slideToggle(300),o(this).parent().toggleClass("active")}),o(document).click(function(e){var t=o(".mobile-nav, .mobile-nav-toggle");t.is(e.target)||0!==t.has(e.target).length||o("body").hasClass("mobile-nav-active")&&(o("body").removeClass("mobile-nav-active"),o(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),o(".mobile-nav-overly").fadeOut())})}else o(".mobile-nav, .mobile-nav-toggle").length&&o(".mobile-nav, .mobile-nav-toggle").hide();function n(){AOS.init({duration:1e3,once:!0})}o(window).scroll(function(){o(this).scrollTop()>100?(o("#header").addClass("header-scrolled"),o("#topbar").addClass("topbar-scrolled")):(o("#header").removeClass("header-scrolled"),o("#topbar").removeClass("topbar-scrolled"))}),o(window).scrollTop()>100&&(o("#header").addClass("header-scrolled"),o("#topbar").addClass("topbar-scrolled")),o(window).scroll(function(){o(this).scrollTop()>100?o(".back-to-top").fadeIn("slow"):o(".back-to-top").fadeOut("slow")}),o(".back-to-top").click(function(){return o("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),o(".skills-content").waypoint(function(){o(".progress .progress-bar").each(function(){o(this).css("width",o(this).attr("aria-valuenow")+"%")})},{offset:"80%"}),o('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),o(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),o(window).on("load",function(){var e=o(".portfolio-container").isotope({itemSelector:".portfolio-item"});o("#portfolio-flters li").on("click",function(){o("#portfolio-flters li").removeClass("filter-active"),o(this).addClass("filter-active"),e.isotope({filter:o(this).data("filter")}),n()}),o(document).ready(function(){o(".venobox").venobox()})}),o(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),o(window).on("load",function(){n()})}(jQuery);