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
 
		

var pageInfo = {};

pageInfo.init = function(){
    var pageObj 			  = new Object;//
    
    pageObj.init4cname=function(){
    	var $list=$("#cou-auth-manager-class-list");
    	  
        var callback=function(data){
          
            $list.html(HtmlUntil.couAuthManagerClassList(data));
        };
        AuthRequest.getClassList(callback);
        
        $("#cou-auth-manager-class-list").delegate(".cou-auth-manager-class-div","click",function(){
            var $this=$(this);
            if($this.find("i").hasClass("glyphicon-menu-right")){
                $this.find("i").removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");
            }else{
                $this.find("i").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");
            }
            $(this).next(".cou-auth-manager-stu-list").toggle();
        });

        $list.delegate("ul.cou-auth-manager-stu-list li","click",function(){
            $("ul.cou-auth-manager-stu-list li").removeClass("cou-auth-manager-stu-list-select");
            $(this).addClass("cou-auth-manager-stu-list-select");
            var $main = $("#cou-auth-manager-tab-main");
            $main.html(HtmlUntil.couAuthManagerTabMain(""));
        });
    };
    
    pageObj.init4pub = function(){
    	HtmlUntil.init2couAuth4Manager(layout.id4Center2manager);
    	
    	 pageObj.init4cname();
    };
    
    pageObj.init4pub();
 
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4manager.push({id:"cou-auth-manager",obj:pageInfo});

var pageInfo ={};

pageInfo.init = function() {

    var pageObj = new Object;
    
    var tabid4attendance  = "cou-business-manage-tab-attendance";
    var tableid4conduct   = "cou-business-manage-tab-conduct";
    var tabid4calendar	  = "cou-business-manage-tab-calendar";
    var tabid4notice	  = "cou-business-manage-tab-notice";

    pageObj.init4attendance = function(){
        var pageObjSon = new Object;

        pageObjSon.init4type = function(){
        	
            var $this = $("#"+"cou-business-manage-tab-attendance-tab-type");
            $this.html(HtmlUntil.couBusinessAttendanceType(""));

            var $table4Type = $("#cou-business-manage-tab-attendance-tab-type-table");
            var  datalist    = [];
            
            $table4Type.bootstrapTable({
                columns: [
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"名称"		,field:"name" ,    },
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"时段"		,field:"period",},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"状态"	,	 field:"status",  	},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"   	,field:"" ,      formatter:tabelFormatterOP }
                ]
            });
            
            for(var i =0;i<3;i++){
                var obj = new Object;
                obj.name	  = "早操";
                obj.period	  = "";
                obj.status	  = "停用";
                obj.file	  = 0;

                datalist.push(obj);
            }
            $table4Type.bootstrapTable("load",datalist);
            
            function tabelFormatterOP(value, row, index) {
                var update = '<a   title="修改" href="#" ><i class="conduct-affiars-edit glyphicon  glyphicon-pencil"></i></a>';
                var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';

                return [( update+del )].join('');
            }

            $table4Type.delegate("i.conduct-affiars-edit","click",function(){
                var obj = {title:"修改考勤类型",body:HtmlUntil.couBusinessAttendanceType4Edit(""),width:"541px"};
                HtmlUntilBase.popup4Page(obj);
            });
            
			$this.find("p.cou-business-manage-tab-calendar-tab-add-type").on("click",function(){
				var obj = {title:"添加考勤类型",body:HtmlUntil.couBusinessAttendanceType4Edit(""),width:"541px"};
                HtmlUntilBase.popup4Page(obj);
			});
        };
        
        pageObjSon.init4score=function(){
            var $this = $("#"+"cou-business-manage-tab-attendance-tab-score");
            $this.html(HtmlUntil.couBusinessAttendanceScore(""));
        };
        
        pageObjSon.init4standard=function(){
            var $this = $("#"+"cou-business-manage-tab-attendance-tab-standard");
            $this.html(HtmlUntil.couBusinessAttendanceStandard(""));
        };
        
        pageObjSon.init4pub = function(){
            var headNav    =  [{name:"考勤类型",value:"type"},{name:"处分分数",value:"score"},{name:"处分标准",value:"standard"}];
            HtmlUntilBase.plug4HaderNavTab("cou-business-manage-tab-attendance-header",headNav,pageObjSon);
        };
        
        pageObjSon.init4pub();
    };
    
    pageObj.init4conduct	= function(){
        
        var pageObjSon = new Object();
        
        pageObjSon.init4type=function(){
        	
            var $this = $("#"+"cou-business-manage-tab-conduct-tab-type");
            $this.html(HtmlUntil.couBusinessConductType(""));
            
            var table4FirstTypeId   = "table-first-type";
            var table4SecondTypeId  = "table-second-type";
            var $table4FirstType    = $("#"+table4FirstTypeId);
            var $table4SecondType   = $("#"+table4SecondTypeId);
            var datalistFirst       = [];
            var datalistSecond      = [];


            $table4FirstType.bootstrapTable({
                columns: [
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"名称"		,field:"name" ,    },
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"   	,field:"" ,      formatter:tabelFormatterOPLess }
                ]
            });
            for(var i =0;i<5;i++){
                var obj = new Object;
                obj.name	  = "德育素质";
                obj.file	  = 0;
                datalistFirst.push(obj);
            }
            $table4FirstType.bootstrapTable("load",datalistFirst);
            $table4FirstType.delegate("i.conduct-affiars-edit","click",function(){
               var obj = {title:"修改日常操行分类",body:HtmlUntil.couBusinessConductType4Edit(""),width:"541px"};
               HtmlUntilBase.popup4Page(obj);
            });
            
            $this.find("p.cou-business-manage-tab-calendar-tab-add-type").on("click",function(){
               var obj = {title:"添加日常操行分类",body:HtmlUntil.couBusinessConductType4Edit(""),width:"541px"};
               HtmlUntilBase.popup4Page(obj);
            });

            $table4SecondType.bootstrapTable({
                columns: [
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"编码"		,field:"code" ,    },
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"名称"		,field:"name",},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"描述"	,	 field:"description",  	},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"   	,field:"" ,      formatter:tabelFormatterOP }
                ]
            });
            
            for(var j =0;j<5;j++){
                var obj = new Object;
                obj.code	  = "T1";
                obj.name	  = "文明寝室";
                obj.description	  = "";
                obj.file	  = 0;

                datalistSecond.push(obj);
            }
            $table4SecondType.bootstrapTable("load",datalistSecond);
            $table4SecondType.delegate("i.conduct-affiars-edit","click",function(){
                var obj = {title:"修改日常操行分类",body:HtmlUntil.couBusinessConductType4Edit(""),width:"541px"};
                HtmlUntilBase.popup4Page(obj);
            });
			

            function tabelFormatterOPLess(value, row, index) {
                var update = '<a   title="修改" href="#" ><i class="conduct-affiars-edit glyphicon  glyphicon-pencil"></i></a>';
                return [( update)].join('');
            }
            
            function tabelFormatterOP(value, row, index) {
                var update = '<a   title="修改" href="#" ><i class="conduct-affiars-edit glyphicon  glyphicon-pencil"></i></a>';
                var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';

                return [( update+del )].join('');
            }
        };
        
        pageObjSon.init4basic=function(){
            var $this = $("#"+"cou-business-manage-tab-conduct-tab-basic");
            $this.html(HtmlUntil.couBusinessConductBasic(""));
        };
        
        pageObjSon.init4punish=function(){
            var $this = $("#"+"cou-business-manage-tab-conduct-tab-punish");
            $this.html(HtmlUntil.couBusinessConductPunish(""));
        };
        
        pageObjSon.init4standard=function(){
            var $this = $("#"+"cou-business-manage-tab-conduct-tab-standard");
            $this.html(HtmlUntil.couBusinessConductStandard(""));
        };

        pageObjSon.init4pub = function(){

            var headNav    =  [{name:"操行类型",value:"type"},{name:"基础分",value:"basic"},{name:"处分标准",value:"punish"},{name:"评定标准",value:"standard"}];
            HtmlUntilBase.plug4HaderNavTab("cou-business-manage-tab-conduct-header",headNav,pageObjSon);
        };
        
        pageObjSon.init4pub();

    };
    
    pageObj.init4calendar   = function(){
        
        var $this = $("#"+"cou-business-manage-tab-calendar");
        $this.html(HtmlUntil.couBusinessCalendar(""));
        BasePlug.DatePicker("input.date-time");
    };
    
    pageObj.init4notice  = function(){
        var $this = $("#"+"cou-business-manage-tab-notice");
        $this.html(HtmlUntil.couBusinessNotice(""));
        
        $this.delegate("div.div-manage-tab-notice-operation", "mouseenter", function (event) {  
  			$(this).find("div.notice-counsellor").removeClass("block-hide");
		}).delegate("div.div-manage-tab-notice-operation", "mouseleave", function (event) {  
  			$(this).find("div.notice-counsellor").addClass("block-hide");
		});  
        
        $this.delegate("i.glyphicon-pencil","click",function(){
        	var $p = $(this).closest("div.div-manage-tab-notice-operation");
        	var hasInpt = $p.find("div.div-manage-tab-notice-new-label").length > 0;
        	
        	if(hasInpt) return;
         
            $p.append(HtmlUntil.couBusinessNoticeControl(""));
        });
        $this.delegate("i.glyphicon-trash","click",function(){
            if(confirm("确认删除?")){
                $(this).closest("div.div-manage-tab-notice-operation").remove();
            }
            
        });
        $this.delegate("div.div-manage-tab-notice-add-label","click",function(){
        	var $p = $(this);
        	var hasInpt = $p.find("div.div-manage-tab-notice-new-label").length > 0;
        	
        	if(hasInpt) return;
         
            $p.append(HtmlUntil.couBusinessNoticeControl(""));
        });
        
        $this.delegate("div.div-manage-tab-notice-operation i.glyphicon-ok","click",function(){
        	var $p = $(this).closest("div.div-manage-tab-notice-operation");
        	var value = $p.find("input").val();
        	
        	if(value.length == 0) {
                $p.find("div.div-manage-tab-notice-new-label").remove(); 
            }
            else{
                $p.find("div.notice-name p").html(value);
                $p.find("div.div-manage-tab-notice-new-label").remove();
            }
        	
        });
        
        $this.delegate("div.div-manage-tab-notice-add-label i.glyphicon-ok","click",function(){
        	var $p    = $(this).closest("div.div-manage-tab-notice-add-label");
        	var value = $p.find("input").val();
            if(value.length == 0) {



                $p.find("div.div-manage-tab-notice-new-label").remove();


            }else {
                $this.find("div.notice-item").append(HtmlUntil.couBusinessNoticeAddType(value));
                $p.find("div.div-manage-tab-notice-new-label").remove();
            }
            return false;
        });
    };
    
    pageObj.initpub = function(){
		HtmlUntil.init2couBusines4Manager(layout.id4Center2manager);
        var headNav    =  [{name:"考勤参数",value:"attendance"},{name:"操行参数",value:"conduct"},{name:"校历作息",value:"calendar"},{name:"通知标签",value:"notice"}];
        HtmlUntilBase.plug4HaderNav("cou-business-manage-header",headNav,pageObj);
    };
    
    pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4manager.push({id:"cou-business-manage",obj:pageInfo});
