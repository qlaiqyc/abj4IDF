/************
 * 插件封装类
 * 0. JSONP 封装类
 * 1.datepicker	：时间插件
 * 2.char		: 图表插件
 * 3. 富文本 封装
 * 4.文本居中
 * 
 * ************/

if (typeof BasePlug == "undefined") {
	BasePlug = new Object();
};

/*********
 * JSONP 封装类
 * url    
 * requestdata 
 * callback
 * ******************/
BasePlug.JSONP = function(url,requestdata,callback){
	
	if (requestdata == null|| (!StringHelper.HasText(requestdata))) {
		requestdata = new Object();
	}
	/*requestdata.userToken 	   =BaseUser.token;      
	  requestdata.userTokenAccount =BaseUser.account;  */
	$.jsonp({  
		url: url,
		data: requestdata,
		callbackParameter: "callbackparam",
		callback: "success_jsonpCallback",
		success: function(e) {
			callback(e);
		},
		error: function(e) {
		}
	});
};


/*********
 * AJX 封装类
 * url    
 * requestdata 
 * callback
 * ******************/
BasePlug.AjaxPost = function(url,requestdata,callback){
	
	if (requestdata == null|| (!StringHelper.HasText(requestdata))) {
		requestdata = new Object();
	}
	/*requestdata.userToken 	   =BaseUser.token;      
	  requestdata.userTokenAccount =BaseUser.account;  */
	$.ajax({  
		type: "get",
		data:requestdata,
      	url: url, 
		success: function(e) {
			callback(e);
		},
		error: function(e) {
		}
	});
};

/*********
 * getJson疯转类
 * url    
 * requestdata 
 * callback
 * ******************/
BasePlug.getJSON = function(url,callback){
	
	$.getJSON(url,function(data){
	   callback(data.RECORDS);
	});
	
 };



/*********
 * id 
 * param  参数  文件夹路径
 * success 回调方法
 * ******/
BasePlug.FilePost=function(id,param,success){
	$('#'+id).uploadifive({
				'auto' : true,   //取消自动上传
				"buttonClass":"file-upload-pic",
				'method': 'post',
				"formData":param,
				'uploadScript': 'http://127.0.0.1:8080/OP/file/upload.do', //处理上传文件Action路径
				'fileObjName': 'file', //文件对象
				'buttonText': '', //按钮显示文字
				'queueID': false, //提示信息放置目标
				'fileType': new Array("image","application"), //允许上传文件类型
				'onUploadComplete': function(file, data) { //文件上传成功后执行

					if(success!=null)success(data);
				},
				"onUploadFile":function(file){
					var d=data;
				},
				"onError":function(file, fileType, data) {},
	});
}



//激活 时间插件  true show
BasePlug.data = function(divid,flag){
	var $this = $("#"+divid);
	$this.datepicker({
    	language: "zh-CN",
    	todayHighlight: true
	});
}

BasePlug.echar =function(id,data,selfwidth,selfhight){
	
	var $this 		 = $("#"+id);
	var defaultWidth = "100%";
	var defaultHight = "400px"
	
	if(StringHelper.HasText(selfwidth)) defaultWidth = selfwidth;
	if(StringHelper.HasText(selfhight)) defaultHight = selfhight;
	
	var textCss  = "width: "+defaultWidth+";height: "+defaultHight+";"
	$this.attr("style",textCss).addClass("self-char"); 
 	$this.html("");
 	
	setTimeout(function(){
		var ctx = echarts.init(document.getElementById(id));
		ctx.setOption(data);
		window.onresize = ctx.resize;//自适应
	},500);
}

/****
 * 
   title:{text:"某站点用户访问来源",subtext:"纯属虚构",x:"center"},
   tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},
   legend:{orient:"vertical",left:"left",data:["直接访问","邮件营销"]},
   series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"red"}}}]};

 *  data=[{},{},{},{}];
 * 再次封装 data 数据 
 * *******************/
