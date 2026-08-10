/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$nav = $('#nav'),
			$main = $('#main'),
			$navPanelToggle, $navPanel, $navPanelInner;

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Intro.
			var $intro = $('#intro');

			if ($intro.length > 0) {
				// Hack: Fix flex min-height on IE.
					$window.on('resize.ie-intro-fix', function() {
						var h = $intro.height();
						if (skel.vars.IEVersion < 11 && h > $window.height())
							$intro.css('height', 'auto');
						else
							$intro.css('height', h);
					}).trigger('resize.ie-intro-fix');

				// Hide intro on scroll (> small).
					skel.on('!small -small', function() {
						$main.unscrollex();
						$main.scrollex({
							mode: 'bottom',
							top: '20vh',
							bottom: '-50vh',
							enter: function() {
								$intro.addClass('hidden');
							},
							leave: function() {
								$intro.removeClass('hidden');
							}
						});
					});

				// Hide intro on scroll (<= small).
					skel.on('+small', function() {
						$main.unscrollex();
						$main.scrollex({
							mode: 'middle',
							top: '15vh',
							bottom: '-15vh',
							enter: function() {
								$intro.addClass('hidden');
							},
							leave: function() {
								$intro.removeClass('hidden');
							}
						});
				});
			}

	});
})(jQuery);
