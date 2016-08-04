/****
 * Html 基本插件
 * nav 头部导航
 * form  表单组件
 * ： select
 * 
 * alertPage 弹出页面
 * 
 * **************************/

if(typeof HtmlUntilBase == "undefined"){
		HtmlUntilBase =  new Object();
}
 
/********
 * header 导航函数
 * id     实例化ID
 * data,  横向导航参数值            
 *	     [{name:"谈心明细",value:"detail"},{name:"谈心学生",value:"stu"}]
 * 
 * type value= ""|prop   {type:"prop",value:""}
 * callobj .初始化函数pageInfo内部的函数
 * */
HtmlUntilBase.plug4HaderNav = function(id,data,callobj,type){
	var $this    = $("#"+id);	
	var buf      = new StringBuffer();
	var plist    = data;
	
	buf.append('<ul class="nav nav-tabs nav-tabs-parent">');
	for(var i = 0; i < plist.length; i++ ){
		var obj = plist[i];
		buf.append('	<li role="presentation" class="header-parent" parentid="'+i+'" value="'+obj.value+'" init="'+obj.init+'"> <a >'+obj.name+'</a></li>');
	}
	buf.append('</ul>');
	
	$this.html(buf.toString());
	
	var isProp = StringHelper.HasText (type);
	
	$this.find("ul.nav-tabs-parent li").on("click",function(){
		var value =$(this).attr("value");
		var $t= $(this);
		$this.find("ul.nav-tabs-parent li.active").removeClass("active");
		$t.addClass("active");
		
		 var isyes = function(){
		 	var $main = $t.closest("div.modal-content");
		 	$main.find("div.item-tab").hide();
		 };
		 var isNo  = function(){
		 	$("div.item-tab").hide();
		 };
		
		if(isProp){isyes()}else{isNo() };
		
		eval("callobj.init4"+value+"()");
		$("div.item-tab-"+value).show();
	});
	 
	$this.find("ul.nav-tabs-parent li:first").trigger("click");
};

/*****
 * html 二级导航tab
 * 
 * id
 * data
 * **********/
HtmlUntilBase.plug4HaderNavTab = function(id,data,callobj){
	var $this    = $("#"+id);	
	var buf      = new StringBuffer();
	var plist    = data;
	
	buf.append('<ul class="nav nav-tabs nav-tabs-son bg-color-gray-nav">');
	for(var i = 0; i < plist.length; i++ ){
		var obj = plist[i];
		buf.append('	<li role="presentation" value="'+obj.value+'" init="'+obj.init+'"> <a >'+obj.name+'</a></li>');
	}
	buf.append('</ul>');
	
	$this.html(buf.toString());
	
	$this.find("ul.nav-tabs-son li").on("click",function(){
		var value =$(this).attr("value");
		$this.find("ul.nav-tabs-son li.active").removeClass("active");
		$(this).addClass("active");
		$("div.item-tab-son").hide();
		eval("callobj.init4"+value+"()");
		$("div.item-tab-son-"+value).show();
	});
	 
	$this.find("ul.nav-tabs-son li:first").trigger("click");
};

/*****
 * form 之 seleect
 * 	
var headSelect = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}]];
 	
 * ************************/

HtmlUntilBase.from4Select = function(id,data,callback){
	var $this = $("#"+id);	
	var buf   = new StringBuffer();
	
	buf.append('<form class="form-inline form-line">');
	for(var i =0 ;i <data.length;i++){
		var olist = data[i];
		buf.append('<div class="form-group select-width-sm"> <select class="form-control">');
		
		for(var j =0 ;j< olist.length;j++){
			var obj = olist[j];
			buf.append('<option>'+obj.name+'</option>');
		}
		buf.append('</select> </div>');
	};
	buf.append('  <span  class="btn btn-abj-primary">查询</span></form>');
				
	$this.html(buf.toString());
	$this.find("span.btn-info").on("click",callback);
}

/**
 * 弹出框居中
 * */
HtmlUntilBase.propCenter = function(obj){
	   //obj这个参数是弹出框的整个对象
        var screenWidth = $(window).width(),
           screenHeigth = $(window).height();
        //获取屏幕宽高
        var scollTop = $(document).scrollTop();
        //当前窗口距离页面顶部的距离
        var objLeft = (screenWidth - obj.width()) / 2;
        ///弹出框距离左侧距离
        var objTop = (screenHeigth - obj.height()) / 2 + scollTop;
        ///弹出框距离顶部的距离
        obj.css({
            left:objLeft + "px",
            top:objTop + "px"
        });
       // obj.fadeIn(500);
        //弹出框淡入
        isOpen = 1;
        //弹出框打开后这个变量置1 说明弹出框是打开装填
        //当窗口大小发生改变时
        $(window).resize(function() {
            //只有isOpen状态下才执行
            if (isOpen == 1) {
                //重新获取数据
                screenWidth = $(window).width();
                screenHeigth = $(window).height();
                var scollTop = $(document).scrollTop();
                objLeft = (screenWidth - obj.width()) / 2;
                var objTop = (screenHeigth - obj.height()) / 2 + scollTop;
                obj.css({
                    left:objLeft + "px",
                    top:objTop + "px"
                });
               // obj.fadeIn(500);
            }
        });
        //当滚动条发生改变的时候
        $(window).scroll(function() {
            if (isOpen == 1) {
                //重新获取数据
                screenWidth = $(window).width();
                screenHeigth = $(window).height();
                var scollTop = $(document).scrollTop();
                objLeft = (screenWidth - obj.width()) / 2;
                var objTop = (screenHeigth - obj.height()) / 2 + scollTop;
                obj.css({
                    left:objLeft + "px",
                    top:objTop + "px"
                });
                obj.fadeIn(500);
            }
        });
}


