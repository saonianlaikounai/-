var article = {
    get: function(data, callback) {
        $.get(apis.article_get, data, function(res) {
            callback(res);
        });
    }
}