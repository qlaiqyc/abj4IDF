var pageInfo =  {};//主页

pageInfo.init = function(){
	
	var pageObj   = {};
	
	var id4main   = "main-page";
	var id4search = "cou-main-search-input";
	var id4searchdiv = "cou-main-search";
	var id4self   ="cou-main-self";
	
	//当前
	pageInfo.init4now  = function(){
		
		HtmlUntil.init4Now("");
		
		$("#cou-main-now-course").on("click",function(){
			var ename = "cou-course-now";
			for(var i =0 ;i<pageInfoList4now.length;i++){
				var obj = pageInfoList4now[i];
				if(obj.id == ename) BaseUntil.pageInit(obj.obj);
			}
		});
		
		var id4right = "main-right-now";
 		var $this    = $("#"+id4right);
 		
		$this.find("p.main-now-right-item").on("click",function(){
			var ename = $(this).attr("ename");
			
			for(var i =0 ;i<pageInfoList4now.length;i++){
				var obj = pageInfoList4now[i];
				if(obj.id == ename) BaseUntil.pageInit(obj.obj);
			}
		});
		$this.find("p.main-now-right-item").trigger("click");
		
		
	};
	//师生
	pageInfo.init4tas = function(){
		var id4left = "main-left-tas";

		HtmlUntil.init4Tas();
		HtmlUntil.init4Tas2LeftNav(id4left,pageInfoList4tas);
	};
	//事务
	pageInfo.init4affairs = function(){
		
		var id4left = "main-left-affairs";
		
		HtmlUntil.init4Affairs();
		HtmlUntil.init4Affairs2LeftNav(id4left,pageInfoList4affairs);
	};
	//管理
	pageInfo.init4manager = function(){
		//验证密码
		var obj = {title:"验证密码",body:HtmlUntil.couManagerPwd(""),width:"541px"};
		HtmlUntilBase.popup4Page2(obj);
		
		var callbackSuccess = function(){
			$("#cou-manager-prop-pwd").closest("div.prop-page-modal").modal("hide");
			var id4left = "main-left-manager";
	 
			HtmlUntil.init4Manager();
			HtmlUntil.init4Manager2LeftNav(id4left,pageInfoList4manager);
		};
		
		$("#cou-manager-prop-pwd").delegate("span.btn-abj-primary","click", callbackSuccess)
	};
	//公共方法
	pageInfo.init4pub = function(){
		HtmlUntil.init4main("");//初始化页面
		var $this = $("#"+id4main);
		
		$this.find("ul.header-two-ul li").on("click",function(){
			$this.find("ul.header-two-ul li.header-active").removeClass("header-active");
			eval("pageInfo.init4"+$(this).attr("mid")+"()");
			$(this).addClass("header-active");
		});
		$this.find("ul.header-two-ul li.main-tab:first").trigger("click");
		
		//添加搜索 监听
		var $search4input = $("#"+id4search);
		var $search4div   = $("#"+id4searchdiv);
		
		$search4input.on("change",function(){
			var value = $search4input.val();
			
			var callback4true =  function(){
				HtmlUntilBase.mainSearch("cou-main-search");
			
				$search4div.find("div.row").on("click",function(){
					var stype = $(this).attr("stype");
					
					if(stype == "stu"){
							var buf = new StringBuffer();
						    buf.append('<div class="item-tab-prop item-tab-prop-stu" id="cou-general-tas-modal-stu"> </div>');
				            buf.append('<div class="item-tab-prop item-tab-prop-family" 	  id="cou-general-tas-modal-family"> </div>');
				            buf.append('<div class="item-tab-prop item-tab-prop-school"  id="cou-general-tas-modal-school"> </div>');
				
				            var obj = {title:[{name:"学生档案",value:"stu"},{name:"家庭信息",value:"family"},{name:"在校表现",value:"school"}],body:buf.toString(),width:"542px"};
				            var callbackobj = {};
				            callbackobj.init4prop2stu = function(){
				                $("#cou-general-tas-modal-stu").html(HtmlUntil.couGeneralTasModalStu(""));
				            };
				            callbackobj.init4prop2family = function(){
				                $("#cou-general-tas-modal-family").html(HtmlUntil.couGeneralTasModalFamily(""));
				            };
				            callbackobj.init4prop2school = function(){
				                $("#cou-general-tas-modal-school").html(HtmlUntil.couGeneralTasModalSchool(""));
				            };
				
				            HtmlUntilBase.popup4PageList(obj,callbackobj);
					}
					else{
						HtmlUntilBase.popup4selfInfo({title:"个人资料",width:"541px"});
					}
				});
			};
			
			var callback4false = function (){
				$search4div.html("");
			};
			
			if(StringHelper.HasText(value)) { callback4true()}else{callback4false() };
		});
	
		//设置信息
		$this.find("span.cou-main-self-account").on("click",function(){
			HtmlUntilBase.popup4set("");			
		});
		
		//发通知
		$this.find("span.cou-main-handle-notice").on("click",function(){
			var obj = {title:"发通知",body:HtmlUntil.couNotice4Send(""),width:"541px"};
			var id ="cou-notice-text";
			HtmlUntilBase.popup4Page(obj);
			BasePlug.RichTxtInit(id);
			
			$("body").find("span.cou-notice-prop-preview").on("click",function(){
				var obj = {title:"通知",body:HtmlUntil.couTodoNowNotice4Article(""),width:"541px"};
				HtmlUntilBase.popup4Page2(obj);
			});
			
			$("body").find("input.cou-notice-prop-stu").on("click",function(){
				HtmlUntilBase.popup4ClassList({title:"选择通知对象",width:"510px"});
				
			});
			
		});
		
		//学生谈心
		$this.find("span.cou-main-handle-talk").on("click",function(){
			 
			var obj = {title:"学生谈心详情",body:HtmlUntil.couTalkAffairs4Edit(""),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			
			$("input.stu-talk-detail-select").on("click",function(){
				HtmlUntilBase.popup4ClassList({title:"选择学生",width:"510px"})
			})
		}); 
		
		//创建操行
		$this.find("span.cou-main-handle-counduct").on("click",function(){
			var obj = {title:"创建操行",body:HtmlUntil.couConductAffairs4Edit(""),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			//由于prop page中有 table 需要重新 初始化
			var tableidEdit = 'cou-conduct-affairas-edit-form-table';
			var $tableEdit  = $("#"+tableidEdit);
			
			$tableEdit.bootstrapTable({
              
	            columns: [
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"		,field:"code" ,    },
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name",},
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"加减分"	,field:"score",  	},
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"	,	 field:"",  	},
	          	]
       		 });
			
			var tabledate = [];
			for(var i =0 ;i<3 ;i++){
				var obj = new Object;
				obj.code = "10086";
				obj.name = "张大" ;
				obj.score = "20";
				
				tabledate.push(obj);
			}
			
			$tableEdit.bootstrapTable("load",tabledate);
			
			$("body").find("div.cou-counduct-prop-addstu").on("click",function(){
				var obj = {title:"选择学生"};
				 HtmlUntilBase.popup4StudentScore(obj,"");
			});
		});
		
		//补考勤
		$this.find("span.cou-main-handle-attendance").on("click",function(){
			var obj = {title:"补考勤",body:HtmlUntil.couLeave4Supply(""),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			
			$("#compensatory-leave-add-student").on("click",function(){
				
				HtmlUntilBase.popup4ClassList({title:"选择补考勤对象",width:"510px"});
			});
			
		});
		
		
		
	};
	
	pageInfo.init4pub();
};
BaseUntil.pageInit(pageInfo);


