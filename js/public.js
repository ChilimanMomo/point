/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {

  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });

  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });
  $('#header_banner').each (function () {
    var $that = $(this).attr ('data-i', 1);
    var l = $that.find ('>.header_banner').length;

    setInterval (function () {
      var i = parseInt ($that.attr ('data-i'), 10);
      $that.attr ('data-i', ++i > l ? 1 : i);
    }, 6500);
  });

  $('.login_boxs .icon-x').click (function () {
    if ($('.login_boxs').toggleClass ('show').hasClass ('show'))
      $("body").css({"overflow": "hidden"});
    else
      $("body").css({"overflow": "auto"});
  });

  $('.login-btn').click (function () {
    if ($('.login_boxs').toggleClass ('show').hasClass ('show'))
      $("body").css({"overflow": "hidden"});
    else
      $("body").css({"overflow": "auto"});
  });
  
  $('.login_boxs .show-reg').click (function () {
    $('.login_boxs').toggleClass ('show-reg');
    // $("body").toggleClass ('fixbg');
  });
  $('.login_boxs .show-psw').click (function () {
    $('.login_boxs').toggleClass ('show-psw');
    // $("body").toggleClass ('fixbg');
  });
  $('.login_boxs .show-pswed').click (function () {
    $('.login_boxs').toggleClass ('show-pswed');
    // $("body").toggleClass ('fixbg');
  });

  $('.other .bg, .footer_banner .image, .header_banner .image').imgLiquid ();


  // $(".login_boxs").on("show", function () {
  //    $("body").addClass("fixbg");
  //   }).on("icon-x", function () {
  //    $("body").removeClass("fixbg");
  // });


});
