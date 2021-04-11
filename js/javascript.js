// start sidebar toggle menu
$(document).ready(function(){
    $(".hamburger-icon").click(function(){
        
      $(".sidebar").toggleClass("show");
    if( $(".sidebar").hasClass("show")){ 
        $("body").append("<div class='back-container'></div>");
    }else{
        $(".back-container").remove();
    }
      $(".back-container").click(function(){
        $(".back-container").remove();
        $(".sidebar").toggleClass("show");
      });

    });
});
// end sidebar toggle menu