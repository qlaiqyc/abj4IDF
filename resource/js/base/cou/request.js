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

 
if (typeof AuthRequest == "undefined") {
    AuthRequest = {};
}
AuthRequest.getClassList=function(success){
    var url="../../resource/js/base/request/json/stu.json";
    var callback=function(data){
        success(data);
    };
    BasePlug.getJSON(url,callback);
};
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
if (typeof GeneralRequest == "undefined") {
    GeneralRequest = {};
}

GeneralRequest.getStu=function(success){
    var url="../../resource/js/base/request/json/general.json";
    var callback=function(data){
        success(data);
    };
    BasePlug.getJSON(url,callback);
};

/**
 * 根据ID获取通知
 *
 * */

GeneralRequest.getGeneral4Id = function(success){

    var url="../../resource/js/base/request/json/general.json";
    var callback=function(data){
        //数据自己处理
/*        for(var i =0 ;i<data.length;i++){
            var obj = data[i];
            if(obj.id == param.id){*/
                success(data);
/*            }
        }*/
    };

    BasePlug.getJSON(url,callback);
};

if (typeof NoticeRequest == "undefined") {
    NoticeRequest = {};
};
/***
 * 获取班级集合
 *
 * ****/
NoticeRequest.getClass = function(param,success){

    var url= "../../resource/js/base/request/json/class.json";

    var callback = function(data){
        success(data);
    };

    BasePlug.getJSON(url,callback);
};

/**
 *根据班级获取通知集合
 * **/
NoticeRequest.getNotice4Cid = function(param,success){

    var url= "../../resource/js/base/request/json/notice.json";
    var callback=function(data){
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
/**
 * 根据ID获取通知
 * 
 * */

NoticeRequest.getNotice4Id = function(param,success){

    var url= "../../resource/js/base/request/json/notice.json";
    var callback=function(data){
        //数据自己处理
        
        for(var i =0 ;i<data.length;i++){
            var obj = data[i];
            if(obj.id == param.id){
                success(obj);
            }
        }
      
    };

    BasePlug.getJSON(url,callback);
};

/*获得头像*/
NoticeRequest.getStu4Photo = function(success){

    var url= "../../resource/js/base/request/json/stu.json";

    var callback = function(data){
        //数据自己处理
        success(data);
    };

    BasePlug.getJSON(url,callback);
};
if (typeof TalkRequest == "undefined") {
    TalkRequest = {};
}

/*获得头像*/
TalkRequest.getStu4Table = function(success){

    var url= "../../resource/js/base/request/json/stu.json";

    var callback = function(data){
        //数据自己处理
        var newData = [];
        for(var j=0;j<data.length;j++){
            if(data[j].cid == "1002"){
                newData.push(data[j]);
            }
        }
        var random={"0":"逃课","1":"早退","2":"晚寝","3":"违纪"};
        var leave={"逃课":"A","早退":"B","晚寝":"B","违纪":"S"};
        for(var i=0;i<newData.length;i++){
            var obj=newData[i];
            obj.cname	  = "会计"+(i+1)+"班";
            obj.talktime  = "2015-09-01";
            obj.ttheme	  = random[Math.floor(Math.random()*4)];
            obj.leave     = leave[obj.ttheme];
        }
        success(newData);
    };

    BasePlug.getJSON(url,callback);
};

TalkRequest.popup4TabStuDetail = function(success){
    var url= "../../resource/js/base/request/json/stu.json";
    var callback = function(data){
        success(data);
    };
    BasePlug.getJSON(url,callback);
};
TalkRequest.popup4TabStu = function(success){
    var url= "../../resource/js/base/request/json/stu.json";
    var callback = function(data){
        success(data);
    };
    BasePlug.getJSON(url,callback);
};
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
