var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var ret = true;

function checkEmail() {

    if ($("#mail").val() == "") {// �ж��û����Ƿ�Ϊ��
        $("#wmw_n").css("display", "block");
        $("#wmw_n").html("����������Ϊ�գ� ");
        ret = false;
    } else {
        if (myreg.test($("#mail").val()) == false) {
            $("#wmw_n").html("�����ʽ����ȷ�� ");
            ret = false;
        } else {
            $("#wmw_n").html("");
            /*
             * �˴���ʼ����ajax����checkUserAction�ж��û��Ƿ����
             */
            // �ѱ������ݽ������л�
            var params = $("form").serialize();

            $.ajax({
                url: "checkUser",
                type: "POST",
                data: params,
                dataType: "json",
                success: function (data) {
                    // �����ʾ���е�����
                    $("#wmw_n").html("");
                    if (data.message == "input") {
                        $("#wmw_n").html("���û����Ѿ����ڣ�");
                        ret = false;
                    } else if (data.message == "success") {
                        $("#wmw_n").html("<font color='green'>���û�������ʹ�ã�");
                        ret = true;
                    } else {
                        $("#wmw_n").html("���ִ���");
                        ret = false;
                    }
                }
            });
            /*
             * �˴���ʼ����ajax����checkUserAction�ж��û��Ƿ����
             */
        }
    }
    return true;
}

function checkPwd() {
    if ($("#pwd").val() == "") {
        $("#wmw_nn").css("display", "block");
        return false;
    } else {

        if ($("#pwd").val().length < 6) {
            $("#wmw_nn").css("display", "block");
            return false;
        }
    }
    $("#wmw_nn").css("display", "none");
    return true;
}

function checkRePwd() {
    var pwd = $("#pwd").val();
    if ($("#aginPwd").val() != pwd) {
        $("#wmw_nnnn").css("display", "block");
        return false;
    } else {
        $("#wmw_nnnn").css("display", "none");
    }
    return true;
}

$(function () {

    // �û����ж�
    $("#mail").blur(checkEmail);
    // �����ж�
    $("#pwd").focus(function () {
    }).blur(checkPwd);
    // �ظ������ж�
    $("#aginPwd").blur(checkRePwd);
    //�ύ��,������֤����
    $("#form2").submit(function () {

        var flag = true;

        if (!checkPwd()) {
            flag = false;
        }
        if (!checkRePwd()) {
            flag = false;
        }
        if (!checkEmail()) {
            flag = false;
        }
        if (!ret) {
            flag = false;
        }

        return flag;
    });
});





