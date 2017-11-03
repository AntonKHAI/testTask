	Date.CultureInfo["monthNames"] = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
		function newComment() {
			let text = $('#textarea');
			let name = $('#name');
			data = Date.today().toString("d MMMM yyyy");

			if (name.val() == 0 || text.val() == 0) {
				alert('Заполните поля');
			} else {
				$('.reviews').append('<div class="review"><div class="review__author-date"><span class="review__author-name">' + name.val() + '</span><span class="review__date">' + data +'</span></div><div class="review__text-wrapper"><p class="review__text">' + text.val() + '</p></div></div>');		
				name.val('');
				text.val('');
			};
		};		
