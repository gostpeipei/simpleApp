// 焦点轮播图
window.onload = function(){
	var sliderUl = document.querySelector(".carousel-con");
	var sliderOl = document.querySelector(".point");
	var sliderLis = sliderUl.querySelectorAll("li");

	//动态生成小圆点
	for(var i=0 ;i<sliderLis.length;i++){
		var olLi = document.createElement("li");
		sliderOl.appendChild(olLi);
	}
	sliderOl.children[0].classList.add("current");


	var liWidth = sliderLis[0].offsetWidth;
	var index = 0;
	var points = sliderOl.querySelectorAll("li");
	var htmlfont = document.documentElement.style.fontSize;
	var htmlfontNum = +(htmlfont.replace(/px/g,""));
	for(var i=0;i<sliderLis.length;i++){
		sliderLis[i].style.transform = "translate("+ liWidth/htmlfontNum +"rem)";
	}
	//初始化三张图片
	var left = sliderLis.length - 1;
	var center = 0;
	var right = 1;
	sliderLis[left].style.transform = "translate("+ -liWidth +"px)";
	sliderLis[center].style.transform = "translate(0px)";
	sliderLis[right].style.transform = "translate("+ liWidth +"px)";
	sliderLis[left].style.webkitTransform = "translate("+ -liWidth +"px)";
	sliderLis[center].style.webkitTransform = "translate(0px)";
	sliderLis[right].style.webkitTransform = "translate("+ liWidth +"px)";


	function showNext(){
		left = center;
		center = right;
		right++;
		if(right > sliderLis.length - 1){
			right = 0;
		}

		sliderLis[left].style.transition = "transform 0.5s";
        sliderLis[center].style.transition = "transform 0.5s";
        sliderLis[right].style.transition = "none";
        sliderLis[left].style.transition="-webkit-transform 0.5s";
        sliderLis[center].style.transition="-webkit-transform 0.5s";
        sliderLis[right].style.transition="none";

		sliderLis[left].style.transform = "translateX(" + -liWidth + "px)";
        sliderLis[left].style.webkitTransform = "translateX(" + -liWidth + "px)";
        sliderLis[center].style.transform = "translateX(0px)";
        sliderLis[center].style.webkitTransform = "translateX(0px)";
        sliderLis[right].style.transform = "translateX(" + liWidth + "px)";
        sliderLis[right].style.webkitTransform = "translateX(" + liWidth + "px)";

		for(var i=0;i<points.length;i++){
			points[i].classList.remove("current");
		}
		points[center].classList.add("current");
	}

	function showPrev(){
		right = center;
		center = left;
		left--;
		if(left < 0){
			left = sliderLis.length-1;
		}

		sliderLis[left].style.transition = "none";
        sliderLis[center].style.transition = "transform 0.5s";
        sliderLis[right].style.transition = "transform 0.5s";
        sliderLis[left].style.transition="none";
        sliderLis[center].style.transition="-webkit-transform 0.5s";
        sliderLis[right].style.transition="-webkit-transform 0.5s";

		sliderLis[left].style.transform = "translateX(" + -liWidth + "px)";
        sliderLis[left].style.webkitTransform = "translateX(" + -liWidth + "px)";
        sliderLis[center].style.transform = "translateX(0px)";
        sliderLis[center].style.webkitTransform = "translateX(0px)";
        sliderLis[right].style.transform = "translateX(" + liWidth + "px)";
        sliderLis[right].style.webkitTransform = "translateX(" + liWidth + "px)";

		for(var i=0;i<points.length;i++){
			points[i].classList.remove("current");
		}
		points[center].classList.add("current");
	}

	var sliderTimer = setInterval(function(){
		showNext();
	},4000)

	var startX;
	var startTime;
	var moveX;
	var endX;
	var endTime;
	sliderUl.addEventListener("touchstart",function(e){
		//清除定时器
		clearInterval(sliderTimer);
		//清除过渡
		sliderLis[left].style.transition="none";
        sliderLis[center].style.transition="none";
        sliderLis[right].style.transition="none";

		startX = e.touches[0].pageX;
		startTime = new Date();
	})
	sliderUl.addEventListener("touchmove",function(e){
		moveX = e.touches[0].pageX - startX;
		sliderLis[left].style.transform = "translateX(" + (moveX-liWidth) + "px)";
        sliderLis[left].style.webkitTransform = "translateX(" + (moveX-liWidth) + "px)";
        sliderLis[center].style.transform = "translateX("+moveX+"px)";
        sliderLis[center].style.webkitTransform = "translateX("+moveX+"px)";
        sliderLis[right].style.transform = "translateX(" + (moveX+liWidth) + "px)";
        sliderLis[right].style.webkitTransform = "translateX(" + (moveX+liWidth) + "px)";
	})
	sliderUl.addEventListener("touchend",function(e){
		endX = e.changedTouches[0].pageX - startX;
		endTime = new Date() - startTime;
		// 判断是否滑动成功
		if(endX < -liWidth/3 || (endX<-30 && endTime < 300)){
			showNext();
		}else if(endX > liWidth/3 || (endX>30 && endTime < 300)){
			showPrev();
		}else{
			sliderLis[left].style.transition = "transform 0.5s";
	        sliderLis[center].style.transition = "transform 0.5s";
	        sliderLis[right].style.transition = "transform 0.5s";
	        sliderLis[left].style.transition="-webkit-transform 0.5s";
	        sliderLis[center].style.transition="-webkit-transform 0.5s";
	        sliderLis[right].style.transition="-webkit-transform 0.5s";

	        sliderLis[left].style.transform = "translateX(" + -liWidth + "px)";
	        sliderLis[left].style.webkitTransform = "translateX(" + -liWidth + "px)";
	        sliderLis[center].style.transform = "translateX(0px)";
	        sliderLis[center].style.webkitTransform = "translateX(0px)";
	        sliderLis[right].style.transform = "translateX(" + liWidth + "px)";
	        sliderLis[right].style.webkitTransform = "translateX(" + liWidth + "px)";
		}


		sliderTimer = setInterval(function(){
			showNext();
		},4000)
	})
}