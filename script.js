// var scheduleRide = $('button').on("click",function(){
//   window.location.href="https://www.facebook.com/backpackmoms2/posts/133859769042066"
// });

$(function () {
      $('#email').click(function (event) {
        var email = 'backpackmoms2@gmail.com';
        var subject = '';
        var emailBody = '';
        var attach = '';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
            "?attach="+attach;
      });
    });
$(function () {
      $('#b2').click(function (event) {
        var email = 'backpackmoms2@gmail.com';
        var subject = '';
        var emailBody = '';
        var attach = '';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
            "?attach="+attach;
      });
    });
$('p').mouseover(textChange);
$('p').mouseout(textBack);


function textChange(){
    $(this).css("font-size","25px");
}
function textBack(){
    $(this).css("background-color"," ");
    $(this).css("font-size","18px");
}
         