$(document).ready(

    //登入页面js验证
    function () {

        //注册页面js验证
        $("#pwd2").focus(function () {
            var pwd=$("#pwd").val();
        }).blur(function () {
                if ($(this).val() !=$("#pwd").val()){
                    $("#wmw_ff").css("display", "block");
                    flag = false;
                }else {
                    $("#wmw_ff").css("display", "none");
                    flag = true;
                }


        });



        //注册提交
        $("#registerBtn2").click(function () {
            var userName = $("#mail").val();
            var userPwd = $("#pwd").val();
            var userRoleId = $('input[ name="userType"]:checked').val();
            alert (userName+userRoleId);

            //发送AJAX请求后台
            $.ajax({
                url:"http://localhost:7002/user/NewUser",
                type:"POST",
                data:{"userName":userName,"userRoleId":userRoleId,"userPwd":userPwd},
                success:function(ret){
                    alert("成功");
                    console.log(ret);
                    if(ret.data){
                        //取得token放入cookie
                        //var token = ret.data.tokenId;
                        alert("注册成功！");
                        location.href="login.html";
                    }else{
                        alert("注册失败!");

                    }
                }
            });



        });


    });

function check() {
    return flag;
}