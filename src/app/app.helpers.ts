/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/hide
 *
 */
declare var $: any;

/**
let routes: Route[] = this.router.config;
for (let i = 0; i < routes.length; i++) {
	let route: Route = routes[i];
	if (route.data) {
		console.log(route);
		console.log(route.data);
		let childrens: Route[] = route.children;
		for (let j = 0; j < childrens.length; j++) {
			let children: any = childrens[j];
			let lazys: Route[] = children._loadedConfig.routes;
			for (let k = 0; k < lazys.length; k++) {
				let lazy: Route = lazys[k];
				if (lazy.data) {
					console.log(lazy);
					console.log(lazy.data);
				}
			}
		}
	}
}
*/
export function correctHeight() {

	var pageWrapper = $('#page-wrapper');
	var navbarHeight = $('nav.navbar-default').height();
	var wrapperHeigh = pageWrapper.height();

	if (navbarHeight > wrapperHeigh) {
		pageWrapper.css("min-height", navbarHeight + "px");
	}

	if (navbarHeight < wrapperHeigh) {
		if (navbarHeight < $(window).height()) {
			pageWrapper.css("min-height", $(window).height() + "px");
		} else {
			pageWrapper.css("min-height", navbarHeight + "px");
		}
	}

	if ($('body').hasClass('fixed-nav')) {
		if (navbarHeight > wrapperHeigh) {
			pageWrapper.css("min-height", navbarHeight + "px");
		} else {
			pageWrapper.css("min-height", $(window).height() - 60 + "px");
		}
	}

    $('.pie').peity('pie', {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    })

    $('.line').peity('line',{
        fill: '#1ab394',
        stroke:'#169c81',
    })

    $('.bar').peity('bar', {
        fill: ["#1ab394", "#d7d7d7"]
    })
}

export function detectBody() {
	if ($(document).width() < 769) {
		$('body').addClass('body-small')
	} else {
		$('body').removeClass('body-small')
	}
}

export function smoothlyMenu() {
	if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
		// Hide menu in order to smoothly turn on when maximize menu
		$('#side-menu').hide();
		// For smoothly turn on menu
		setTimeout(
			function() {
				$('#side-menu').fadeIn(400);
			}, 200);
	} else if ($('body').hasClass('fixed-sidebar')) {
		$('#side-menu').hide();
		setTimeout(
			function() {
				$('#side-menu').fadeIn(400);
			}, 100);
	} else {
		// Remove all inline style from $ fadeIn function to reset menu state
		$('#side-menu').removeAttr('style');
	}
}