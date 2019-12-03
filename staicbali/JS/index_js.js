var timer = null;
var offset = 2000;
var index = 3;/* 控制图片播放位置 */

//大图交替轮换
function slideImage(i) {
    var id = 'image_' + target[i];
    $('#' + id).animate({opacity: 1}, 400, function () {
        $(this).find('.word').animate({height: 'show'}, 'slow');
    }).show().siblings(':visible').find('.word').animate({height: 'hide'}, 'fast', function () {
        $(this).parent().animate({opacity: 0}, 400).hide();
    });
}

//bind thumb a
function hookThumb() {
    $('#thumbs li a').bind('click', function () {
        if (timer) {
            clearTimeout(timer);
        }
        var id = this.id;
        index = getIndex(id.substr(3));
        rechange(index);
        slideImage(index);
        timer = window.setTimeout(auto, offset);
        this.blur();
        return false;
    });
}

//bind next/prev img
function hookBtn() {
    $('#thumbs li img').filter('#play_prev,#play_next').bind('click', function () {
        if (timer) {
            clearTimeout(timer);
        }
        var id = this.id;
        if (id == 'play_prev') {
            index--;
            if (index < 0) index = 3;
        } else {
            index++;
            if (index > 3) index = 0;
        }
        rechange(index);
        slideImage(index);
        timer = window.setTimeout(auto, offset);
    });
}

//得到指标
function getIndex(v) {
    for (var i = 0; i < target.length; i++) {
        if (target[i] == v)
            return i;
    }
}

function rechange(loop) {
    var id = 'thumb_' + target[loop];
    $('#thumbs li a.current').removeClass('current');
    $('#' + id).addClass('current');
}

function auto() {
    index++;
    if (index > 3) {
        index = 0;
    }
    rechange(index);
    slideImage(index);
    timer = window.setTimeout(auto, offset);
}

$(function () {
    //change opacity
    $('div.word').css({opacity: 0.85});
    auto();
    hookThumb();
    hookBtn();

});

var target = ["xixi-01", "xixi-02", "xixi-03", "xixi-04"];
$(function () {

    var userName = getCookie("userName");
    var token = getCookie("token");
    var userRoleId = getCookie("userRoleId");
    var userId = getCookie("userId");  //登入用户id
    if (token == "") {
        alert("你没有登录,点击去登录!");
        location.href = "login.html";
    }
    if (userName != "") {
        $("#userName").html(userName + ",你好！");
    } else {
        $("#userName").html("请登录!");
    }

    //文档加载事件，根据用户id进行查询一级菜单
    var rightList = "";
    $.ajax({
        type: "GET",//请求类型
        url: "http://localhost:8804/user/getRole",//请求的url
        headers: {"token": token}, //获取header中 存放的tokenid
        data: {"roleId": userRoleId},
        dataType: "json",
        success: function (ret) {//data：返回数据（json对象）
            console.log(ret);
            var str = "";
            rightList="";
            rightList=ret;
            for (var i=0;i<ret.length;i++){
                if (ret[i].sysRight.rightParentCode == "ROOT_MENU") {//right.rightParentCode=="ROOT_MENU"则拼出一级菜单
                    str += "<a href='javascript:void(0);' name='" + ret[i].sysRight.rightCode + "'> " + ret[i].sysRight.rightText + "</a>&nbsp;&nbsp;";
                }
            }
        $("#divShow1").html(str); //替换一级目录

        },
        error: function (data) {//当访问时候，404，500 等非200的错误状态码
            alert("获取用户角色列表error");
        }
    });


    $("#divShow3").on("mouseover", '#divShow1 a', function () {
        var rightCode = $(this).attr("name");
        console.log(rightCode);
        $(".showDiv table").html("");
        for (var i=0;i<rightList.length;i++){
            if (rightList[i].sysRight.rightParentCode == rightCode) {
                var str = "<tr><td><a href='" + rightList[i].sysRight.rightUrl + "'>" + rightList[i].sysRight.rightText + "</a></td></tr>";
                $(".showDiv table").append(str);
            }
        }
    });

    $("#divShow3").on("mouseover mouseout", this, function (event) {
        if (event.type == "mouseover") {
            $(".showDiv").show();
        } else if (event.type == "mouseout") {
            $(".showDiv").hide();
        }
    });


     //注销
    $("#zx").click(function () {
        alert("1");
        $.ajax({
            type: "GET",
            url: "http://localhost:7002/user/deleteUser",
            data: {"token": token},
            dataType: "JSON",
            success: function (data) {
                if (data) {
                    alert("注销成功");
                    window.location = "login.html";
                } else {
                    alert("注销失败");
                }
                ;

            }
        });
    });

});