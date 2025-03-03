var lastScrollTop = 0;
var div = document.querySelector('.product-details-basket');
window.addEventListener("scroll",function(){
var scrollTop = window.pageYOffset || document
.documentElement.scrollTop;
if(scrollTop >= 200){
    div.classList.add("fixed");
}
else{
    div.classList.remove("fixed");
}
lastScrollTop = scrollTop;
});