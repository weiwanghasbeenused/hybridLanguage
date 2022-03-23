var wW = $(window).width(),
	wH = $(window).height();

var status_lan = 0;
var viewing = 'han';
var abts = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2'];

var types = [['han',7, true,''],['taipei_rockwell', 3, false, 'Rockwell extra bold'],['taipei_trajan', 7, false, 'Trajan Pro regular'],['tokyo_optima', 7, false, 'Optima regular'],['tokyo_univers', 8, false, 'Univers Std 45 light'],['ewf_univers', 6, false, 'Univers LT Std 45 light, 49 light ultra condensed'],['nezha', 14, false, 'Cloister Black regular'],['gis_deftone', 28, false, 'Deftone Stylus regular'],['alita', 10, false, 'Edwardian Script ITC regular']];

var addingLetters = function(i){
	for (j = 0;j<types[i][1];j++){
		$(".background").prepend("<div class = '"+types[i][0]+"_letter_"+j+" "+types[i][0]+"_letters letters'>"+abts[j]+"</div>");
	}
};

addingLetters(0);

$(".hoverZone_r").hover(function(){
	$('body').addClass('hanzi');
	status_lan = 1;
});
$(".hoverZone_l").hover(function(){
	console.log('left');
	$('body').removeClass('hanzi');
	status_lan = 0;
});
$(".menu").hover(function(){
	$('body').addClass('dropping');
},function(){
	$('body').removeClass('dropping');
});

$('.menu_items').each(function(i){
	$(this).click(function(){
		if(viewing!=types[i][0]){
			if(i!=0){
				$('body').removeClass('frontpage');
			}else{
				$('body').addClass('frontpage');
			}
			$('.menu_active').removeClass("menu_active");
			$(this).addClass('menu_active');
			swichType(i);
			var temp_item = $(this).find("h1").html();
			$(".menu").children("h1").html(temp_item);
			$(".typeface").html(types[i][3]);
			types[i][2] = !types[i][2];
			viewing = types[i][0];
		}
	});
});

var swichType = function(i){
	$('body').attr('viewing',types[i][0]);
	$('body').removeClass('hanzi');
	if(types[i][2]){
		$('.letters').hide();
		$('.'+types[i][0]+'_letters').stop().fadeIn(350);
	}else{
		$('.letters').hide();
		addingLetters(i);
		$('.'+types[i][0]+'_letters').stop().fadeIn(350);
	}	
}


