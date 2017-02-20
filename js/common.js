// 在640px屏幕下字体为64px  
function setFontSize(){
	var oHtml = document.documentElement;
	var screenWidth = oHtml.offsetWidth;
	var newfontSize = screenWidth/(640/64);
	// console.log(newfontSize);
	oHtml.style.fontSize = newfontSize + "px";
	// console.log(oHtml.style.fontSize);
}
setFontSize();

window.addEventListener("resize",function(){
	setFontSize();
})
