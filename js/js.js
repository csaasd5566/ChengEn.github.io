$(document).ready(function(){
    $(".about-me").click(function(){
        //alert(id);
            var target_top = $(".about-me2").offset().top;
            $('html,body').animate({
                scrollTop:target_top
            },'fast')
            
    })
})
let text_h1=document.querySelector(".text_h1");
let fadeAndMove = [
    {
    opacity: 0,
    transform: `translateY(-20px)`,
    },
    {
    opacity: 1,
    transform: `translateY(0px)`,
    },
];
let titleTiming = {
    duration: 1500,
    easing: "ease-in-out",
};
text_h1.animate(fadeAndMove,titleTiming);
    

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal>=400){
            $(function(){
                $("#text_h1").fadeIn();
                $(".about-me2 p").fadeIn();
                $("ul").fadeIn(ul());
            })
        }
    });
function ul(){
    var ul=document.querySelector("ul");
    ul.style="display:inline-block";
}
let width = window.innerWidth;
let height =window.innerHeight;
var aboutme2 = document.querySelector(".about-me2");
aboutme2.style="height:"+(height-120).toString()+"px";
console.log(width);
if(width>=720){
    
    setTimeout(function(){
        var allimg=document.getElementsByClassName("a-img");
        for(var img of allimg){
            $(img).css({
                
                "height":"50px",
                "font-size":"35px",
                "transition":"0.5s",
                "overflow":"hidden"
            });
        }
    },2000)
}else if(width<=720){
    var texth1 = document.querySelector(".text_h1");
    texth1.style="font-size:3rem";
    var navigation = document.querySelector(".navigation");
    navigation.style="font-size:15px";
    var img=document.querySelectorAll(".a-img img");
    for(allimg of img){
        allimg.style="width:30px";
    }
    
    var imginside=document.querySelector(".img-inside");
    imginside.style="width:300px";
    setTimeout(function(){
        var allimg=document.getElementsByClassName("a-img");
        for(var img of allimg){
            $(img).css({
                "margin":"10px 40%"
            })
        }
        for(var img of allimg){ 
            $(img).css({
                "display":"flex",
                "justify-content":"left",
                "align-items": "center",
                "height":"40px",
                "font-size":"25px",
                "transition":"0.5s",
                "overflow":"hidden",
                "vertical-align": "center",
                "margin":"10px 30% 10px 30%",   
                "transform": "translateX(10%)"   
            });
        }
        var h1=document.querySelector("#text_h1");
        h1.style="font-size:4rem";
        var p=document.querySelectorAll(".about-me2 p");
        for(var allp of p){
            allp.style="font-size:20px;padding:3px";
        }
        var ul=document.querySelector("ul");
        ul.style="margin:0%";
    },2000)
}