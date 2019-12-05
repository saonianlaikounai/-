var category = {
    show: function(callback) {
        $.get(apis.category_show, function(res) {
            callback(res);
        })
    }
}