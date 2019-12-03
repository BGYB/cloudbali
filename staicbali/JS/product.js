//文档加载事件,加载childType表数据
$(document).ready(function () {
    alert("跳转到商品页面");
    $.ajax({
        type: "GET",
        url: "http://localhost:7002/product/FinChildTypeAll",
        dataType: "JSON",
        success: function (reg) {
            if (reg != null) {
                console.log(reg.data.childTypeList);
                //alert(reg.data.childTypeList.length);
                var str = '';
                str += '<h3 class="titlewel">欢迎选购</h3><div id="left">';
                str += '<h3 class="modi"><a href="javascript:void(0);" class="qbsp" style="font-size: 18px;font-weight:bold; color: red;"> 全部商品</a></h3><h3 class="allPro">商品分类</h3>';
                str += '<h3 class="modi1"></h3> <ul id="fenlei">';
                for (var i = 0; i < reg.data.childTypeList.length; i++) {
                    //str+=' <h3 class="modi1">'+data[i].productName+'</h3> <ul> <li><a href="\javascript:void(0);\" name="'+reg.data.childTypeList[i].childTypeId+'"> '+reg.data.childTypeList[i].childName+'</a></li> </ul> </div></div>';
                    //str+='<li><a href="\javascript:void(0);\"id='+"dj"+reg.data.childTypeList[i].childTypeId+" name="+reg.data.childTypeList[i].childTypeId+'> '+reg.data.childTypeList[i].childName+'</a></li>';
                    str += '<li id=' + "dj" + reg.data.childTypeList[i].childTypeId + " name=" + reg.data.childTypeList[i].childTypeId + '> ' + reg.data.childTypeList[i].childName + '</li>';
                }
                str += '</ul>';
                $("#main").append(str);
                $("#left").hide();
            }


        },
    });


});


$(function () {
    var url = "http://localhost:7002/product/finAll";
    pj();  //调用方法
    //#left分类div隐藏
    $(document).on("click", "#spfl", function () {
        $("#left").toggle();
    })
    //点击全部商品时，清空div的内容，初始化商品
    $(document).on("click", ".qbsp", function () {
        $("#right").html("");
        url = "http://localhost:7002/product/finAll";
        pj();
    })

    //当点击商品分类时，传入商品分类id，改变url地址根据productTypeId商品id进行查询
    $(document).on('click', '#fenlei li', function () {
        $("#right").html("");
        var productTypeId = $(this).attr("name");
        alert(productTypeId);
        url = "http://localhost:7002/product/finAll?productTypeId=" + productTypeId;
        alert(url);
        pj();
    });

    //当点击商品分类时，传入商品分类id，改变url地址根据productTypeId商品id进行查询
    $(document).on('click', '.pageNo', function () {
        $("#right").html("");
        var pageNo = $(this).attr("name");
        alert(pageNo);
        url = "http://localhost:7002/product/finAll?pageNo=" + pageNo;
        alert(url);
        pj();
    });


    //商品拼接方法
    function pj() {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "JSON",
            success: function (reg) {
                if (reg != null) {

                    console.log(reg.data);
                    console.log(reg.data.productList);
                    //alert(reg.data.productList.length);
                    var str = '';
                    str += '<h3 class="titlewel"><a href="javascript:void(0)" id="spfl">商品分类</a> </h3>';
                    str += '<div class="productList">';
                    for (var i = 0; i < reg.data.productList.length; i++) {
                        str += '<dl> <dt><a href="javascript:void(0);" id="dtOnclick" name="' + reg.data.productList[i].productId + '"> ' +
                            '<img src="' + reg.data.productList[i].picture + '"></a></dt>\n' +
                            '\t\t<dd class="detai2">价格：' + reg.data.productList[i].price + '元</dd>\n' +
                            '\t\t<dd class="detail">名称：' + reg.data.productList[i].productName + '</dd>\n' +
                            '\t\t<dd class="detail">简介：' + reg.data.productList[i].information + '</dd></dl>';
                    }
                } else {
                    str += '<h3 style="padding: 180px;">对不起，没有你要找的信息！</h3>';
                }

                str += '<div id="pageList" ><ul class="pageList">\n' +
                    '\t\t<li><a href="javascript:void(0);" class="pageNo" name="1">首页</a></li>\n' +
                    '\t\t<li><a href="javascript:void(0);" class="pageNo" name="' + (reg.data.pages.currentPageNo - 1) + '">上一页</a></li>\n' +
                    '\t\t<li><a href="javascript:void(0);" class="pageNo" name="' + (reg.data.pages.currentPageNo + 1) + '">下一页</a></li>\n' +
                    '\t\t<li><a href="javascript:void(0);" class="pageNo" name="' + reg.data.pages.totalCount + '">尾页</a></li>\n' +
                    '\t\t<li>共:' + reg.data.pages.totalCount + '条记录&nbsp;&nbsp;第:' + reg.data.pages.currentPageNo + '页/&nbsp;共:' + reg.data.pages.totalPageCount + '页</li></ul></div>';

                $("#right").append(str); //最后把str添加到#main这个div里面
            },

        });
    }


})


//点击图片查看商品详情页
$(function () {

    $(document).on('click', '#dtOnclick', function () {
        alert("成功");
        var productId = $(this).attr("name");
        var userId = getCookie("userId");
        alert(productId);
        if (productId != 0 && productId != null) {
            setCookie("productId", productId);//把商品productId，存到cook里然后页面跳转
            setCookie("userId", userId);  //对应登入用户个人id
            window.location = "product_detail.html";
        }
        ;

    });

});