var pageInfo = {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){

    var  pageObj = new Object;//

    pageObj.init4notes = function(){
        var  serach4NodesId = "cou-conduct-affairas-search-notes";
        var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"15商务英语",value:"todo"}],[{name:"全部操行分类",value:"todo"},{name:"德育素质",value:"todo"}]];
        HtmlUntilBase.from4Select(serach4NodesId,headSelect);
        
        var table4NotesId   = "table-notes";
        var $table4Notes    = $("#"+table4NotesId);
        var tableRow4Notes  = {};
        
        
        $table4Notes.bootstrapTable({
            pagination:true,
            columns: [
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"名称"		,field:"aname" ,    },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"人数"		,field:"number",},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,	 field:"cname",  	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操行分类"	,field:"type" , 	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"二级分类"	,field:"subtype",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"创建者"	,field:"creator" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"记录时间"	,field:"time",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"备注"	,	 field:"notes" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"附件"	,	 field:"file" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"   	,field:"" ,      formatter:tabelFormatterOP }
            ],
          	onClickRow: function (row) {
    			tableRow4Notes = row;
  			},
        });

        function tabelFormatterOP(value, row, index) {
            var update = '<a   title="修改" href="#" ><i class="conduct-affiars-edit glyphicon  glyphicon-pencil"></i></a>';
            var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';

            return [( update+del )].join('');
        }
        
        var callback = function(data){
        	$table4Notes.bootstrapTable("load",data);
        };
        
        CounductRequest.getList4Cid("",callback);
        
        $table4Notes.delegate("i.conduct-affiars-edit","click",function(){
        	 
			var obj = {title:"操行详情",body:HtmlUntil.couConductAffairs4Edit(tableRow4Notes),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			//由于prop page中有 table 需要重新 初始化
			var tableidEdit = 'cou-conduct-affairas-edit-form-table';
			var $tableEdit  = $("#"+tableidEdit);
			
			$tableEdit.bootstrapTable({
              
	            columns: [
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"		,field:"code" ,    },
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name",},
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"加减分"	,field:"score",  	},
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"	,	 field:"",  formatter:tabelFormatterOP},
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
			function tabelFormatterOP(value, row, index) {
				var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';

				return del;
			}
			$tableEdit.bootstrapTable("load",tabledate);
			
			$("body").find("div.cou-counduct-prop-addstu").on("click",function(){
				var obj = {title:"选择学生"};
				 HtmlUntilBase.popup4StudentScore(obj,"");
			});
			$("span.btn").on("click",function(){
				$("#cou-conduct-affairas-edit-form-uploadfile").click();
			})
        });
    };

    pageObj.init4top = function(){
        var  serach4TopId = "cou-conduct-affairas-search-top";
        var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"15商务英语",value:"todo"}]];
        HtmlUntilBase.from4Select(serach4TopId,headSelect);

        var table4TopId   = "table-top";
        var $table4Top    = $("#"+table4TopId);
        var  datalist       = [];

        $table4Top.bootstrapTable({
            pagination:true,
            detailView:true,
            columns: [
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"		,field:"No" ,    },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name",},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"宿舍"	    ,field:"room",  	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"名次"	    ,field:"rank" , 	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"加分次数"	,field:"addCount",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"减分次数"	,field:"subCount",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"总加分"	,field:"addScore" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"总减分"	,field:"subScore",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"累计总分"	,field:"score" ,  }
            ],
            onExpandRow:  function(index, row, $detail) {
				tableDetail4OnExpandRow(index, row, $detail);
			}
        });

         
		var callback = function(data){
	        $table4Top.bootstrapTable("load",data);
		};
        CounductRequest.getList2Count4Cid("",callback);

		//打开子表
		function tableDetail4OnExpandRow  (index, row, $detail){
			
			var tableidDetailSon = "table-detail-son-"+index;
			var $tableDetailSon  = $($detail.html('<div class="table-son"><table id="'+tableidDetailSon+'"></table></div>').find('table'));
			var tableDetailSonRow;
		
			$tableDetailSon.bootstrapTable({
				uniqueId: "id",
				columns: [	
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"操行分类"	,filed:"ctype",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"二级分类"	,filed:"twolevel",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"分数"	,    filed:"core",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"记录时间"	,filed:"retime",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"记录着",	     filed:"rename",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"描述",		 filed:"detail",},	 
					],
				onClickRow: function(row, index) { 
					 tableDetailSonRow = row;
				}
			});
			var tablelistson = [];
			for(var i =0; i<2;i++){
				var obj = new Object;
				 obj.ctype     = "a";
				 obj.twolevel  = "2";
				 obj.core      = "9";
				 obj.retime    = "2019-10-20";
				 obj.rename    = "李丹丹";
				 obj.detail    = "大厦是的";
				tablelistson.push(obj);
			}
			
			$tableDetailSon.bootstrapTable("load",tablelistson);	
		};
		
    };
    
    pageObj.initpub = function(){
    	HtmlUntil.init2couConduct4Affair(layout.id4Center2affairs);
        var headNav    =  [{name:"操行纪录",value:"notes"},{name:"操行排行",value:"top"}];

        HtmlUntilBase.plug4HaderNav("cou-conduct-affairas-header",headNav,pageObj);
    };
    pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-counduct-affairs",obj:pageInfo});
	
	
		

