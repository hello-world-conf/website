 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	function createSpeakerElement(name, avatar, bio, title, facebook, twitter, github) {
		return `<div class="row align-items-center speaker">
        <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
          <img src="${avatar}" alt="Image" class="img-fluid">
        </div>
        <div class="col-lg-6 ml-auto">
          <h2 class="text-white mb-4 name" data-aos="fade-right" data-aos-delay="200">${name}</h2>
          <div class="bio pl-lg-5">
            <span class="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">${title}</span>
            <p class="mb-4" data-aos="fade-right" data-aos-delay="400">${bio}
            </p>
            <p data-aos="fade-right" data-aos-delay="500">
              Follow ${name.split(" ")[0]} &mdash;
              <a href="${(facebook !== '#' ? 'https://fb.me/' + facebook : '#')}" class="p-2 text-primary"><span class="icon-facebook"></span></a>
              <a href="${(twitter !== '#' ? 'https://twitter.com/' + twitter : '#')}" class="p-2 text-primary"><span class="icon-twitter"></span></a>
              <a href="${(github !== '#' ? 'https://github.com/' + github : '#')}" class="p-2 text-primary"><span class="icon-github"></span></a>
            </p>
          </div>
        </div>
	  </div>`
	}

	var fetchSpeakerInformation = function() {
		$.get( "https://hello-world-conf.firebaseio.com/speakers.json", function( speakers ) {
			if (speakers === null) {
				$("#speakers").append("<div data-aos=\"fade-up\" data-aos-delay=\"100\"><h3>We'll be announcing our speakers really soon!<br/><br/>Stay tunned for updates.</h3></div>");
			} else {
				Object.keys(speakers).forEach((speaker) => {
					$("#speakers").append(createSpeakerElement(speakers[speaker].name, speakers[speaker].avatar, speakers[speaker].bio, speakers[speaker].title, speakers[speaker].facebook, speakers[speaker].twitter, speakers[speaker].github))
				})
			}
		}, "json" );
	}
	fetchSpeakerInformation();
	
	function createScheduleInformation(speaker, talk, slot) {
		return `<div class="row align-items-stretch program">
		<div class="col-12 border-top border-bottom py-5" data-aos="fade" data-aos-delay="200">
		<div class="row align-items-stretch">
			<div class="col-md-3 text-white mb-3 mb-md-0"><span class="h4">${slot}</span></div>
			<div class="col-md-9">
			<h2 class="text-white">${talk}</h2>
			<span>${(speaker === 'break' ? '' : speaker)}</span>
			</div>
		</div>
		</div>`
	}

	var fetchScheduleInformation = function() {
		$.get( "https://hello-world-conf.firebaseio.com/schedule.json", function( schedule ) {
			Object.keys(schedule).forEach((item) => {
				$("#schedule").append(createScheduleInformation(schedule[item].speaker, schedule[item].talk, schedule[item].slot))
			})
		}, "json" );
	}
	fetchScheduleInformation();

	function createSponsorTierElement(tier) {
		switch (tier) {
			case 0:
				tierName = "Gold";
				break;
			case 1:
				tierName = "Silver";
				break;
			case 2:
				tierName = "Bronze";
				break;
		}
		return `<div class="row">
          <div class="col-lg-4 ">
            <div class="site-section-heading" data-aos="fade-up">
              <h3 class="text-primary">${tierName}</h3>
            </div>
          </div>
        </div>`
	}

	function createSponsorTierRow() {
		return `<div class="row mb-5"></row>`
	}

	function createSponsorInformationElement(logo, url) {
		return `<div class="col-md-3" data-aos="fade" data-aos-delay="200">
			<a href="${url}"><img src="${logo}" alt="${url}" class="img-fluid"></a>
		</div>`
	}

	var fetchSponsorsInformation = function() {
		$.get( "https://hello-world-conf.firebaseio.com/sponsors.json", function( sponsors ) {
			Object.keys(sponsors).forEach((sponsor) => {
				$("#sponsors").append(createSponsorTierElement(sponsor))
				$("#sponsors").append(createSponsorTierRow)
				sponsors[sponsor].forEach((item) => {
					$("#sponsors .row.mb-5").last().append(createSponsorInformationElement(item.logo, item.url))
				})
			})
		}, "json" );
	}
	fetchSponsorsInformation();
});
