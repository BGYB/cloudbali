// JavaScript Document
function c(num) {
    if (num == "1") {
        document.getElementById("leftImg1").style.display = "block";
        document.getElementById("leftImg2").style.display = "none";
        document.getElementById("leftImg3").style.display = "block";
        document.getElementById("leftImg4").style.display = "none";
        document.getElementById("down2").style.display = "block";
        document.getElementById("down3").style.display = "none";
    }
    if (num == "2") {
        document.getElementById("leftImg1").style.display = "none";
        document.getElementById("leftImg2").style.display = "block";
        document.getElementById("leftImg3").style.display = "none";
        document.getElementById("leftImg4").style.display = "block";
        document.getElementById("down2").style.display = "none";
        document.getElementById("down3").style.display = "block";
    }
}