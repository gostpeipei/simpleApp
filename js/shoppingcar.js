/*
* @Author: asus
* @Date:   2017-02-03 13:36:40
* @Last Modified by:   asus
* @Last Modified time: 2017-02-20 19:44:00
*/

'use strict';
window.onload = function(){
	var deleteScreen = document.querySelector(".deleteScreen");
	var deleteBtn = document.querySelectorAll(".products-list-screen .delete");
	var shopLis = document.querySelectorAll('.products-list-screen li');
	var promotion = document.querySelector(".promotion");
	var present = document.querySelector(".present");
	var normal = document.querySelector(".normal");
	var nothing = document.querySelector(".nothing");
	for(var i=0;i<deleteBtn.length;i++){
		deleteBtn[i].index = i;
		deleteBtn[i].addEventListener("click",function(){
			deleteScreen.style.display = "block";
			deleteScreen.setAttribute("data-index", this.index);
		})
	}

	var yes = document.querySelector(".yes");
	var no = document.querySelector(".no");
	function show(){
		var lis;
		if(!promotion.classList.contains("dn")){
			lis = promotion.querySelectorAll("li");
		}else if(!present.classList.contains("dn")){
			lis = present.querySelectorAll("li");
		}else if(!normal.classList.contains("dn")){
			lis = normal.querySelectorAll("li");
		}
		return lis.length;
	}
	yes.addEventListener("click",function(){
		var child = shopLis[deleteScreen.getAttribute("data-index")];
		var father = child.parentNode;
		father.removeChild(child);
		deleteScreen.style.display = "none";
		if(show() == 0){
			nothing.style.display = "block";
			father.parentNode.style.display = "none";
			console.log(1);
		}
	})
	no.addEventListener("click",function(){
		deleteScreen.style.display = "none";
	})

	// 加减数量
	var add = document.querySelectorAll(".add");
	var reduce = document.querySelectorAll(".reduce");
	var num = document.querySelectorAll(".num");
	var price = document.querySelectorAll(".bottom span i");
	var total = document.querySelector("#total");
	var favorable = document.querySelector("#favorable").innerHTML;
	var count = document.querySelector("#count");
	var val = 0;
	var sum = 0;
	console.log(favorable)

	for(var i=0;i<add.length;i++){
		var pri = price[i].innerHTML;
		add[i].index = i;
		reduce[i].index = i;
		add[i].addEventListener("click",function(){
			val = num[this.index].value;
			num[this.index].value = ++val;
			price[this.index].innerHTML = parseInt(pri*val*100)/100
		})
		reduce[i].addEventListener("click",function(){
			val = num[this.index].value;
			if(val<=1){
				return;
			}
			num[this.index].value = --val;
			price[this.index].innerHTML = parseInt(pri*val*100)/100
		})
	}
}