var pageInfo = {};

pageInfo.init = function() {
    var pageObj    = new Object;//
	var id4main    = "cou-class-manage";

   pageObj.init4main = function(){
   	    var $title     = $("#"+"cou-class-manager-tab-stu-title");
    	var $cname     = $("#"+"cou-class-manager-tab-cname-body");
   		var $info      = $("#"+"cou-class-manager-tab-stu-body-table-info");
   		var $thisTable = $("#"+"cou-class-manager-tab-stu-table");
   		var id4help    = "cou-class-manager-tab-stu-title-right";
   		var id4class   = "cou-class-manager-tab-cname-title";
	   	var tableFun   = {};
	   	
	    tableFun.tabelFormatterOP = function (value, row, index) {
	
	        var update = '<a   title="修改" href="#" ><i class="glyphicon  glyphicon-pencil"></i></a>';
	        var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';
	        var refresh    = '<a   title="刷新" href="#" ><i class="glyphicon glyphicon-repeat"></i></a>';
	        var lock    = '<a   title="锁定" href="#" ><i class="glyphicon glyphicon-lock"></i></a>';
	        return [( update+del+refresh+lock )].join('');
	    };
	
	    tableFun.tableFormatterCommissioner = function(value, row, index){ 
	    	var utype = [{name:"班长",value:""},{name:"学习委员",value:""},{name:"劳动委员",value:""}];
	    	
	    	var buf = new StringBuffer();
	    	
	    	buf.append('<select class="form-control">');
	    	buf.append('	<option >-选择班委-</option> ');
	    	
	    	for(var i =0 ;i<utype.length ;i++){
	    		
	    		if(utype[i].name == value){
	    			 buf.append('<option selected>'+utype[i].name+'</option>')
	    		}else{
	    			buf.append('<option>'+utype[i].name+'</option>');
	    		}
	    	}
	    	
	    	buf.append('</select>');
	    	
	        return [buf.toString()].join("");
	    };
	    tableFun.tableFormatterMark=function(value, row, index){
	    	//ption><option>贫困学生</option><option>孤残学生</option><option>烈士子女</option>
	        var mark="<input class='form-control  cou-class-select-tag'  placeholder='点击标注'>";
	        return mark;
	    };
	    
	    tableFun.tableFormatterAssistant=function(value, row, index){
	    	var buf = new StringBuffer();
	    	
	    	if(value == 1){
	    		buf.append('<div class="cou-class-manager-tab-stu-add-commisioner" style="height: 30px;"></div>');
	    	}
	    	
	        return buf.toString();
	    };
	    
	    var callback = function(data){
	    	$cname.html(HtmlUntil.couClassTabCname4Manage(data));
	    	
	    	$cname.find("div.cou-class-manager-tab-cname-list :first").trigger("click");
	    	
	    };
	    
	    UserRequest.getClass("",callback);
	    
	    $info.html(HtmlUntil.couClassTab4Info4Manager(""));
	
	    $thisTable.bootstrapTable({
	        pagination:true,
	        columns: [
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:"设置班助",    		field:"assistant"  ,formatter:tableFun.tableFormatterAssistant   },
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 班委",   		field:"commissioner",formatter:tableFun.tableFormatterCommissioner},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 重点标记",   	field:"mark",formatter:tableFun.tableFormatterMark},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 学号",   		field:"No"},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 姓名", 			field:"name" 	},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 性别",   		field:"sex"  	},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 宿舍",			field:"drom"	},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 个人手机",	 	field:"tel" },
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 家长电话",	 	field:"parentsTel"},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 功能操作",formatter: tableFun.tabelFormatterOP}
	
	        ]
	    });
	  
	    var $Classs    = $("#"+id4class)
	    
	    $Classs.find("a.cou-class-addclass").on("click",function(){
	        var obj = {title:"添加班级",body:HtmlUntil.couClassAdd4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	
	    $title.find("li#cou-class-manager-tab-stu-model-add-btn").on("click",function(){
	        var obj = {title:"添加学生",body:HtmlUntil.couClassTabStuModelAdd4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	    
	    $("#"+id4help).on("click",function(){
	        var obj = {title:"协同管理辅导员（基础数学2016-01班）",body:HtmlUntil.couClassHelp4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	    
	    
	    $title.find("li#cou-class-manager-tab-stu-model-import4photo-btn").on("click",function(){
	        var obj = {title:"导入学生头像",body:HtmlUntil.couClassTabStuModelImport4Photo4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-add-select-file-btn","click",function(){
	        $("input[id=cou-class-manager-tab-stu-model-add-select-file]").click();
	    });
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-add-select-file","change",function(){
	        $("#cou-class-manager-tab-stu-model-add-select-file-cover").val($(this).val());
	    });
	    $("#"+id4main).delegate("div.cou-class-manager-tab-stu-model-add-photo-delete","click",function(){
	        if(confirm("确认删除么?"))   $(this).closest(".cou-class-manager-tab-stu-model-add-photo").remove();
	    });
	    /*****导入学生弹出框*****/
	    $title.find("li#cou-class-manager-tab-stu-model-import4stu-btn").on("click",function(){
	        var obj = {title:"添加学生",body:HtmlUntil.couClassTabStuModelImport4Stu4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-import4stu-select-file-btn","click",function(){
	        $("input[id=cou-class-manager-tab-stu-model-import4stu-select-file]").click();
	    });
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-import4stu-select-file","change",function(){
	        $("#cou-class-manager-tab-stu-model-import4stu-select-file-cover").val($(this).val());
	    });
		
		$("#"+id4main).delegate("input.cou-class-select-tag","click",function(){
			 var obj ={title:"重点标注",body:HtmlUntil.couClass4propType4Manager(""),width:"400px"};
			 HtmlUntilBase.popup4Page(obj);
		});
		
	   $cname.delegate("div.cou-class-manager-tab-cname-list","click",function(){
	   		var cid = $(this).attr("cid");
	   		var callback = function(data){
	   		 	$thisTable.bootstrapTable("load",data);
	  		};
	   		UserRequest.getStu4Cid({cid:cid},callback); 
	   		
	   		 $cname.find("div.cou-class-manager-tab-cname-list").removeClass('bg-color-gray').find("input").removeClass('bg-color-gray').addClass('bg-color-white');
	   		$(this).addClass("bg-color-gray").find("input").addClass('bg-color-gray').removeClass('bg-color-white');
	   		
	   }).delegate("div.cou-class-manager-tab-cname-list","mouseover",function(){
		   $("a.cou-class-manager-tab-cname-set-btn").addClass("display-none");
		   $(this).children("a.cou-class-manager-tab-cname-set-btn").removeClass("display-none");
	   }).delegate("div.cou-class-manager-tab-cname-list","mouseout",function(){
		   $("a.cou-class-manager-tab-cname-set-btn").addClass("display-none");
	   });


	   $cname.delegate("a.cou-class-manager-tab-cname-set-btn","click",function(){
		   $(this).next().slideToggle();
	   });


	   $cname.delegate("a.cou-class-manager-tab-cname-reset","click",function(){
		   $(this).closest("div.cou-class-manager-tab-cname-set-detail").hide();
	   		var obj = {title:"修改班级",body:HtmlUntil.couClassAdd4Manage(""),width:"541px"};
	       	HtmlUntilBase.popup4Page(obj);
	   });
	 	
	   $cname.delegate("a.cou-class-manager-tab-cname-set-delete","click",function() {
	        var $this=$(this).closest("div.cou-class-manager-tab-cname-list");
	        if(confirm("确定删除么?")){
	            $this.remove();
	        }
	    });
	    
	    $thisTable.delegate("tbody tr td:first-child","click",function(){
	        if($(this).hasClass("ou-class-manager-tab-stu-add-commisioner")){
	            $(this).removeClass("ou-class-manager-tab-stu-add-commisioner");
	        }else{
	            $(this).addClass("ou-class-manager-tab-stu-add-commisioner");
	        }
	    });
		
		$thisTable.delegate("i.glyphicon-pencil","click",function(){
			var obj = {title:"修改学生信息",body:HtmlUntil.couClassTabStuModelModify4Manage(""),width:"600px"};
	        HtmlUntilBase.popup4Page(obj);
		});
		
		 
   };
   
   pageObj.init4pub = function(){
   		HtmlUntil.init2couClass4Manager(layout.id4Center2manager);
   		
   		pageObj.init4main();
   };
	pageObj.init4pub();
};
 //BaseUntil.pageInit(pageInfo);
pageInfoList4manager.push({id:"cou-class-manager",obj:pageInfo})



var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
	var pageObj   = new Object;//
	var id4header = "cou-course-manager-header";
	var id4main	  = "cou-course-manager-tab-main"
	var id4table  = "cou-course-manager-tab-main-table";
	var id4propadd= "cou-course-manager-prop-add";
	
	pageObj.init4detail = function(){
		
		var $header 	   = $("#"+id4header);
	 	var $tableDetail   = $("#"+id4table);
		var tableFormatter = {};
		var datalist       = [];
		var mergeCells 	   = [];
		var tableFormatter4cellStyle = {};
			
		$header.html(HtmlUntil.couCourseHeader4Manager(""));
		
		$header.find("div.cou-course-manager-add").on("click",function(){
			
			var obj = {title:'添加课程',body:HtmlUntil.couCoursePropadd4Manager(""),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			
			var $propadd = $("#"+id4propadd);
			$propadd.delegate("i.icon-minus-sign","click",function(){
				$(this).closest("div.container-fluid").remove();
			});
			
			$propadd.delegate("i.icon-plus-sign","click",function(){
				$propadd.find("div.cou-course-manager-prop-add-item").append(HtmlUntil.couCoursePropaddItem4Manager(""));
			});
			
			
		});
		
	
		tableFormatter.course4base = function(value,row,index,type){
			
		 	if(! StringHelper.HasText(value)) return "";
		 		
		 	var v4school = '<div class="cou-course-day" ecss="'+type+'"><p><b>大学英语-科技大楼</b></p>';
		  	var v4teacher= "<p>李冬冬</p>";
		  	var v4attend = "<p>总出勤率35%</p></div>";
		  		
		  	mergeCells.push({index: index,  field: type,   rowspan: 3});
		  		
			return [( v4school+v4teacher+v4attend )].join('');	 
		};
		
		tableFormatter4cellStyle.course4base = function(value,row,index,type){
			
			var obj4css = {		monday		:"bg-color-monday",
								tuesday		:"bg-color-tuesday",
								wednesday	:"bg-color-wednesday",
								thursday 	:"bg-color-thursday",
								friday  	:"bg-color-friday",
								saturday 	:"bg-color-saturday",
			 			 };

			var result =  eval('obj4css.'+type);			 	
			
			if(!StringHelper.HasText(value)) result = "bg-color-gray-white";
			 
			 return {  classes: result};
		};
		
		tableFormatter.course4monday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"monday"		);};
		tableFormatter.course4tuesday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"tuesday"		);};
		tableFormatter.course4wednesday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"wednesday"		);};
		tableFormatter.course4thursday 	= function(value,row,index){return tableFormatter.course4base(value,row,index,"thursday" 		);};
		tableFormatter.course4friday  	= function(value,row,index){return tableFormatter.course4base(value,row,index,"friday"  		);};
		tableFormatter.course4saturday 	= function(value,row,index){return tableFormatter.course4base(value,row,index,"saturday" 		);};
		
		tableFormatter4cellStyle.course4monday		= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"monday"	);};
		tableFormatter4cellStyle.course4tuesday		= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"tuesday"	);};
		tableFormatter4cellStyle.course4wednesday	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"wednesday"	);};
		tableFormatter4cellStyle.course4thursday 	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"thursday" 	);};
		tableFormatter4cellStyle.course4friday  	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"friday"  	);};
		tableFormatter4cellStyle.course4saturday 	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"saturday" 	);};

		$tableDetail.bootstrapTable({
			columns: [
					{sortable: false, valign:"middle" ,align: 'center'  ,title:""	,    field:"num"    },
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周一"	,    field:"monday"     ,formatter:tableFormatter.course4monday		,cellStyle:tableFormatter4cellStyle.course4monday		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周二"	,    field:"tuesday" 	,formatter:tableFormatter.course4tuesday	,cellStyle:tableFormatter4cellStyle.course4tuesday		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周三"	,    field:"wednesday" 	,formatter:tableFormatter.course4wednesday	,cellStyle:tableFormatter4cellStyle.course4wednesday	},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周四"	,    field:"thursday"  	,formatter:tableFormatter.course4thursday 	,cellStyle:tableFormatter4cellStyle.course4thursday 	},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周五",	 	 field:"friday" 	,formatter:tableFormatter.course4friday  	,cellStyle:tableFormatter4cellStyle.course4friday  		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周六",	 	 field:"saturday" 	,formatter:tableFormatter.course4saturday 	,cellStyle:tableFormatter4cellStyle.course4saturday 	},
					]
		});
		
	    for(var i =0;i<14;i++){
			var obj = new Object;
			obj.num		 = (i+1);
			if(i==2) obj.monday	  ="22";
			if(i==10) obj.tuesday  ="2";
			if(i==4) obj.wednesday="1";
			if(i==3) obj.thursday ="1";
			if(i==5) obj.friday   ="1";
			if(i==6) obj.saturday ="1";
	 
			
			datalist.push(obj);
		}
		 
		$tableDetail.bootstrapTable("load",datalist); 
		
		for(var i =0 ;i<mergeCells.length;i++){
			var obj = mergeCells[i];
			$tableDetail.bootstrapTable('mergeCells', { index: obj.index,  field:obj.field,   rowspan: obj.rowspan});	
		} 
		
		
	};
	
	pageObj.init4pub = function(){
		//这种左右菜单的方法  按照单个tab 编写即可
		HtmlUntil.init2couCourse4Manager(layout.id4Center2manager);
		pageObj.init4detail();
	};
	
	pageObj.init4pub();
};

