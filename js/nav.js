$(document).ready(function(){
    $head1 = $(".head1");
    $menu = $("#menu");


    $menu.click(function(){
        $head1.toggleClass("collapse");
    });


   document.getElementById("btn").onclick = function () {
        var elmnt = document.getElementById("gallerytag");
        elmnt.scrollIntoView();
    };



});

