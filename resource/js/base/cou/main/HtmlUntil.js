
var id4main = "main-content";//内容展示层

/*******
 * 登陆成功后 
 * 初始化页面
 * ********** */

HtmlUntil.init4main = function(data){
	var buf = new StringBuffer();
	buf.append('<div class="container-fluid div-top-sm" id="main-page">                                                                                                                                                     ');
	buf.append('	<div class="row header-one" style="border-bottom: 14px solid white;">                                                                                                                    ');
	buf.append('		<div class="col-xs-4">                                                                                                                                                               ');
	buf.append('			<div>                                                                                                                                                                            ');
	buf.append('				<img class="div-left-div" src="../../resource/img/header/logo.png" style="margin: -4px 0 0 0;">                                                                           ');
	buf.append('			<div style="padding-left: 60px;    margin-top: 4px; vertical-align: middle;">                                                                                                    ');
	buf.append('				<div>                                                                                                                                                                        ');
	buf.append('					<h3>爱班级科技大学</h3></div>                                                                                                                                            ');
	buf.append('				<p>Catch Cloud University Of Wisdom</p>                                                                                                                                                ');
	buf.append('			</div>                                                                                                                                                                           ');
	buf.append('			</div>                                                                                                                                                                           ');
	buf.append('		</div>                                                                                                                                                                               ');
	buf.append('		<div class="col-xs-4">                                                                                                                                                               ');
	buf.append('			<input type="text" id="cou-main-search-input" class="form-control" style="border-radius: 0;  " placeholder="班级/老师/学生/通知/任务" />                                                      ');
	
	buf.append('			<div id="cou-main-search"> </div>      ');
	
	
	buf.append('		</div>                                                                                                                                                                               ');
	buf.append('		<div class="col-xs-4">                                                                                                                                                               ');
	buf.append('			<div style="font-size: 15px;margin-top: 8px;    margin-left: 25%;">                                                                                                                                   ');
	buf.append('				<div class="div-left-div" style="position: relative;margin-right: 33px;">                                                                                                                  ');
	buf.append('				 <div style="border: none;background-color: white;" class="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">       ' );
	buf.append('				   <span><i class="icon-plus-sign"></i></span>                                                                                                                         ' );
	buf.append('				  </div>                                                                                                                                                               ' );
	buf.append('				  <div class="dropdown-menu arrow-up padding-no" aria-labelledby="dropdownMenu2">                                                                                      ' );
	buf.append('				   <div class="list-group div-list-menu">                                                                                                                              ' );
	buf.append('				    <a href="#" class="list-group-item"><span class="cou-main-handle-notice dropdown-menu-span"><i class="icon-envelope-alt"></i> 发通知&nbsp;&nbsp;</span></a>                           ' );
	buf.append('				    <a href="#" class="list-group-item"><span class="cou-main-handle-talk dropdown-menu-span"><i class="icon-heart"></i> 学生谈心</span></a>                                              ' );
	buf.append('				    <a href="#" class="list-group-item"><span class="cou-main-handle-counduct dropdown-menu-span"><i class="icon-flag"></i> 创建操行</span></a>                                           ' );
	buf.append('				    <a href="#" class="list-group-item"><span class="cou-main-handle-attendance dropdown-menu-span"><i class="glyphicon glyphicon-calendar"></i> 补考勤&nbsp;&nbsp;</span></a>            ' );
	buf.append('				   </div>                                                                                                                                                              ' );
	buf.append('				  </div> 																																								');								
	buf.append('				</div>                                                                                                                                                                       ');
	buf.append('				<div class="div-left-div" style="    margin-right: 33px;">                                                                                                                  ');
	buf.append('						<span><i class="icon-bell-alt"></i></span>                                                                                                                           ');
 	buf.append('				</div>                                                                                                                                                                       ');
	buf.append('				<div class="div-left-div" style="">                                                                                                                                          ');
	buf.append('					<div class="dropdown" style="margin-right: 158px;border: none;">                                                                                                         ');
	buf.append('						<div style="border: none;background-color: white;" class="dropdown-toggle" id="cou-main-self" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">      ');
	buf.append('							<span> 李冬冬                                                                                                                                                    ');
	buf.append('   		 					<i class="caret"></i></span>                                                                                                                                     ');
	buf.append('						</div>                                                                                                                                                               ');
	buf.append('						<div class="dropdown-menu arrow-up padding-no" aria-labelledby="cou-main-self">                                                                                      ');
	buf.append('							<div class="list-group div-list-menu">                                                                                                                           ');
	buf.append('								<a href="#" class="list-group-item"><span class="cou-main-self-account dropdown-menu-span"><i class=" icon-envelope-alt"></i> 账户设置</span></a>                                                             ');
	buf.append('								<a href="#" class="list-group-item"><span class="dropdown-menu-span"><i class="icon-user"></i> 安全退出</span></a>                                                                      ');
	buf.append('							</div>                                                                                                                                                           ');
	buf.append('						</div>                                                                                                                                                               ');
	buf.append('					</div>                                                                                                                                                                   ');
	buf.append('				</div>                                                                                                                                                                       ');
	buf.append('			</div>                                                                                                                                                                           ');
	buf.append('		</div>                                                                                                                                                                               ');
	buf.append('	</div>                                                                                                                                                                                    ');
	buf.append('	<div class="row bg-header font-color-white">                                                                                                                                             ');
	buf.append('		<ul class="ul-row header-two-ul" >                                                                                                                                                    ');
	buf.append('			<li class="col-xs-2 "> &nbsp;</li>                                                                                                                                                ');
	buf.append('			<li class="col-xs-2 main-tab" mid="now"> <span>今日</span></li>                                                                                                                                    ');
	buf.append('			<li class="col-xs-2 main-tab" mid="tas"> <span>师生</span></li>                                                                                                                                     ');
	buf.append('			<li class="col-xs-2 main-tab header-active" mid="affairs"> <span>事务</span></li>                                                                                                                       ');
	buf.append('			<li class="col-xs-2 main-tab" mid="manager"> <span>管理</span></li>                                                                                                                                     ');
	buf.append('			<li class="col-xs-2"> &nbsp;</li>                                                                                                                                                ');
	buf.append('		</ul>                                                                                                                                                                                ');
	buf.append('	</div>                                                                                                                                                                                   ');
	buf.append('</div>                                                                                                                                                                                       ');
	buf.append('<div class="container-fluid   " style="border-top: 28px solid rgba(237,240,240,1);background: rgba(237,240,240,1) ">                                                                                                        ');
	buf.append('	<div class="row bg-back" id="main-content">                                                                                                                                                                ');
	buf.append(' 	 </div>                                                                                                                                                                                  ');
	buf.append('<div style="color:#787878;height:46px;line-height:46px;text-align: center;background: rgba(237,240,240,1)">技术支持:成都开启云科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前数据统计时间:2016年5月8日&nbsp;15:30</div>');
	buf.append('	</div>                                                                                                                                                                                   ');
	buf.append('</div>		                                                                                                                                                                                 ');																																																																														

	$("body").html(buf.toString());
	
};


