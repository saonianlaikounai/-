var article = {
    //热点图
    hotpic: function(callback) {
        $.get(apis.article_hotpic, function(res) {
            callback(res);
        })
    },
    //最新资讯
    latest: function(callback) {
        $.get(apis.article_latest, function(res) {
            callback(res);
        })
    },
    //热门排行
    rank: function(callback) {
        $.get(apis.article_rank, function(res) {
            callback(res);
        })
    },
    comment: function(callback) {
        $.get(apis.article_comment, function(res) {
            callback(res);
        })
    },
    article: function(id, callback) {
        $.get(apis.article_article, { id }, function(res) {
            callback(res);
        })
    },
    search : function (data, callback) {
        $.get(apis.article_search,data,function (res) {
            callback(res);
        });
    },
    focus:function (callback) {
        $.get(apis.article_focus,function (res) {
            callback(res);
        });
    },
    get_comments : function (id,callback) {
        $.get(apis.article_get_comments,id,function (res) {
            callback(res);
        });
    },
    post_comment: function (data,callback) {
        $.post(apis.article_post_comment,data,function (res) {
            callback(res);
        });
    }
}