var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
	
	var  pageObj = new Object;//
	
	pageObj.init4detail = function(){
			
		var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"全部等级",value:"A"},{name:"全部等级",value:"todo"}],[{name:"学生姓名",value:"todo"},{name:"清芳",value:"todo"}]];
	 	var $tableStatus = $("#table-status");
		var  datalist    = [];
		
		HtmlUntilBase.from4Select("cou-talk-affairas-search",headSelect);
		
		$tableStatus.bootstrapTable({
			pagination:true,
			columns: [
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"		,field:"cname" ,    },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name",},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"关注等级"	,field:"leave",  	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"谈心时间"	,field:"talktime" , 	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"谈心地点"	,field:"drom",		},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"谈心主题"	,field:"ttheme" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"   	,field:"" ,      formatter:tabelFormatterOP } 
			]
		});
		var callback = function(data){
			$tableStatus.bootstrapTable("load",data);
		};
		TalkRequest.getStu4Table(callback);

		
		function tabelFormatterOP(value, row, index) {
		 	var update = '<a   title="修改" href="#" ><i class="talk-affairs-edit glyphicon  glyphicon-pencil"></i></a>';
			var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';
			
			return [( update+del )].join('');
		}
		
		$tableStatus.delegate("i.talk-affairs-edit","click",function(){
			
			var obj = {title:"学生谈心详情",body:HtmlUntil.couTalkAffairs4Edit(""),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			$("input.stu-talk-detail-select").on("click",function(){
				HtmlUntilBase.popup4ClassList({title:"选择学生",width:"510px"});
			});
		});
	
	};
	
	pageObj.init4stu = function(){
		var tabStuListId = "cou-talk-affairs-tab-stu-list";
		//jsonp 请求数据返回
		var callback=function(data){
			HtmlUntil.couTalkAffairs4StuList(tabStuListId,data);
		};
		TalkRequest.popup4TabStu(callback);
	 	//添加点击函数
		$("#"+tabStuListId).delegate("div.stu-box","click",function(){
			var id=$(this).attr("id");
			var callback=function(data){
				var obj = {title:"学生谈心详情",body:HtmlUntil.couTalkAffairs4Detail(id,data)};
				HtmlUntilBase.popup4Page(obj);
			};
			TalkRequest.popup4TabStuDetail(callback);
		}); 
	};
	
	pageObj.initpub = function(){
		
		HtmlUntil.init2couTalk4Affair(layout.id4Center2affairs);
		
		var headNav    =  [{name:"谈心明细",value:"detail"},{name:"谈心学生",value:"stu"}];
 
		HtmlUntilBase.plug4HaderNav("cou-talk-affairas-header",headNav,pageObj);
	};
	pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-talk-affairs",obj:pageInfo});
	
	
		
