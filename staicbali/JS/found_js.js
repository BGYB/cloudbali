// JavaScript Document

$(document).ready(function () {
    $("#leftbtu").click(function () {

        $(".tp>div").each(function (i) {
            if ($(this).css("margin-left") == "80px") {
                $(this).css("z-index", "1");
                $(this).animate({
                    marginLeft: '680px',
                    height: '294px',
                    width: '173px'
                }, "slow");
                $(this).find("img").animate({
                    height: '294px',
                    width: '173px'
                }, "slow");
            } else if ($(this).css("margin-left") == "180px") {
                $(this).css("z-index", "2");

                $(this).animate({
                    marginLeft: '80px',
                    height: '294px',
                    width: '173px',
                    marginTop: '100px'
                }, "slow");
                $(this).find("img").animate({
                    height: '294px',
                    width: '173px'
                }, "slow");
            } else if ($(this).css("margin-left") == "330px") {
                $(this).css("z-index", "3");
                $(this).animate({
                    marginLeft: '180px',
                    height: '334px',
                    width: '213px',
                    marginTop: '80px'
                }, "slow");
                $(this).find("img").animate({
                    height: '334px',
                    width: '213px'
                }, "slow");
            } else if ($(this).css("margin-left") == "530px") {
                $(this).css("z-index", "6");
                $(this).animate({
                    marginLeft: '330px',
                    height: '374px',
                    width: '253px',
                    marginTop: '60px'
                }, "slow");
                $(this).find("img").animate({
                    height: '374px',
                    width: '253px'
                }, "slow");
            } else if ($(this).css("margin-left") == "680px") {
                $(this).css("z-index", "5");
                $(this).animate({
                    marginLeft: '530px',
                    height: '334px',
                    width: '213px',
                    marginTop: '80px'
                }, "slow");
                $(this).find("img").animate({
                    height: '334px',
                    width: '213px'
                }, "slow");
            }
        });
    });
    $("#rightbtu").click(function () {
        $(".tp>div").each(function (i) {
            if ($(this).css("margin-left") == "680px") {
                $(this).css("z-index", "1");
                $(this).animate({
                    marginLeft: '80px',
                    height: '294px',
                    width: '173px'
                }, "slow");
                $(this).find("img").animate({
                    height: '294px',
                    width: '173px'
                }, "slow");
            } else if ($(this).css("margin-left") == "530px") {
                $(this).css("z-index", "2");
                $(this).animate({
                    marginLeft: '680px',
                    height: '294px',
                    width: '173px',
                    marginTop: '100px'
                }, "slow");
                $(this).find("img").animate({
                    height: '294px',
                    width: '173px'
                }, "slow");
            } else if ($(this).css("margin-left") == "330px") {
                $(this).css("z-index", "3");
                $(this).animate({
                    marginLeft: '530px',
                    height: '334px',
                    width: '213px',
                    marginTop: '80px'
                }, "slow");
                $(this).find("img").animate({
                    height: '334px',
                    width: '213px'
                }, "slow");
            } else if ($(this).css("margin-left") == "180px") {
                $(this).css("z-index", "6");
                $(this).animate({
                    marginLeft: '330px',
                    height: '374px',
                    width: '253px',
                    marginTop: '60px'
                }, "slow");
                $(this).find("img").animate({
                    height: '374px',
                    width: '253px'
                }, "slow");
            } else if ($(this).css("margin-left") == "80px") {
                $(this).css("z-index", "5");
                $(this).animate({
                    marginLeft: '180px',
                    height: '334px',
                    width: '213px',
                    marginTop: '80px'
                }, "slow");
                $(this).find("img").animate({
                    height: '334px',
                    width: '213px'
                }, "slow");
            }
        });
    });
    $("#wz>div").hover(function () {
        $(this).css("background-color", "#000");
        $(this).css("color", "#fff");
    }, function () {
        $(this).css("background-color", "#fff");
        $(this).css("color", "#CCC");
    });
    //$("#wz>div").click(function(){
    //var i=($(this).attr("id").substr(3,4));
    //	if($(this).eq$("#on1")){
    $("#one1").click(function () {

        $("#wmwimg1").attr({src: "Images/found1.jpg", width: "173", height: "294"});
        $("#wmwimg2").attr({src: "Images/found2.jpg", width: "213", height: "334"});
        $("#wmwimg3").attr({src: "Images/found3.jpg", width: "253", height: "374"});
        $("#wmwimg4").attr({src: "Images/found4.jpg", width: "213", height: "334"});
        $("#wmwimg5").attr({src: "Images/found5.jpg", width: "173", height: "294"});
    });
    $("#one2").click(function () {

        $("#wmwimg1").attr({src: "Images/pictorial1.png", width: "173", height: "294"});
        $("#wmwimg2").attr({src: "Images/pictorial2.png", width: "213", height: "334"});
        $("#wmwimg3").attr({src: "Images/pictorial3.png", width: "253", height: "374"});
        $("#wmwimg4").attr({src: "Images/pictorial4.png", width: "213", height: "334"});
        $("#wmwimg5").attr({src: "Images/pictorial5.png", width: "173", height: "294"});
    });
    $("#one3").click(function () {

        $("#wmwimg1").attr({src: "Images/innovation1.jpg", width: "173", height: "294"});
        $("#wmwimg2").attr({src: "Images/innovation2.jpg", width: "213", height: "334"});
        $("#wmwimg3").attr({src: "Images/innovation3.jpg", width: "253", height: "374"});
        $("#wmwimg4").attr({src: "Images/innovation4.jpg", width: "213", height: "334"});
        $("#wmwimg5").attr({src: "Images/innovation5.jpg", width: "173", height: "294"});
    });

    $("#one4").click(function () {

        $("#wmwimg1").attr({src: "Images/FBB-100.jpg", width: "173", height: "294"});
        $("#wmwimg2").attr({src: "Images/GL-100.jpg", width: "213", height: "334"});
        $("#wmwimg3").attr({src: "Images/lbb03.jpg", width: "253", height: "374"});
        $("#wmwimg4").attr({src: "Images/rjt02.jpg", width: "213", height: "334"});
        $("#wmwimg5").attr({src: "Images/WYZ-1.jpg", width: "173", height: "294"});
    });
    $("#one5").click(function () {

        $("#wmwimg1").attr({src: "Images/story1.jpg", width: "173", height: "294"});
        $("#wmwimg2").attr({src: "Images/story2.jpg", width: "213", height: "334"});
        $("#wmwimg3").attr({src: "Images/story3.jpg", width: "253", height: "374"});
        $("#wmwimg4").attr({src: "Images/story4.jpg", width: "213", height: "334"});
        $("#wmwimg5").attr({src: "Images/story5.jpg", width: "173", height: "294"});
    });
});

var first = 1;
var maxpicture = 5;

function showaa() {
    for (var j = 1; j <= maxpicture; j++) {
        if (first == j)
            document.getElementById("b" + first).style.display = "block";
        else
            document.getElementById("b" + j).style.display = "none";
    }
    if (first == maxpicture)
        first = 1;
    else
        first++;
}

setInterval("showaa()", 1500);