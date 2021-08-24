$(window).resize(function(event) { 
	adaptive_function();
	});
	
	
function adaptive_header(w, h)  //ховає всю цю шапку в бургер, да по іфах так якраз і є
{
	var headerMenu = $('.header-menu'); //отримуємо доступ до елементу css
	var headerLang = $('.header-top-lang');
	if (w<767) 
	{
		if(!headerLang.hasClass('done')) 
		{
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}
	else 
	{
		if(headerLang.hasClass('done'))
		{
			
			headerLang.removeClass('done').prependTo($('.header-top'));
			
		}
	}
	if (w<767) 
	{
		if(!$('.header-bottom-menu').hasClass('done')) 
		{
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}
	else 
	{
		$.each($('.header-bottom-menu'), function(index, val) { // ми додаємо this для того щоб проходити по колекції обєктів в даному випадку це колекція column 
			if ($(this).hasClass('header-bottom-menu--right'))
			{
				if ($(this).hasClass('done')) 
				{
					$(this).removeClass('done').prependTo($('.header-bottom-column').eq(2));
				}
			}
			else
			{
				if ($(this).hasClass('done')) 
				{
					$(this).removeClass('done').prependTo($('.header-bottom-column').eq(0));
				}
			}
		});
	}

}
	
	



function adaptive_function()  //функція, що отримуєм дані про розмір вікна
{
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
	adaptive_header(w, h);
}

adaptive_function();