/*初始化 事务 主页 */

HtmlUntil.init4Affairs = function (){
	var $this = $("#"+id4main);
	var buf = new StringBuffer();
	
	buf.append('		<div class="col-xs-2 left-nav ">                                                                                                                                                     ');
	buf.append('			<div  class="left-nav-item bg-color-gray-white" style="min-height: 555px;width: 200px;    margin-right: 1%;float: right;">                                                       ');
	buf.append('				<div class="panel-group" id="main-left-affairs">                                                                                                                              ');
	buf.append('				</div>                                                                                                                                                                       ');
	buf.append('			</div>                                                                                                                                                                           ');
	buf.append('		</div>                                                                                                                                                                               ');
	buf.append('		<div class="col-xs-10 workspace-center bg-color-gray-white" id="layout-center-workspace" style="width: 82%;">                                                                                      ');
	
	$this.html(buf.toString());
};

/**
 * 初始化事务左侧菜单
 * **/

HtmlUntil.init4Affairs2LeftNav = function(id,list){
	
	var $this = $("#"+id);
	 //{icon:"",title:"考勤明细"},{icon:"",title:"考勤统计"}]
	
	var menuJson = [{icon:"icon-suitcase",title:"班級管理", ename:"cou-work-affairs",     slist:[]},
					{icon:"icon-building",title:"宿舍走访", ename:"dorm",      slist:[]},
					{icon:"icon-heart   ",title:"学生谈心", ename:"cou-talk-affairs",      slist:[]},
					{icon:"icon-file-alt",title:"请销假",   ename:"cou-leave-affairs",     slist:[]},
					{icon:"icon-time    ",title:"考勤",	   ename:"cou-attendance-affairs",slist:[]},
					{icon:"icon-bell-alt",title:"通知",	   ename:"cou-notice-affairs",	  slist:[]},
					{icon:"icon-list-alt",title:"操行",	   ename:"cou-counduct-affairs",   slist:[]}, ];


	HtmlUntilBase.menuItem(id,menuJson,list); 
}



/*初始化 管理 主页 */

