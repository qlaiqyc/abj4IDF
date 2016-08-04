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