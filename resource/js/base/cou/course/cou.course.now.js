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
	
		