BasePlug.echarPie = function(id,data,selfwidth,selfhight){
	var newData =  new Object,
		title   =  new Object,
	    tooltip =  new Object,
	    legend  =  new Object,
	    series  =  new Object;
	    
	//设置默认值
	title.x 		  = "center";
	tooltip.trigger   = "item";
	tooltip.formatter = "{a} <br/>{b} : {c} ({d}%)";
	legend.orient 	  = "vertical";
	
	legend.right 	  = 100;
	legend.bottom     = 10;
	series.type 	  = "pie";
	series.radius	  = "70%";
	series.center 	  = ['50%', '60%'];
	series.itemStyle  = {emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}};
	
	if(!StringHelper.HasText(data.tooltip))  			 data.tooltip = {};
	if(!StringHelper.HasText(data.series[0].itemStyle))  data.series[0].itemStyle = {};
       
	if(!StringHelper.HasText(data.title.x));              data.title.x              = title.x		    ;
	if(!StringHelper.HasText(data.tooltip.trigger));      data.tooltip.trigger      = tooltip.trigger  ;
	if(!StringHelper.HasText(data.tooltip.formatter));    data.tooltip.formatter    = tooltip.formatter;
	if(!StringHelper.HasText(data.legend.orient));        data.legend.orient        = legend.orient	;
	if(!StringHelper.HasText(data.legend.right));         data.legend.right         = legend.right	   	;
	if(!StringHelper.HasText(data.legend.bottom));        data.legend.bottom        = legend.bottom	   	;
	if(!StringHelper.HasText(data.series[0].type));       data.series[0].type       = series.type	   	;
	if(!StringHelper.HasText(data.series[0].center));     data.series[0].center     = series.center   	;
	if(!StringHelper.HasText(data.series[0].radius));     data.series[0].radius     = series.radius	;
	if(!StringHelper.HasText(data.series[0].itemStyle));  data.series[0].itemStyle  = series.itemStyle	;
	//封装
	BasePlug.echar(id,data);
}
/******
 * 柱状图
 * ***********/
BasePlug.echarBar =  function(id,data,selfwidth,selfhight){
	var newData = {},
		title   = {},
	    tooltip = {},
	    legend  = {},
	    toolbox = {},
	    xAxis 	= {},
	    yAxis 	= [],
	    series  = [];
	    
	data.legend 	= new Array; 
	legend.bottom	= 0,
	title.subtext 	= "";
	title.left      = "center";
	tooltip.trigger = 'axis';
	toolbox.show    = "true";
	toolbox.feature = {dataView : {show: true, readOnly: false}, magicType : {show: true, type: ['line', 'bar']},  restore : {show: true},   saveAsImage : {show: true}};
	yAxis			= [{ type : 'value'  }];
	
	try{ if(!StringHelper.HasText(data.title.subtext))    data.title.subtext    = title.subtext;    }catch(e){ data.title.subtext  = {}; };
	try{ if(!StringHelper.HasText(data.title.left))    	  data.title.left    	= title.left;    }catch(e){ data.title.subtext  = {}; };
	try{ if(!StringHelper.HasText(data.tooltip.trigger))  data.tooltip.trigger  = tooltip.trigger;  }catch(e){ data.tooltip        = tooltip };
	try{ if(!StringHelper.HasText(data.toolbox.show))  	  data.toolbox.show     = toolbox.show;     }catch(e){ data.toolbox        = toolbox; };
	try{ if(!StringHelper.HasText(data.toolbox.feature))  data.toolbox.feature  = toolbox.feature;  }catch(e){ data.toolbox  	   = toolbox; };
 	try{ if(!StringHelper.HasText(data.yAxis))  		  data.yAxis =yAxis;  }catch(e){ };
  
 	//自动构建标题
	legend.data = [];
	var isNotitle = false;
	var isNoPoint = false;
	
	for(var i=0;i<data.series.length;i++) {
		if(data.series[i].name.indexOf("no-point")>=0 ) isNoPoint = true; 
		if(data.series[i].name.indexOf("no-title")>=0 ) {isNotitle = true;data.series[i].name ="" }; 

		legend.data.push(data.series[i].name);
		data.series[i].type 	 = "bar";
		
		if(!isNoPoint) 	data.series[i].markPoint = {data : [ {type : 'max', name: '最大值'},  {type : 'min', name: '最小值'}]};
	};
	
	if(!isNotitle) 	 data.legend = legend
	
	for(var i =0; i<data.xAxis.length ;i++)  if(!StringHelper.HasText(data.xAxis[i].type)) data.xAxis[i].type = "category";
	for(var i =0; i<data.yAxis.length ;i++)  if(!StringHelper.HasText(data.yAxis[i].type)) data.xAxis[i].type = "value";
	
	BasePlug.echar(id,data,selfwidth,selfhight);
};

