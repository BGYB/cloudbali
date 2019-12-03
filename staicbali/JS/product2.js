$(function () {
    var productId = getCookie("productId");  //商品id
    var userId = getCookie("userId");  //登入用户id
    alert(productId + "," + userId);

    if (productId != 0) {
        $.ajax({
            type: "GET",
            url: "http://localhost:7002/product/finAll?productId=" + productId,
            dataType: "JSON",
            success: function (reg) {
                if (reg != null) {
                    console.log(reg.data.productList);
                    alert(reg.data.productList.length);
                    var str = '';
                    str += '<tr> <th colspan="2" align="center">商品详细信息</th></tr>';
                    for (var i = 0; i < reg.data.productList.length; i++) {
                        str += '<tr> <td width="150px" align="right">商品图片：</td> <td width="350px"><img src="' + reg.data.productList[i].picture + '"></td> </tr>';
                        str += '<tr> <td align="right">商品名称：</td><td>' + reg.data.productList[i].productName + '</td> </tr>';
                        str += '<tr> <td align="right">商品价格：</td><td>' + reg.data.productList[i].price + '元</td> </tr>';
                        str += '<tr> <td align="right">商品介绍:</td><td>' + reg.data.productList[i].information + '</td></tr>';
                        str += '<tr> <td align="right">商品使用方法:</td><td>' + reg.data.productList[i].useway + '</td></tr>';
                        str += '<tr> <td align="right">输入你要购买的数量：<input type="text" value="1" name="productNum" id="productNum" size="3"/></td><td >\n' +
                            '\t\t\t\t\t<a href="javascript:void(0);"name="' + reg.data.productList[i].productId + '" class="gm" style="font-size: 18px;font-weight:bold; color: navy;">点击购买</a>\n' +
                            '\t\t\t\t\t</td></tr>';
                    }
                    $("#proTable").append(str);
                }


            },
        });
    }


})

$(function () {

    $(document).on("click", ".gm", function () {
        var productNum = $("#productNum").val();  //获取购买数量
        var productId = getCookie("productId");  //获取商品id
        var userId = getCookie("userId");  //获取登入用户id
        alert("数量" + productNum + ",id" + productId);
        alert("用户id" + userId);
        var jsonData = {"productId": productId, "productNum": productNum, "userId": userId};
        $.ajax({
            url: "http://localhost:7002/product/addBuyList",
            type: "POST",
            data: JSON.stringify(jsonData),   //转换为JSON格式数据传输
            contentType: "application/json;charset=UTF-8",//指定消息请求类型
            dataType: "JSON",
            success: function (reg) {
                console.log(reg.data);
                if (reg != null) {
                    alert("添加购物车成功！回到商品页");
                    window.location = "product.html";
                } else {
                    alert("添加购物车失败");
                }

            },


        });

    });

})