HtmlUntil.init4Manager = function (){
	var $this = $("#"+id4main);
	var buf = new StringBuffer();
	
	buf.append('		<div class="col-xs-2 left-nav ">                                                                                                                                                     ');
	buf.append('			<div  class="left-nav-item bg-color-gray-white" style="min-height: 555px;width: 200px;    margin-right: 1%;float: right;">                                                       ');
	buf.append('				<div class="panel-group" id="main-left-manager">                                                                                                                              ');
	buf.append('				</div>                                                                                                                                                                       ');
	buf.append('			</div>                                                                                                                                                                           ');
	buf.append('		</div>                                                                                                                                                                               ');
	buf.append('		<div class="col-xs-10 workspace-center bg-color-gray-white" id="layout-center-workspace" style="width: 82%;">                                                                                      ');
	
	$this.html(buf.toString());
};

/**
 * 初始化管理左侧菜单
 * **/

HtmlUntil.init4Manager2LeftNav = function(id,list){
	
	var $this = $("#"+id);
	 //{icon:"",title:"考勤明细"},{icon:"",title:"考勤统计"}]
	
	var menuJson = [{icon:"icon-group",    title:"班級管理", ename:"cou-class-manager",     slist:[]},
					{icon:"icon-file",     title:"业务参数", ename:"cou-business-manage",      slist:[]},
					{icon:" icon-calendar",title:"课表管理", ename:"cou-course-manager",      slist:[]},
					{icon:"  icon-list",title:"权限管理", ename:"cou-auth-manager",      slist:[]},
			 		];

	HtmlUntilBase.menuItem(id,menuJson,list); 
};


/**
 * 初始化师生主页
 * */
HtmlUntil.init4Tas = function (){
	var $this = $("#"+id4main);
	var buf = new StringBuffer();

	buf.append('		<div class="col-xs-2 left-nav ">                                                                                                                                                     ');
	buf.append('			<div  class="left-nav-item bg-color-gray-white" style="min-height: 555px;width: 200px;    margin-right: 1%;float: right;">                                                       ');
	buf.append('				<div class="panel-group" id="main-left-tas">                                                                                                                              ');
	buf.append('				</div>                                                                                                                                                                       ');
	buf.append('			</div>                                                                                                                                                                           ');
	buf.append('		</div>                                                                                                                                                                               ');
	buf.append('		<div class="col-xs-10 workspace-center bg-color-gray-white" id="layout-center-workspace" style="width: 82%;">                                                                                      ');

	$this.html(buf.toString());
};

/**
 * 初始化师生左侧菜单
 * */
HtmlUntil.init4Tas2LeftNav = function(id,list){

	var $this = $("#"+id);
	//{icon:"",title:"考勤明细"},{icon:"",title:"考勤统计"}]
	
	var menuJson = [{icon:"icon-group",    title:"学生信息统计", ename:"cou-stucount-tas",     slist:[]},
					{icon:"icon-file",     title:"学生整体概况", ename:"cou-general-tas",      slist:[]},
	];
	HtmlUntilBase.menuItem(id,menuJson,list);
};

/*******
 * 初始化当前页面
 * *****************/

