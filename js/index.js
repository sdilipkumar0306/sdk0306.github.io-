$('.dark-mode').click(function () {
  $(".dark").toggleClass(' fa-moon fa-sun');
  $(".border").toggleClass(' border-dark border-light');
  // $(".dark").removeClass('');
  $(".body").toggleClass("bg-dark");  
  $(".body").toggleClass("text-white"); 
});


$('#about-tab').click(function () {
  $(".about").addClass("p0").removeClass("p3 p1 p2 p4 p5");
  $(".resume").addClass("p2").removeClass("p4 p5 p3 p1 p0");
  $(".projects").addClass("p2").removeClass("p5 p4 p3 p1 p0");

  $("#about-tab").addClass("active-1");
  $("#resume-tab").removeClass("active-1");
  $("#projects-tab").removeClass("active-1");

});
$('#resume-tab').click(function () {
  console.log("clicked");
  $(".about").addClass("p3").removeClass("p0 p1 p2 p4 p5");
  $(".resume").addClass("p4").removeClass("p0 p1 p2 p3 p5");
  $(".projects").addClass("p2").removeClass("p5 p0 p1 p3 p4");
  
  $("#about-tab").removeClass("active-1");
  $("#resume-tab").addClass("active-1");
  $("#projects-tab").removeClass("active-1");
});
$('#projects-tab').click(function () {
  $(".about").addClass("p1").removeClass("p0 p2 p3 p4 p5");
  $(".resume").addClass("p2").removeClass("p4 p3  p1 p0 p5");
  $(".projects").addClass("p5").removeClass("p2 p0 p1 p3 p4");

  $("#about-tab").removeClass("active-1");
  $("#resume-tab").removeClass("active-1");
  $("#projects-tab").addClass("active-1");
});
$(".email").click(function(){copyToClipboard(".emailtext"); myFunction();});
$(".phone").click(function(){copyToClipboard(".phonetext"); myFunction();});
 function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
  
  
 };

 function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


