$(document).ready(function(){

// var data=[{"prodname": "football1","price": "299"},{"prodname": "boots","price": "399"},{"prodname": "cricket ball","price": "499"},{"prodname": "football1","price": "599"},{"prodname": "Shoes","price": "699"},{"prodname": "Shin guard","price": "799"},{"prodname": "football1","price": "299"}];
    
// for (var i = 0; i < data.length; i++){
//   var obj = data[i];
// //   for (var key in obj){
// //     var value = obj[key];
// //    console.log(key,value);
// //   }
// console.log(obj.prodname,obj.price);

// //$('#divMainAppend').append('<div class="col-lg-4 col-md-6 col-sm-6"> <div class="product-m"> <div class="product-m__thumb"> <a class="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html"> <img class="aspect__img" src="images/product/men/product6.jpg" alt=""></a> <div class="product-m__quick-look"> <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div> <div class="product-m__add-cart"> <a class="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div> </div> <div class="product-m__content"> <div class="product-m__name"> <a href="product-detail.html">'+obj.prodname+'</a> <form id="btnWhatsapp" action="https://wa.me/+919072012334" target="_blank"> <input type="image" src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png" alt="Submit" width="40" height="40"> </form> </div> <div class="product-m__price">Rs.'+obj.price+'</div> <div class="product-m__hover"> <div class="product-m__preview-description"> <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div> <div class="product-m__wishlist"> <a class="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div> </div> </div> </div> </div>');
// }

var url_string = window.location.href;
var url = new URL(url_string);
var category = url.searchParams.get("cat");
var subCategory = url.searchParams.get("sub");

var passData = {
}
var url = "http://www.mychurchmanageronline.com/api/data/"+category+"/"+subCategory;
var type = "GET";
var handleData = function (response) {
    if (response != "") {
      for (var i = 0; i < response.length; i++){
        var obj = response[i];
        var name="Deepa Jossy"
        var msg="Order Confirmed";
     
      console.log(obj.prodname,obj.price);
      $('#divMainAppend').append('<div class="col-lg-4 col-md-6 col-sm-6"> <div class="product-m"> <div class="product-m__thumb"> <a class="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html"> <img class="aspect__img" src="images/product/men/product6.jpg" alt=""></a> <div class="product-m__quick-look"> <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div> <div class="product-m__add-cart"> <a class="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</a></div> </div> <div class="product-m__content"> <div class="product-m__name"> <a href="product-detail.html">'+obj.product_name+'</a> <a href="https://api.whatsapp.com/send?phone=919072012334&text=I%27m%20api%20msg%20hello%20'+name+'%20friend%20'+msg+'" target="_blank"> <input type="image" src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png" alt="Submit" width="40" height="40"> </a> </div> <div class="product-m__price">Rs.'+obj.price+'</div> <div class="product-m__hover"> <div class="product-m__preview-description"> <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div> <div class="product-m__wishlist"> <a class="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div> </div> </div> </div> </div>');

    }
  }
}
AjaxCall(passData, url, type, handleData)


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
      error: function (response) {
          alert(response.responseText);
      }
  });
}