/****
 * popup4Page 弹出页面
 * data ={title:"xmmxm",body:"",width:"800px",height:200px}
 * ****************/
HtmlUntilBase.popup4Page = function(data){
	var buf = new StringBuffer();
	var defalutWidth = "541px";
	var defaultHeight = "auto";
	
	try{ if(StringHelper.HasText(data.width))  defalutWidth = data.width;}catch(e){ };
	try{ if(StringHelper.HasText(data.height))  defaultHeight = data.height;}catch(e){ }
	 
	buf.append('<div class="modal fade prop-page-modal" id="prop-page-modal" tabindex="-1" role="dialog" aria-labelledby="prop-page-body">');
	buf.append('  <div class="modal-dialog" role="document" style="width:'+defalutWidth+';left:30%">');
	buf.append('    <div class="modal-content">');
	buf.append('      <div class="modal-header bg-color-gray">');
	buf.append('        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
	buf.append('        <div class="modal-title" id="prop-page-body"> '+data.title+'</div>');
	buf.append('      </div>');
	buf.append('      <div class="modal-body" style="height:'+defaultHeight+';">'+data.body);
	buf.append('     </div>');
	buf.append('    </div>');
	buf.append('  </div>');
	buf.append('</div>');
	var id = "page-body";//"prop-page";
	var ishas = StringHelper.HasText(document.getElementById(id));
	if(!ishas)  $("body").append('<div id="'+id+'"></div>');
	
	$("#"+id).html(buf.toString());
	$("#prop-page-modal").modal('show')
	
	setTimeout(function(){
		HtmlUntilBase.propCenter($("#page-body div.modal-dialog"));
	},200);
	
};


/****
 * popup4Page 弹出页面
 * 
 * 第二层弹出框
 * data ={title:"xmmxm",body:"",width:"800px",height:200px}
 * ****************/
HtmlUntilBase.popup4Page2 = function(data){
	var buf = new StringBuffer();
	var defalutWidth = "541px";
	var defaultHeight = "auto";
	
	try{ if(StringHelper.HasText(data.width))  defalutWidth = data.width;}catch(e){ };
	try{ if(StringHelper.HasText(data.height))  defaultHeight = data.height;}catch(e){ }
	 
	buf.append('<div class="modal fade prop-page-modal" id="prop-page-modal2" tabindex="-1" role="dialog" aria-labelledby="prop-page-body2">');
	buf.append('  <div class="modal-dialog" role="document" style="width:'+defalutWidth+';">');
	buf.append('    <div class="modal-content">');
	buf.append('      <div class="modal-header bg-color-gray">');
	buf.append('        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
	buf.append('        <div class="modal-title" id="prop-page-body2"> '+data.title+'</div>');
	buf.append('      </div>');
	buf.append('      <div class="modal-body" style="height:'+defaultHeight+';">'+data.body);
	buf.append('     </div>');
	buf.append('    </div>');
	buf.append('  </div>');
	buf.append('</div>');
	var id = "page-body2";//"prop-page";
	var ishas = StringHelper.HasText(document.getElementById(id));
	if(!ishas)  $("body").append('<div id="'+id+'"></div>');
	
	$("#"+id).html(buf.toString());
	$("#prop-page-modal2").modal('show')
	
	setTimeout(function(){
		HtmlUntilBase.propCenter($("#page-body2 div.modal-dialog"));
	},200);
	
};

/****
 * popup4Page 弹出页面
 * data ={title:[{name"",value:"},{name"",value:"}]}",body:"",width:"800px"}
 * callobj 回调函数对象
 * ****************/
HtmlUntilBase.popup4PageList = function(data,callobj){
	var buf = new StringBuffer();
	var nlist = data.title;

	buf.append('<ul class="nav nav-tabs nav-tabs-popup">');
	for(var i =0; i< data.title.length ;i++){
		buf.append('  <li  id="prop-title-tabs-'+data.title[i].value+'"  value="'+data.title[i].value+'">'+data.title[i].name+'</li>');
	}
	buf.append('</ul>');
	
	data.title = buf.toString();
	
	HtmlUntilBase.popup4Page(data);
	
	var $this = $("#page-body");//一定要注意dom 作用域的问题
	 
 	$this.find("ul.nav-tabs-popup li").on("click",function(){
 		var value = $(this).attr("value");
 		$this.find("ul.nav-tabs-popup li").removeClass("prop-arrow");
		$(this).addClass("prop-arrow");
		$this.find(".item-tab-prop").hide();
		eval("callobj.init4prop2"+value+"()");
		$this.find(".item-tab-prop-"+value).show(); 
 	});
 
	$this.find("ul.nav-tabs-popup li:first").trigger("click");
	
};


/****
 * popup4confirm
 * data ={title:"xmmxm",cname:"销假",width:"800px"}
 * ****************/
HtmlUntilBase.popup4Confirm= function(data,success){
	
	var buf = new StringBuffer();
	var $this = $("#prop-page-modal");
	
	buf.append('<div class="container-fluid confirm-div">');
	buf.append('	 		<div class="row">');
	buf.append('	 			<img class="confirm-center-div" src="../../resource/img/prop/prop-right.png" />');
	buf.append('	 			<p class="popup-btn-div">是否确定'+data.cname+'?</p>');
	buf.append('	 		</div>');
	buf.append('	 		<div class="row popup-btn-div"> ');
	buf.append('	 			<span class="btn btn-abj-primary"> 确定</span>');
	buf.append('	 			<span class="btn btn-abj-default"> 取消</span>');
	buf.append('	 		</div> ');
	buf.append('</div>');
	
	var obj = {title:"操作提示",body:buf.toString(),width:"400px"};
	HtmlUntilBase.popup4Page(obj);
	
	$this.find("span.btn-sub").on("click",function(){ success});
	$this.find("span.btn-cancel").on("click",function(){ $this.modal(hide);});
};



/****
 * popup4Text
 * data ={title:"xmmxm",placeholder:"销假",width:"800px"}
 * ****************/
HtmlUntilBase.popup4Text= function(data,success){
	
	var buf = new StringBuffer();
	var $this = $("#prop-page-modal");
	
	buf.append(' <div class="container-fluid confirm-div"> ');
	buf.append('    <div class="row popup-page-div div-top-sm popup-4-text"> ');
	buf.append('     <textarea class="form-control text-value" placeholder="'+data.placeholder+'"></textarea>');
	buf.append('    </div> ');
	buf.append('    <div class="row popup-btn-div"> ');
	buf.append('     <span class="btn btn-abj-primary btn-sub"> 确定</span> ');
	buf.append('     <span class="btn btn-abj-default btn-cancel"> 取消</span> ');
	buf.append('    </div> ');
	buf.append(' </div> ');
	
	var obj = {title:data.title,body:buf.toString(),width:data.width};
	HtmlUntilBase.popup4Page(obj);
	
	$this.find("span.btn-sub").on("click",function(){ success($this.find("textarea.text-value").val())});
	$this.find("span.btn-cancel").on("click",function(){ $this.modal(hide);});
};

/**********
 * 
 * 发通 选班级 选人
 * ******************/
HtmlUntilBase.popup4ClassList= function(data,success){
	var buf   = new StringBuffer();
	
	for(var i =0 ;i <3 ;i++){
		
		buf.append('<div class="panel panel-default margin-bottom-sm"> ');
		buf.append('   <div class="panel-heading" role="tab" id="headingThree"> ');
		buf.append('    <div class="panel-title"> ');
		buf.append('     <span class="collapsed glyphicon glyphicon-triangle-right  class-list" role="button" data-toggle="collapse" data-parent="#accordion" href="#class-list-'+i+'" aria-expanded="false"> 计算机'+(i+1)+'班2015级 </span>');
		buf.append('     <div class="div-right-div div-check"> ');
		buf.append('      <span class="div-check-span checked-off-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
		buf.append('     </div> ');
		buf.append('    </div> ');
		buf.append('   </div> ');
		buf.append('   <div id="class-list-'+i+'" class="panel-collapse collapse" role="tabpanel"> ');
		buf.append('    <div class="panel-body"> ');
		buf.append('     <ul class="ul-row padding-no"> ');
		
		for(var j=0;j<4;j++){
			buf.append('      <li class="padding-md"> <img src="../../resource/img/test/student_03.png" alt="..." /> ');
			buf.append('       <div class="div-center-p div-clear">  梅美   </div>');
			buf.append('	   </li> ');
		}
		
		buf.append('     </ul> ');
		buf.append('    </div> ');
		buf.append('   </div> ');
		buf.append('</div>');
	}
	buf.append('<div class="container-fluid confirm-div">');
	buf.append('	<div class="row popup-btn-div">  <span class="btn btn-abj-primary btn-sub"> 确定</span> <span class="btn btn-abj-default btn-cancel"> 取消</span></div>');
	buf.append('</div>');
	
	var obj = {title:data.title,body:buf.toString(),width:data.width};
	HtmlUntilBase.popup4Page2(obj);
	
	var $this = $("#prop-page-modal2");
	
	$this.find("span.div-check-span").on("click",function(){
		$(this).toggleClass("checked-in-row");
		var $panal  = $(this).closest("div.panel");
		var ischeck = $(this).hasClass("checked-in-row");
		if(ischeck){
			$panal.find("ul.ul-row li").addClass("checked-in");
		}else{
			$panal.find("ul.ul-row li").removeClass("checked-in");
		}
		
	});
	$this.find("span.class-list").on("click",function(){
		$this=$(this);
		if($this.hasClass("glyphicon-triangle-right")){
			$this.removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom")
		}else{
			$this.removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right")
		}

	});
	$this.find("ul.ul-row li").on("click",function(){
		$(this).toggleClass("checked-in");
		var $panal  = $(this).closest("div.panel");
		var hasAll = true;
		
		$this.each(function(){
			if(!$(this).hasClass("checked-in")) hasAll = false;
		});
		
		if(!hasAll) $panal.find("span.div-check-span").removeClass("checked-in-row") ;
	});
	
	$this.find("span.btn-sub").on("click",function(){
		
	 	 //获取所有选中对象	{class:001班级|002班级|003班级,stu:001学号|002学号} 
	 	 success;
	});
	
};

HtmlUntilBase.popup4StudentScore= function(data,success){
	var buf   = new StringBuffer();
	
	buf.append('<div style="padding: 6px 0px 2px 0px;">');
	buf.append('	<span class="div-left-div font-size-21 score-all">全选</span>');
	buf.append('	<div class="input-group " style="width: 140px;padding-left: 10px;">');
	buf.append('		<span class="input-group-addon reduce-score"><i class=" glyphicon glyphicon-minus"></i> </span>');
	buf.append('		<input type="text" class="form-control"  value="1"  id="input-score">');
	buf.append('		<span class="input-group-addon add-score"><i class=" glyphicon glyphicon-plus"></i></span>');
	buf.append('	</div>');
	buf.append('</div>');
	buf.append('<ul class="ul-row padding-no">');
	
	for(var i =0 ;i<10 ;i++){
		buf.append('	<li class="padding-md"> <img src="../../resource/img/test/student_03.png" alt="..." />');
		buf.append('		<div class="div-center-p div-clear"> 张三 </div>');
		buf.append('        <div class="div-score"></div>');
		buf.append('	</li>');
	}
	
	buf.append('</ul>');
	buf.append('<div class="clear"></div>');
	buf.append('<div class="container-fluid confirm-div">');
	buf.append('	<div class="row popup-btn-div">  <span class="btn btn-abj-primary btn-sub"> 确定</span> <span class="btn btn-abj-default btn-cancel"> 取消</span></div>');
	buf.append('</div>');
	
	var obj = {title:data.title,body:buf.toString(),width:data.width};
	HtmlUntilBase.popup4Page2(obj);
	
	var $this = $("#prop-page-modal2");
	var $input = $("#input-score");
	$this.find("span.add-score").on("click",function(){
		$input.val(parseInt($input.val())+1);
	});
	
	$this.find("span.reduce-score").on("click",function(){
		$input.val(parseInt($input.val())-1);
	});
	
	$this.find("ul.ul-row li").on("click",function(){
		$(this).toggleClass("checked-in");
		$(this).find("div.div-score").html('');
		
		if($(this).hasClass("checked-in")) $(this).find("div.div-score").html('<span class="check-score bg-color-green pop-score">'+$input.val()+'.0</span>');
	});
	
	$this.find("span.score-all").on("click",function(){
		$this.find("ul.ul-row li").each(function(){
			$(this).removeClass("checked-in").trigger("click");
		});
	});
	//返回传出学生  格式需要调整
};

/*****
 * 主页面左侧菜单
 * *******/

HtmlUntilBase.menuItem = function(id,menuJson,list){
	var $this = $("#"+id);
	var buf   = new StringBuffer();

	for(var i =0 ;i<menuJson.length;i++){
		
		var obj = menuJson[i];
		var hasSon = (obj.slist.length > 0);
		buf.append('<div class="panel panel-default">                                                                                          ');
		buf.append('	<div class="panel-heading  " data-toggle="collapse"  href="#left-nav-'+obj.ename+'"  ename="'+obj.ename+'">   ');
		buf.append('		<span class="accordion-toggle">                                                                                    ');
		buf.append('    		<i class="'+obj.icon+'"></i>                                                                                 ');
		buf.append('    		'+obj.title+'                                                                                                       ');
		
		if(hasSon) buf.append('    		<i class="div-right-div  icon-angle-right   "></i>                                                                 ');
		
		buf.append('    	</span>                                                                                                            ');
		buf.append('	</div>   ');
		
		if(hasSon){
			buf.append('	<div id="left-nav-'+obj.ename+'" class="panel-collapse collapse">                                                                 ');
			buf.append('		<div class="panel-body padding-no">                                                                                ');
			buf.append('			<ul class="list-group">                                                                                        ');
			for(var j =0 ;j< obj.slist.length; j++){
				buf.append('			<li class="list-group-item list-son-menu"><span>'+obj.slist[j].title+'</span></li>                                                           ');
		 
			}
			buf.append('			</ul>                                                                                                          ');
			buf.append('		</div>                                                                                                             ');
			buf.append('	</div>                                                                                                                 ');
		}
		buf.append('</div>                                                                                                                     ');
	}
	$this.html(buf.toString());
	
	
	$this.find("div.panel-heading").on("click",function(){
			$this.find("div.panel-heading").removeClass("p-active");
			$this.find("div.collapse.in").removeClass("in");
			$this.find("i.icon-angle-down").removeClass("icon-angle-down");
			$(this).addClass("p-active");
			$(this).find("i.icon-angle-right").toggleClass("icon-angle-down");
			
			var eid = $(this).attr("ename");
			//触发函数
			for(var i =0 ; i<list.length ;i++){
				var obj = list[i];
				if(obj.id == eid) BaseUntil.pageInit(obj.obj);
			}
	});
	
	$this.find("div.panel-heading :first").trigger("click");
	
	$this.find("li.list-son-menu").on("click",function(){
		$this.find("li.s-active").removeClass("s-active");
		$(this).addClass("s-active")
	});
	
};


HtmlUntilBase.mainSearch = function(id){
	var buf = new StringBuffer();
	
	var $this = $("#"+id);
	buf.append(' <div class="cou-main-search">                                                                                                                '  );
	buf.append('   <p class="cou-main-search-title"> 搜索&nbsp;&nbsp;<span class="font-color-orange">张东东</span>&nbsp;&nbsp;相关学生</p>                                              '  );
	buf.append('   <div class="container width-full">                                                                                                         '  );
	buf.append('    <div class="row padding-md" stype="stu">                                                                                                              '  );
	buf.append('     <div class="col-xs-2 padding-no">                                                                                                        '  );
	buf.append('      <img src="../../resource/img/test/student_03.png" />                                                                                    '  );
	buf.append('     </div>                                                                                                                                   '  );
	buf.append('     <div class="col-xs-10 cou-main-search-item cou-main-search-item">                                                                        '  );
	buf.append('      <p><span class="font-color-orange">张东东</span><span class="font-size-14 font-color-gray">(6112017)</span></p>                         '  );
	buf.append('      <p class="font-size-12 font-color-gray">计算机软件一班</p>                                                                              '  );
	buf.append('     </div>                                                                                                                                   '  );
	buf.append('    </div>                                                                                                                                    '  );
	buf.append('   </div>                                                                                                                                     '  );
	buf.append('   <p class="cou-main-search4teacher2header cou-main-search-title"> 搜索&nbsp;&nbsp;<span class="font-color-orange">张东东</span>&nbsp;&nbsp;相关老师</p>       '  );
	buf.append('   <div class="container width-full">                                                                                                         '  );
	buf.append('    <div class="row padding-md" type="teacher">                                                                                                              '  );
	buf.append('     <div class="col-xs-2 padding-no">                                                                                                        '  );
	buf.append('      <img src="../../resource/img/test/student_03.png" style="height: 44px;" />                                                              '  );
	buf.append('     </div>                                                                                                                                   '  );
	buf.append('     <div class="col-xs-10 cou-main-search-item">                                                                                             '  );
	buf.append('      <p><span class="font-color-orange">张东东</span><span class="font-size-14 font-color-gray">(辅导员)</span></p>                         '  );
	buf.append('      <p class="font-size-12 font-color-gray">计算机软件一班</p>                                                                              '  );
	buf.append('     </div>                                                                                                                                   '  );
	buf.append('    </div>                                                                                                                                    '  );
	buf.append('   </div>                                                                                                                                     '  );
	buf.append('  </div> 																																		');
	
	$this.html(buf.toString())
};

/* 
 *弹出教师信息 
 * */
HtmlUntilBase.popup4selfInfo = function(data){
	var buf = new StringBuffer();
	
	buf.append('	<div id="cou-self-affairs-header" class="cou-self-affairs-header">                                                                                                                                                                                                                                              ');
	buf.append('           <div class="cou-self-affairs-header-photo"><img src="../../resource/img/test/student_03.png"></div>                                                                                                                                                                                                         ');
	buf.append('           <div class="cou-self-affairs-header-detail">                                                                                                                                                                                                                                                             ');
	buf.append('               <p><span>李斌斌</span><span>工号:100120</span><span>所在院系:计科系</span></p>                                                                                                                                                                                                                       ');
	buf.append('               <p>个人签名:视觉传达艺术设计视觉传达艺术设计视觉传达艺术设计视觉传达艺术设计视觉传达艺术设计</p>                                                                                                                                                                                                     ');
	buf.append('           </div>                                                                                                                                                                                                                                                                                                   ');
	buf.append('       </div>                                                                                                                                                                                                                                                                                                       ');
	buf.append('                                                                                                                                                                                                                                                                                                                    ');
	buf.append('       <div id="cou-self-affairs-tab-info" class="cou-self-affairs-tab-info">                                                                                                                                                                                                                                       ');
	buf.append('           <div id="cou-self-affairs-tab-info-header"><ul class="nav nav-tabs nav-tabs-son">	<li role="presentation" value="self" init="undefined" class="active"> <a href="#">个人信息</a></li>	<li role="presentation" value="teacher" init="undefined" class=""> <a href="#">教工信息</a></li></ul></div>     ');
	buf.append('                                                                                                                                                                                                                                                                                                                    ');
	buf.append('           <div id="cou-self-affairs-tab-info-tab-self" class="item-tab-son item-tab-son-self cou-self-affairs-tab-item" style="display: block;">                                                                                                                                                                   ');
	buf.append('               <div class="cou-self-affairs-tab-info-content">                                                                                                                                                                                                                                                      ');
	buf.append('                   <p>性别:男</p>                                                                                                                                                                                                                                                                                   ');
	buf.append('                   <p>出生年月:1995年5月25日</p>                                                                                                                                                                                                                                                                    ');
	buf.append('                   <p>政治面貌:预备党员</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>家庭住址:四川成都</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>邮箱:12345@qq.com</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>微信:12345</p>                                                                                                                                                                                                                                                                                ');
	buf.append('               </div>                                                                                                                                                                                                                                                                                               ');
	buf.append('               <div class="cou-self-affairs-tab-info-content">                                                                                                                                                                                                                                                      ');
	buf.append('                   <p>民族:汉族</p>                                                                                                                                                                                                                                                                                 ');
	buf.append('                   <p>身份证号:510123467889</p>                                                                                                                                                                                                                                                                     ');
	buf.append('                   <p>手机号:1331234567</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>故乡:达州</p>                                                                                                                                                                                                                                                                                 ');
	buf.append('                   <p>QQ号码:12345</p>                                                                                                                                                                                                                                                                              ');
	buf.append('                   <p>兴趣爱好:听歌</p>                                                                                                                                                                                                                                                                             ');
	buf.append('               </div>                                                                                                                                                                                                                                                                                               ');
	buf.append('           </div>                                                                                                                                                                                                                                                                                                   ');
	buf.append('           <div id="cou-self-affairs-tab-info-tab-teacher" class="item-tab-son item-tab-son-teacher cou-self-affairs-tab-item" style="display: none;">                                                                                                                                                              ');
	buf.append('               <div class="cou-self-affairs-tab-info-content">                                                                                                                                                                                                                                                      ');
	buf.append('                   <p>工龄:8年</p>                                                                                                                                                                                                                                                                                  ');
	buf.append('                   <p>学历:研究生</p>                                                                                                                                                                                                                                                                               ');
	buf.append('                   <p>毕业院校:四川大学</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>办公电话:028-88888888</p>                                                                                                                                                                                                                                                                     ');
	buf.append('                   <p>办公地点:四川大学</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>主讲课程:软件开发</p>                                                                                                                                                                                                                                                                         ');
	buf.append('               </div>                                                                                                                                                                                                                                                                                               ');
	buf.append('               <div class="cou-self-affairs-tab-info-content">                                                                                                                                                                                                                                                      ');
	buf.append('                   <p>职称:副教授</p>                                                                                                                                                                                                                                                                               ');
	buf.append('                   <p>学位:博士</p>                                                                                                                                                                                                                                                                                 ');
	buf.append('                   <p>所学专业:软件工程</p>                                                                                                                                                                                                                                                                         ');
	buf.append('                   <p>故乡:达州</p>                                                                                                                                                                                                                                                                                 ');
	buf.append('                   <p>科研方向:大数据</p>                                                                                                                                                                                                                                                                           ');
	buf.append('                   <p></p>                                                                                                                                                                                                                                                                                          ');
	buf.append('               </div>                                                                                                                                                                                                                                                                                               ');
	buf.append('           </div>                                                                                                                                                                                                                                                                                                   ');
	buf.append('   </div>																																																																											');
	
	var obj = {title:data.title,body:buf.toString(),width:data.width};
	HtmlUntilBase.popup4Page(obj);
	
	
	 pageInfo.init = function() {
	 var pageObj = new Object;//

	 pageObj.init4self=function(){

	 };
	 pageObj.init4teacher=function(){

	 };
	 pageObj.init4pub = function(){

		 var headNav    =  [{name:"个人信息",value:"self"},{name:"教工信息",value:"teacher"}];
		 HtmlUntilBase.plug4HaderNavTab("cou-self-affairs-tab-info-header",headNav,pageObj);
	 };

	 pageObj.init4pub();

	 };
	BaseUntil.pageInit(pageInfo);
	
};

HtmlUntilBase.popup4set = function(data){
	
	var buf = new StringBuffer();
	
	buf.append('<div class="item-tab-prop item-tab-prop-self"   id="item-tab-prop-self"> </div>');
	buf.append('<div class="item-tab-prop item-tab-prop-pwd" 	id="item-tab-prop-pwd"> </div>');
	
	var obj = {title:[{name:"个人资料",value:"self"},{name:"修改密码",value:"pwd"}],body:buf.toString(),width:"541px"};
	 
	var callbackobj = {};
	 
	callbackobj.init4prop2self = function(){
		$("#item-tab-prop-self").html(HtmlUntilBase.popup4setSelf(""));
		
		 var pageInfo ={};
		 var id4info 	= "cou-prop-set-self-info";
	  	 var id4teacher = "cou-prop-set-self-teacher";
	  
		 pageInfo.init = function() {
			 var pageObj = new Object;//
		
			 pageObj.init4info=function(){
			 	var $this = $("#"+id4info);
			 	$this.html(HtmlUntilBase.popup4setSelf4self(""));
				
			 };
			 pageObj.init4teacher=function(){
			 	var $this = $("#"+id4teacher);
			 	$this.html(HtmlUntilBase.popup4setSelf4Teacher(""));
		
			 };
			 pageObj.init4pub = function(){
		
				 var headNav    =  [{name:"个人信息",value:"info"},{name:"教工信息",value:"teacher"}];
				 HtmlUntilBase.plug4HaderNav("cou-prop-set-self-header",headNav,pageObj,"prop");
			 };
		
			 pageObj.init4pub();
		
		 };
		 
		BaseUntil.pageInit(pageInfo);
	};
	callbackobj.init4prop2pwd = function(){
	 	$("#item-tab-prop-pwd").html(HtmlUntilBase.popup4setPwd(""));
	};
	 
	 
	HtmlUntilBase.popup4PageList(obj,callbackobj);
	
};


//个人设置布局
HtmlUntilBase.popup4setSelf =  function(data){
	
	var buf = new StringBuffer();
	buf.append('<div id="cou-prop-set-self">                                                     ');
	buf.append('	<div class="header" id="cou-prop-set-self-header">   </div>                     ');
	buf.append('	<div id="cou-prop-set-self-info" class="item-tab item-tab-info"></div>          ');
	buf.append('	<div id="cou-prop-set-self-teacher" class="item-tab item-tab-teacher"></div>    ');
	buf.append('</div>																			');				
		
	return buf.toString();	
};

//个人设置个人信息
HtmlUntilBase.popup4setSelf4self =  function(data){
	
	var buf = new StringBuffer();
	
	buf.append('<div class="container width-full border-bottom ">                                                                               ');
	buf.append('   <div class="row div-top-sm form-popup-sm" "="">                                                                              ');
	buf.append('    <div class="col-xs-2" style="margin-top: 7px;">                                                                             ');
	buf.append('     <p class="div-right-div"> 头&nbsp;&nbsp;像:</p>                                                                            ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-10">                                                                                                     ');
	buf.append('     <img src="../../resource/img/test/student_03.png" style="height: 48px;" />                                                 ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-6 row">                                                                                                  ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">工号:</p>                                                                                        ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8 ">                                                                                                    ');
	buf.append('      <input class="form-control" type="text" value="10010" />                                                                  ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                                      ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">姓名 :</p>                                                                                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8">                                                                                                     ');
	buf.append('      <input class="form-control" type="text" value="李冬冬" />                                                                 ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-6 row">                                                                                                  ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">性别:</p>                                                                                        ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8 ">                                                                                                    ');
	buf.append('      <select class="form-control"> <option>男</option> <option>女</option> </select>                                           ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                                      ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">生日 :</p>                                                                                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8">                                                                                                     ');
	buf.append('      <input class="form-control" type="text" value="1978-2-1" />                                                               ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-6 row">                                                                                                  ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">政治面貌:</p>                                                                                    ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8 ">                                                                                                    ');
	buf.append('      <select class="form-control"> <option>党员</option> </select>                                                             ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                                      ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">身份证号 :</p>                                                                                   ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8">                                                                                                     ');
	buf.append('      <input class="form-control" type="text" value="空缺" />                                                                   ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-6 row">                                                                                                  ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">手机号码:</p>                                                                                    ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8 ">                                                                                                    ');
	buf.append('      <input class="form-control" type="text" value="13487676542" />                                                            ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                                      ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">家庭地址 :</p>                                                                                   ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8">                                                                                                     ');
	buf.append('      <input class="form-control" type="text" value="四川达州秘密" />                                                           ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-6 row">                                                                                                  ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">故乡:</p>                                                                                        ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8 ">                                                                                                    ');
	buf.append('      <input class="form-control" type="text" value="达州" />                                                                   ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                                      ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">邮箱 :</p>                                                                                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8">                                                                                                     ');
	buf.append('      <input class="form-control" type="text" value="376676712@qq.com" />                                                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-6 row">                                                                                                  ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">QQ:</p>                                                                                          ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8 ">                                                                                                    ');
	buf.append('      <input class="form-control" type="text" value="376676712" />                                                              ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                                      ');
	buf.append('     <div class="col-xs-4 padding-no">                                                                                          ');
	buf.append('      <p class="div-right-div">微信 :</p>                                                                                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-8">                                                                                                     ');
	buf.append('      <input class="form-control" type="text" value="asdas" />                                                                  ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-2" style="padding-right:8px">                                                                                                      ');
	buf.append('     <p class="div-right-div">兴趣爱好:</p>                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-10">                                                                                                     ');
	buf.append('     <input class="form-control" type="text" value="10010" style="margin-left: -12px; width: 374px;" />                         ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm">                                                                                              ');
	buf.append('    <div class="col-xs-2" style="padding-right:8px">                                                                                                      ');
	buf.append('     <p class="div-right-div">个性签名:</p>                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-10">                                                                                                     ');
	buf.append('     <textarea class="form-control" style="margin-left: -12px; width: 374px;"> </textarea>                                      ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row form-popup-sm popup-page-btn-div">                                                                           ');
	buf.append('    <div class="col-xs-2 ">                                                                                                     ');
	buf.append('      &nbsp;                                                                                                                    ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-8 row">                                                                                                  ');
	buf.append('     <div class="col-xs-6">                                                                                                     ');
	buf.append('      <span class="btn   center-block btn-abj-primary " style="width:116px;    margin-top: -9px;">保存</span>                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('     <div class="col-xs-6">                                                                                                     ');
	buf.append('      <span class="btn   center-block btn-abj-default " style="width:116px;    margin-top: -9px;">取消</span>                       ');
	buf.append('     </div>                                                                                                                     ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-2 ">                                                                                                     ');
	buf.append('      &nbsp;                                                                                                                    ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('  </div>																														');									
		
		
	return buf.toString();
	
};

//个人设置职工信息
HtmlUntilBase.popup4setSelf4Teacher =  function(data){
	
	var buf = new StringBuffer();
	
	
	buf.append('<div class="container width-full border-bottom ">                                                                              ' );
	buf.append('  <div class="row form-popup-sm">                                                                                              ' );
	buf.append('   <div class="col-xs-6 row">                                                                                                  ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">工龄:</p>                                                                                        ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8 ">                                                                                                    ' );
	buf.append('     <input class="form-control" type="text" value="8">                                                                        ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-6">                                                                                                      ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">职称 :</p>                                                                                       ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8">                                                                                                     ' );
	buf.append('     <input class="form-control" type="text" value="教授">                                                                     ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div class="row form-popup-sm">                                                                                              ' );
	buf.append('   <div class="col-xs-6 row">                                                                                                  ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">学历:</p>                                                                                        ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8 ">                                                                                                    ' );
	buf.append('     <input class="form-control" type="text" value="研究生">                                                                   ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-6">                                                                                                      ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">学位 :</p>                                                                                       ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8">                                                                                                     ' );
	buf.append('     <input class="form-control" type="text" value="博士">                                                                     ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div class="row form-popup-sm">                                                                                              ' );
	buf.append('   <div class="col-xs-6 row">                                                                                                  ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">毕业学校:</p>                                                                                    ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8 ">                                                                                                    ' );
	buf.append('     <input class="form-control" type="text" value="四川大学">                                                                 ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-6">                                                                                                      ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">所属专业 :</p>                                                                                   ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8">                                                                                                     ' );
	buf.append('     <input class="form-control" type="text" value="软件工程">                                                                 ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div class="row form-popup-sm">                                                                                              ' );
	buf.append('   <div class="col-xs-6 row">                                                                                                  ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">办公电话:</p>                                                                                    ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8 ">                                                                                                    ' );
	buf.append('     <input class="form-control" type="text" value="13487676542">                                                              ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-6">                                                                                                      ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">办公地点 :</p>                                                                                   ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8">                                                                                                     ' );
	buf.append('     <input class="form-control" type="text" value="四川达州秘密">                                                             ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div class="row form-popup-sm">                                                                                              ' );
	buf.append('   <div class="col-xs-6 row">                                                                                                  ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">主讲课程:</p>                                                                                    ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8 ">                                                                                                    ' );
	buf.append('     <input class="form-control" type="text" value="软件开发,互联网">                                                          ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-6">                                                                                                      ' );
	buf.append('    <div class="col-xs-4 padding-no">                                                                                          ' );
	buf.append('     <p class="div-right-div">科研方向 :</p>                                                                                   ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-8">                                                                                                     ' );
	buf.append('     <input class="form-control" type="text" value="大数据，移动互联网">                                                       ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div class="row form-popup-sm popup-page-btn-div">                                                                           ' );
	buf.append('   <div class="col-xs-2 ">                                                                                                     ' );
	buf.append('    &nbsp;                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-8 row">                                                                                                  ' );
	buf.append('    <div class="col-xs-6">                                                                                                     ' );
	buf.append('     <span class="btn   center-block btn-abj-primary " style="width:116px;    margin-top: -9px;">保存</span>                       ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('    <div class="col-xs-6">                                                                                                     ' );
	buf.append('     <span class="btn   center-block btn-abj-default " style="width:116px;    margin-top: -9px;">取消</span>                       ' );
	buf.append('    </div>                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('   <div class="col-xs-2 ">                                                                                                     ' );
	buf.append('    &nbsp;                                                                                                                     ' );
	buf.append('   </div>                                                                                                                      ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append(' </div>																															');
		 
	 
	return buf.toString();
};

HtmlUntilBase.popup4setPwd = function(data){	
	var buf = new StringBuffer();
	
	buf.append(' <div id="cou-prop-set-pwd">                                                                                        ');
	buf.append('    <div class="container width-full">                                                                              ');
	buf.append('     <div class="row form-popup-sm">                                                                                ');
	buf.append('      <div class="col-xs-2">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-8 row">                                                                                    ');
	buf.append('       <div class="col-xs-5">                                                                                       ');
	buf.append('        <p class="div-right-div">旧密码：</p>                                                                       ');
	buf.append('       </div>                                                                                                       ');
	buf.append('       <div class="col-xs-7">                                                                                       ');
	buf.append('        <input class="form-control" type="text" />                                                                  ');
	buf.append('       </div>                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-2">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('     </div>                                                                                                         ');
	buf.append('     <div class="row form-popup-sm">                                                                                ');
	buf.append('      <div class="col-xs-2">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-8 row">                                                                                    ');
	buf.append('       <div class="col-xs-5">                                                                                       ');
	buf.append('        <p class="div-right-div">输入新密码：</p>                                                                   ');
	buf.append('       </div>                                                                                                       ');
	buf.append('       <div class="col-xs-7">                                                                                       ');
	buf.append('        <input class="form-control" type="text" />                                                                  ');
	buf.append('       </div>                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-2">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('     </div>                                                                                                         ');
	buf.append('     <div class="row form-popup-sm">                                                                                ');
	buf.append('      <div class="col-xs-2">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-8 row">                                                                                    ');
	buf.append('       <div class="col-xs-5">                                                                                       ');
	buf.append('        <p class="div-right-div">确认新密码：</p>                                                                   ');
	buf.append('       </div>                                                                                                       ');
	buf.append('       <div class="col-xs-7">                                                                                       ');
	buf.append('        <input class="form-control" type="text" />                                                                  ');
	buf.append('       </div>                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-2">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('      </div>                                                                                                        ');
	buf.append('     </div>                                                                                                         ');
	buf.append('    </div>                                                                                                          ');
	buf.append('    <div class="row form-popup-sm popup-page-btn-div">                                                              ');
	buf.append('     <div class="col-xs-3 ">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('     </div>                                                                                                         ');
	buf.append('     <div class="col-xs-8 row">                                                                                     ');
	buf.append('      <div class="col-xs-6">                                                                                        ');
	buf.append('       <span class="btn   center-block btn-abj-primary " style="width:116px;    margin-top: -9px;">保存</span>          ');
	buf.append('      </div>                                                                                                        ');
	buf.append('      <div class="col-xs-6">                                                                                        ');
	buf.append('       <span class="btn   center-block btn-abj-default " style="width:116px;    margin-top: -9px;">取消</span>          ');
	buf.append('      </div>                                                                                                        ');
	buf.append('     </div>                                                                                                         ');
	buf.append('     <div class="col-xs-1 ">                                                                                        ');
	buf.append('       &nbsp;                                                                                                       ');
	buf.append('     </div>                                                                                                         ');
	buf.append('    </div>                                                                                                          ');
	buf.append('   </div> 																											');								
		
	return buf.toString();
}

