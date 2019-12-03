$(function () {
    var userId = getCookie("userId");  //登入用户id
    //alert(userId);
    if (userId != 0) {
        $.ajax({
            type: "GET",
            url: "http://localhost:7002/product/finBuyList?userId=" + userId,
            dataType: "JSON",
            success: function (reg) {
                if (reg != null) {
                    console.log(reg.data.buyList);
                    alert(reg.data.buyList.length);
                    var str = '';
                    for (var i = 0; i < reg.data.buyList.length; i++) {
                        str += '<tr>\n' +
                            '    \t\t\t<td><img src="' + reg.data.buyList[i].picture + '"style="width: 90px;height: 60px"></td>\n' +
                            '    \t\t\t<td>' + reg.data.buyList[i].productName + '</td>\n' +
                            '    \t\t\t<td>' + reg.data.buyList[i].childname + '</td>\n' +
                            '    \t\t\t<td>￥ ：' + reg.data.buyList[i].price + '元</td>\n' +
                            '    \t\t\t<td>' + reg.data.buyList[i].productNum + '</td>\n' +
                            '    \t\t\t<td>￥ ：' + (reg.data.buyList[i].price * reg.data.buyList[i].productNum) + '元</td>\n' +
                            '    \t\t</tr>';
                    }
                    $("#table").append(str);
                }


            },
        });
    }
})