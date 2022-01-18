var b = $('p').on("mouseenter",function(){
    $(this).css("font-size","25px");
    $(this).css("background-color", "blue");
})  
var a = $('p').on("mouseleave",function(){
    $(this).css("font-size"," ")
    $(this).css("background-color", " ")
})

// function changeColor(){
//   (b).css("background-color","purple")
//   return false;
// }

var scheduleRide = $('button').on("click",function(){
  window.location.href="https://www.facebook.com/backpackmoms2/posts/133859769042066"
});

$(function () {
      $('#email').click(function (event) {
        var email = 'backpackmoms2@gmail.com';
        var subject = 'Test';
        var emailBody = 'Hi Sample,';
        var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
            "?attach="+attach;
      });
    });