pageInfoList4manager.push({id:"cou-course-manager",obj:pageInfo});
BaseUntil.pageInit(pageInfo);
	
		

var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
	var pageObj  	   = new Object;//
	var id4header      = "cou-course-now-header";
	var id4table2today = "cou-course-now-tab-today-table";
	var id4header2today= "cou-course-now-tab-today-header";
	var id4header2class= "cou-course-now-tab-class-header";
	var id4table2class = "cou-course-now-tab-class-table";
	var hasload4toady  = false;
	var hasload4class  = false;
	
	
	
	pageObj.init4today = function(){
		 
		if(hasload4toady) return;
		hasload4toady 	   = true ;
		
		var $tableToday    = $("#"+id4table2today);
		var tableFormatter = {};
		var datalist       = [];
		var mergeCells 	   = [];
		var tableFormatter4cellStyle = {};
		
		tableFormatter.course4base = function(value,row,index,type){
			
		 	if(! StringHelper.HasText(value)) return "";
		 		
		 	var v4school = '<div class="cou-course-day" ecss="'+type+'"><p><b>大学英语-科技大楼</b></p>';
		  	var v4teacher= "<p>李冬冬</p>";
		  	var v4attend = "<p>总出勤率35%</p></div>";
		  		
		  	mergeCells.push({index: index,  field: type,   rowspan: 3});
		  		
			return [( v4school+v4teacher+v4attend )].join('');	 
		};
		
		tableFormatter4cellStyle.course4base = function(value,row,index,type){
			
			var obj4css = {		monday		:"bg-color-monday",
								tuesday		:"bg-color-tuesday",
								wednesday	:"bg-color-wednesday",
								thursday 	:"bg-color-thursday",
								friday  	:"bg-color-friday",
								saturday 	:"bg-color-saturday",
			 			 };

			var result =  eval('obj4css.'+type);			 	
			
			if(!StringHelper.HasText(value)) result = "bg-color-gray-white";
			 
			 return {  classes: result};
		};
		
		tableFormatter.course4monday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"monday"		);};
		tableFormatter.course4tuesday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"tuesday"		);};
		tableFormatter.course4wednesday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"wednesday"		);};
		tableFormatter.course4thursday 	= function(value,row,index){return tableFormatter.course4base(value,row,index,"thursday" 		);};
		tableFormatter.course4friday  	= function(value,row,index){return tableFormatter.course4base(value,row,index,"friday"  		);};
		tableFormatter.course4saturday 	= function(value,row,index){return tableFormatter.course4base(value,row,index,"saturday" 		);};
		
		tableFormatter4cellStyle.course4monday		= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"monday"	);};
		tableFormatter4cellStyle.course4tuesday		= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"tuesday"	);};
		tableFormatter4cellStyle.course4wednesday	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"wednesday"	);};
		tableFormatter4cellStyle.course4thursday 	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"thursday" 	);};
		tableFormatter4cellStyle.course4friday  	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"friday"  	);};
		tableFormatter4cellStyle.course4saturday 	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"saturday" 	);};

		$tableToday.bootstrapTable({
			columns: [
					{sortable: false, valign:"middle" ,align: 'center'  ,title:""	,    field:"num"    },
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"信息与计算科学一班"	,    field:"monday"     ,formatter:tableFormatter.course4monday		,cellStyle:tableFormatter4cellStyle.course4monday		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"信息与计算科学二班"	,    field:"tuesday" 	,formatter:tableFormatter.course4tuesday	,cellStyle:tableFormatter4cellStyle.course4tuesday		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"数学与应用数学一班"	,    field:"wednesday" 	,formatter:tableFormatter.course4wednesday	,cellStyle:tableFormatter4cellStyle.course4wednesday	},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"数学与应用数学一班"	,    field:"thursday"  	,formatter:tableFormatter.course4thursday 	,cellStyle:tableFormatter4cellStyle.course4thursday 	},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"生物化学一班",	 	 field:"friday" 	,formatter:tableFormatter.course4friday  	,cellStyle:tableFormatter4cellStyle.course4friday  		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"生物化学二班",	 	 field:"saturday" 	,formatter:tableFormatter.course4saturday 	,cellStyle:tableFormatter4cellStyle.course4saturday 	},
					]
		});
		
	    for(var i =0;i<14;i++){
			var obj = new Object;
			obj.num		 = (i+1);
			if(i==2) obj.monday	  =parseInt(Math.random()*10);
			if(i==10) obj.tuesday ="2";
			if(i==4) obj.wednesday="1";
			if(i==3) obj.thursday ="1";
			if(i==5) obj.friday   ="1";
			if(i==6) obj.saturday ="1";
			
			datalist.push(obj);
		}
		 
		$tableToday.bootstrapTable("load",datalist); 
		
		for(var i =0 ;i<mergeCells.length;i++){
			var obj = mergeCells[i];
			$tableToday.bootstrapTable('mergeCells', { index: obj.index,  field:obj.field,   rowspan: obj.rowspan});	
		} 
		
	};
	
	pageObj.init4class = function(){
		
		if(hasload4class) return;
		hasload4class 	   = true ;
		
		var $tableClass    = $("#"+id4table2class);
		var tableFormatter = {};
		var datalist       = [];
		var mergeCells 	   = [];
		var tableFormatter4cellStyle = {};
		
		tableFormatter.course4base = function(value,row,index,type){
			
		 	if(! StringHelper.HasText(value)) return "";
		 		
		 	var v4school = '<div class="cou-course-day" ecss="'+type+'"><p><b>大学英语-科技大楼</b></p>';
		  	var v4teacher= "<p>李冬冬</p>";
		  	var v4attend = "<p>总出勤率35%</p></div>";
		  		
		  	mergeCells.push({index: index,  field: type,   rowspan: 3});
		  		
			return [( v4school+v4teacher+v4attend )].join('');	 
		};
		
		tableFormatter4cellStyle.course4base = function(value,row,index,type){
			
			var obj4css = {		monday		:"bg-color-monday",
								tuesday		:"bg-color-tuesday",
								wednesday	:"bg-color-wednesday",
								thursday 	:"bg-color-thursday",
								friday  	:"bg-color-friday",
								saturday 	:"bg-color-saturday",
			 			 };

			var result =  eval('obj4css.'+type);			 	
			
			if(!StringHelper.HasText(value)) result = "bg-color-gray-white";
			 
			 return {  classes: result};
		};
		
		tableFormatter.course4monday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"monday"		);};
		tableFormatter.course4tuesday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"tuesday"		);};
		tableFormatter.course4wednesday	= function(value,row,index){return tableFormatter.course4base(value,row,index,"wednesday"		);};
		tableFormatter.course4thursday 	= function(value,row,index){return tableFormatter.course4base(value,row,index,"thursday" 		);};
		tableFormatter.course4friday  	= function(value,row,index){return tableFormatter.course4base(value,row,index,"friday"  		);};
		tableFormatter.course4saturday 	= function(value,row,index){return tableFormatter.course4base(value,row,index,"saturday" 		);};
		
		tableFormatter4cellStyle.course4monday		= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"monday"	);};
		tableFormatter4cellStyle.course4tuesday		= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"tuesday"	);};
		tableFormatter4cellStyle.course4wednesday	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"wednesday"	);};
		tableFormatter4cellStyle.course4thursday 	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"thursday" 	);};
		tableFormatter4cellStyle.course4friday  	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"friday"  	);};
		tableFormatter4cellStyle.course4saturday 	= function(value,row,index){return tableFormatter4cellStyle.course4base(value,row,index,"saturday" 	);};

		$tableClass.bootstrapTable({
			columns: [
					{sortable: false, valign:"middle" ,align: 'center'  ,title:""	,    field:"num"    },
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周一"	,    field:"monday"     ,formatter:tableFormatter.course4monday		,cellStyle:tableFormatter4cellStyle.course4monday		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周二"	,    field:"tuesday" 	,formatter:tableFormatter.course4tuesday	,cellStyle:tableFormatter4cellStyle.course4tuesday		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周三"	,    field:"wednesday" 	,formatter:tableFormatter.course4wednesday	,cellStyle:tableFormatter4cellStyle.course4wednesday	},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周四"	,    field:"thursday"  	,formatter:tableFormatter.course4thursday 	,cellStyle:tableFormatter4cellStyle.course4thursday 	},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周五",	 	 field:"friday" 	,formatter:tableFormatter.course4friday  	,cellStyle:tableFormatter4cellStyle.course4friday  		},
					{sortable: false, valign:"middle" ,align: 'center'  ,title:"周六",	 	 field:"saturday" 	,formatter:tableFormatter.course4saturday 	,cellStyle:tableFormatter4cellStyle.course4saturday 	},
					]
		});
		
	    for(var i =0;i<14;i++){
			var obj = new Object;
			obj.num		 = (i+1);
			if(i==2) obj.monday	  = parseInt(Math.random()*10);
			if(i==10) obj.tuesday ="2";
			if(i==4) obj.wednesday="1";
			if(i==3) obj.thursday ="1";
			if(i==5) obj.friday   ="1";
			if(i==6) obj.saturday ="1";
			
			datalist.push(obj);
		}
		 
		$tableClass.bootstrapTable("load",datalist); 
		for(var i =0 ;i<mergeCells.length;i++){
			var obj = mergeCells[i];
			$tableClass.bootstrapTable('mergeCells', { index: obj.index,  field:obj.field,   rowspan: obj.rowspan});	
		}	
		
	};
	
	pageObj.init4pub = function(){
		
		HtmlUntil.init2couCourse4Now(layout.id4Center2now);
		
		var headNav    =  [{name:"今日课表",value:"today"},{name:"班级课表",value:"class"}];

        HtmlUntilBase.plug4HaderNav(id4header,headNav,pageObj);
	};
	
	pageObj.init4pub();
};

