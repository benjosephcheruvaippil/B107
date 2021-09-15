$(document).ready(function(){

$("#btnMainSearch").click(function(){
    var searchQuery=$("#main-search").val();
    alert(searchQuery);
window.location.href="shop-side-version-2.html?search="+searchQuery;
return false;
});

});