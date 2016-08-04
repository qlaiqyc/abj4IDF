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