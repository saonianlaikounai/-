var category = {
    //获取分类
    get: function(callback) {
        $.ajax({
            type: 'GET',
            url: baseUrl + 'admin/category_search',
            success: function(res) {
                callback(res);
            }
        });
    },
    //新增分类
    add: function(name, slug, callback) {
        //ES6语法，如果对象的键和值同名，则可以写一个s
        $.post(baseUrl + 'admin/category_add', {
            name,
            slug
        }, function(res) {
            callback(res)

        });
    },
    //删除分类
    delete: function(myid, callback) {
        $.post(deleteCategory, {
            id: myid
        }, function(res) {
            callback(res);
        })
    },
    //编辑分类
}