HtmlUntil.init4Now = function(data){
	var $this = $("#"+id4main)
	var buf = new StringBuffer();
	
	buf.append('<div class="col-xs-2 left-nav ">                                                                                                ');
	buf.append('  <div class="left-nav-item bg-color-gray-white div-right-div" style="min-height: 555px;min-width: 200px;    margin-right: 1%;"> ');
	buf.append('   <div class="row div-top-sm" style="padding-left: 20px;line-height: 22px; padding-bottom: 20px;">                             ');
	buf.append('    <div class="col-xs-4" style="padding-left:8px">                                                                                                      ');
	buf.append('     <img src="../../resource/img/test/student_03.png" />                                                                       ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('    <div class="col-xs-8 div-top-sm" style="margin-top:8px;">                                                                                           ');
	buf.append('     <b style="font-size:16px;line-height:30px">赵美尔</b>                                                                                                              ');
	buf.append('     <p>学生工作部部长</p>                                                                                                      ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row border-top-1 margin-no height-md">                                                                           ');
	buf.append('    <div class="padding-md">                                                                                                    ');
	buf.append('     <span id="cou-main-now-course"><i class="glyphicon glyphicon-education"></i>  今日课表           </span>                                                         ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');
/*	buf.append('   <div class="row border-top-1 margin-no border-bottom-1" style="height: 190px;">                                              ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div class="row height-md margin-no border-bottom-1">                                                                        ');
	buf.append('    <div class="padding-md">                                                                                                    ');
	buf.append('     <i class="glyphicon glyphicon-calendar"></i> 日程                                                                          ');
	buf.append('    </div>                                                                                                                      ');
	buf.append('   </div>                                                                                                                       ');*/
/*	buf.append('   <div class="row margin-no" id="main-tab-new-time">                                                                                   ');
	buf.append('   </div>                                                                                                                       ');*/
	buf.append('  </div>                                                                                                                        ');
	buf.append(' </div>                                                                                                                         ');
	buf.append(' <div class="col-xs-8 workspace-center bg-color-gray-white" id="layout-center-workspace">                                       ');
	buf.append(' </div>                                                                                                                         ');
	buf.append(' <div class="col-xs-2  " id="main-right-now">                                                                                                       ');
	buf.append('  <div class="left-nav-item bg-color-gray-white div-left-div" style="width: 200px; margin-left: 1%;border:1px solid #ddd">                           ');
	buf.append('   <div class="font-size-18 border-bottom-1">                                                                                   ');
	buf.append('    <p class="padding-md"><span>待办事项</span>(<span class="color-red">22 </span>)</p>                                         ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div>                                                                                                                        ');
	
	//这里如果权限操作需要进行调整
	
	buf.append('    <p class="padding-md main-now-right-item"  ename="cou-todo-now"><span>请销假</span>(<span class="color-red">22 </span>)</p>                                           ');
	buf.append('    <p class="padding-md main-now-right-item"  ename="cou-todo-now"><span>未读通知</span>(<span class="color-red">22 </span>)</p>                                         ');
	buf.append('    <p class="padding-md main-now-right-item"  ename="cou-todo-now"><span>操行认定</span>(<span class="color-red">22 </span>)</p>                                         ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('  </div>                                                                                                                        ');
	buf.append('  <div class="left-nav-item bg-color-gray-white div-top-sm" style="width: 200px;  margin-left: 1%;float: left;border:1px solid #ddd">                ');
	buf.append('   <div class="font-size-18 border-bottom-1">                                                                                   ');
	buf.append('    <p class="padding-md"><span>关注事项</span></p>                                                                             ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('   <div>                                                                                                                        ');
	buf.append('    <p class="padding-md main-now-right-item" ename="cou-attention-now"><span>返校情况</span>(<span class="color-red">22 </span>)</p>                                         ');
	buf.append('    <p class="padding-md main-now-right-item" ename="cou-attention-now"><span>缺勤情况</span>(<span class="color-red">22 </span>)</p>                                         ');
	buf.append('    <p class="padding-md main-now-right-item" ename="cou-attention-now"><span>舍风情况</span>(<span class="color-red">22 </span>)</p>                                   ');
	buf.append('   </div>                                                                                                                       ');
	buf.append('  </div>                                                                                                                        ');
	buf.append(' </div>																															');
	
	$this.html(buf.toString());
	BasePlug.DatePicker4Static("#main-tab-new-time");
};


HtmlUntil.couManagerPwd = function(data){
	
	var buf = new StringBuffer();
	
	buf.append(' <div class="container-fluid bg-color-gray-white" style="margin-right: 13px;" id="cou-manager-prop-pwd">                                  ');
	buf.append('  <div class="row form-popup-md">                                                                               ');
	buf.append('   <div class="col-xs-3  popup-page-p-div text-right ">                                                         ');
	buf.append('     请输入密码                                                                                                 ');
	buf.append('   </div>                                                                                                       ');
	buf.append('   <div class="col-xs-9">                                                                                       ');
	buf.append('    <input class="form-control" placeholder="" />                                                               ');
	buf.append('   </div>                                                                                                       ');
	buf.append('  </div>                                                                                                        ');
	buf.append('  <div class="row form-popup-sm popup-page-btn-div" style="margin-top: 41px;">                                                            ');
	buf.append('   <div class="col-xs-3 ">                                                                                      ');
	buf.append('     &nbsp;                                                                                                     ');
	buf.append('   </div>                                                                                                       ');
	buf.append('   <div class="col-xs-8 row">                                                                                   ');
	buf.append('    <div class="col-xs-6">                                                                                      ');
	buf.append('     <span class="btn   center-block  btn-abj-default " style="width:116px;    margin-top: -9px;">取消</span>   ');
	buf.append('    </div>                                                                                                      ');
	buf.append('    <div class="col-xs-6">                                                                                      ');
	buf.append('     <span class="btn   center-block btn-abj-primary " style="width:116px;    margin-top: -9px;">确定</span>    ');
	buf.append('    </div>                                                                                                      ');
	buf.append('   </div>                                                                                                       ');
	buf.append('   <div class="col-xs-1 ">                                                                                      ');
	buf.append('     &nbsp;                                                                                                     ');
	buf.append('   </div>                                                                                                       ');
	buf.append('  </div>                                                                                                        ');
	buf.append(' </div> 																										');										
	
	return buf.toString();
};
