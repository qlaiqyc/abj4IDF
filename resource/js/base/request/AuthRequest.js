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