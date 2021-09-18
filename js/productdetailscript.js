$(document).ready(function(){

    var url_string = window.location.href;
    var url = new URL(url_string);
    var prod_id = url.searchParams.get("id");


    var passData = {
    }
    var url = "https://localhost:44332/api/data/product/"+prod_id;
  
    var type = "GET";
    var handleData = function (response) {
        if (response != "") {
            for (var i = 0; i < response.length; i++){
                var obj = response[i];
                var name="Deepa Jossy"
                var msg="Order Confirmed";
             //alert(obj.product_name);
              $('.app-content').append('<div class="u-s-p-t-90"><div class="container"><div class="row"><div class="col-lg-5"><div class="pd-breadcrumb u-s-m-b-30"> <ul class="pd-breadcrumb__list"> <li class="has-separator"> <a href="index.hml">Home</a></li> <li class="has-separator"> <a href="shop-side-version-2.html">Electronics</a></li> <li class="has-separator"> <a href="shop-side-version-2.html">DSLR Cameras</a></li> <li class="is-marked"> <a href="shop-side-version-2.html">Nikon Cameras</a></li> </ul> </div><div class="pd u-s-m-b-30"> <div class="slider-fouc pd-wrap"> <div id="pd-o-initiate"> <div class="pd-o-img-wrap" data-src="https://res.cloudinary.com/b107/image/upload/v1631907588/sample.jpg"> <img class="u-img-fluid" src="https://res.cloudinary.com/b107/image/upload/v1631907588/sample.jpg" data-zoom-image="https://res.cloudinary.com/b107/image/upload/v1631907588/sample.jpg" alt=""></div> </div> <span class="pd-text">Click for larger zoom</span> </div> <div class="u-s-m-t-15"> <div class="slider-fouc"> <div id="pd-o-thumbnail"> <div> <img class="u-img-fluid" src="https://res.cloudinary.com/b107/image/upload/v1631907588/sample.jpg" alt=""></div> </div> </div> </div> </div> <!--====== End - Product Detail Zoom ======--> </div><div class="col-lg-7"><div class="pd-detail"><div><span class="pd-detail__name">'+obj.product_name+'</span></div><div><div class="pd-detail__inline"><span class="pd-detail__price">'+obj.price+'</span><span class="pd-detail__discount">(76% OFF)</span><del class="pd-detail__del">$28.97</del></div></div><div class="u-s-m-b-15"><span class="pd-detail__preview-desc">'+obj.description+'</span></div><div class="u-s-m-b-15"><ul class="pd-social-list"><li><a class="s-fb--color-hover" href="#"><i class="fab fa-facebook-f"></i></a></li><li><a class="s-insta--color-hover" href="#"><i class="fab fa-instagram"></i></a></li><li><a class="s-wa--color-hover" href="#"><i class="fab fa-whatsapp"></i></a></li></ul></div><div class="u-s-m-b-15"><form class="pd-detail__form"><div class="pd-detail-inline-2"><div class="u-s-m-b-15"><div class="input-counter"><span class="input-counter__minus fas fa-minus"></span><input class="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000"><span class="input-counter__plus fas fa-plus"></span></div> </div><div class="u-s-m-b-15"><a href="https://api.whatsapp.com/send?phone=919778123839" target="_blank"> <input type="image" src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png" alt="Submit" width="40" height="40"> </a></div></div></form></div><div class="u-s-m-b-15"><span class="pd-detail__label u-s-m-b-8">Product Policy:</span><ul class="pd-detail__policy-list"><li><i class="fas fa-check-circle u-s-m-r-8"></i><span>Buyer Protection.</span></li><li><i class="fas fa-check-circle u-s-m-r-8"></i><span>Full Refund if you dont receive your order.</span></li><li><i class="fas fa-check-circle u-s-m-r-8"></i><span>Returns accepted if product not as described.</span></li></ul></div></div></div></div></div></div>');
           
              var RESHOP = {};
              var $productDetailElement = $('#pd-o-initiate'), $productDetailElementThumbnail = $('#pd-o-thumbnail');
          
              RESHOP.productDetailInit = function() {
                  if ($productDetailElement.length && $productDetailElementThumbnail.length) {
            
                      var ELEVATE_ZOOM_OBJ = {
                          borderSize: 1,
                          autoWidth:true,
                          zoomWindowWidth: 540,
                          zoomWindowHeight: 540,
                          zoomWindowOffetx: 10,
                          borderColour: '#e9e9e9',
                          cursor: 'pointer'
                      };
                        // Fires after first initialization
                      $productDetailElement.on('init', function () {
                          $(this).closest('.slider-fouc').removeClass('slider-fouc');
                      });
            
                      $productDetailElement.slick({
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite:false,
                          arrows: false,
                          dots: false,
                          fade: true,
                          asNavFor: $productDetailElementThumbnail
                      });
                      // Init elevate zoom plugin to the first image
                      $('#pd-o-initiate .slick-current img').elevateZoom(ELEVATE_ZOOM_OBJ);
            
                      // Fires before slide change
                      $productDetailElement.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                          // Get the next slide image
                          var $img = $(slick.$slides[nextSlide]).find('img');
                          // Remove old zoom elements
                          $('.zoomWindowContainer,.zoomContainer').remove();
                          // Reinit elevate zoom plugin to the next slide image
                          $($img).elevateZoom(ELEVATE_ZOOM_OBJ);
                      });
            
                      // Init Lightgallery plugin
                      $productDetailElement.lightGallery({
                          selector: '.pd-o-img-wrap',// lightgallery-core
                          download: false,// lightgallery-core
                          thumbnail: false,// Thumbnails
                          autoplayControls: false,// Autoplay-plugin
                          actualSize: false,// Zoom-plugin: Enable actual pixel icon
                          hash: false, // Hash-plugin
                          share: false// share-plugin
                      });
                      // Thumbnail images
                      // Fires after first initialization
                      $productDetailElementThumbnail.on('init', function () {
                          $(this).closest('.slider-fouc').removeAttr('class');
                      });
            
                      $productDetailElementThumbnail.slick({
                          slidesToShow: 4,
                          slidesToScroll: 1,
                          infinite:false,
                          arrows: true,
                          dots: false,
                          focusOnSelect: true,
                          asNavFor: $productDetailElement,
                          prevArrow:'<div class="pt-prev"><i class="fas fa-angle-left"></i>',
                          nextArrow:'<div class="pt-next"><i class="fas fa-angle-right"></i>',
                          responsive: [
                              {
                                  breakpoint: 1200,
                                  settings: {
                                      slidesToShow: 4
                                  }
                              },
                              {
                                  breakpoint: 992,
                                  settings: {
                                      slidesToShow: 3
                                  }
                              },
                              {
                                  breakpoint: 576,
                                  settings: {
                                      slidesToShow: 2
                                  }
                              }
                          ]
                      });
                  }
                };
          
                RESHOP.productDetailInit();

           
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

//   (function ($) {
//     var RESHOP = {};
//     var $productDetailElement = $('#pd-o-initiate'), $productDetailElementThumbnail = $('#pd-o-thumbnail');

//     RESHOP.productDetailInit = function() {
//         if ($productDetailElement.length && $productDetailElementThumbnail.length) {
  
//             var ELEVATE_ZOOM_OBJ = {
//                 borderSize: 1,
//                 autoWidth:true,
//                 zoomWindowWidth: 540,
//                 zoomWindowHeight: 540,
//                 zoomWindowOffetx: 10,
//                 borderColour: '#e9e9e9',
//                 cursor: 'pointer'
//             };
//               // Fires after first initialization
//             $productDetailElement.on('init', function () {
//                 $(this).closest('.slider-fouc').removeClass('slider-fouc');
//             });
  
//             $productDetailElement.slick({
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite:false,
//                 arrows: false,
//                 dots: false,
//                 fade: true,
//                 asNavFor: $productDetailElementThumbnail
//             });
//             // Init elevate zoom plugin to the first image
//             $('#pd-o-initiate .slick-current img').elevateZoom(ELEVATE_ZOOM_OBJ);
  
//             // Fires before slide change
//             $productDetailElement.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//                 // Get the next slide image
//                 var $img = $(slick.$slides[nextSlide]).find('img');
//                 // Remove old zoom elements
//                 $('.zoomWindowContainer,.zoomContainer').remove();
//                 // Reinit elevate zoom plugin to the next slide image
//                 $($img).elevateZoom(ELEVATE_ZOOM_OBJ);
//             });
  
//             // Init Lightgallery plugin
//             $productDetailElement.lightGallery({
//                 selector: '.pd-o-img-wrap',// lightgallery-core
//                 download: false,// lightgallery-core
//                 thumbnail: false,// Thumbnails
//                 autoplayControls: false,// Autoplay-plugin
//                 actualSize: false,// Zoom-plugin: Enable actual pixel icon
//                 hash: false, // Hash-plugin
//                 share: false// share-plugin
//             });
//             // Thumbnail images
//             // Fires after first initialization
//             $productDetailElementThumbnail.on('init', function () {
//                 $(this).closest('.slider-fouc').removeAttr('class');
//             });
  
//             $productDetailElementThumbnail.slick({
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite:false,
//                 arrows: true,
//                 dots: false,
//                 focusOnSelect: true,
//                 asNavFor: $productDetailElement,
//                 prevArrow:'<div class="pt-prev"><i class="fas fa-angle-left"></i>',
//                 nextArrow:'<div class="pt-next"><i class="fas fa-angle-right"></i>',
//                 responsive: [
//                     {
//                         breakpoint: 1200,
//                         settings: {
//                             slidesToShow: 4
//                         }
//                     },
//                     {
//                         breakpoint: 992,
//                         settings: {
//                             slidesToShow: 3
//                         }
//                     },
//                     {
//                         breakpoint: 576,
//                         settings: {
//                             slidesToShow: 2
//                         }
//                     }
//                 ]
//             });
//         }
//       };

//       RESHOP.productDetailInit();
// })(jQuery);