pageInfoList4now.push({id:"cou-course-now",obj:pageInfo});
//BaseUntil.pageInit(pageInfo);
	
		

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
	
	
		

var pageInfo =  {};

/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){

	var pageObj 			  = new Object;//
	var list4received		  = "cou-notice-affairs-tab-received-list";
	var list4received2search  = "cou-notice-affairs-tab-received-search";
	var list4send 	  		  = "cou-notice-affairs-tab-send-list";
	var list4send2search 	  = "cou-notice-affairs-tab-send-search";
	var tabdetail			  = "cou-notice-affairs-tab-parent-detail";//
	var tabinfo			  	  = "cou-notice-affairs-tab-parent-info";


	pageObj.init4received = function(){

		var headSelect = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"全部等级",value:"A"},{name:"全部等级",value:"todo"}],[{name:"学生姓名",value:"todo"},{name:"清芳",value:"todo"}]];
		var $this 	 = $("#"+list4received);
		var $articel   = $("#cou-notice-affairs-tab-parent-detail");
		var tabid4list = "unreader-tab-list";
		var tabid4distribution = "unreader-tab-distribution";

		var callback=function(data){
			$this.html(HtmlUntil.couNoticeAffairs4Received(data));
		};
		NoticeRequest.getNotice4Cid({cid:"1001"},callback);


		HtmlUntilBase.from4Select(list4received2search,headSelect);

		var $tabdatail 			  = $("#"+tabdetail);
		var $tabinfo 			  = $("#"+tabinfo);



		var  pagesObjSon ={};

		pagesObjSon.init4list = function(){
			var $this = $("#"+tabid4list);
			var callback=function(data){
				$this.html(HtmlUntil.couNoticeAffairs4ArticleNoList(data));
			};
			NoticeRequest.getStu4Photo(callback);
		};

		pagesObjSon.init4distribution = function(){
			var  option = {title:{text:""},xAxis:[{data:["05软件1班","05软件2班","05软件3班","05软件4班","05软件5班","05软件6班"]}],series:[{name:"no-title",data:[95,90,91,85,75,90],barWidth:65,itemStyle:{normal:{color:"#71c3f3"}}}]};
			BasePlug.echarBar(tabid4distribution,option,"","280px");
		};



		$this.delegate("div.item-table-row","click",function(){
			$this.closest("div.cou-notice-affairs-tab").hide();
			var nid = $(this).attr("nid");
			var callback=function(data){
				$tabdatail.html(HtmlUntil.couNoticeAffairs4Article(data));
				$articel.find("ul.article-tab-item li:first").trigger("click");
				$articel.find("li.bg-color-gray-dull").on("click",function(){
					$("#cou-notice-affairs-tab-parent-detail li.bg-color-gray-dull").removeClass("active-white");
					$(this).addClass("active-white");
				});
			};
			NoticeRequest.getNotice4Id({id:nid},callback);
			$tabdatail.show();
			//绑定函数
			$articel.delegate("ul.article-tab-item li","click",function(){
				var value = $(this).attr("value");
				$articel.find("div.item-tab-unreader").hide();
				eval("pagesObjSon.init4"+value+"()");
				$articel.find("div.item-tab-unreader-"+value).show();

			});


			$tabdatail.delegate("div.acticel-goback","click",function(){
				$tabdatail.hide();
				$tabinfo.show();
			});

		});
	};



	pageObj.init4send = function(){
		var headSelect	= [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"全部等级",value:"A"},{name:"全部等级",value:"todo"}],[{name:"学生姓名",value:"todo"},{name:"清芳",value:"todo"}]];
		var $this 		= $("#"+list4send);
		var $articel   = $("#cou-notice-affairs-tab-parent-detail");
		var tabid4list = "unreader-tab-list";
		var tabid4distribution = "unreader-tab-distribution";


		var callback = function(data){
			$this.html(HtmlUntil.couNoticeAffairs4Send(data));
		};

		NoticeRequest.getNotice4Cid({cid:"1002"},callback);

		HtmlUntilBase.from4Select(list4send2search,headSelect);
		
		var $tabdatail 			  = $("#"+tabdetail);
		var $tabinfo 			  = $("#"+tabinfo);
		$tabdatail.hide();
		
		var  pagesObjSon ={};

		pagesObjSon.init4list = function(){
			var $this = $("#"+tabid4list);
			var callback=function(data){
				$this.html(HtmlUntil.couNoticeAffairs4ArticleNoList(data));
			};
			NoticeRequest.getStu4Photo(callback);
		};

		pagesObjSon.init4distribution = function(){
			var  option = {title:{text:""},xAxis:[{data:["05软件1班","05软件2班","05软件3班","05软件4班","05软件5班","05软件6班"]}],series:[{name:"no-title",data:[95,90,91,85,75,90],barWidth:65,itemStyle:{normal:{color:"#71c3f3"}}}]};
			BasePlug.echarBar(tabid4distribution,option,"","280px");
		};

		$this.delegate("div.item-table-row","click",function(){			
			$this.closest("div.cou-notice-affairs-tab").hide();
			var nid = $(this).attr("nid");
			
			var callback=function(data){
				$tabdatail.html(HtmlUntil.couNoticeAffairs4Article(data));
			};
			NoticeRequest.getNotice4Id({id:nid},callback);
			$tabdatail.show();
			//绑定函数
			$articel.delegate("ul.article-tab-item li","click",function(){
				var value = $(this).attr("value");
				$articel.find("div.item-tab-unreader").hide();
				eval("pagesObjSon.init4"+value+"()");
				$articel.find("div.item-tab-unreader-"+value).show();

			});

			$articel.find("ul.article-tab-item li:first").trigger("click");
			$articel.find("li.bg-color-gray-dull").on("click",function(){
				$("#cou-notice-affairs-tab-parent-detail li.bg-color-gray-dull").removeClass("active-white");
				$(this).addClass("active-white");
			});
			$tabdatail.find("div.acticel-goback").on("click",function(){
				$tabdatail.hide();
				$tabinfo.show();
			});

		});

	};

	pageObj.initpub = function(){
		HtmlUntil.init2couNotice4Affair(layout.id4Center2affairs);
		var headNav    =  [{name:"我收到的",value:"received"},{name:"我发送的",value:"send"}];

		HtmlUntilBase.plug4HaderNav("cou-notice-affairs-header",headNav,pageObj);
	};
	pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-notice-affairs",obj:pageInfo});
	
	
		

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
	
	
		

