var article = {
    hotpic: function(callback) {
        $.get(apis.article_hotpic, function(res) {
            callback(res);
        })
    }
}