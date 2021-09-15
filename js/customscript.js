$(document).ready(function(){

var url_string = window.location.href;
var url = new URL(url_string);
var category = url.searchParams.get("cat");
var subCategory = url.searchParams.get("sub");
var search=url.searchParams.get("search");

var passData = {
}
var url;
if(category!="" && subCategory!=""){
   url = "http://www.mychurchmanageronline.com/api/data/"+category+"/"+subCategory;
}
else if(search!=""){
  url = "http://www.mychurchmanageronline.com/api/data/search/"+search;
}
var type = "GET";
var handleData = function (response) {
    if (response != "") {
      for (var i = 0; i < response.length; i++){
        var obj = response[i];
        var name="Deepa Jossy"
        var msg="Order Confirmed";
     
      console.log(obj.prodname,obj.price);
      $('#divMainAppend').append('<div class="col-lg-4 col-md-6 col-sm-6"> <div class="product-m"> <div class="product-m__thumb"> <a class="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html"> <img class="aspect__img" src="images/product/men/product6.jpg" alt=""></a> <div class="product-m__quick-look"> <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div> <div class="product-m__add-cart"> <a class="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div> </div> <div class="product-m__content"> <div class="product-m__name"> <a href="product-detail.html">'+obj.product_name+'</a> <a href="https://api.whatsapp.com/send?phone=919778123839&text=I%27m%20api%20msg%20hello%20'+name+'%20friend%20'+msg+'" target="_blank"> <input type="image" src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png" alt="Submit" width="40" height="40"> </a> </div> <div class="product-m__price">Rs.'+obj.price+'</div> <div class="product-m__hover"> <div class="product-m__preview-description"> <span>'+obj.description+'</span></div></div> </div> </div> </div>');

    }
  }
}
$('.preloader').addClass('is-active');
AjaxCall(passData, url, type, handleData);
});

function AjaxCall(passData, url, type, handleData) {
  $.ajax({
      type: type,
      url: url,
      data: passData,
      success: handleData,
      failure: function (response) {
          alert(response.responseText);
      },
      complete:function(response){
        $('.preloader').removeClass('is-active');
      },
      error: function (response) {
          alert(response.responseText);
      }
  });
}