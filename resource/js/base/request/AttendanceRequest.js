if (typeof AttendanceRequest == "undefined") {
	AttendanceRequest = {};
}; 

/***
 * 获取所有
 * 考勤
 * ****/
AttendanceRequest.getAttendance4Cid = function(param,success){
	
	var url= "../../resource/js/base/request/json/attendance.json";
	
	var callback = function(data){
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
/**
 * 获取考勤排行
 * 
 * */
AttendanceRequest.getAttendance4Count = function(param,success){
	
	var url= "../../resource/js/base/request/json/attendance4count.json";
	
	var callback = function(data){
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

