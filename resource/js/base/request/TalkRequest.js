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