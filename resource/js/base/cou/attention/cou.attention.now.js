var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){

    var  pageObj = new Object;//
    
    var tabid4school 	   = "cou-attention-now-tab-school";
	var tableid4attendance = "cou-attention-now-tab-attendance";
	var tabid4dorm		   ="cou-attention-now-tab-dorm";


	pageObj.init4school 	= function(){
		
		var $this = $("#"+tabid4school);
		
		var callback = function(data){
			$this.html(HtmlUntil.couAttentionNowSchool(data));
			
			
			$this.find("div.stu-box").on("click",function(){
			
			var buf = new StringBuffer();
			var lid = $(this).attr("lid");
			
			buf.append('<div class="item-tab-prop item-tab-prop-ask" 	  id="item-tab-prop-ask"> </div>');
			buf.append('<div class="item-tab-prop item-tab-prop-audit"  id="item-tab-prop-audit"> </div>');
			
			var obj = {title:[{name:"请假信息",value:"ask"},{name:"审批记录",value:"audit"}],body:buf.toString(),width:"541px"};
			 
			var callbackobj = {};
			 
			 callbackobj.init4prop2ask = function(){
			 	var callback = function(data){
			 	 $("#item-tab-prop-ask").html(HtmlUntil.couTodoNowLeaveProp2Ask(data));
			 	};
			 	AttentionRequest.getLeave4Id({id:lid},callback);
			 };
			 callbackobj.init4prop2audit = function(){
			  	$("#item-tab-prop-audit").html(HtmlUntil.couTodoNowLeaveProp2Audit(""));
			 };
			 
			 	HtmlUntilBase.popup4PageList(obj,callbackobj);
			});
		};
		
		AttentionRequest.getLeave4Cid("",callback);
		
	};
	pageObj.init4attendance = function(){
		var $this = $("#"+tableid4attendance);
		
		var callback = function(data){
			$this.html(HtmlUntil.couAttentionNowAttendance(data));
		};
		
		AttentionRequest.getLeave4Cid("",callback);
	};
	pageObj.init4dorm	    = function(){};
    
    pageObj.initpub = function(){
    	HtmlUntil.init2couAttention4Now(layout.id4Center2now);
        var headNav    =  [{name:"今日返校",value:"school"},{name:"今日缺勤",value:"attendance"},{name:"今日舍风",value:"dorm"}];

        HtmlUntilBase.plug4HaderNav("cou-attention-now-header",headNav,pageObj);

    };
    pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);

pageInfoList4now.push({id:"cou-attention-now",obj:pageInfo});	
 
		
