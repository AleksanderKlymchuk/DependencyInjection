var cvStyle=(function(){

   function scroll()
   {  
      
   	 var width=$(window).width();
   	 
   	  discard();
      $(this).attr('data-ex','');
      $('.c-body').addClass('inactive');
      var tx=$.trim($(this).text());
      var target=$("h4:contains("+tx+")");
      target.addClass('active');
      target.next().addClass('p-active').removeClass('p-inactive');
      target.next().find('span').show(1000).css('display','inline');
      $('.c-nav ul').prepend(this);
    
      if(width>1200)
   	 {
      $("html,body").animate({
     	scrollTop:target.offset().top-42,
     	
     },700);
      }
     else{
        $("html,body").animate({
     	scrollTop:target.offset().top-65,

     },700);
		
     	
     }
   	 
      
     
 
   }
   var home=function(){
   	$("html,body").animate({scrollTop:10},700,
   		function(){
   			discard();
   		});
   	
   }
   var discard=function(){
   	$('h4').removeClass('active');
   	$('.c-body p').removeClass('p-active');
   	$('.c-nav ul li').removeAttr('data-ex');
   	$('.c-body span').addClass('display-none');
   	$('.c-body span').hide();
   	$('.c-body').removeClass('inactive');
   }
   var extendMenu=function()
   {    
       
      $('ul').slideToggle(500);

   }
  
return{
   scroll:scroll,
   home:home,
   discard:discard,
   extendMenu:extendMenu,
  
}

})();

(function ($) {

    $('.c-nav li').click(cvStyle.scroll);
    $('.c-nav p').click(cvStyle.home);
    $('#cv-menu').click(cvStyle.extendMenu);
    $('h2').click(cvStyle.home);

})(jQuery);