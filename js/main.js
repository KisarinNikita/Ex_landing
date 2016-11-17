
			$(document).ready(function() {
				$('.popup-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					mainClass: 'mfp-img-mobile',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0,1] // Will preload 0 - before current, and 1 after the current image
					},
				});
				
			});
		


// jQuery for page scrolling feature - requires jQuery Easing plugin
 $(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function() {
	$(".notification-open").click(function(){
		$('.notification-body').show();
	});

	  $(".close-notification").click(function(){
		$('.notification-body').hide();
	});
}); 

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [51.55664422972338,85.80524735237458],
            zoom: 10
        }),

		
		 myPlacemark4 = new ymaps.Placemark([51.539,85.944], {
            // Свойства.
            hintContent: ''
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: '../images/mark.png',
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark4)
}



$(document).ready(function(){
$('.slider').slick({
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
 infinite: true,
  responsive: [
	  
    {breakpoint: 1200,
    	settings: {
			slidesToShow: 5,
			slidesToScroll: 2,
      	}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

$(document).ready(function(){
$('.slid').slick({
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
 infinite: true,
  responsive: [
	  
    {breakpoint: 1200,
    	settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
      	}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

$(document).ready(function() {
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};
});


