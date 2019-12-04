var article = {
    get: function(data, callback) {
        $.get(apis.article_get, data, function(res) {
            callback(res);
        });
    },
    add: function(fd, callback) {
        $.ajax({
            type: "POST",
            url: apis.article_add,
            data: fd,
            success: function(res) {
                callback(res);
            },
            processData: false,
            contentType: false
        });
    },
}