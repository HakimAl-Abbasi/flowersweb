/*console.log("sds");
var char_num =0;
var num_product =document.getElementById("num_product");

/*Product_1*/
/*
function myFunction() {
document.getElementById("slected_item").style.display = "block";
char_num++;
num_product.innerHTML =char_num;
}

/*Product_2*/
/*
function myFunction2() {
document.getElementById("slected_item2").style.display = "block";
char_num++;
num_product.innerHTML =char_num;
}

/*Product_3*/
/*
function myFunction3() {
document.getElementById("slected_item3").style.display = "block";
char_num++;
num_product.innerHTML =char_num;
}

/*Product_4*/
/*
function myFunction4() {
document.getElementById("slected_item4").style.display = "block";
char_num++;
num_product.innerHTML =char_num;
}

/*Product_5*/
/*
function myFunction5() {
document.getElementById("slected_item5").style.display = "block";
char_num++;
num_product.innerHTML =char_num;
}

/*Product_6*/
/*
function myFunction6() {
document.getElementById("slected_item6").style.display = "block";
char_num++;
num_product.innerHTML =char_num;
}

*/

var num_pro = 0;

$(document).on('click','add-to-cart',function()
{
  $(this).preventDefault();
  num_pro++;
  var countItems = document.getElementsByClassName('shopping-cart')

  countItems.innerText = num_pro;
  var cart = $('.shopping-cart');
  var imgtodrag = $(this).parent.parent('product-top').find('img').eq(0);
  var imageSrc = imgtodrag.attr('src');
  if (imgtodrag) {
      var imgclone = imgtodrag.clone()
          .offset({
              top: imgtodrag.offset().top,
              left: imgtodrag.offset().left
          })
          .css({
              'opacity': '0.5',
              'position': 'absolute',
              'height': '150px',
              'width': '150px',
              'z-index': '100'
          })
          .appendTo($('body'))
          .animate({
              'top': cart.offset().top + 10,
              'left': cart.offset().left + 10,
              'width': 75,
              'height': 75
          }, 1000, 'easeInOutExpo');

      setTimeout(function () {
          cart.effect("shake", {
              times: 2
          }, 200);
      }, 1500);

      imgclone.animate({
          'width': 0,
          'height': 0
      }, function () {
          // product.detach()
      });
  }

/*
  var imgSelected = product.parent('.product-top').find("img").eq(1);

  setTimeout(function () {
      imgSelected.addClass('image_selected_active');
  }, 1000);
  var price = product.parent('.product-bottom').find("h5").eq(0);
  var name = product.parent('.product-bottom').find("h3").eq(0);
  myProdact[name.text().trim()] = ({
      name: name.text().trim(),
      price: price.text().trim(),
      count: 1,
      src: imageSrc
  });
*/

}







function addProductToCartClickHandler(product) {
    // $(document).on('click', product, function (event) {

    product.addEventListener('click', function (event) {
        event.preventDefault();
        if ($(this).attr('data-image-role') == 'product-add') {
            AddProductToCart($(this));
            $(this).attr('data-image-role', 'product-remove');
            $(this).attr('class', 'btn btn-danger product-detail');
            $(this).text('delete from cart');
            getAllSelectorsAndAppendEvent(deleteFromCartBttn, DeleteProductToCartClickHandler);
        } else {
            var imgSelected = $(this).parent('.product-item').find("img").eq(1);

            imgSelected.removeClass('image_selected_active');

            $(this).attr('data-image-role', 'product-add');
            $(this).attr('class', 'btn btn-primary product-detail');
            $(this).text('add to cart');
            var n = ($(this).prev('').prev().text().trim());
            deleteFromCart($("#btnDel" + n), n);
        }
    });
}




































//$('.add-to-cart').on('click', function () {


      //   var cart = $('.shopping-cart');
    //    var imgtodrag = $(this).parent('.product-top').find("img").eq(0);
        // if (imgtodrag) {
        //     var imgclone = imgtodrag.clone()
        //         .offset({
        //         top: imgtodrag.offset().top,
        //         left: imgtodrag.offset().left
        //     })
        //         .css({
        //         'opacity': '0.5',
        //             'position': 'absolute',
        //             'height': '150px',
        //             'width': '150px',
        //             'z-index': '100'
        //     })
        //         .appendTo($('body'))
        //         .animate({
        //         'top': cart.offset().top + 10,
        //             'left': cart.offset().left + 10,
        //             'width': 75,
        //             'height': 75
        //     }, 1000, 'easeInOutExpo');
        //
        //     setTimeout(function () {
        //         cart.effect("shake", {
        //             times: 2
        //         }, 200);
        //     }, 1500);
        //
        //     imgclone.animate({
        //         'width': 0,
        //             'height': 0
        //     }, function () {
        //         $(this).detach()
        //     });
        // }
    });




// property ==> unicodebind  : is used for language from ltr and rtl
