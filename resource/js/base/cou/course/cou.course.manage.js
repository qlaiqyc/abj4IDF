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
	
		
