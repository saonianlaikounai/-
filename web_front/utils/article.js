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
    }
}