$(document).ready(function(){
  
    // filter
    
    $("#all-btn").click(function(){
        $(".image").show();
    })
    
    $("#java-btn").click(function(){
        $(".java").show();
        $(".next").hide();
        $(".html").hide();
    })
    
    $("#next-btn").click(function(){
        $(".next").show();
        $(".java").hide();
        $(".html").hide();
    })
    
    $("#html-btn").click(function(){
        $(".html").show();
        $(".next").hide();
        $(".java").hide();
    })
    

    
    })