var pageInfo =  {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
    
    var pageObj 	    = new Object;//
    var tabid4class     = "cou-work-affairs-tab-count-tab-class";
    var tabid4study     = "cou-work-affairs-tab-count-tab-study";
    var tabid4situation	= "cou-work-affairs-tab-situation-table";
    
    pageObj.init4situation=function(){
        var $thisTabel = $("#"+tabid4situation);
        var tableFormatterFun   = {};
        
        tableFormatterFun.tableDetail = function (value, row, index) {
           var vlist = "";
           var nlist = "";
           var result = '<table class="table-table">';
           
           for(var i =0 ;i<value.length;i++){
           		vlist+= '<td>'+value[i].value+'</td>';
           		nlist+= '<td>'+value[i].name+'</td>' ;
           }
           
          return [result+'<tr>'+vlist+'</tr>' +'<tr>'+nlist+'</tr></table>'].join('');
        };
        
        $thisTabel.bootstrapTable({
			pagination:true,
			columns: [
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 班级",    		field:"class" ,    },
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 考勤（次数）",   field:"attendance" ,formatter: tableFormatterFun.tableDetail},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 请假（人次）",   field:"leave"		,formatter: tableFormatterFun.tableDetail},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 宿舍检查(次数)", field:"dorm"		,formatter: tableFormatterFun.tableDetail},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 谈心（次数）",   field:"talk"		,formatter: tableFormatterFun.tableDetail},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 操行（条数）",	field:"conduct" 	,formatter: tableFormatterFun.tableDetail},
						{sortable: true, valign:"middle" ,align: 'center'  ,title:" 签到人次",	 	field:"attendanceTime" ,  formatter:tableFormatterFun.tableDetail},
                       /* {sortable: true, valign:"middle" ,align: 'center'  ,title:" 操作",	 	field:"operation" }*/

            ]
		});
		
		var datalist = [];
  
 		for(var i =0;i<4;i++){
			var obj = new Object;
			obj.class           = "05软件"+(i+1)+"班(40人)";
			obj.attendance      = [{name:"总考勤",value:"120"},{name:"早操",value:"80"},{name:"上课",value:"12"},{name:"晚自习",value:"90"}];
			obj.leave  	        = [{name:"总请假",value:"46"},{name:"续假",value:"12"},{name:"按时反校",value:"32"},{name:"超期返校",value:"2"}];
			obj.dorm  	        = [{name:"总检查",value:"16"},{name:"寝室数",value:"12"},{name:"平均检查",value:"4"}];
			obj.talk  	        = [{name:"谈心情况",value:"20"},{name:"覆盖",value:"50%"}];
			obj.conduct		    = [{name:"总记录",value:"20"},{name:"人均",value:"2"}];
			obj.attendanceTime  = [{name:"总通知",value:"150"}];
			datalist.push(obj);
		} 
		$thisTabel.bootstrapTable("load",datalist);
        
        $thisTabel.find("a.situation-table-detail").click(function(){
            var obj = {title:"班级详情",body:HtmlUntil.couWorkSituation4Detail(""),width:"1000px"};
            HtmlUntilBase.popup4Page(obj);
            $workDetail=$("#cou-work-situation-detail");
            $workDetail.bootstrapTable({
                pagination:false,
                columns: [
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 班级",    		field:"class" ,    },
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 考勤（次数）",   field:"attendance",formatter:tableFormatterFun.attendance},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 请假（人次）",   field:"leave",formatter:tableFormatterFun.attendance},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 宿舍检查(次数)", field:"dorm",formatter:tableFormatterFun.attendance},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 谈心（次数）",   field:"talk",formatter:tableFormatterFun.attendance},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 操行（条数）",	field:"conduct",formatter:tableFormatterFun.attendance},
                    {sortable: true, valign:"middle" ,align: 'center'  ,title:" 签到人次",	 	field:"attendanceTime" ,  formatter:tableFormatterFun.attendance},
                ]
            });
            var worklist = [];
             var wObj = new Object;
                 wObj.class           = "05软件"+(i+1)+"班(40人)";
                 wObj.attendance      = [{name:"总考勤",value:"120"},{name:"早操",value:"80"},{name:"上课",value:"12"},{name:"晚自习",value:"90"}];
                 wObj.leave  	        = [{name:"总请假",value:"46"},{name:"续假",value:"12"},{name:"按时反校",value:"32"},{name:"超期返校",value:"2"}];
                 wObj.dorm  	        = [{name:"总检查",value:"16"},{name:"寝室数",value:"12"},{name:"平均检查",value:"4"}];
                 wObj.talk  	        = [{name:"贪心情况",value:"20"},{name:"覆盖",value:"50%"}];
                 wObj.conduct		    = [{name:"总记录",value:"20"},{name:"人均",value:"2"}];
                 wObj.attendanceTime  = [{name:"总通知",value:"150"}];
                 worklist.push(wObj);
            $workDetail.bootstrapTable("load",worklist);
        })
    };
    
    pageObj.init4count=function(){
        var pageObjSon = new Object;

        pageObjSon.init4class=function(){
            var $this = $("#"+tabid4class);
            $this.html(HtmlUntil.couWorkCountClass(""));
        };
        
        pageObjSon.init4study=function(){
        	var $thisStudy = $("#"+tabid4study);
        	
        	$thisStudy.html(HtmlUntil.couWorkStudentInit(""));
        	
            var $this = $("#"+"study-situation-student-rank-box");
            $this.html(HtmlUntil.couWorkStudentRank(""));
            
            var option1={title:{text:"05软件2班上课出勤趋势"},toolbox:{show:false},xAxis:{data:["9月5日","9月6日","9月7日","9月8日","9月9日","9月10日","9月11日"]},series:[{name:"出勤趋势",data:[120,132,101,134,90,230,210],itemStyle:{normal:{color:"#70c2f2"}}}]};
            BasePlug.echarLine("class-situation-char-attendance-trend",option1,"600px");

            var  option2 = {title:{text:"考勤结果(人次/比例)"},toolbox:{show:false},legend:{show:false},xAxis:[{data:["迟到","早退","缺勤","请假"]}],series:[{name:"no-title|no-point",data:[3,5,4,6],barWidth:30,itemStyle:{normal:{color:"#70c2f2"}}}]};
            BasePlug.echarBar("class-situation-char-attendance-count",option2,"400px","220px");

            var  option3 = {title:{text:"缺勤分布(人次/比例)"},toolbox:{show:false},legend:{show:false},xAxis:[{data:["早退","早自习","上课","晚自习","晚寝","会议"]}],series:[{name:"no-title|no-point",data:[3,5,4,6,10,1],barWidth:15,itemStyle:{normal:{color:"#70c2f2"}}}]};
            BasePlug.echarBar("class-situation-char-attendance-distribute",option3,"400px","220px");
        };
        
        pageObjSon.init4pub=function(){
            var headNav    =  [{name:"班风情况",value:"class"},{name:"学风情况",value:"study"}];
            HtmlUntilBase.plug4HaderNavTab("cou-work-affairs-tab-count-header",headNav,pageObjSon);
        };
        
        pageObjSon.init4pub();
    };

    pageObj.init4pub = function(){
    	
    	HtmlUntil.init2couWork4Now(layout.id4Center2affairs);
    	
        var headSelect = [[{name:"本周",value:"todo"},{name:"本周",value:"todo"}]];
        var headNav    = [{name:"工作情况",value:"situation"},{name:"工作成果",value:"count"}];
      
      	HtmlUntilBase.from4Select("cou-work-affairas-search",headSelect);
        HtmlUntilBase.plug4HaderNav("cou-work-affairas-header",headNav,pageObj);
    };
    
    pageObj.init4pub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-work-affairs",obj:pageInfo});



