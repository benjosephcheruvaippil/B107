$(document).ready(function(){

$("#btnMainSearch").click(function(){
    var searchQuery=$("#main-search").val();
window.location.href="shop-side-version-2.html?search="+searchQuery;
return false;
});

});