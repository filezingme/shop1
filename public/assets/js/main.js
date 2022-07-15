/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});
		}

	//
		$(document).ready(function() {
			//console.log( "ready loaded" );

			//Check to see if the window is top if not then display button
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('#toTop').fadeIn();
				} else {
					$('#toTop').fadeOut();
				}
			});
			
			//Click event to scroll to top
			$('#toTop').click(function(){
				$('html, body').animate({scrollTop : 0},100);
				return false;
			});
		});
	
		$(window).on( "load", function() {
			//console.log( "window loaded" );

			//zoom out/in photo
			var lightgalleries = document.querySelectorAll('.lightgallery');
			lightgalleries.forEach(function (lightgallery) {
				if (lightgallery){
					lightGallery(lightgallery);
				}
			});
	
			//Click Buy button go to contact form
			$('.buy').click(function(){
				$('html, body').animate({
					scrollTop: $("#contact").offset().top
				},100);
				return false;
			});

			//menu
			$('.menu-toggle').on('click',function(e) {
				e.preventDefault();

				var parent = $(this).parent();
				parent.append( $('#menu'));

				$("#menu").slideToggle();
			});
		});
})(jQuery);