!function(){
	var $ = function(s){return document.querySelectorAll(s);}

	var mv = new MusicVisualizer();
	mv.ini($("#canvas")[0],window,$("#volume")[0]);

	window.onresize = function(){
	  mv.resize();
	}

	var lis = $("#list li");
	for(var i = 0;i< lis.length;i++){
		lis[i].onclick = function(){
			mv.play("/media/"+this.title,true);
		}
		lis[i].addEventListener('touchstart',function(){
			mv.play("/media/"+this.title,true);
		},false);
	}
	!function(){
		var u = window.navigator.userAgent;
		var m = /(Android)|(iPhone)|(iPad)|(iPod)/i;
		if(m.test(u)){
			isMobile = true;
		}
		var ap = /(iPhone)|(iPad)|(iPod)|(Mac)/i;
		if(ap.test(u)){
			isApple = true;
		}
	}();
}();
