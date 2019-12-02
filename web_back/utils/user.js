var baseUrl = 'http://localhost:8000/';
var user = {
    //登录方法
    login: function(username, password) {
        $.post(baseUrl + 'admin/login', {
            user_name: username,
            password: password
        }, function(res) {
            // console.log(res);
            // alert(res.msg);
            $('#myMsg').text(res.msg);
            $('#myModal').modal('show'); // 显示弹框
            if (res.code === 200) {
                // 成功，跳转到后台首页
                location.href = 'index.html';
            }
        });
    },
    //退出方法
    logout: function() {
        $.post(baseUrl + 'admin/logout', function(res) {
            if (res.code == 200) {
                location.href = 'login.html';
            }
        })
    },
    //获取用户信息
    getInfo: function() {
        $.get(baseUrl + 'admin/getuser', function(res) {
            if (res.code == 200) {
                //更改头像
                $('.touxiang').prop('src', res.data.user_pic);
                //更改管理员名字
                $('#myName').text(res.data.nickname).css('font-style', 'normal');
            }
        })
    }
}