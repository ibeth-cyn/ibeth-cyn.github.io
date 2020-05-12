$(document).ready(function(){
    $(".pages .details").hide();
    $(".pages .show").show();

    $(".pages ul li").click(function(){

        $(".pages ul li").removeClass("active");
        $(this).addClass("active");

        var currentTabContent = $(this).attr("data-list");
        $(".pages .details").hide();
        $("."+ currentTabContent).show();
    });
});