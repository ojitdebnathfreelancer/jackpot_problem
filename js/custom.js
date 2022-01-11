$(document).ready(function(){

    // list one 

    $("#schedule .list-1").on("click",function(){
        $(".text-1").slideToggle();
    });

    $("#schedule .list-1").on("click",function(){
        $(".detail-item-1").addClass("d-border");
    });

    // $("#schedule .list-1").on("click",function(){
    //     $(".text-1").addClass("d-block");
    // });

    // list one 

    // list tow 
    $("#schedule .list-2").on("click",function(){
        $(".text-2").slideToggle();
    });

    $("#schedule .list-2").on("click",function(){
        $(".detail-item-2").addClass("d-border");
    });
    // list tow 

    // list three 
    $("#schedule .list-3").on("click",function(){
        $(".text-3").slideToggle();
    });

    $("#schedule .list-3").on("click",function(){
        $(".detail-item-3").addClass("d-border");
    });
    // list theree

    // list four
    $("#schedule .list-4").on("click",function(){
        $("#schedule .text-4 p").fadeIn();
    });

    $("#schedule .list-4").on("click",function(){
        $(".detail-item-4").addClass("d-border");
    });
    // four
});