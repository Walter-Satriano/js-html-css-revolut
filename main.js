$( document ).ready(function() {

  //cambio il colore del testo a Personal e Business al click
  $(".left_items a:not(:first-child)").click(
    function(){
      $(this).toggleClass("text_black");
    }
  );

  //cambio il colore del testo Pricing al click
  $(".right_items a.price").click(
    function(){
      $(".price").toggleClass("text_black");
    }
  );

  //drop menù su Accounts
  $(".right_items a.acc").click(
    function(){
      $("#drop_accounts").toggleClass("active");
      $(".acc").toggleClass("text_black");
    }
  );

  //drop menù su Products
  $(".right_items a.prod").click(
    function(){
      $("#drop_products").toggleClass("active");
      $(".prod").toggleClass("text_black");
    }
  );

  //drop menù su Company
  $(".right_items a.comp").click(
    function(){
      $("#drop_company").toggleClass("active");
      $(".comp").toggleClass("text_black");
    }
  );

  //drop menù su Help
  $(".right_items a.help").click(
    function(){
      $("#drop_help").toggleClass("active");
      $(".help").toggleClass("text_black");
    }
  );

  //drop menù su EN
  $(".right_items a.lang").click(
    function(){
      $("#drop_en").toggleClass("active");
      $(".lang").toggleClass("text_black");
    }
  );


});
