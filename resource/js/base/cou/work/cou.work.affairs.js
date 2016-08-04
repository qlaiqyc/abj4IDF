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


