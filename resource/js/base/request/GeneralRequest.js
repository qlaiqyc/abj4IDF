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
