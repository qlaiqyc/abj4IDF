var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
	var  pageObj = new Object;//

	pageObj.init4manage = function(){

		var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"全部班级",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部类型",value:"todo"},{name:"事假",value:"todo"}]];
		var $tableManage = $("#table-status");
		var  datalist    = [];

		HtmlUntilBase.from4Select("cou-leave-affairas-search-manage",headSelect);

		$tableManage.bootstrapTable({
			pagination:true,
			/*			detailView:true,*/
			columns: [
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,    field:"cname" ,    },
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"	,    field:"name",},
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"	,    field:"No",  	},
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"类型"	,    field:"type" , 	},
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"状态"	,    field:"status" , 	},
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"起始时间",	 field:"stime",		},
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"截止时间",	 field:"etime" ,  },
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"请假事由"	,field:"reason" ,  },
				{sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"    ,field:"id" ,      formatter:tabelFormatterOP }
			]
		});

		var callback = function(data){
			
			for(var i =0;i<data.length;i++){
				var obj = data[i];
				obj.No	= "10086";
				obj.type	= "事假";
				obj.status= "离校";
				obj.reason	= "回家看病";
			}
			
			$tableManage.bootstrapTable("load",data);
		};

		AttentionRequest.getLeave4Cid({cid:"1001"},callback);
		
		function tabelFormatterOP(value, row, index) {
			var update = '<a   title="详情" href="#" ><i class="glyphicon glyphicon-align-center" sid="'+value+'"></i></a>';
			var del    = '<a   title="导出" href="#" ><i class="glyphicon glyphicon-open"></i></a>';

			return [( update+del )].join('');
		}
		
		
		$tableManage.delegate("i.glyphicon-align-center","click",function(){
 
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

	};

	pageObj.init4count = function(){

		var pageObjSon = new Object;


		pageObjSon.init4class = function(){

			var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-leave-affairas-search-count-class",headSelect);

			var  option = {title:{text:"班级请假统计"},xAxis:[{data:["05软件1班","05软件2班","05软件3班","05软件4班"]}],series:[{name:"在校",data:[60,70,80,65,45,70],barWidth:20,itemStyle:{normal:{color:"#99cf79"}}},{name:"离校",data:[35,20,11,20,30,20],barWidth:20,itemStyle:{normal:{color:"#faa77f"}}},{name:"总人数",data:[95,90,91,85,75,90],barWidth:20,itemStyle:{normal:{color:"#71c3f3"}}}]};
			BasePlug.echarBar("cou-leave-affairs-tab-count-tab-char-class",option);

		};

		pageObjSon.init4type = function(){
			var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"所有班级",value:"todo"},{name:"所有班级",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-leave-affairas-search-count-type",headSelect);

			var option={title:{text:"请销假类型统计"},legend:{data: ['在校','病假','公干','节假日','其他','周末']},series:[{name:"缺勤分布",type:"pie",radius:"80%",startAngle:135,center:["50%","60%"],data:[
				{value:600, name:'在校',itemStyle:{normal:{color:"#70c3f3"}}},
				{value:135, name:'病假',itemStyle:{normal:{color:"#ffd552"}}},
				{value:100, name:'公干',itemStyle:{normal:{color:"#b7dd66"}}},
				{value:150, name:'节假日',itemStyle:{normal:{color:"#df66ab"}}},
				{value:135, name:'其他',itemStyle:{normal:{color:"#7866dd"}}},
				{value:30, name:'周末',itemStyle:{normal:{color:"#b966dd"}}},
			]}]};
			BasePlug.echarPie("cou-leave-affairs-tab-count-tab-char-type",option);

		};
		pageObjSon.init4goal = function(){

			var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"所有班级",value:"todo"},{name:"所有班级",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-leave-affairas-search-count-goal",headSelect);

			var option={title:{text:"请销假类型统计"},legend:{data: ['回家','就医','社团']},series:[{name:"缺勤分布",type:"pie",radius:"80%",startAngle:135,center:["50%","60%"],data:[
				{value:600, name:'回家',itemStyle:{normal:{color:"#70c3f3"}}},
				{value:135, name:'就医',itemStyle:{normal:{color:"#ffd552"}}},
				{value:100, name:'社团',itemStyle:{normal:{color:"#b7dd66"}}}
			]}]};
			BasePlug.echarPie("cou-leave-affairs-tab-count-tab-char-goal",option);

		};

		pageObjSon.init4pub = function(){

			var headNav    =  [{name:"班级请假",value:"class"},{name:"请假类型",value:"type"},{name:"离校目的",value:"goal"}];
			HtmlUntilBase.plug4HaderNavTab("cou-leave-affairs-tab-count-header",headNav,pageObjSon);
		};

		pageObjSon.init4pub();

	};


	pageObj.init4pub = function(){
		HtmlUntil.init2couLeave4Affair(layout.id4Center2affairs);
		var headNav    =  [{name:"请假管理",value:"manage"},{name:"请假统计",value:"count"}];

		HtmlUntilBase.plug4HaderNav("cou-leave-affairas-header",headNav,pageObj);
	};
	pageObj.init4pub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-leave-affairs",obj:pageInfo});
	
	
		
