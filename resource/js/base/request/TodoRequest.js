if (typeof TodoRequest == "undefined") {
	TodoRequest = {};
}; 
/***
 * 获取
 * 离校超期
 * 
 * ****/
TodoRequest.getOverdue = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		success(data.slice(0,2));
	};

	BasePlug.getJSON(url,callback);
};

/**
 *获取
 * 离校销假
 * **/

TodoRequest.getReport = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		success(data.slice(2,4));
	};

	BasePlug.getJSON(url,callback);
};

/**
 *获取
 * 请假
 * **/

TodoRequest.getAsk = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		success(data.slice(4,5));
	};

	BasePlug.getJSON(url,callback);
};

/**
 *获取
 * 续假
 * **/

TodoRequest.getExtend = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		success(data.slice(5,6));
	};

	BasePlug.getJSON(url,callback);
};


/**
 * 获取假条详情
 * ** */
TodoRequest.getLeave4Id = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		for(var i=0; i< data.length; i++){
			if(data[i].id==param.sid){
				success(data[i]);
			}
		}
	};

	BasePlug.getJSON(url,callback);
};
