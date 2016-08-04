if (typeof CounductRequest == "undefined") {
	CounductRequest = {};
}; 
/***
 * 获取 总操行
 * 
 * ****/
CounductRequest.getList4Cid = function(param,success){
	
	var url= "../../resource/js/base/request/json/counduct.json";
	
	var callback = function(data){
		
		if(!StringHelper.HasText(param.cid)){
			success(data);
			return;
		}
		
		var newdata = [];
		for(var i =0 ;i<data.length;i++){
			if(data[i].cid == param.cid){
				newdata.push(data[i]);
			}
		}
		success(newdata);
	};

	BasePlug.getJSON(url,callback);
};

 /**
  * 获取操行排行
  * 
  * **/
 
CounductRequest.getList2Count4Cid = function(param,success){
	
	var url= "../../resource/js/base/request/json/counduct4count.json";
	
	var callback = function(data){
		
		if(!StringHelper.HasText(param.cid)){
			success(data);
			return;
		}
		
		var newdata = [];
		for(var i =0 ;i<data.length;i++){
			if(data[i].cid == param.cid){
				newdata.push(data[i]);
			}
		}
		success(newdata);
	};

	BasePlug.getJSON(url,callback);
};