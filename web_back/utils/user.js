var user = {
    //登录方法
    login: function(username, password, callback) {
        $.post(baseUrl + 'admin/login', {
            user_name: username,
            password: password
        }, function(res) {
            callback(res);
            // console.log(res);
            // alert(res.msg);

        })
    },
    //退出方法
    logout: function(callback) {
        $.post(baseUrl + 'admin/logout', function(res) {
            callback(res);
        })
    },
    //获取用户信息
    getInfo: function(callback) {
        $.get(baseUrl + 'admin/getuser', function(res) {
            callback(res);
        })
    },
    comment_search:function (callback) {
        $.get(apis.article_comment_search,function (res) {
            callback(res);
        });
    }

}