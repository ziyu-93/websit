var module1 = (function(mod, $) {

	// 限制时间
	mod.limit = function (events, fn) {
		var t;
		window.addEventListener(events, function() {
		    clearTimeout(t);
		    t = setTimeout(fn, 100);
		}, false);
	};

	// 弹性导航
	mod.tan = function () {
		var speed=0;
		var left=0;//变量放到外面，在拖拽里面赋值进来时有用
		function move (obj, target) {
		    clearInterval(obj.timer);//先清除计时器
		    obj.timer=setInterval(function(){
		        speed+=(target-obj.offsetLeft)/5;//弹性运动
		        speed*=0.7;//摩擦运动
		        left+=speed;//用变量替代属性，消除小数点累计误差
		      if(Math.abs(speed)<1&&Math.abs(left-target)<1){//速度接近0 距离接近0 的时候停止
		            clearInterval(obj.timer);
		            obj.style.left=target+'px';//确保最后总是精准的
		        }
		        obj.style.left=left+'px';
		    },30)
		}

		//弹性导航
		$('.nav .line').width($('.nav a:first').innerWidth());
			
		$('.nav a').hover(function() {
			$(this).addClass('nav_list_cur');
			var index=$('.nav a').index(this);
			var w=$(this).outerWidth();
			$('.nav .line').width(w);
		  	move($('.nav .line').get(0),$(this).get(0).offsetLeft);
		}, function() {
			$(this).removeClass('nav_list_cur');
			move($('.nav .line').get(0),$('.nav_list_cur0').get(0).offsetLeft);
		});

		$('.nav a').click(function() {
			$('.nav a').removeClass('nav_list_cur0');
			$(this).addClass('nav_list_cur0');

			data.click = true;
		})
	}

	// 飞机出现开始飞
	mod.isFly = function () {
		var H = document.documentElement.clientHeight;
		var h_fly = $('.bg6').offset().top;
		function fly() {
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			if (h_fly - top - H < 100) {
				$('.fly1').addClass('fly1_cur');
				$('.fly2').addClass('fly2_cur');
			}
		}
		mod.limit('scroll', fly);
	};

	// 判断滚动条垂直滚动方向
	mod.scroll = function (fn) {
	    var beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	    var fn = fn || function() {};
	    function diffScroll() {
	    	var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	    	var delta = afterScrollTop - beforeScrollTop;
	    	if( delta === 0 ) return false;
	    	fn( delta > 0 ? "down" : "up" );
	    	beforeScrollTop = afterScrollTop;
	    }
	    mod.limit('scroll', diffScroll)
	};

	// 卡片悬浮
	mod.hoverCard = function () {
		$('.list').hover(function() {
			$(this).find('.list_hide').show();
			$(this).find('.h_name').animate({
				top:'0.15rem'
			},900);
			$(this).find('.line').animate({
				width:'1.3rem'
			},1100);
		}, function() {
			$(this).find('.list_hide').hide();
			$(this).find('.h_name').animate({
				top:'0.5rem'
			},100);
			$(this).find('.line').animate({
				width:'0'
			},100);
		});
	};


	return mod;
})(window.module1 || {}, jQuery);

var data = {
	click: false
};

module1.tan();

module1.isFly();

module1.scroll(function(direction) { 
   if (direction === 'up') {
		$('.fixed').removeClass('out').addClass('in');
		data.click = false;
   } else if (direction === 'down' && !data.click) {
		$('.fixed').removeClass('in').addClass('out');
   }else {
   		data.click = false;
   }
}); 

module1.hoverCard();








