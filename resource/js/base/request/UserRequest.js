if (typeof UserRequest == "undefined") {
	UserRequest = {};
}; 

/***
 * 获取班级集合
 * 
 * ****/
UserRequest.getClass = function(param,success){
	
	var url= "../../resource/js/base/request/json/class.json";
	
	var callback = function(data){
		success(data);
	};

	BasePlug.getJSON(url,callback);
};

/**
 *根据班级获取学生 
 * **/

UserRequest.getStu4Cid = function(param,success){
	
	var url= "../../resource/js/base/request/json/stu.json";
	
	var callback = function(data){
		//数据自己处理
		var result = [];
		for(var i =0 ;i<data.length;i++){
			var obj = data[i];
			if(obj.cid == param.cid){
				result.push(obj);
			}
		}
		success(result);
	};

	BasePlug.getJSON(url,callback);
};
