if (typeof AttentionRequest == "undefined") {
	AttentionRequest = {};
}; 
 
/**
 *获取请假
 * **/

AttentionRequest.getLeave4Cid = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		if(!StringHelper.HasText(param.cid))   { success(data); return;}
		
		var newDate = [];
		
		for(var i =0 ;i<data.length;i++){
			var obj = data[i];
			if(obj.cid == param.cid){
				newDate.push(obj);
			}
		}
		
		success(newDate);
	};

	BasePlug.getJSON(url,callback);
};


AttentionRequest.getLeave4Id = function(param,success){
	
	var url= "../../resource/js/base/request/json/leave.json";
	
	var callback = function(data){
		
		
		for(var i =0 ;i<data.length;i++){
			var obj = data[i];
			if(obj.id == param.id){
				success(obj);
			}
		}
		
	};

	BasePlug.getJSON(url,callback);
};

 