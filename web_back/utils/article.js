var article = {
    get: function(data, callback) {
        $.get(apis.artticle_get, data, function(res) {
            callback(res);
        });
    }

}