/******
 * 柱状图
 * ***********/
BasePlug.echarLine =  function(id,data,selfwidth,selfhight){
	var newData = {},
		title   = {},
	    tooltip = {},
	    legend  = {},
	    grid    = {},
	    toolbox = {},
	    xAxis 	= {},
	    yAxis 	= [],
	    series  = [];
	   
	legend.data 	= [];
	tooltip.trigger = 'axis';
	grid			= {left: '3%', right: '4%',  bottom: '3%',  containLabel: true};
	toolbox         = {  feature: { saveAsImage: {} },show:true};
	yAxis			= [{ type : 'value'  }];
	title.left      = "center";
	legend.top		= 30;
	
	try{ if(!StringHelper.HasText(data.title.left))    	  data.title.left    	= title.left;    }catch(e){  };
	try{ if(!StringHelper.HasText(data.tooltip.trigger))  data.tooltip.trigger  = tooltip.trigger;  }catch(e){ data.tooltip        = tooltip };
	try{ if(!StringHelper.HasText(data.grid))  	  		  data.grid     		= grid;     }catch(e){ data.toolbox        = toolbox; };
	try{ if(!StringHelper.HasText(data.toolbox)) 		  data.toolbox 		    = toolbox;  }catch(e){ data.toolbox  	   = toolbox; };
	try{ if(!StringHelper.HasText(data.toolbox.show))  	  data.toolbox.show     = toolbox.show;     }catch(e){ data.toolbox        = toolbox; };
	
	
 	try{ if(!StringHelper.HasText(data.yAxis))  		  data.yAxis 			= yAxis;  }catch(e){ };
  
	
	for(var i =0; i<data.xAxis.length ;i++)  {
		if(!StringHelper.HasText(data.xAxis[i].type)) 		 data.xAxis[i].type 	   = "category";
		if(!StringHelper.HasText(data.xAxis[i].boundaryGap)) data.xAxis[i].boundaryGap = false;
	};
	
	for(var i=0;i<data.series.length;i++) {
		legend.data.push(data.series[i].name);
		data.series[i].type  = "line";
	};
	data.legend = legend;
	
	for(var i =0; i<data.yAxis.length ;i++)  if(!StringHelper.HasText(data.yAxis[i].type)) data.xAxis[i].type = "value";
	 
	
	BasePlug.echar(id,data,selfwidth,selfhight);
};


/***
 * 初始化富文本
 * *******/
BasePlug.RichTxtInit = function(id){
	
	var $this = $("#"+id);
	
	$this.summernote({ 
		 lang: 'zh-CN' ,
		  toolbar: [
			    ['style', ['bold', 'italic', 'underline', 'clear']],
			    ['font', ['strikethrough', 'superscript', 'subscript']],
			    ['fontsize', ['fontsize']],
			    ['color', ['color']],
			    ['para', ['ul', 'ol', 'paragraph']],
			    ['height', []]
			  ], 
		  minHeight: 100, 
		  maxHeight: 130, 
	});
}

BasePlug.RichTxtGetHtml = function(id){
	
	var $this = $("#"+id);
	
	return	$this.summernote('code');
}

BasePlug.RichTxtGetValue = function(id){
	//过滤HTML 标签
	return BasePlug.RichTxtGetHtml(id).replace(/<[^>]+>/g,"");;
}

BasePlug.DatePicker = function(idorclass){
	
	$(idorclass).datetimepicker({
	  		format: 'yyyy-mm-dd hh:ii',
	  		autoclose:true,
	  		language:"zh-CN"
	});
};

BasePlug.DatePicker4Static = function(idorclass,viewSelect){
	if(!StringHelper.HasText(viewSelect)) viewSelect = 1 ;
	$(idorclass).datetimepicker({  
		viewSelect: viewSelect, 
		language: "zh-CN",
    	todayHighlight: true
	});
};

