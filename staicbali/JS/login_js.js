$(document).ready(
    //登入页面js验证
    function () {
        $("#mail").focus(function () {

        }).blur(
            function () {
                if ($(this).val() == "") {
                    // $("#wmw_n").css("display","block");
                    $("#wmw_n").html("请输入邮箱");
                    flag = false;
                } else {

                    if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                        .test($(this).val()) == false) {
                        $("#wmw_n").html("邮箱格式不正确");
                        flag = false;
                    } else {
                        $("#wmw_n").html("");
                        flag = true;
                    }

                }

            });

        $("#pwd").focus(function () {
        }).blur(function () {
            if ($(this).val() == "") {
                $("#wmw_nn").css("display", "block");
                flag = false;
            } else {
                if ($(this).val().length < 6) {
                    $("#wmw_nn").css("display", "block");
                    flag = false;

                } else {
                    $("#wmw_nn").css("display", "none");
                    flag = true;
                }

            }

        });


        $("#aginPwd").blur(function () {
            var pwd = $("#pwd").val();
            if ($(this).val() != pwd) {
                $("#wmw_nnnn").css("display", "block");
                flag = false;
            } else {
                $("#wmw_nnnn").css("display", "none");
                flag = true;
            }
        });

        //登录
        $("#loginBtn").click(function () {

            denr();
        });

        //我要注册点击事件
        $("#registerBtn").click(function () {
            window.location="login2.html";  //跳转页面login2.html

        });

    });


var yzm=false; //验证码
function denr() {
    var userName = $("#mail").val();
    var userPassword = $("#pwd").val();
    //发送AJAX请求后台网关路径，对应userconsumer，连接userprovider访问数据库
    $.ajax({
        url:"http://localhost:8804/user/doload",
        type:"GET",
        data:{"userName":userName,"userPwd":userPassword},
        dataType:"JSON",
        success:function(ret){
            if(ret!=null){
                //把参数存储到session中于前台获取
                setCookie("userName",ret.userName);
                setCookie("userRoleId",ret.userRoleId);
                setCookie("token",ret.tokenId);
                setCookie("userId",ret.userId);
                changeImgVerify();

                if(yzm==true){
                    window.location="index.html";
                }else{
                    alert("验证码错误！");
                }

            }else{
                alert("用户名或密码有误,登录失败!");
            }
        }
    });
}




//点击图片刷新验证码
function changeImg(value){
    $("#validateCodeImg1").attr("src", 'http://localhost:8804/user/DrawImage?createTypeFlag='+value+"&" + Math.random());//jquery方式
}


//登入验证码验证
function changeImgVerify(){
    var value =$("#validateCode").val();
    $.ajax({
        async: false,
        type: 'post',
        url: 'http://localhost:8804/user/checkboolean',
        dataType: "json",
        data: {
            validateCode: value
        },
        success: function (result) {
            if (result) {
                yzm=true;
            } else {
                yzm=false;
            }
            changeImg('ch')
        }
    });
}