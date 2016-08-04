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
	
		