var pageInfo =  {};

/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){
	
	var pageObj   		= new Object;//
 	var  id4header  	= "cou-stucount-tas-header";
 	var  id4main		= "cou-stucount-tas-tab-main";
 	
 	var id4special		= "cou-stucount-tas-tab-main-char4special";
	var id4political	= "cou-stucount-tas-tab-main-char4political";
	var id4minority		= "cou-stucount-tas-tab-main-char4minority";
	var id4geographical = "cou-stucount-tas-tab-main-char4geographical";
	var id4like			= "cou-stucount-tas-tab-main-char4like";
	var id4skill		= "cou-stucount-tas-tab-main-char4skill";				
		 
	pageObj.init4main = function(){
		
	 	var headSelect = [[{name:"本周",value:"todo"}]];
	  
	  	HtmlUntilBase.from4Select(id4header,headSelect);
		 
		var  option1 = {"title":{"text":"特殊群体"},"toolbox":{"show":false},"legend":{"show":false},"xAxis":[{"data":["贫困学生","孤残学生","单亲家庭 ","烈士子女"]}],"series":[{"name":"no-title|no-point","data":[{value:1,color:"rgb(90,154,216)"},{value:2,color:"rgb(237,126,55)"},{value:3,color:"rgb(164,164,164)"},{value:1,color:"rgb(253,193,0)"}],"barWidth":10,itemStyle:{normal:{color:function(params){return params.data.color}}}}]};
		var  option2 = {"title":{"text":"政治面貌"},"toolbox":{"show":false},"legend":{"show":false},"xAxis":[{"data":["党员","预备党员","共青团员 ","群众"]}],"series":[{"name":"no-title|no-point","data":[{value:3,color:"rgb(90,154,216)"},{value:1,color:"rgb(237,126,55)"},{value:1,color:"rgb(164,164,164)"},{value:2,color:"rgb(253,193,0)"}],"barWidth":10,itemStyle:{normal:{color:function(params){return params.data.color}}}}]};
		var  option3 = {"title":{"text":"民族分布"},"toolbox":{"show":false},"legend":{"show":false},"xAxis":[{"data":["白族","壮族","彝族 ","苗族","维吾尔族"]}],"series":[{"name":"no-title|no-point","data":[{value:10,color:"rgb(90,154,216)"},{value:9,color:"rgb(237,126,55)"},{value:1,color:"rgb(164,164,164)"},{value:5,color:"rgb(253,193,0)"},{value:2,color:"rgb(111,174,60)"}],"barWidth":10,itemStyle:{normal:{color:function(params){return params.data.color}}}}]};
		var  option4 = {"title":{"text":"地域分布"},"toolbox":{"show":false},"legend":{"show":false},"xAxis":[{"data":["内蒙古","黑龙江","河北 ","广东","江西","湖南"]}],"series":[{"name":"no-title|no-point","data":[{value:3,color:"rgb(90,154,216)"},{value:1,color:"rgb(237,126,55)"},{value:2,color:"rgb(164,164,164)"},{value:1,color:"rgb(253,193,0)"},{value:1,color:"rgb(111,174,60)"},{value:1,color:"rgb(159,70,10)"}],"barWidth":10,itemStyle:{normal:{color:function(params){return params.data.color}}}}]};
		var  option5 = {"title":{"text":"兴趣爱好"},"toolbox":{"show":false},"legend":{"show":false},"xAxis":[{"data":["公益","看书","音乐 ","影视","游戏","运动","旅游","交友","美食"]}],"series":[{"name":"no-title|no-point","data":[{value:7,color:"rgb(90,154,216)"},{value:1,color:"rgb(237,126,55)"},{value:9,color:"rgb(164,164,164)"},{value:1,color:"rgb(253,193,0)"},{value:1,color:"rgb(111,174,60)"},{value:10,color:"rgb(159,70,10)"},{value:4,color:"rgb(90,154,216)"},{value:4,color:"rgb(237,126,55)"},{value:7,color:"rgb(164,164,164)"}],"barWidth":10,itemStyle:{normal:{color:function(params){return params.data.color}}}}]};
		var  option6 = {"title":{"text":"特长技能"},"toolbox":{"show":false},"legend":{"show":false},"xAxis":[{"data":["唱歌","跳舞","乐器 ","主持","体育","外语","计算机","摄影","驾照"]}],"series":[{"name":"no-title|no-point","data":[{value:6,color:"rgb(90,154,216)"},{value:1,color:"rgb(237,126,55)"},{value:11,color:"rgb(164,164,164)"},{value:6,color:"rgb(253,193,0)"},{value:8,color:"rgb(111,174,60)"},{value:9,color:"rgb(159,70,10)"},{value:2,color:"rgb(90,154,216)"},{value:1,color:"rgb(237,126,55)"},{value:2,color:"rgb(164,164,164)"}],"barWidth":10,itemStyle:{normal:{color:function(params){return params.data.color}}}}]};
		
		BasePlug.echarBar(id4special		,option1);
 		BasePlug.echarBar(id4political	    ,option2);
		BasePlug.echarBar(id4minority	    ,option3);
		BasePlug.echarBar(id4geographical	,option4);
		BasePlug.echarBar(id4like	        ,option5);
		BasePlug.echarBar(id4skill			,option6);  
	};
	 
	pageObj.initpub = function(){
		HtmlUntil.init2couStuCount4Tas(layout.id4Center2tas);
		
		pageObj.init4main();
	};
	pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
 pageInfoList4tas.push({id:"cou-stucount-tas",obj:pageInfo});
	
		

var pageInfo ={};
pageInfo.init = function() {

    var pageObj = new Object;//
    
    var  serach4GeneralId = "cou-general-tas-header";
    pageObj.init4main = function(){
        var table4GeneralId   = "cou-general-tas-tab-main";
        var $table4General    = $("#"+table4GeneralId);
        var  datalist       = [];
        $table4General.bootstrapTable({
            pagination:true,
            columns: [
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name" ,    },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"性别"		,field:"sex",},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,	 field:"class",  	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"政治面貌"	,field:"politic" , 	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"民族"	,field:"nation",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"职务"	,field:"duty" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"特殊情况"	,field:"special",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"请假"	,	 field:"leave" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"缺勤"	,	 field:"absence" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"宿舍情况"	,field:"dormScore" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"谈心状态"	,field:"talk",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操行"	,	 field:"conduct" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"签到率"	,	 field:"sign" ,  },
            ]
        });
        var callback = function(data){
            $table4General.bootstrapTable("load",data);
        };
        GeneralRequest.getStu(callback);

        $("#cou-general-tas-tab-main").delegate("tbody tr","click",function(){
            var index = $(this).attr("data-index");
            var buf = new StringBuffer();
            buf.append('<div class="item-tab-prop item-tab-prop-stu" id="cou-general-tas-modal-stu"> </div>');
            buf.append('<div class="item-tab-prop item-tab-prop-family" 	  id="cou-general-tas-modal-family"> </div>');
            buf.append('<div class="item-tab-prop item-tab-prop-school"  id="cou-general-tas-modal-school"> </div>');
            
            
            var callback = function(data){
                var datus=data[index];
                var obj = {title:[{name:"学生档案",value:"stu"},{name:"家庭信息",value:"family"},{name:"在校表现",value:"school"}],body:buf.toString(),width:"542px"};
                var callbackobj = {};
                callbackobj.init4prop2stu = function(){
                    $("#cou-general-tas-modal-stu").html(HtmlUntil.couGeneralTasModalStu(datus));
                };
                callbackobj.init4prop2family = function(){
                    $("#cou-general-tas-modal-family").html(HtmlUntil.couGeneralTasModalFamily(datus));
                };
                callbackobj.init4prop2school = function(){
                    $("#cou-general-tas-modal-school").html(HtmlUntil.couGeneralTasModalSchool(datus));
                };

                HtmlUntilBase.popup4PageList(obj,callbackobj);
            };
            GeneralRequest.getGeneral4Id(callback)
        })

    };

    pageObj.init4pub = function(){
        HtmlUntil.init2couGeneral4Tas(layout.id4Center2tas);
        var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"姓名/学号",value:"todo"},{name:"张鑫",value:"todo"}]];
        HtmlUntilBase.from4Select(serach4GeneralId,headSelect);
        
        pageObj.init4main();
    };
 	pageObj.init4pub();
    $("#cou-general-tas-search-btn").on("click",function(){
        $("#cou-cou-general-tas-search").slideToggle(300);
    })
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4tas.push({id:"cou-general-tas",obj:pageInfo});