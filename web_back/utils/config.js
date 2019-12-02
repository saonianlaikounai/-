var baseUrl = 'http://localhost:8000/';


// 请求地址：http://localhost:8000/admin/category_delete
// 请求方式：post
// 请求参数：
//   名称  	类型    	说明  
//   id  	number	类别id
// 返回数据：
//    名称 	  类型  	说明                   
//   msg 	string	文字信息  ‘删除成功’   ‘删除失败’
var deleteCategory = 'http://localhost:8000/admin/category_delete';

// http://localhost:8000/admin/category_edit
// 请求方式：post
// 请求参数：
//   名称  类型    说明  
//   id  	number	文章id
//   name	string	类别名称
//   slug	string	别名  
// 返回数据：
//    名称  类型  	说明                   
//   msg 	string	文字信息  ‘编辑成功’   ‘编辑失败’
var redact = 'http://localhost:8000/admin/category_edit';