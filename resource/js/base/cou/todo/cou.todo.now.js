var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){

    var  pageObj   = {};
    var  conductid = "cou-todo-now-tab-conduct";
 	var  noticetid = "cou-todo-now-tab-notice";
 	
    pageObj.init4leave = function(){
        
        var  pageObjSon = {};
        var  overdueid  ='cou-todo-now-tab-leave-tab-overdue';
		var  reportid   ='cou-todo-now-tab-leave-tab-report';
		var  askid	    ='cou-todo-now-tab-leave-tab-ask';
		var  extendid   ='cou-todo-now-tab-leave-tab-extend';
			
		pageObjSon.init4overdue= function(){    
			var	$this	= $("#"+overdueid);
			
			var callback = function(data){
				$this.html(HtmlUntil.couTodoNowLeave4Overdue(data));
				
				$this.find("div.stu-boxTop").on("click",function(){
					var buf = new StringBuffer();
					var sid = $(this).attr("sid");
					buf.append('<div class="item-tab-prop item-tab-prop-report" id="item-tab-prop-report"> </div>');
					buf.append('<div class="item-tab-prop item-tab-prop-ask" 	  id="item-tab-prop-ask"> </div>');
					buf.append('<div class="item-tab-prop item-tab-prop-audit"  id="item-tab-prop-audit"> </div>');
					
					 var obj = {title:[{name:"请假信息",value:"ask"},{name:"审批记录",value:"audit"}],body:buf.toString(),width:"541px"};
					 var callbackobj = {};
					 
					 callbackobj.init4prop2ask = function(){
					 	 var callback = function(data){
					 	 	$("#item-tab-prop-ask").html(HtmlUntil.couTodoNowLeaveProp2Ask(data));
					 	 };
					 	 
					 	TodoRequest.getLeave4Id({sid:sid},callback); 
					 };
					 callbackobj.init4prop2audit = function(){
					  	$("#item-tab-prop-audit").html(HtmlUntil.couTodoNowLeaveProp2Audit(""));
					 };
					 
					 HtmlUntilBase.popup4PageList(obj,callbackobj);
				});
				$this.find(".btn-abj-primary").on("click",function(){
					HtmlUntilBase.popup4Confirm({cname:"销假"});
				})
			};
						
			TodoRequest.getOverdue("",callback);
		};
		
		pageObjSon.init4report= function(){ 
			var	$this	= $("#"+reportid);
			
			var callback = function(data){
				$this.html(HtmlUntil.couTodoNowLeave4Report(data));
				
				$this.find("div.stu-boxTop").on("click",function(){
				var buf = new StringBuffer();
				var sid = $(this).attr("sid");
				buf.append('<div class="item-tab-prop item-tab-prop-report" id="item-tab-prop-report"> </div>');
				buf.append('<div class="item-tab-prop item-tab-prop-ask" 	  id="item-tab-prop-ask"> </div>');
				buf.append('<div class="item-tab-prop item-tab-prop-audit"  id="item-tab-prop-audit"> </div>');

				var obj = {title:[{name:"销假信息",value:"report"},{name:"请假信息",value:"ask"},{name:"审批记录",value:"audit"}],body:buf.toString(),width:"541px"};
				var callbackobj = {};

				callbackobj.init4prop2report = function(){
					$("#item-tab-prop-report").html(HtmlUntil.couTodoNowLeaveProp2Report(""));
				};
				callbackobj.init4prop2ask = function(){
					var callback = function(data){
					 	 	$("#item-tab-prop-ask").html(HtmlUntil.couTodoNowLeaveProp2Ask(data));
					};
					 	 
					TodoRequest.getLeave4Id({sid:sid},callback); 
				};
				callbackobj.init4prop2audit = function(){
					$("#item-tab-prop-audit").html(HtmlUntil.couTodoNowLeaveProp2Audit(""));
				};

				HtmlUntilBase.popup4PageList(obj,callbackobj);

				});
				$this.find(".btn-abj-primary").on("click",function(){
					HtmlUntilBase.popup4Confirm({cname:"销假"});
				});
				$this.find(".btn-abj-danger").on("click",function(){
					HtmlUntilBase.popup4Text({title:"拒绝销假",placeholder:"审批留言"});
				});
			};
						
			TodoRequest.getReport("",callback);
		};
		pageObjSon.init4ask = function(){
			var	$this	= $("#"+askid);
			
			var callback = function(data){
				$this.html(HtmlUntil.couTodoNowLeave4Ask(data));
				
				$this.find("div.stu-boxTop").on("click",function(){
					var buf = new StringBuffer();
					var sid = $(this).attr("sid");
					
					buf.append('<div class="item-tab-prop item-tab-prop-report" id="item-tab-prop-report"> </div>');
					buf.append('<div class="item-tab-prop item-tab-prop-ask" 	  id="item-tab-prop-ask"> </div>');
					buf.append('<div class="item-tab-prop item-tab-prop-audit"  id="item-tab-prop-audit"> </div>');
	
					var obj = {title:[{name:"请假信息",value:"ask"},{name:"审批记录",value:"audit"}],body:buf.toString(),width:"541px"};
	
					var callbackobj = {};
					
					callbackobj.init4prop2ask = function(){
						var callback = function(data){
					 	 	$("#item-tab-prop-ask").html(HtmlUntil.couTodoNowLeaveProp2Ask(data));
						};
					 	 
						TodoRequest.getLeave4Id({sid:sid},callback); 
					};
					callbackobj.init4prop2audit = function(){
						$("#item-tab-prop-audit").html(HtmlUntil.couTodoNowLeaveProp2Audit(""));
					};
	
					HtmlUntilBase.popup4PageList(obj,callbackobj);

				});
				
				$this.find(".btn-abj-primary").on("click",function(){
					HtmlUntil.popup4Leave4Leader({cname:"请假"});
				});
				$this.find(".btn-abj-danger").on("click",function(){
					HtmlUntilBase.popup4Text({title:"拒绝请假",placeholder:"审批留言"});
				});
			}
			
			TodoRequest.getAsk("",callback);
		};
		pageObjSon.init4extend = function(){  
			var	$this	= $("#"+extendid);
			var callback = function(data){
				$this.html(HtmlUntil.couTodoNowLeave4Extend(data));
				$this.find("div.stu-boxTop").on("click",function(){
					
					var sid = $(this).attr("sid");
					var callback4getLeave = function(data){
						
						var buf = new StringBuffer();
						buf.append('<div class="item-tab-prop item-tab-prop-extend" id="item-tab-prop-extend"> </div>');
						buf.append('<div class="item-tab-prop item-tab-prop-ask" 	  id="item-tab-prop-ask"> </div>');
						buf.append('<div class="item-tab-prop item-tab-prop-audit"  id="item-tab-prop-audit"> </div>');
		
						var obj = {title:[{name:"续假信息",value:"extend"},{name:"请假信息",value:"ask"},{name:"审批记录",value:"audit"}],body:buf.toString(),width:"541px"};
		
						var callbackobj = {};
		
						callbackobj.init4prop2extend = function(){
							
							var callback = function(data){
								$("#item-tab-prop-extend").html(HtmlUntil.couTodoNowLeaveProp2Extend(data));
							};
					 	 
							TodoRequest.getLeave4Id({sid:sid},callback); 
							
						};
						callbackobj.init4prop2ask = function(){
							var callback = function(data){
					 	 		$("#item-tab-prop-ask").html(HtmlUntil.couTodoNowLeaveProp2Ask(data));
							};
					 	 
							TodoRequest.getLeave4Id({sid:sid},callback); 
						};
						callbackobj.init4prop2audit = function(){
							$("#item-tab-prop-audit").html(HtmlUntil.couTodoNowLeaveProp2Audit(""));
						};
		
							HtmlUntilBase.popup4PageList(obj,callbackobj);
					}
					
					TodoRequest.getExtend("",callback4getLeave);
				});
				
				$this.find(".btn-abj-primary").on("click",function(){
					HtmlUntilBase.popup4Confirm({cname:"续假"});
				});
				$this.find(".btn-abj-danger").on("click",function(){
					HtmlUntilBase.popup4Text({title:"拒绝续假",placeholder:"审批留言"});
				});
			};
			
			TodoRequest.getExtend("",callback);
		};
        
   		pageObjSon.init4pub = function(){
			
			var headNav    =  [{name:"离校超期",value:"overdue"},{name:"离校销假",value:"report"},{name:"请假",value:"ask"},{name:"续假",value:"extend"}];
			HtmlUntilBase.plug4HaderNavTab("cou-todo-now-tab-leave-header",headNav,pageObjSon);
		};
		pageObjSon.init4pub();
        
    };
	pageObj.init4notice = function(){
		var	$this	= $("#"+noticetid);
		
		var callback = function(data){
			$this.html(HtmlUntil.couTodoNowNotice(data));
		};
		NoticeRequest.getNotice4Cid({cid:"1001"},callback);

		$this.delegate("div.item-table-row","click",function(){
			var nid = $(this).attr("nid");
			var callback = function(data){
				var obj = {title:"通知",body:HtmlUntil.couTodoNowNotice4Article(data),width:"541px"};
				HtmlUntilBase.popup4Page(obj);
			};
			
			NoticeRequest.getNotice4Id({id:nid},callback);
		});
	};
    pageObj.init4conduct = function(){
        var	$this	= $("#"+conductid);
		var callback = function(data){

			$this.html(HtmlUntil.couTodoNowConduct(data));

			$this.find("button.btn-abj-primary").on("click",function(){
				var obj = {title:"操行认定",body:HtmlUntil.popup4Conduct4Confirm(""),width:"300px"};
				HtmlUntilBase.popup4Page(obj);
			});
			$this.find("button.btn-abj-danger").on("click",function(){
				HtmlUntilBase.popup4Text({title:"审批不通过",placeholder:"审批留言"});
			});


		};
		CounductRequest.getList4Cid({cid:"1001"},callback);
		

    };
    
    pageObj.initpub = function(){
    	HtmlUntil.init2couTodo4Now(layout.id4Center2now);
    	
        var headNav    =  [{name:"请销假",value:"leave"},{name:"未读通知",value:"notice"},{name:"操行审批",value:"conduct"}];

        HtmlUntilBase.plug4HaderNav("cou-todo-now-header",headNav,pageObj);

    };
    pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4now.push({id:"cou-todo-now",obj:pageInfo});
	
	
		
