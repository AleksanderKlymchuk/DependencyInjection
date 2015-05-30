var element = (function () {
    var canCircle = function () {
            var canvas = document.getElementById("canApp");
            var ctx = canvas.getContext('2d');

            //center circle
            ctx.beginPath();
            ctx.arc(150, 150, 140, 0, 20 * Math.PI);
            ctx.fillStyle = "rgba(103,159,253,0.7)"
            ctx.closePath();
            ctx.fill();

            //side circles left
            ctx.beginPath();
            ctx.arc(102, 163, 44, 0, 20 * Math.PI);
            ctx.fillStyle = "rgba(255,255,255,0.2)";
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font = "15pt Serif";
            ctx.fillText("CV", 85, 167);

            //side circles top
            ctx.beginPath();
            ctx.arc(150, 80, 44, 0, 20 * Math.PI);
            ctx.fillStyle = "rgba(255,255,255,0.2)";
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font = "15pt Serif";
            ctx.fillText("Portfolio", 115, 80);


            //side circles bottom
            ctx.beginPath();
            ctx.arc(198, 163, 44, 0, 20 * Math.PI);
            ctx.fillStyle = "rgba(255,255,255,0.2)";
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font = "15pt Serif";
            ctx.fillText("Kontakt", 170, 167);
        
       
    }
    function cv()
    {
        $(location).attr('href', 'HOME/CV');
      
    }
   
    function getContactForm()
    {
        $.ajax({
            url: 'Home/Contact',
            success: contact

        });


    }
    var openForm=function(e){
        var positon = getPosition(e, this);
      
        if (positon.x < 100 && positon.x > 40 && positon.y > 149 && positon.y < 230)
        {
            $('#pop-up').dialog({
                dialogClass:'prompt',
                draggable:true,
                width: 220,
                //closeText: "",
                show:{duration:600},
                title:"Valg Udgave",
                buttons: [{click:cv,class:'leftButton',width:50,height:50},
                    { width: 50, height: 60, class: 'rightButton', click: function () { document.location.href = 'OK/Content/cv/CV.pdf' } }],
                modal: true,
            

            });
            
  
        }
        if (positon.x <170 && positon.x > 110 && positon.y > 149 && positon.y < 230)
        {

            getContactForm();

        }

       
        return false;

    }
    function contact(data)
    {
        var element = $('canvas').next();
        var check = element.hasClass('form');
        if (check == false)
        {
            $(element).replaceWith(data);
           
        }
        //var options = { direction: 'right' };
        //var effect = 'slide';
        //$('#contact-form').toggle(effect, options, 1000);
        $('html, body').css({
            'overflow': 'hidden'
        });
        var lightbox = $('<div id=lightbox></div>');
        $('body').append(lightbox);
        $('#contact-form').fadeIn(1000);
        $('#nav-bar').mouseover();
    
    }
    function getPosition (e,element) {
        var offset = $(element).offset();
        var x = (e.pageX - offset.left);
        var y=(e.pageY-offset.top)
        return {
            x: x,
            y:y

        }
    }



    function navigationCollaps() {

        if ($(this).scrollTop() == 0) {
            $('#nav-bar').css({
                height: "9em",
                transition:"height 0.5s"
            }).children('ul').css({
                "margin-top": "5%",
                transition: "margin-top 0.5s"
            }).children('a').css({
                top: "30%",
                transition:"top 0.5s"
                
            });
        }
        else{
            $('#nav-bar').css({
                height: "6em",
                transition: "height 0.5s"
            }).children('ul').css({
                "margin-top": "2%",
                transition: "margin-top 0.5s"
            });
        }
       
    }
    function active(e) {
        var pointerY = e.pageY - $(window).scrollTop();;
        //console.log(pointerY);
        if (pointerY >100) {
            $("#nav-bar").css({
                "pointer-events":"none"
            });
        }
        if (pointerY < 100) {
            $("#nav-bar").css({
                "pointer-events": "painted"
            });
        }
       

    }
    return {
        canCircle: canCircle,
        openForm: openForm,
        getContactForm: getContactForm,
        cv: cv,
        navigationCollaps: navigationCollaps,
        active:active
        
    }

})();








(function ($) {
   
    element.canCircle();
    var canvas = document.getElementById('canApp');
    canvas.addEventListener("click", element.openForm);
    $('#contact').click(element.getContactForm);
    $('#cv').click(element.cv);
    $(document).scroll(element.navigationCollaps);
    $(document).mousemove(element.active);
    $('#contact-li').click(element.getContactForm);
    $('#logo').click(function () {
        $('html,body').animate({ scrollTop:0 }, 1000);
    });
    $('#about').click(function () {

        $('html,body').animate({ scrollTop:($('#section2').offset().top)},1000); 
    });
    $('#page4').click(function () {
       
       
    });
})(jQuery);
