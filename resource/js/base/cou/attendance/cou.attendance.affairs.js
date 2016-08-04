var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
	var  pageObj = new Object;//
	
	pageObj.init4detail = function(){
			
		var headSelect 	 = [[{name:"今日",value:"todo"},{name:"今日",value:"todo"}],[{name:"所有班级",value:"todo"},{name:"国学0班级",value:"todo"}],[{name:"所有类型",value:"todo"},{name:"上课",value:"todo"}]];
	 	var $tableDetail = $("#table-status");
		var  datalist    = [];
		
		HtmlUntilBase.from4Select("cou-attendance-affairas-search-detail",headSelect);
		
		$tableDetail.bootstrapTable({
			pagination:true,
			detailView:true,
			columns: [
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,    field:"cname" ,    },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"时间"	,    field:"time",},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"分类"	,    field:"type",  	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"课程"	,    field:"course" , 	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"第几节",	 field:"section",		},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"考勤人",	 field:"ap" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"迟到"	,    field:"late" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"请假"	,    field:"leave" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"缺席"	,    field:"absent" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"早退"	,    field:"leavee" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"缺勤率"	,field:"absenteeism" ,  },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"    ,field:"" ,      formatter:tabelFormatterOP } 
					],
			onExpandRow:  function(index, row, $detail) {
				tableDetail4OnExpandRow(index, row, $detail);
			}		
		});
		
	 	var callback = function(data){
			$tableDetail.bootstrapTable("load",data); 
		};
		AttendanceRequest.getAttendance4Cid({cid:"1001"},callback);
		 
		
		function tabelFormatterOP(value, row, index) {
			var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';
			
			return [( del )].join('');
		};
		
		//打开子表
		function tableDetail4OnExpandRow  (index, row, $detail){
			
			var tableidDetailSon = "table-detail-son-"+index;
			var $tableDetailSon  = $($detail.html('<div class="table-son"><table id="'+tableidDetailSon+'"></table></div>').find('table'));
			var tableDetailSonRow;
		
			$tableDetailSon.bootstrapTable({
				uniqueId: "id",
				columns: [	
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"	,    field:"name",   },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"	,    field:"code",	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,    field:"cname",	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"时间"	,    field:"time", 	},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"缺勤分类",	 field:"atype",		},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:"操作",		 formatter: tabelFormatterOP },
						 
					],
				onClickRow: function(row, index) { 
					 tableDetailSonRow = row;
				}
			});
			var tablelistson = [];
			for(var i =0; i<4;i++){
				var obj = new Object;
				obj.name	="李大"+i,
				obj.code	=" 001"+i,
				obj.cname	="计科系一班",
				obj.time	="2017-09-10",
				obj.atype	="缺勤";
				tablelistson.push(obj);
			}
			
			function tabelFormatterOP(value, row, index) {
			 	var update = '<a   title="修改" href="#" ><i class="glyphicon  glyphicon-pencil attendance-update"></i></a>';
				var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';
				
				return [( update+del )].join('');
			};
			
			$tableDetailSon.bootstrapTable("load",tablelistson);	
		};
		
		//监听 弹出框
		
		$tableDetail.delegate("i.attendance-update","click",function(){
			HtmlUntil.couAttentionUpdate4Affiars("");
		});
		
	};
	
	pageObj.init4count = function(){
		
		var pageObjSon = {};
		
		pageObjSon.init4top = function(){
			
			var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"国学0班级",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部考勤",value:"todo"},{name:"全部考勤",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-attendance-affairas-search-count-top",headSelect);
		 	var $tableStatus = $("#cou-attendance-affairs-tab-count-tab-top-table");
			var  datalist    = [];
			
			$tableStatus.bootstrapTable({
				pagination:true,
				columns: [
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"	,    field:"name",    },
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"	,    field:"code",},
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"处分分数"	,field:"disscore" 	},
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"迟到"	,    field:"late" , 	},
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"请假",	 field:"leave",		},
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"缺席",	 field:"absent",},
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"早退"	,    field:"early",  },
							 {sortable: true, valign:"middle" ,align: 'center'  ,title:"缺勤率"	,field:"absenteeism" ,  },
						]
			});
			
		   	var callback = function(data){
				$tableStatus.bootstrapTable("load",data); 
			};
			AttendanceRequest.getAttendance4Count({cid:"1001"},callback);
			
			function tabelFormatterOP(value, row, index) {
			 	var update = '<a   title="修改" href="#" ><i class="glyphicon  glyphicon-pencil"></i></a>';
				var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';
				
				return [( update+del )].join('');
			}
		};
		
		pageObjSon.init4distribute = function(){
			var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"国学0班级",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部考勤",value:"todo"},{name:"全部考勤",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-attendance-affairas-search-count-distribute",headSelect);
			
			var option={title:{text:"缺勤分布"},legend:{data: ['出勤状况','缺勤状况']},series:[{name:"缺勤分布",type:"pie",radius:"80%",startAngle:135,center:["50%","60%"],data:[
				{value:335, name:'出勤状况',itemStyle:{normal:{color:"#fa7e7e"}}},
				{value:135, name:'缺勤状况',itemStyle:{normal:{color:"#f2d471"}}},
			]}]};
			BasePlug.echarPie("cou-attendance-affairs-tab-count-tab-char-distribut",option);
		 	
		};
		pageObjSon.init4compare = function(){ 
		
			var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"国学0班级",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部考勤",value:"todo"},{name:"全部考勤",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-attendance-affairas-search-count-compare",headSelect);
		 
			var  option = {title:{text:"缺勤对比"},xAxis:[{data:["05软件1班","05软件2班","05软件3班","05软件4班","05软件5班","05软件6班"]}],series:[{name:"出勤率",data:[95,90,91,85,75,90],barWidth:65,itemStyle:{normal:{color:"#71c3f3"}}}]};
			BasePlug.echarBar("cou-attendance-affairs-tab-count-tab-char-compare",option);
		};
		pageObjSon.init4trend = function(){
			
			var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"全部班级",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部考勤",value:"todo"},{name:"全部考勤",value:"todo"}]];
			HtmlUntilBase.from4Select("cou-attendance-affairas-search-count-trend",headSelect);
		 
			var option={title:{text:"出勤趋势"},xAxis:{data:["9月5日","9月6日","9月7日","9月8日","9月9日","9月10日","9月11日"]},series:[{name:"出勤趋势",data:[120,132,101,134,90,230,210],itemStyle:{normal:{color:"#70c2f2"}}}]};
			BasePlug.echarLine("cou-attendance-affairs-tab-count-tab-char-trend",option);
		};
		
		pageObjSon.init4pub = function(){
			
			var headNav    =  [{name:"缺勤排行",value:"top"},{name:"缺勤分布",value:"distribute"},{name:"缺勤对比",value:"compare"},{name:"出勤趋势",value:"trend"}];
			HtmlUntilBase.plug4HaderNavTab("cou-attendance-affairs-tab-count-header",headNav,pageObjSon);
		};
		
		pageObjSon.init4pub();
		
	};
	
	pageObj.init4pub = function(){
		
		HtmlUntil.init2couAttendance4Affairs(layout.id4Center2affairs);
		
		var headNav    =  [{name:"考勤明细",value:"detail"},{name:"考勤统计",value:"count"}];
 
		HtmlUntilBase.plug4HaderNav("cou-attendance-affairas-header",headNav,pageObj);
	};
	pageObj.init4pub();
};

//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-attendance-affairs",obj:pageInfo});
	
		
