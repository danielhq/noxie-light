'use strict';

jQuery.noConflict();

jQuery( document ).ready( function( $ ) {
	if ( typeof FastClick === 'function' && Fastclick ) {
		FastClick.attach(document.body);
	} else {
		console.log("move fastclick from bower_components into js")
	}
	$("#nav").on('click', '.js-toggle', function(e) {
		$(this).parents('#nav').toggleClass('nav--active');
		e.preventDefault();
	});

});
