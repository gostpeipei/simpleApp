/*
* @Author: asus
* @Date:   2017-01-26 23:50:07
* @Last Modified by:   asus
* @Last Modified time: 2017-02-03 12:38:12
*/

'use strict';
window.onload = function(){
	function stopBubble(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	}
	//下拉导航
	var header = document.querySelector(".header");
	var listBtn = header.querySelector(".right");
	var dropList = document.querySelector(".drop-list");
	listBtn.addEventListener("click",function(e){
		stopBubble(e);
		if(dropList.style.display != "block"){
			dropList.style.display = "block";
		}else{
			dropList.style.display = "none";
		}
	})
	dropList.addEventListener("click",function(e){
		stopBubble(e);
	})
	header.addEventListener("click",function(e){
		stopBubble(e);
	})
	document.addEventListener("click",function(e){
		if(dropList.style.display != "none"){
			dropList.style.display = "none";
		}
	})
	//点击筛选
	var sortNav = document.querySelector(".sort");
	var sortLis = sortNav.querySelectorAll("li");
	var screen = document.querySelector(".filtrate-screen");
	sortLis[3].addEventListener("click",function(){
		screen.style.display = "block";
	})
	//点击关闭按钮
	var closeBtn = document.querySelector(".closeBtn");
	closeBtn.addEventListener("click",function(){
		screen.style.display = "none";
	})

}