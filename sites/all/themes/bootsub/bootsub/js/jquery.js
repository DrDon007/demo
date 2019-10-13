jQuery(document).ready(function($){
$('head').append('<script src="/drupal/sites/all/libraries/slick/slick/slick.min.js"></script>');
   $('head').append('<link type="text/css" rel="stylesheet" href="/drupal/sites/all/libraries/slick/slick/slick-theme.css" media="all"><link type="text/css" rel="stylesheet" href="/drupal/sites/all/libraries/slick/slick/slick.css" media="all">');
   
	/*Home Banner slide Show*/
$('.slide').slick({
		  autoplay: true,
		  dots: true,
		  autoplaySpeed: 3000
		});


});