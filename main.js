$( document ).ready(function() {


  //drop menù su Accounts
  $(".right_items a.acc").click(
    function(){
      $("#drop_accounts").toggleClass("active");
    }
  );

  //drop menù su Products
  $(".right_items a.prod").click(
    function(){
      $("#drop_products").toggleClass("active");
    }
  );

  //drop menù su Company
  $(".right_items a.comp").click(
    function(){
      $("#drop_company").toggleClass("active");
    }
  );

  //drop menù su Help
  $(".right_items a.help").click(
    function(){
      $("#drop_help").toggleClass("active");
    }
  );

  //drop menù su EN
  $(".right_items a.lang").click(
    function(){
      $("#drop_en").toggleClass("active");
    }
  );


});
