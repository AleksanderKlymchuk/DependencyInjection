
var app = (function () {
    var formSuccess = function (e) {
        if (e = "done") {
            lightbox();
            $('#contact-form').remove();

        }
        else
        {
            alert("Service ikke tilgængelige i øjeblliket. Prøve senere");
        }
    }
    var removeForm = function () {
        lightbox();
        $('#contact-form').fadeOut(800);
    }
    var slideForm =function()
    {
        //$('#contact-form').hide('slide', { direction: 'right' }, 500);
        lightbox();
        $('#contact-form').hide('slide', { direction: 'right' }, 500);
    }
    function lightbox() {
        $('html, body').css({
            'overflow': 'visible',
        });
        $('#lightbox').remove();
    }
    return {
        formSuccess: formSuccess,
        removeForm: removeForm,
        slideForm:slideForm
    }
})();
(function ($) {
    $('.glyphicon-remove').click(app.removeForm);
    $('.glyphicon-arrow-right').click(app.slideForm);
})(jQuery)
function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatlng=new google.maps.LatLng(55.982372, 10.168059);
    var mapOptions = {
        center:myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
       
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Oleksandr Klymchuk'
    });
}
initialize();


