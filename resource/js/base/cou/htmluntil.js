 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couAttendance4Affairs= function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
         
	buf.append('<div style="min-height: 555px;" id="cou-attendance-affairas">                                                ');
	buf.append('			<div class="header" id="cou-attendance-affairas-header">                                                    ');
	buf.append('			</div>                                                                                                      ');
	buf.append('			<div id="cou-attendance-affairs-tab-detail" class="item-tab item-tab-detail">                               ');
	buf.append('				<div id="cou-attendance-affairas-search-detail"> </div>                                                 ');
	buf.append('				<div class="content">                                                                                   ');
	buf.append('					<table id="table-status"></table>                                                                   ');
	buf.append('				</div>                                                                                                  ');
	buf.append('			</div>                                                                                                      ');
	buf.append('			<div id="cou-attendance-affairs-tab-count" class="item-tab item-tab-count">                                 ');
	buf.append('				<div id="cou-attendance-affairs-tab-count-header"></div>                                                ');
	buf.append('				<div id="cou-attendance-affairs-tab-count-tab-top" 		  class="item-tab-son item-tab-son-top">        ');
	buf.append('					<div id="cou-attendance-affairas-search-count-top"> </div>                                          ');
	buf.append('					<div class="content">                                                                               ');
	buf.append('						<table id="cou-attendance-affairs-tab-count-tab-top-table"></table>                             ');
	buf.append('					</div>                                                                                              ');
	buf.append('				</div>                                                                                                  ');
	buf.append('				<div id="cou-attendance-affairs-tab-count-tab-distribute" class="item-tab-son item-tab-son-distribute"> ');
	buf.append('					<div id="cou-attendance-affairas-search-count-distribute"> </div>                                   ');
	buf.append('					<div class="content">                                                                               ');
	buf.append('						<div id="cou-attendance-affairs-tab-count-tab-char-distribut" ></div>                           ');
	buf.append('					</div>                                                                                              ');
	buf.append('				</div>                                                                                                  ');
	buf.append('				<div id="cou-attendance-affairs-tab-count-tab-compare" class="item-tab-son item-tab-son-compare">       ');
	buf.append('					<div id="cou-attendance-affairas-search-count-compare"> </div>                                      ');
	buf.append('					<div class="content">                                                                               ');
	buf.append('						<div id="cou-attendance-affairs-tab-count-tab-char-compare" ></div>                             ');
	buf.append('					</div>                                                                                              ');
	buf.append('				</div>                                                                                                  ');
	buf.append('				<div id="cou-attendance-affairs-tab-count-tab-trend"      class="item-tab-son item-tab-son-trend">      ');
	buf.append('					<div id="cou-attendance-affairas-search-count-trend"> </div>                                        ');
	buf.append('					<div class="content">                                                                               ');
	buf.append('						<div id="cou-attendance-affairs-tab-count-tab-char-trend" ></div>                               ');
	buf.append('					</div>                                                                                              ');
	buf.append('				</div>                                                                                                  ');
	buf.append('			</div>                                                                                                      ');
	buf.append('</div>																													');
	
	$this.html(buf.toString());
}

 /*****
 * 根据data 拼接list
 * ***/
HtmlUntil.couAttentionNowAttendance= function(data){

	var buf = new StringBuffer();
         
	for(var i =0 ;i<6;i++){
		buf.append('<div class="stu-box stu-box-md">');
		buf.append('    <div class="stu-boxTop">');
		buf.append('        <div class="stu-photo"><img src="../../resource/img/test/student_03.png"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>江彩清(2016级软件3班)</h4>');
		buf.append('            <p>电话号码:1350012345</p>');
		buf.append('            <p>本学期缺勤:<span>5</span>次</p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom" style="padding-right:30px">');
		buf.append('        <p style="float:left;color: #999;margin-right:3px">本周:</p>');
		buf.append('        <p class="recent-absence-bottom-p">早操<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">早自习<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">上课<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">晚自习<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">晚寝<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
}

/* ****
 *修改考勤类型
 * ****/
HtmlUntil.couAttentionUpdate4Affiars = function(data){
	var buf = new StringBuffer();
	buf.append('   <div class="container" style="margin-top:20px">                                                                                          ');
	buf.append('    <div class="row padding-md">                                                                                    ');
	buf.append('      修改缺勤分类:                                                                                                  ');
	buf.append('    </div>                                                                                                          ');
	buf.append('    <div class="row padding-md">                                                                                    ');
	buf.append('     <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="option1" /> 迟到 </label>   ');
	buf.append('     <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="option1" /> 缺勤 </label>   ');
	buf.append('     <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="option1" /> 请假 </label>   ');
	buf.append('     <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="option1" /> 早退 </label>   ');
	buf.append('    </div>                                                                                                          ');
	buf.append('   </div>                                                                                                           ');
	buf.append('   <div class="container-fluid confirm-div">                                                                        ');
	buf.append('    <div class="row popup-btn-div">                                                                                 ');
	buf.append('     <span class="btn btn-abj-primary btn-sub"> 确定</span>                                                              ');
	buf.append('    </div>                                                                                                          ');
	buf.append('   </div> 																											');
	
	var obj ={title:"修改考勤",body:buf.toString(),width:"400px"};
	HtmlUntilBase.popup4Page(obj);
};



 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couAttention4Now= function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="min-height: 534px;" id="cou-attention-now">                       ');
	buf.append('	<div class="header" id="cou-attention-now-header"> </div>                                               ');
	buf.append('	<div class="div-top-sm " id="cou-attention-now-select">                                                 ');
	buf.append('		<select class="form-control div-center-div" style="width: 115px;">                                  ');
	buf.append('			<option>今日</option>                                                                           ');
	buf.append('			<option>本周</option>                                                                           ');
	buf.append('			<option>本月</option>                                                                           ');
	buf.append('			<option>本学期</option>                                                                           ');
	buf.append('		</select>                                                                                           ');
	buf.append('	</div>                                                                                                  ');
	buf.append('	                                                                                                        ');
	buf.append('	<div id="cou-attention-now-tab-school" 	   class="item-tab item-tab-school div-top-sm"> </div>          ');
	buf.append('	<div id="cou-attention-now-tab-attendance" class="item-tab item-tab-attendance div-top-sm"> </div>      ');
	buf.append('	<div id="cou-attention-now-tab-dorm" 	   class="item-tab item-tab-dorm div-top-sm"></div>             ');
	buf.append('	                                                                                                        ');
	buf.append('</div>																										');
	
	$this.html(buf.toString());
};


 /*****
 * 根据data 拼接list
 * ***/
HtmlUntil.couAttentionNowSchool= function(data){

	var buf = new StringBuffer();
	     
         
	for(var i =0 ;i< data.length;i++){
		var obj = data[i];
		
		buf.append('<div class="stu-box stu-box-md" lid="'+obj.id+'">');
		buf.append('    <div class="stu-boxTop stu-boxTop-md" >');
		buf.append('        <div class="stu-photo stu-photo-md"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>');
		buf.append('            <p>手机号码:'+obj.tel+'</p>');
		buf.append('            <p>假期截止:'+obj.edate+' 20:16</p>');
		buf.append('            <p>请假天数:<span class="stu-box-mid-delay-time">'+obj.offday+'</span></p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		buf.append('    <p>最近位置:'+obj.location.ask+'</p>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
}

 /*****
 * 根据data 拼接list
 * ***/
HtmlUntil.couAttentionNowAttendance= function(data){

	var buf = new StringBuffer();
         
	for(var i =0 ;i< data.length;i++){
		var obj = data[i];
		
		buf.append('<div class="stu-box stu-box-md stu-box-no-cursor">');
		buf.append('    <div class="stu-boxTop">');
		buf.append('        <div class="stu-photo"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>');
		buf.append('            <p>电话号码:'+obj.tel+'</p>');
		buf.append('            <p>本学期缺勤:<span>'+parseInt(Math.random()*10)+'</span>次</p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom" style="padding-right:30px">');
		buf.append('        <p style="float:left;color: #999;margin-right:3px">本周:</p>');
		buf.append('        <p class="recent-absence-bottom-p">早操<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">早自习<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">上课<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">晚自习<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('        <p class="recent-absence-bottom-p">晚寝<span class="stu-box-mid-delay-time">1</span></p>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
}






HtmlUntil.init2couAuth4Manager = function(id){
	var $this =$("#"+id);
	var buf = new StringBuffer();
	buf.append('<div id="cou-auth-manager" class="row" style="margin: -1px;">                         ');
	buf.append('		<div id="cou-auth-manager-cname" class="col-xs-2">      ');
	buf.append('			<ul id="cou-auth-manager-class-list">               ');
	buf.append('			</ul>                                               ');
	buf.append('			<p class="add-class-assistant">添加班助</p>         ');
	buf.append('		</div>                                                  ');
	buf.append('		<div id="cou-auth-manager-tab-main" class="col-xs-10">  ');
	buf.append('		</div>                                                  ');
	buf.append('</div>															');						
	
	$this.html(buf.toString());
};




HtmlUntil.couAuthManagerClassList = function(data){
    
    var buf = new StringBuffer();
    
    buf.append('    <li class="cou-auth-manager-class">');
    buf.append('    <div class="cou-auth-manager-class-div"><p>计算机软件技术1班</p><i class="glyphicon glyphicon-menu-right"></i></div>');
    buf.append('    <ul class="cou-auth-manager-stu-list display-none">');
    buf.append('    <li><img src="'+data[0].rImage+'">'+data[0].name+'<span>(班长)</span></li>');
    for(var i=1;i<4;i++){
        buf.append('    <li><img src="'+data[i].rImage+'">'+data[i].name+'</li>');
    }
    buf.append('    </ul>');
    buf.append('    </li>');
    buf.append('    <li class="cou-auth-manager-class">');
    buf.append('    <div class="cou-auth-manager-class-div"><p>计算机软件技术2班</p><i class="glyphicon glyphicon-menu-right"></i></div>');
    buf.append('    <ul class="cou-auth-manager-stu-list display-none">');
    buf.append('    <li><img src="'+data[4].rImage+'">'+data[4].name+'<span>(班长)</span></li>');
    for(var j=5;j<10;j++){
        buf.append('    <li><img src="'+data[j].rImage+'">'+data[j].name+'</li>');
    }
    buf.append('    </ul>');
    buf.append('    </li>');
    buf.append('    <li class="cou-auth-manager-class">');
    buf.append('    <div class="cou-auth-manager-class-div"><p>计算机软件技术3班</p><i class="glyphicon glyphicon-menu-right"></i></div>');
    buf.append('    <ul class="cou-auth-manager-stu-list display-none">');
    buf.append('    <li><img src="'+data[10].rImage+'">'+data[10].name+'<span>(班长)</span></li>');
    for(var k=11;k<16;k++){
        buf.append('    <li><img src="'+data[k].rImage+'">'+data[k].name+'</li>');
    }
    buf.append('    </ul>');
    buf.append('    </li>');
    return buf.toString();

};

HtmlUntil.couAuthManagerTabMain = function(data){
    var buf = new StringBuffer();

    buf.append('  <div class="cou-auth-manager-tab-main-div">');
    buf.append('  <div class="cou-auth-manager-tab-main-left">');
    buf.append('  <p>考勤</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-mid">');
    buf.append('  <p><input type="checkbox">早操</p>');
    buf.append('  <p><input type="checkbox">早自习</p>');
    buf.append('  <p><input type="checkbox">上课</p>');
    buf.append('  <p><input type="checkbox">晚自习</p>');
    buf.append('  <p><input type="checkbox">晚寝</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-right">');
    buf.append('  <p>对学生早操进行考勤</p>');
    buf.append('  <p>对学生早自习进行考勤</p>');
    buf.append('  <p>对学生上课进行考勤</p>');
    buf.append('  <p>对学生晚自习进行考勤</p>');
    buf.append('  <p>对学生晚寝进行考勤</p>');
    buf.append('  </div>');
    buf.append('  <div class="clear"></div>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-div">');
    buf.append('  <div class="cou-auth-manager-tab-main-left">');
    buf.append('  <p>请销假</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-mid">');
    buf.append('  <p><input type="checkbox">代请假</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-right">');
    buf.append('  <p>帮助不方便的本班同学提交请假申请</p>');
    buf.append('  </div>');
    buf.append('  <div class="clear"></div>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-div">');
    buf.append('  <div class="cou-auth-manager-tab-main-left">');
    buf.append('  <p>通知</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-mid">');
    buf.append('  <p><input type="checkbox">发通知</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-right">');
    buf.append('  <p>给本班范围内的同学发通知</p>');
    buf.append('  </div>');
    buf.append('  <div class="clear"></div>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-div">');
    buf.append('  <div class="cou-auth-manager-tab-main-left">');
    buf.append('  <p>课表</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-mid">');
    buf.append('  <p><input type="checkbox">管理课表</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-right">');
    buf.append('  <p>修改本班的课表信息</p>');
    buf.append('  </div>');
    buf.append('  <div class="clear"></div>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-div">');
    buf.append('  <div class="cou-auth-manager-tab-main-left">');
    buf.append('  <p>签到</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-mid">');
    buf.append('  <p><input type="checkbox">发起签到</p>');
    buf.append('  </div>');
    buf.append('  <div class="cou-auth-manager-tab-main-right">');
    buf.append('  <p>可以对本班范围内的同学发起签到事件</p>');
    buf.append('  </div>');
    buf.append('  <div class="clear"></div>');
    buf.append('  </div>');
return buf.toString();

};
 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couBusines4Manager = function(id){
	
	var $this = $("#"+id);
	var buf = new StringBuffer();
	 
	buf.append('<div style="min-height: 550px;" id="cou-business-manage">                                        ' );
	buf.append(' <div class="header" id="cou-business-manage-header">                                                                          ' );
	buf.append(' </div>                                                                                                                        ' );
	buf.append(' <div id="cou-business-manage-tab-attendance" class="item-tab item-tab-attendance">                                            ' );
	buf.append('  <div id="cou-business-manage-tab-attendance-header"></div>                                                                   ' );
	buf.append('  <div id="cou-business-manage-tab-attendance-tab-type" class="item-tab-son item-tab-son-type padding-manage">                 ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-attendance-tab-score" class="item-tab-son item-tab-son-score padding-manage">               ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-attendance-tab-standard" class="item-tab-son item-tab-son-standard padding-manage">         ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append(' </div>                                                                                                                        ' );
	buf.append(' <div id="cou-business-manage-tab-conduct" class="item-tab item-tab-conduct">                                                  ' );
	buf.append('  <div id="cou-business-manage-tab-conduct-header"></div>                                                                      ' );
	buf.append('  <div id="cou-business-manage-tab-conduct-tab-type" class="item-tab-son item-tab-son-type padding-manage">                    ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-conduct-tab-basic" class="item-tab-son item-tab-son-basic padding-manage">                  ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-conduct-tab-punish" class="item-tab-son item-tab-son-punish padding-manage">                ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-conduct-tab-standard" class="item-tab-son item-tab-son-standard padding-manage">            ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append(' </div>                                                                                                                        ' );
	buf.append(' <div id="cou-business-manage-tab-calendar" class="item-tab item-tab-calendar">                                                ' );
	buf.append('  <div id="cou-business-manage-tab-calendar-header"></div>                                                                     ' );
	buf.append('  <div id="cou-business-manage-tab-calendar-tab-type" class="item-tab-son item-tab-son-type padding-manage">                   ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-calendar-tab-score" class="item-tab-son item-tab-son-score padding-manage">                 ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append('  <div id="cou-business-manage-tab-calendar-tab-standard" class="item-tab-son item-tab-son-standard padding-manage">           ' );
	buf.append('  </div>                                                                                                                       ' );
	buf.append(' </div>                                                                                                                        ' );
	buf.append(' <div id="cou-business-manage-tab-notice" class="item-tab item-tab-notice padding-manage">                                     ' );
	buf.append(' </div>                                                                                                                        ' );
	buf.append('</div>																															');
	$this.html(buf.toString());
};

HtmlUntil.couBusinessAttendanceType= function(data){
        var buf = new StringBuffer();

	    buf.append(' <div id="cou-business-manage-tab-attendance-tab-type-content" class="div-top-sm">');
	    buf.append('     <table id="cou-business-manage-tab-attendance-tab-type-table"></table>');
	    buf.append('     </div>');
	    buf.append('     <p class="cou-business-manage-tab-calendar-tab-add-type"><i class="glyphicon glyphicon-plus"></i>添加类型</p>');
	    buf.append(' ');
	    buf.append('     <div class="container-fluid confirm-div">');
	    buf.append('     <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
	    buf.append('     </div>');
	    
        return buf.toString();
    
};

HtmlUntil.couBusinessAttendanceScore= function(data) {
    var buf = new StringBuffer();

    buf.append(' <div id="cou-business-manage-tab-attendance-tab-score-content">');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>缺席1次扣除<input class="manage-line-score-standard" value="1">分</p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>迟到1次扣除<input class="manage-line-score-standard" value="1">分</p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>请假1次扣除<input class="manage-line-score-standard" value="1">分</p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>早退1次扣除<input class="manage-line-score-standard" value="1">分</p>');
    buf.append('     </div>');
    buf.append('     </div>');
    buf.append('     <div class="container-fluid confirm-div">');
    buf.append('     <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
    buf.append('     </div>');

    return buf.toString();
};

HtmlUntil.couBusinessAttendanceStandard= function(data) {
    var buf = new StringBuffer();

    buf.append(' <div id="cou-business-manage-tab-attendance-tab-standard-content">');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="10">分将进行<span class="manage-line-message-important">通报批评</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="20">分将进行<span class="manage-line-message-important">警告处分</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="30">分将进行<span class="manage-line-message-important">记过处分</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="40">分将进行<span class="manage-line-message-important">留校察看</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="50">分将进行<span class="manage-line-message-important">开除学籍</span></p>');
    buf.append('     </div>');
    buf.append('     </div>');
    buf.append('     <div class="container-fluid confirm-div">');
    buf.append('     <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
    buf.append('     </div>');
    
    return buf.toString();
};

HtmlUntil.couBusinessConductType= function(data) {
    var buf = new StringBuffer();
    buf.append(' <div id="cou-business-manage-tab-conduct-tab-type-content" class="row">');
    buf.append('     <div class="col col-sm-6">');
    buf.append('     <h5 class="cou-business-manage-conduct-table-title">一级分类</h5>');
    buf.append('     <table id="table-first-type"></table>');
    buf.append('     <p class="cou-business-manage-tab-calendar-tab-add-type"><i class="glyphicon glyphicon-plus"></i>添加类型</p>');
    buf.append('     </div>');
    buf.append('     <div class="col col-sm-6">');
    buf.append('     <h5 class="cou-business-manage-conduct-table-title">二级分类</h5>');
    buf.append('     <table id="table-second-type"></table>');
    buf.append('     <p class="cou-business-manage-tab-calendar-tab-add-type"><i class="glyphicon glyphicon-plus"></i>添加类型</p>');
    buf.append('     </div>');
    buf.append('     </div>');
    buf.append('     <div class="container-fluid confirm-div">');
    buf.append('     <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
    buf.append('     </div>');
        
    return buf.toString();
};

HtmlUntil.couBusinessConductBasic= function(data) {
    var buf = new StringBuffer();

    buf.append(' <div id="cou-business-manage-tab-conduct-tab-basic-content" class="cou-business-manage-tab-conduct-tab-basic-content">');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>请输入操行基础分:<input class="manage-line-score-standard" value="0.999">分</p>');
    buf.append('     </div>');
    buf.append('     <p class="manage-tab-conduct-attention">注:基础分是用计算日常操行的分数基准,所有的加减分将在此基础上进行;基础分只影响评定标准</p>');
    buf.append(' </div>');
    buf.append(' <div class="container-fluid confirm-div">');
    buf.append('     <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
    buf.append('     </div>');
    
    return buf.toString();
};

HtmlUntil.couBusinessConductPunish= function(data) {
    var buf = new StringBuffer();

    buf.append(' <div id="cou-business-manage-tab-attendance-tab-standard-content">');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="10">分将进行<span class="manage-line-message-important">通报批评</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="20">分将进行<span class="manage-line-message-important">警告处分</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="30">分将进行<span class="manage-line-message-important">记过处分</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="40">分将进行<span class="manage-line-message-important">留校察看</span></p>');
    buf.append('     </div>');
    buf.append('     <div class="div-cou-business-manage-line">');
    buf.append('     <p>扣除分数超过<input class="manage-line-score-standard" value="50">分将进行<span class="manage-line-message-important">开除学籍</span></p>');
    buf.append('     </div>');
    buf.append('     </div>');
    buf.append('     <div class="container-fluid confirm-div">');
    buf.append('     <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
    buf.append('     </div>');

    return buf.toString();
};

HtmlUntil.couBusinessConductStandard= function(data) {
    var buf = new StringBuffer();

     buf.append('   <div id="cou-business-manage-tab-attendance-tab-standard-content">');
     buf.append('   <div class="div-cou-business-manage-line">');
     buf.append('   <p>优秀:上限<input class="manage-line-score-standard" value="95">下限<input class="manage-line-score-standard" value="90"></p>');
     buf.append('   </div>');
     buf.append('   <div class="div-cou-business-manage-line">');
     buf.append('   <p>优秀:上限<input class="manage-line-score-standard" value="90">下限<input class="manage-line-score-standard" value="80"></p>');
     buf.append('   </div>');
     buf.append('   <div class="div-cou-business-manage-line">');
     buf.append('   <p>优秀:上限<input class="manage-line-score-standard" value="80">下限<input class="manage-line-score-standard" value="70"></p>');
     buf.append('   </div>');
     buf.append('   <div class="div-cou-business-manage-line">');
     buf.append('   <p>优秀:上限<input class="manage-line-score-standard" value="70">下限<input class="manage-line-score-standard" value="60"></p>');
     buf.append('   </div>');
     buf.append('   <div class="div-cou-business-manage-line">');
     buf.append('   <p>优秀:上限<input class="manage-line-score-standard" value="60">下限<input class="manage-line-score-standard" value="0"></p>');
     buf.append('   </div>');
     buf.append('   </div>');
     buf.append('   <div class="container-fluid confirm-div">');
     buf.append('   <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
     buf.append('   </div>');
    
    return buf.toString();
};


HtmlUntil.couBusinessCalendar=function(){
    var buf = new StringBuffer();

     buf.append('   <div class="cou-business-manage-tab-calendar-header">');
     buf.append('   <p>第一周星期一:</p><input type="text" class="s-time date-time div-left-div form-control" placeholder="请选择时间">');
     buf.append('   <p>暑假开始日期:</p><input type="text" class="s-time date-time div-left-div form-control" placeholder="请选择时间">');
     buf.append('   <p>暑假结束日期:</p><input type="text" class="e-time date-time div-left-div form-control" placeholder="请选择时间">');
     buf.append('   </div>');
     buf.append('   <div class="cou-business-manage-tab-calendar-body">');
     buf.append('   <img src="../../resource/img/base/manager/calendar.jpg">');
     buf.append('   <div class="container-fluid confirm-div">');
     buf.append('   <div class="row popup-btn-div"><span class="btn btn-abj-primary btn-sub">保存</span> </div>');
     buf.append('   </div>');
     buf.append('   </div>');
    
    return buf.toString();
};

HtmlUntil.couBusinessNotice= function(data) {
    var buf = new StringBuffer();

     buf.append('  <div class="div-manage-tab-notice-detail">');
     buf.append('  <b>学校标签(注:学校定义不能修改)</b>');
     buf.append('  <p>文艺晚会</p>');
     buf.append('  <p>会议-班会</p>');
     buf.append('  </div>');
     buf.append('  <div class="div-manage-tab-notice-detail">');
     buf.append('  <b>自定义标签</b>');
     buf.append('  </div>');
     buf.append('  <div class="notice-item">');
     buf.append('  <div class="div-manage-tab-notice-operation">');
     buf.append('  <div class="div-left-div notice-name"><p>文艺晚会</p></div><div class="notice-counsellor padding-left-8 block-hide"><i class="glyphicon glyphicon-pencil "></i><i class="glyphicon glyphicon-trash i-left-20"></i></div>');
     buf.append('  <div class="clear"></div>');
     buf.append('  </div>');
     
     buf.append('  <div class="div-manage-tab-notice-operation">');
     buf.append('  <div class="div-left-div notice-name"><p>文艺晚会</p></div><div class="notice-counsellor padding-left-8 block-hide"><i class="glyphicon glyphicon-pencil"></i><i class="glyphicon glyphicon-trash i-left-20"></i></div>');
     buf.append('  <div class="clear"></div>');
     buf.append('  </div>');
     
     buf.append('  <div class="div-manage-tab-notice-operation">');
     buf.append('  <div class="div-left-div notice-name"><p>文艺晚会</p></div><div class="notice-counsellor padding-left-8 block-hide"><i class="glyphicon glyphicon-pencil"></i><i class="glyphicon glyphicon-trash i-left-20"></i></div>');
  	 buf.append('  <div class="clear"></div>');
     buf.append('  </div>');
     buf.append('  </div>');
  	
     buf.append('  <div class="div-manage-tab-notice-add-label">');
     buf.append('  <p><i class="glyphicon glyphicon-plus-sign"></i>新建自定义标签</p>');
 	 buf.append('  </div>');
    
    return buf.toString();
};

/***
 *修改 
 * 添加
 * 通知类型
 * * */
HtmlUntil.couBusinessNoticeControl= function(data){
	var buf = new StringBuffer();
    buf.append('  <div class="div-manage-tab-notice-new-label">');
    buf.append('  <input type="text" value="'+data+'"><i class="glyphicon glyphicon-ok"></i>');
    buf.append("</div>")
	
	return buf.toString();
};

HtmlUntil.couBusinessNoticeAddType= function(data){
	var buf = new StringBuffer();
	
	buf.append(' <div class="div-manage-tab-notice-operation">                  ');
	buf.append('   <div class="div-left-div notice-name">                       ');
	buf.append('    <p>'+data+'</p>                                             ');
	buf.append('   </div>                                                       ');
	buf.append('   <div class="notice-counsellor padding-left-8 block-hide">    ');
	buf.append('    <i class="glyphicon glyphicon-pencil"></i>                  ');
	buf.append('    <i class="glyphicon glyphicon-trash i-left-20"></i>         ');
	buf.append('   </div>                                                       ');
	buf.append('   <div class="clear"></div>                                    ');
	buf.append('  </div>														');
	
	return buf.toString();
};


HtmlUntil.couBusinessConductType4Edit= function(data) {
    var buf = new StringBuffer();

     buf.append('   <div class="conduct-confirm-selects">');
     buf.append('   <input type="input" class="form-control" placeholder="编码:M11" disabled>');
     buf.append('   <input type="input" class="form-control" placeholder="请输入名称">');
     buf.append('   <input type="input" class="form-control" placeholder="请输入描述内容">');
     buf.append('   </div>');
     buf.append('   <div class="container-fluid confirm-div">');
     buf.append('   <div class="row popup-btn-div conduct-confirm-btn-div"><span class="btn btn-abj-primary btn-sub"> 保存并返回</span> </div>');
     buf.append('   </div>');

    return buf.toString();
};

HtmlUntil.couBusinessAttendanceType4Edit= function(data) {
    var buf = new StringBuffer();
    
    buf.append('    <div class="conduct-confirm-selects">');
    buf.append('    <input type="input" class="form-control" placeholder="请输入名称">');
    buf.append('    <div class="row">');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <input type="input" class="form-control" placeholder="选择开始时间">');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    	<select class="form-control"></select>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row">');
    buf.append('   	 <div class="col-xs-6">');
    buf.append('    <input type="input" class="form-control" placeholder="选择截止时间">');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <select class="form-control"></select>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="div-conduct-type-shift" style="padding-top:6px;padding-left:202px;">');
    buf.append('    <input type="radio" name="conductTypeShift" style="margin-right:8px">开启');
    buf.append('    <input type="radio" name="conductTypeShift" style="margin-right:8px;margin-left:14px">关闭');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="container-fluid confirm-div">');
    buf.append('    <div class="row popup-btn-div conduct-confirm-btn-div"><span class="btn btn-abj-primary btn-sub"> 保存并返回</span> </div>');
    buf.append('    </div>');

    
    return buf.toString();
};
 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couClass4Manager = function(id){
	
	var $this = $("#"+id);
	var buf = new StringBuffer();
	 
	buf.append(' <div style=" height: 500px;width:100%" id="cou-class-manage" class="container padding-no margin-no">                                            ');
	buf.append('   <div id="cou-class-manage-div" class="row  margin-no">                                                                                   ');
	buf.append('    <div id="cou-class-manager-tab-cname" class="col-xs-2">                                                                      ');
	buf.append('     <div id="cou-class-manager-tab-cname-title">                                                                                ');
	buf.append('      <p>我的班级</p>                                                                                                            ');
	buf.append('      <a class="cou-class-addclass">添加</a>                                                                                                                ');
	buf.append('     </div>                                                                                                                      ');
	buf.append('     <div id="cou-class-manager-tab-cname-body">                                                                                 ');
	buf.append('     </div>                                                                                                                      ');
	buf.append('    </div>                                                                                                                       ');
	buf.append('    <div id="cou-class-manager-tab-stu" class="col-xs-10">                                                                       ');
	buf.append('     <div id="cou-class-manager-tab-stu-title">                                                                                  ');
	buf.append('      <div id="cou-class-manager-tab-stu-title-left" class="float-left">                                                         ');
	buf.append('       <ul>                                                                                                                      ');
	buf.append('        <li id="cou-class-manager-tab-stu-model-add-btn"><i class="glyphicon glyphicon-plus-sign"></i>添加学生</li>              ');
	buf.append('        <li id="cou-class-manager-tab-stu-model-import4stu-btn"><i class="glyphicon glyphicon-education"></i>导入学生</li>       ');
	buf.append('        <li id="cou-class-manager-tab-stu-model-import4photo-btn"><i class="glyphicon glyphicon-user"></i>导入学生头像</li>      ');
	buf.append('        <li><i class="glyphicon glyphicon-credit-card"></i>导出学籍卡</li>                                                       ');
	buf.append('        <li><i class="glyphicon glyphicon-th-list"></i>导出初始账号</li>                                                         ');
	buf.append('       </ul>                                                                                                                     ');
	buf.append('      </div>                                                                                                                     ');
	buf.append('      <div id="cou-class-manager-tab-stu-title-right" class="float-right">                                                       ');
	buf.append('       <p><i class="glyphicon glyphicon-user"></i>协助管理</p>                                                                   ');
	buf.append('      </div>                                                                                                                     ');
	buf.append('     </div>                                                                                                                      ');
	buf.append('     <div id="cou-class-manager-tab-stu-body">                                                                                   ');
	buf.append('      <p id="cou-class-manager-tab-stu-body-table-info"> </p>                                                                    ');
	buf.append('      <table id="cou-class-manager-tab-stu-table"></table>                                                                       ');
	buf.append('     </div>                                                                                                                      ');
	buf.append('    </div>                                                                                                                       ');
	buf.append('   </div>                                                                                                                        ');
	buf.append('  </div>																														');				
	
	$this.html(buf.toString());
};


HtmlUntil.couClassTabCname4Manage= function(data) {
    var buf = new StringBuffer();

    for(var i=0;i<data.length;i++){
    	var obj = data[i];
        buf.append('    <div class="cou-class-manager-tab-cname-list cursor-p" cid="'+obj.cid+'">');
        buf.append('    <input type="text" value="'+obj.name+'" class="cou-class-manager-tab-cname-input  cursor-p bg-color-white" style="background: none" disabled>');
        buf.append('    <a class="cou-class-manager-tab-cname-set-btn display-none">设置</a>');
        buf.append('    <div class="cou-class-manager-tab-cname-set-detail  cursor-p display-none">');
        buf.append('    <a class="cou-class-manager-tab-cname-reset  cursor-p">修改信息</a>');
        buf.append('    <a class="cou-class-manager-tab-cname-set-delete  cursor-p">删除班级</a>');
        buf.append('    </div>');
        buf.append('    </div>');
    }
    
    return buf.toString();
};

HtmlUntil.couClassTab4Info4Manager=function(){
    var buf = new StringBuffer();
    buf.append('基础数学2016-01班,共有25名学生,14名男生,11名女生;2位辅导员');
    return buf.toString();
};
HtmlUntil.couClassTabStuModelImport4Photo4Manage= function(data) {
    var buf = new StringBuffer();

     buf.append(' <div class="modal-body">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-div">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-detail">');
     buf.append('   <h5>导入学生头像注意事项:</h5>');
     buf.append('   <p>1.建议用学生的2寸免冠照片,尺寸大于160*160,大小小于2M,png或jpg格式</p>');
     buf.append('   <p>2.照片的名字必须以学号进行命名</p>');
     buf.append('   </div>');
     buf.append('   <input type="file" id="cou-class-manager-tab-stu-model-add-select-file" style="display: none">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-select">');
     buf.append('   <input id="cou-class-manager-tab-stu-model-add-select-file-cover" class="form-control" type="text" placeholder="请选择要上传的照片:">');
     buf.append('   <button class="btn btn-abj-primary" id="cou-class-manager-tab-stu-model-add-select-file-btn"><i class="glyphicon glyphicon-folder-open"></i>文件选择</but');
     buf.append('   <div class="clear"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photos">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"><img src="../../resource/img/test/student_03.png"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot">60633</div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-delete"><i class="glyphicon glyphicon-exclamation-sign"></i></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo">');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-top"></div>');
     buf.append('   <div class="cou-class-manager-tab-stu-model-add-photo-bot"></div>');
     buf.append('   </div>');
     buf.append('   <div class="clear"></div>');
     buf.append('   </div>');
     buf.append('   </div>');
     buf.append('   <div class="container-fluid confirm-div">');
     buf.append('   <div class="row popup-btn-div conduct-confirm-btn-div"><span class="btn btn-abj-primary btn-sub"> 提交</span> </div>');
     buf.append('   </div>');
     buf.append('   </div>');
    
    return buf.toString();
};

HtmlUntil.couClassTabStuModelImport4Stu4Manage= function(data) {
    var buf = new StringBuffer();

    buf.append('    <div class="modal-body">');
    buf.append('    <div class="cou-class-manager-tab-stu-model-import4stu-div">');
    buf.append('    <div class="cou-class-manager-tab-stu-model-import4stu-detail">');
    buf.append('    <h5>操作步骤</h5>');
    buf.append('    <p>1.下载&lt&lt学生批量导入模版&gt&gt</p>');
    buf.append('    <p>2.打开下载表,将对应字段信息输入或粘贴进本表,为保障粘贴信息被有效导入,请使用纯文本或数字</p>');
    buf.append('    <p>信息输入完毕,点击"文件"选择按钮,选择excel文档</p>');
    buf.append('    <p><a>立即下载&lt&lt学生批量导入模版&gt&gt</a></p>');
    buf.append('    </div>');
    buf.append('    <input type="file" id="cou-class-manager-tab-stu-model-import4stu-select-file" style="display: none">');
    buf.append('    <div class="cou-class-manager-tab-stu-model-import4stu-select">');
    buf.append('    <input id="cou-class-manager-tab-stu-model-import4stu-select-file-cover" class="form-control" type="text">');
    buf.append('    <button class="btn btn-abj-primary" id="cou-class-manager-tab-stu-model-import4stu-select-file-btn"><i class="glyphicon glyphicon-folder-open"></i>文件选择</button>');
    buf.append('    <div class="clear"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="container-fluid confirm-div">');
    buf.append('    <div class="row popup-btn-div conduct-confirm-btn-div"><span class="btn btn-abj-primary btn-sub"> 开始导入</span> </div>');
    buf.append('    </div>');
    buf.append('    </div>');


    return buf.toString();
};
HtmlUntil.couClassTabStuModelAdd4Manage= function(data) {
    var buf = new StringBuffer();

    buf.append('    <div class="modal-body">');
    buf.append('    <div class="cou-class-manager-tab-stu-model-modify-div">');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p><span class="font-color-red">*</span>学号:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p><span class="font-color-red">*</span>姓名:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p><span class="font-color-red">*</span>性别:</p></div>');
    buf.append('    <div class="col-xs-8 modify-sex-select"><input type="radio" name="sex">男<input type="radio" name="sex">女</div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p>出生年月:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p>民族:</p></div>');
    buf.append('    <div class="col-xs-8 modify-sex-select"><select class="form-control">汉</select></div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p>政治面貌:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md ">');
    buf.append('    <div class="col-xs-2">');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-10 cou-class-manager-tab-stu-model-modify">');
    buf.append('    <input type="checkbox">贫困生');
    buf.append('    <input type="checkbox">孤残学生');
    buf.append('    <input type="checkbox">单亲家庭');
    buf.append('    <input type="checkbox">烈士子女');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p>身份证:</p></div>');
    buf.append('    <div class="col-xs-8 modify-sex-select"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p>高考号:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p>手机:</p></div>');
    buf.append('    <div class="col-xs-8 modify-sex-select"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p>短号:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p>QQ号:</p></div>');
    buf.append('    <div class="col-xs-8 modify-sex-select"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p>家长姓名:</p></div>');
    buf.append('    <div class="col-xs-8"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md">');
    buf.append('    <div class="col-xs-6 row">');
    buf.append('    <div class="col-xs-4"><p>邮政编码:</p></div>');
    buf.append('    <div class="col-xs-8 modify-sex-select"><input class="form-control" type="text"></div>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-6">');
    buf.append('    <div class="col-xs-4"><p>家庭经济:</p></div>');
    buf.append('    <div class="col-xs-8"><select class="form-control"></select></div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md ">');
    buf.append('    <div class="col-xs-2">');
    buf.append('    <p>籍贯:</p>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-10 cou-class-manager-tab-stu-model-modify">');
    buf.append('    <input class="form-control" type="text" style="width:409px;">');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="row form-popup-md ">');
    buf.append('    <div class="col-xs-2"  style="padding-right:14px;">');
    buf.append('    <p>家庭住址:</p>');
    buf.append('    </div>');
    buf.append('    <div class="col-xs-10 cou-class-manager-tab-stu-model-modify">');
    buf.append('    <input class="form-control" type="text" style="width:409px;">');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="container-fluid confirm-div">');
    buf.append('    <div class="row popup-btn-div conduct-confirm-btn-div"><span class="btn btn-abj-primary btn-sub"> 提交</span> </div>');
    buf.append('    </div>');
    buf.append('    </div>');
    
    return buf.toString();
};

HtmlUntil.couClassHelp4Manage = function(data){
	var buf = new StringBuffer();
	
	buf.append(' <div class="container width-full bg-color-class">                         ' );
	buf.append('   <div class="col-xs-5">                                                  ' );
	buf.append('    <div class="padding-md font-size-21 font-weight-bold">                 ' );
	buf.append('     我的同事                                                              ' );
	buf.append('    </div>                                                                 ' );
	buf.append('    <div class="bg-color-white border-radius-5 borser-line-1 cou-class-prop-help">       ' );
	buf.append('     <p class="padding-md "><a class="t-check">滴滴滴</a></p>                               ' );
	buf.append('     <p class="padding-md"><a>滴滴滴</a></p>                               ' );
	buf.append('    </div>                                                                 ' );
	buf.append('   </div>                                                                  ' );
	buf.append('   <div class="col-xs-2">                                                  ' );
	buf.append('    <div class="class-teacher-help"></div>                                 ' );
	buf.append('   </div>                                                                  ' );
	buf.append('   <div class="col-xs-5">                                                  ' );
	buf.append('    <div class="padding-md font-size-21 font-weight-bold">                 ' );
	buf.append('     辅导本班                                                              ' );
	buf.append('    </div>                                                                 ' );
	buf.append('    <div class="bg-color-white border-radius-5  borser-line-1 cou-class-prop-help">       ' );
	buf.append('     <p class="padding-md"><a>滴滴滴</a></p>                               ' );
	buf.append('     <p class="padding-md"><a>滴滴滴</a></p>                               ' );
	buf.append('    </div>                                                                 ' );
	buf.append('   </div>                                                                  ' );
	buf.append('  </div>                                                                   ' );
	buf.append('  <div class="container-fluid confirm-div bg-color-class padding-md">      ' );
	buf.append('   <div class="row popup-btn-div conduct-confirm-btn-div">                 ' );
	buf.append('    <span class="btn btn-abj-primary btn-sub"> 保存</span>                      ' );
	buf.append('   </div>                                                                  ' );
	buf.append('  </div> 																	');			

	return buf.toString();

};

HtmlUntil.couClassAdd4Manage = function(data){
	var buf = new StringBuffer();
	
 	buf.append(' <div class="cou-class-manager-tab-stu-model-modify1-div">                  ');
	buf.append('   <div class="row form-popup-md">                                          ');
	buf.append('    <div class="col-xs-6">                                                  ');
	buf.append('     <input class="form-control" type="text" placeholder="计科0302班" />    ');
	buf.append('    </div>                                                                  ');
	buf.append('    <div class="col-xs-6">                                                  ');
	buf.append('     <select class="form-control"><option>计算机</option></select>          ');
	buf.append('    </div>                                                                  ');
	buf.append('   </div>                                                                   ');
	buf.append('   <div class="row form-popup-md">                                          ');
	buf.append('    <div class="col-xs-6">                                                  ');
	buf.append('     <select class="form-control"><option>入学年份</option></select>        ');
	buf.append('    </div>                                                                  ');
	buf.append('    <div class="col-xs-6">                                                  ');
	buf.append('     <select class="form-control"><option>毕业年份</option></select>        ');
	buf.append('    </div>                                                                  ');
	buf.append('   </div>                                                                   ');
	buf.append('   <div class="row form-popup-md">                                          ');
	buf.append('    <textarea class="form-control"></textarea>                              ');
	buf.append('   </div>                                                                   ');
	buf.append('  </div>                                                                    ');
	buf.append('  <div class="container-fluid confirm-div">                                 ');
	buf.append('   <div class="row popup-btn-div conduct-confirm-btn-div">                  ');
	buf.append('    <span class="btn btn-abj-primary btn-sub"> 提交</span>                       ');
	buf.append('   </div>                                                                   ');
	buf.append('  </div> 																	');											
	
	return buf.toString();
};


HtmlUntil.couClassTabStuModelModify4Manage = function(data){
	var buf = new StringBuffer();
	
	buf.append('	<div class="cou-class-manager-tab-stu-model-modify-div">                                                                       ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p><span class="font-color-red">*</span>学号:</p>                                                                                                              ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" value="2016011111" />                                                              ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p><span class="font-color-red">*</span>姓名:</p>                                                                                                              ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" value="周瑜" />                                                                    ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p><span class="font-color-red">*</span>性别:</p>                                                                                                              ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8 modify-sex-select">                                                                                    ' );
    buf.append('        <input type="radio" name="sex" checked="checked" />男                                                                      ' );
    buf.append('        <input type="radio" name="sex" />女                                                                                        ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>出生年月:</p>                                                                                                           ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" value="1991-1-1" />                                                                ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>民族:</p>                                                                                                               ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8 modify-sex-select">                                                                                    ' );
    buf.append('        <select class="form-control"> <option selected="selected">汉</option> 汉</select>                                          ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>政治面貌:</p>                                                                                                           ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" value="党员" />                                                                    ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md ">                                                                                              ' );
    buf.append('      <div class="col-xs-2"></div>                                                                                                 ' );
    buf.append('      <div class="col-xs-10 cou-class-manager-tab-stu-model-modify">                                                               ' );
    buf.append('       <input type="checkbox" />贫困生                                                                                             ' );
    buf.append('       <input type="checkbox" />孤残学生                                                                                           ' );
    buf.append('       <input type="checkbox" />单亲家庭                                                                                           ' );
    buf.append('       <input type="checkbox" />烈士子女                                                                                           ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>身份证:</p>                                                                                                             ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8 modify-sex-select">                                                                                    ' );
    buf.append('        <input class="form-control" type="text" value="510181199101012341" />                                                      ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>高考号:</p>                                                                                                             ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" value="2124123" />                                                                 ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>手机:</p>                                                                                                               ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8 modify-sex-select">                                                                                    ' );
    buf.append('        <input class="form-control" type="text" value="1870680000" />                                                              ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>短号:</p>                                                                                                               ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" />                                                                                 ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>QQ号:</p>                                                                                                               ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8 modify-sex-select">                                                                                    ' );
    buf.append('        <input class="form-control" type="text" value="628175" />                                                                  ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>家长姓名:</p>                                                                                                           ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <input class="form-control" type="text" value="周润发" />                                                                  ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md">                                                                                               ' );
    buf.append('      <div class="col-xs-6 row">                                                                                                   ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>邮政编码:</p>                                                                                                           ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8 modify-sex-select">                                                                                    ' );
    buf.append('        <input class="form-control" type="text" />                                                                                 ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-6">                                                                                                       ' );
    buf.append('       <div class="col-xs-4">                                                                                                      ' );
    buf.append('        <p>家庭经济:</p>                                                                                                           ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('       <div class="col-xs-8">                                                                                                      ' );
    buf.append('        <select class="form-control"></select>                                                                                     ' );
    buf.append('       </div>                                                                                                                      ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md ">                                                                                              ' );
    buf.append('      <div class="col-xs-2">                                                                                                       ' );
    buf.append('       <p>籍贯:</p>                                                                                                                ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-10 cou-class-manager-tab-stu-model-modify">                                                               ' );
    buf.append('       <input class="form-control" type="text" style="width:457px;" value="四川成都" />                                            ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('     <div class="row form-popup-md ">                                                                                              ' );
    buf.append('      <div class="col-xs-2" style="padding-right:14px;">                                                                           ' );
    buf.append('       <p>家庭住址:</p>                                                                                                            ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('      <div class="col-xs-10 cou-class-manager-tab-stu-model-modify">                                                               ' );
    buf.append('       <input class="form-control" type="text" style="width:457px;" value="光华大道6号66" />                                       ' );
    buf.append('      </div>                                                                                                                       ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('    </div>                                                                                                                         ' );
    buf.append('    <div class="container-fluid confirm-div">                                                                                      ' );
    buf.append('     <div class="row popup-btn-div conduct-confirm-btn-div">                                                                       ' );
    buf.append('      <span class="btn btn-abj-primary btn-sub"> 提交</span>                                                                            ' );
    buf.append('     </div>                                                                                                                        ' );
    buf.append('    </div> 																															');
    
    return buf.toString();
};
	

HtmlUntil.couClass4propType4Manager = function(data){
	
	var buf = new StringBuffer();
	buf.append(' <div class="container-fluid" style="margin-top:20px" id="cou-class-prop-type-modal">                                                                  ');
	buf.append('  <div class="row padding-md">                                                                                          ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="贫困学生" /> 贫困学生 </label>    ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="孤残学生" /> 孤残学生 </label>    ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="单亲家庭" /> 单亲家庭 </label>    ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="烈士子女" /> 烈士子女 </label>    ');
	buf.append('  </div>                                                                                                                ');
	buf.append('  <div class="row padding-md">                                                                                          ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="爱打游戏" /> 爱打游戏 </label>    ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="家境富有" /> 家境富有 </label>    ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="性格内向" /> 性格内向 </label>    ');
	buf.append('   <label class="checkbox-inline"> <input type="checkbox" id="inlineCheckbox1" value="其他 	 " /> 其他 </label>         ');
	buf.append('  </div>                                                                                                                ');
	buf.append(' </div>                                                                                                                 ');
	buf.append(' <div class="container-fluid confirm-div">                                                                              ');
	buf.append('  <div class="row popup-btn-div">                                                                                       ');
	buf.append('   <span class="btn btn-abj-primary btn-sub"> 确定</span>                                                               ');
	buf.append('  </div>                                                                                                                ');
	buf.append(' </div> 																												');							
	
	return buf.toString();
};

 HtmlUntil.init2couConduct4Affair = function(id){
 	var $this = $("#"+id);
 	var buf = new StringBuffer();
 	
  	buf.append('<div style="min-height: 555px;" id="cou-conduct-affairas">           ');
	buf.append('    <div class="header" id="cou-conduct-affairas-header">                       ');
	buf.append('    </div>                                                                      ');
	buf.append('	<div id="cou-conduct-affairs-tab-notes" class="item-tab item-tab-notes">    ');
	buf.append('        <div id="cou-conduct-affairas-search-notes">                            ');
	buf.append('        </div>                                                                  ');
	buf.append('        <div class="content">                                                   ');
	buf.append('            <table id="table-notes"></table>                                    ');
	buf.append('        </div>                                                                  ');
	buf.append('    </div>                                                                      ');
	buf.append('    <div id="cou-conduct-affairs-tab-top" class="item-tab item-tab-top">        ');
	buf.append('        <div id="cou-conduct-affairas-search-top">                              ');
	buf.append('        </div>                                                                  ');
	buf.append('        <div class="content">                                                   ');
	buf.append('            <table id="table-top"></table>                                      ');
	buf.append('        </div>                                                                  ');
	buf.append('    </div>                                                                      ');
	buf.append('</div>																			');
	 	
	 $this.html(buf.toString());	
 };

HtmlUntil.couConductAffairs4Edit = function(data){

	var buf = new StringBuffer();
	var obj = data;
	
	buf.append('<div class="container-fluid">                                                                           ');
	buf.append('	<div class="row form-popup-sm">                                                                          ');
	buf.append('		<div class="col-xs-12">                                                                         ');
	buf.append('			<select class="form-control" >                                                              ');
	buf.append('				<option> '+obj.cname+'</option>                                                            ');
	buf.append('			</select>                                                                                   ');
	buf.append('		</div>                                                                                          ');
	buf.append('	</div>                                                                                              ');
	buf.append('	<div class="row form-popup-sm">                                                                          ');
	buf.append('		<div class="col-xs-6">                                                                          ');
	buf.append('			<select class="form-control" >                                                              ');
	buf.append('				<option> 操行分类</option>                                                              ');
	buf.append('			</select>                                                                                   ');
	buf.append('		</div>                                                                                          ');
	buf.append('		<div class="col-xs-6">                                                                          ');
	buf.append('			<select class="form-control" >                                                              ');
	buf.append('				<option> 二级分类</option>                                                              ');
	buf.append('			</select>                                                                                   ');
	buf.append('		</div>                                                                                          ');
	buf.append('		                                                                                                ');
	buf.append('	</div>                                                                                              ');
	buf.append('	<div class="row form-popup-sm">                                                                          ');
	buf.append('		<div class="col-xs-8">                                                                          ');
	buf.append('			<input class="form-control" placeholder="请输入操行名称" value="'+obj.aname+'"/>                                  ');
	buf.append('		</div>                                                                                          ');
	buf.append('		<div class="col-xs-4  popup-page-p-div  cou-counduct-prop-addstu">                                                        ');
	buf.append('			<a>                                                                                         ');
	buf.append('			 <i class="glyphicon glyphicon-plus-sign"></i>                                              ');
	buf.append('			 添加人和分数                                                                               ');
	buf.append('			</a>                                                                                        ');
	buf.append('		</div>                                                                                          ');
	buf.append('	</div>                                                                                              ');
	buf.append('	<div class="row form-popup-sm">                                                                          ');
	buf.append('		<div class="col-xs-12" >                                                                         ');
	buf.append('			<div class="form-popup-md-center bg-color-gray bootstrap-table" style="border-bottom:none">参与人和操行分数</div>                                                                 ');
	buf.append('			 <table id = "cou-conduct-affairas-edit-form-table" ></table>                               ');
	buf.append('		</div>                                                                                          ');
	buf.append('	</div>                                                                                              ');
	buf.append('	<div class="row form-popup-sm">                                                                          ');
	buf.append('		<div class="col-xs-12">                                                                         ');
	buf.append('			<input type="file" id="cou-conduct-affairas-edit-form-uploadfile" class="block-hide" />     ');
	buf.append('			<span class="btn btn-default"> 上传证明文件</span>                                          ');
	buf.append('			（图片为png jpg 格式）                                                                      ');
	buf.append('		</div>                                                                                          ');
	buf.append('	</div>                                                                                              ');
	buf.append('	                                                                                                    ');
	buf.append('	<div class="row form-popup-sm" id="cou-conduct-affairas-edit-form-pic-item">                             ');
	buf.append('			<div class="col-xs-3">                                                                      ');
	buf.append('				<img  src="http://file.koolearn.com/20151029/14461094271821.jpg" />                                      ');
	buf.append('			</div>                                                                                      ');
/*	buf.append('			<div class="col-xs-3">                                                                      ');
	buf.append('				<img  src="../../resource/img/test/student_03.png" />                                      ');
	buf.append('			</div>                                                                                      ');
	buf.append('			<div class="col-xs-3">                                                                      ');
	buf.append('				<img  src="../../resource/img/test/student_03.png" />                                      ');
	buf.append('			</div>                                                                                      ');
	buf.append('			<div class="col-xs-3">                                                                      ');
	buf.append('				<img  src="../../resource/img/test/student_03.png" />                                      ');
	buf.append('		    </div>                                                                                      ');*/
	buf.append('	</div>                                                                                              ');
	buf.append('	<div class="row form-popup-sm">');
	buf.append('		<div class="col-xs-12 popup-page-btn-div ">');
	buf.append('			<span class="btn   center-block btn-abj-primary " style="width:116px" >保存并返回</span>');
	buf.append('		</div>');
	buf.append('	</div>');
	
	buf.append('</div>                                                                                                  ');
	
	return buf.toString();
}
 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couCourse4Manager= function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="margin: 0 auto; min-height: 600px;" id="cou-course-manager" class="bg-color-gray-white"> ');
	buf.append(' <div id="cou-course-manager-header">   </div>                                                                  ');
	buf.append(' <div id="cou-course-manager-tab-main">                                                                         ');
	buf.append('  <table id="cou-course-manager-tab-main-table"></table>                                                        ');
	buf.append(' </div>                                                                                                         ');
	buf.append('</div>																											');	
	
	$this.html(buf.toString());
};


HtmlUntil.couCourseHeader4Manager = function(data){
	var buf = new StringBuffer();
	
	buf.append(' <div class="container-fluid">                                                                      ');
	buf.append('   <div class="row">                                                                                ');
	buf.append('    <div class="col-xs-8">                                                                          ');
	buf.append('     <form class="form-inline form-line">                                                           ');
	buf.append('      <div class="form-group select-width-sm margin-top-5">                                         ');
	buf.append('        请选择班级                                                                                  ');
	buf.append('      </div>                                                                                        ');
	buf.append('      <div class="form-group select-width-sm">                                                      ');
	buf.append('       <select class="form-control"><option>计算机一班</option><option>数学一班</option></select>   ');
	buf.append('      </div>                                                                                        ');
	buf.append('      <div class="form-group select-width-sm">                                                      ');
	buf.append('       <select class="form-control"><option>第一周</option><option>第二周</option></select>         ');
	buf.append('      </div>                                                                                        ');
	buf.append('      <span class="btn btn-abj-primary">查询</span>                                                 ');
	buf.append('     </form>                                                                                        ');
	buf.append('    </div>                                                                                          ');
	buf.append('    <div class="col-xs-4">                                                                          ');
	buf.append('     <div class="div-right-div font-color-blue font-size-17 margin-top-5 cou-course-manager-add">                          ');
	buf.append('      <i class="icon-plus-sign"></i>                                                                ');
	buf.append('      <span  class="cursor-p">添加课表</span>                                                                         ');
	buf.append('     </div>                                                                                         ');
	buf.append('    </div>                                                                                          ');
	buf.append('   </div>                                                                                           ');
	buf.append('  </div>																							');
	
	return buf.toString();
};

HtmlUntil.couCoursePropadd4Manager =  function(data){
	var buf = new StringBuffer();
	
buf.append('<div id="cou-course-manager-prop-add">                                                                                             ');
buf.append('    <div class="container-fluid">                                                                                                  ');
buf.append('     <div class="row form-popup-sm">                                                                                               ');
buf.append('      <div class="col-xs-6">                                                                                                       ');
buf.append('       <select class="form-control"> <option> 请选择课程 </option> <option>高等代数</option> <option>高等代数</option> </select>   ');
buf.append('      </div>                                                                                                                       ');
buf.append('      <div class="col-xs-6">                                                                                                       ');
buf.append('       <select class="form-control"> <option> 请选择任课老师 </option> <option>李大丹</option> <option>王丽丽</option> </select>   ');
buf.append('      </div>                                                                                                                       ');
buf.append('     </div>                                                                                                                        ');
buf.append('    </div>                                                                                                                         ');
buf.append('    <div class="cou-course-manager-prop-add-item">')
buf.append('    <div class="container-fluid" >                                                            ');
buf.append('     <div class="row form-popup-sm bg-color-gray padding-md">                                                                      ');
buf.append('      <div class="div-left-div font-color-gray">                                                                                   ');
buf.append('       		 上课时间段                                                                                                            ');
buf.append('      </div>                                                                                                                       ');
buf.append('      <div class="div-right-div">                                                                                                  ');
buf.append('       <i class=" icon-minus-sign font-color-red font-size-21 margin-right-10"></i>                                                ');
buf.append('       <i class="icon-plus-sign font-color-blue font-size-21"></i>                                                                 ');
buf.append('      </div>                                                                                                                       ');
buf.append('     </div>                                                                                                                        ');
buf.append('     <div class="row form-popup-sm">                                                                                               ');
buf.append('      <div class="col-xs-2 margin-top-8">                                                                                          ');
buf.append('       <span> 上课地点</span>                                                                                                      ');
buf.append('      </div>                                                                                                                       ');
buf.append('      <div class="col-xs-10">                                                                                                      ');
buf.append('       <input class="form-control" placeholder="请点击选择通知对象" />                                                             ');
buf.append('      </div>                                                                                                                       ');
buf.append('     </div>                                                                                                                        ');
buf.append('     <div class="row form-popup-sm">                                                                                               ');
buf.append('      <div class="col-xs-2 margin-top-8">                                                                                          ');
buf.append('       <span> 上课时间</span>                                                                                                      ');
buf.append('      </div>                                                                                                                       ');
buf.append('      <div class="col-xs-10 row">                                                                                                  ');
buf.append('       <div class="col-xs-4">                                                                                                      ');
buf.append('        <select class="form-control"> <option>第一周</option> </select>                                                            ');
buf.append('       </div>                                                                                                                      ');
buf.append('       <div class="col-xs-3 padding-no">                                                                                           ');
buf.append('        <select class="form-control"> <option>第一节</option> </select>                                                            ');
buf.append('       </div>                                                                                                                      ');
buf.append('       <div class="col-xs-1 margin-top-8">                                                                                         ');
buf.append('       		  至                                                                                                                   ');
buf.append('       </div>                                                                                                                      ');
buf.append('       <div class="col-xs-4 ">                                                                                                     ');
buf.append('        <select class="form-control"> <option>第二节</option> </select>                                                            ');
buf.append('       </div>                                                                                                                      ');
buf.append('      </div>                                                                                                                       ');
buf.append('     </div>                                                                                                                        ');
buf.append('     <div class="row form-popup-sm">                                                                                               ');
buf.append('      <div class="col-xs-2 margin-top-8">                                                                                          ');
buf.append('       <span> 周次</span>                                                                                                          ');
buf.append('      </div>                                                                                                                       ');
buf.append('      <div class="col-xs-10">                                                                                                      ');
buf.append('       <input class="form-control" placeholder="请点击选择周次" />                                                                 ');
buf.append('      </div>                                                                                                                       ');
buf.append('     </div>                                                                                                                        ');
buf.append('     <div class="row form-popup-sm">                                                                                               ');
buf.append('      <div class="col-xs-12">                                                                                                      ');
buf.append('       <div id="cou-notice-text"></div>                                                                                            ');
buf.append('      </div>                                                                                                                       ');
buf.append('     </div>                                                                                                                        ');
buf.append('    </div>                                                                                                                         ');
buf.append('   </div> ');
buf.append('     <div class="row form-popup-sm div-center-p " style="padding-bottom: 20px;">                                                   ');
buf.append('      <span class="btn btn-abj-primary " style="width: 116px;">发送</span>                                                         ');
buf.append('     </div>                                                                                                                        ');
buf.append('   </div> ');



    return buf.toString();	
};


HtmlUntil.couCoursePropaddItem4Manager =  function(data){
	var buf = new StringBuffer();
	buf.append('<div class="container-fluid" >                                                            ');
	buf.append(' <div class="row form-popup-sm bg-color-gray padding-md">                          ' );
	buf.append('   <div class="div-left-div font-color-gray">                                      ' );
	buf.append('     上课时间段                                                                    ' );
	buf.append('   </div>                                                                          ' );
	buf.append('   <div class="div-right-div">                                                     ' );
	buf.append('    <i class=" icon-minus-sign font-color-red font-size-21 margin-right-10"></i>   ' );
	buf.append('    <i class="icon-plus-sign font-color-blue font-size-21"></i>                    ' );
	buf.append('   </div>                                                                          ' );
	buf.append('  </div>                                                                           ' );
	buf.append('  <div class="row form-popup-sm">                                                  ' );
	buf.append('   <div class="col-xs-2 margin-top-8">                                             ' );
	buf.append('    <span> 上课地点</span>                                                         ' );
	buf.append('   </div>                                                                          ' );
	buf.append('   <div class="col-xs-10">                                                         ' );
	buf.append('    <input class="form-control" placeholder="请点击选择通知对象" />                ' );
	buf.append('   </div>                                                                          ' );
	buf.append('  </div>                                                                           ' );
	buf.append('  <div class="row form-popup-sm">                                                  ' );
	buf.append('   <div class="col-xs-2 margin-top-8">                                             ' );
	buf.append('    <span> 上课时间</span>                                                         ' );
	buf.append('   </div>                                                                          ' );
	buf.append('   <div class="col-xs-10 row">                                                     ' );
	buf.append('    <div class="col-xs-4">                                                         ' );
	buf.append('     <select class="form-control"> <option>第一周</option> </select>               ' );
	buf.append('    </div>                                                                         ' );
	buf.append('    <div class="col-xs-3 padding-no">                                              ' );
	buf.append('     <select class="form-control"> <option>第一节</option> </select>               ' );
	buf.append('    </div>                                                                         ' );
	buf.append('    <div class="col-xs-1 margin-top-8">                                            ' );
	buf.append('      至                                                                           ' );
	buf.append('    </div>                                                                         ' );
	buf.append('    <div class="col-xs-4 ">                                                        ' );
	buf.append('     <select class="form-control"> <option>第二节</option> </select>               ' );
	buf.append('    </div>                                                                         ' );
	buf.append('   </div>                                                                          ' );
	buf.append('  </div>                                                                           ' );
	buf.append('  <div class="row form-popup-sm">                                                  ' );
	buf.append('   <div class="col-xs-2 margin-top-8">                                             ' );
	buf.append('    <span> 周次</span>                                                             ' );
	buf.append('   </div>                                                                          ' );
	buf.append('   <div class="col-xs-10">                                                         ' );
	buf.append('    <input class="form-control" placeholder="请点击选择周次" />                    ' );
	buf.append('   </div>                                                                          ' );
	buf.append('  </div>                                                                           ' );
	buf.append('  <div class="row form-popup-sm">                                                  ' );
	buf.append('   <div class="col-xs-12">                                                         ' );
	buf.append('    <div id="cou-notice-text"></div>                                               ' );
	buf.append('   </div>                                                                          ' );
	buf.append('  </div>                                                                           ' );
	buf.append(' </div> ');
		
    return buf.toString();	
};



HtmlUntil.couCourseManagerTable = function(id){
	var buf = new StringBuffer();
	var $this = $("#"+id)
	buf.append('    <table id="table-status"></table>                                                                              ' );
	$this.html(buf.toString());
}
 

/**************************当前课程模块************************************************** */

 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couCourse4Now = function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append( ' <div style="margin: 0 auto; min-height: 650px;" id="cou-course-now" class="bg-color-gray-white">                                ' );
	buf.append( '  <div id="cou-course-now-header"></div>                                                                                                   ' );
	buf.append( '  <div id="cou-course-now-tab-today" class="item-tab item-tab-today">                                                                      ' );
	buf.append( '   <div id="cou-course-now-tab-today-header" style="display: table;margin: 10px auto;">                                                    ' );
	buf.append( '    <select class="form-control div-left-div " style="width: 150px;margin-right: 30px;"> <option>第一教学周</option> </select>             ' );
	buf.append( '    <select class="form-control" style="width: 150px;"> <option>星期一</option> </select>                                                  ' );
	buf.append( '   </div>                                                                                                                                  ' );
	buf.append( '   <table id="cou-course-now-tab-today-table"></table>                                                                                     ' );
	buf.append( '  </div>                                                                                                                                   ' );
	buf.append( '  <div id="cou-course-now-tab-class" class="item-tab item-tab-class">                                                                      ' );
	buf.append( '   <div id="cou-course-now-tab-class-header" style="display: table;margin: 10px auto;">                                                    ' );
	buf.append( '    <select class="form-control div-left-div " style="width: 150px;margin-right: 30px;"> <option>15物流一班</option> </select>             ' );
	buf.append( '    <select class="form-control" style="width: 150px;"> <option>第一周</option> </select>                                                  ' );
	buf.append( '   </div>                                                                                                                                  ' );
	buf.append( '   <table id="cou-course-now-tab-class-table"></table>                                                                                     ' );
	buf.append( '  </div>                                                                                                                                   ' );
	buf.append( ' </div>																																		');					
	
	$this.html(buf.toString());
};

HtmlUntil.init2couLeave4Affair  = function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="min-height: 555px;" id="cou-leave-affairas">                                                    ' );
	buf.append('			<div class="header" id="cou-leave-affairas-header">                                                        ' );
	buf.append('			</div>                                                                                                     ' );
	buf.append('			<div id="cou-leave-affairs-tab-manage" class="item-tab item-tab-manage">                                   ' );
	buf.append('				<div id="cou-leave-affairas-search-manage"> </div>                                                     ' );
	buf.append('				<div class="content">                                                                                  ' );
	buf.append('					<table id="table-status"></table>                                                                  ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('			</div>                                                                                                     ' );
	buf.append('			<div id="cou-leave-affairs-tab-count" class="item-tab item-tab-count">                                     ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-header"></div>                                                    ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-tab-class" 		  class="item-tab-son item-tab-son-class">     ' );
	buf.append('					<div id="cou-leave-affairas-search-count-class"> </div>                                            ' );
	buf.append('					<div class="content">                                                                              ' );
	buf.append('						<div id="cou-leave-affairs-tab-count-tab-char-class"></div>                                    ' );
	buf.append('					</div>                                                                                             ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-tab-type" class="item-tab-son item-tab-son-type">                 ' );
	buf.append('					<div id="cou-leave-affairas-search-count-type"> </div>                                             ' );
	buf.append('					<div class="content">                                                                              ' );
	buf.append('						<div id="cou-leave-affairs-tab-count-tab-char-type" ></div>                                    ' );
	buf.append('					</div>                                                                                             ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-tab-goal" class="item-tab-son item-tab-son-goal">                 ' );
	buf.append('					 <div id="cou-leave-affairas-search-count-goal"> </div>                                            ' );
	buf.append('					 <div class="content">                                                                             ' );
	buf.append('					 	<div id="cou-leave-affairs-tab-count-tab-char-goal" ></div>                                    ' );
	buf.append('					 </div>                                                                                            ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('			</div>                                                                                                     ' );
	buf.append('</div>																													');
	
	$this.html(buf.toString());
};






/*******
 *  ��������� ֮  �����Ϣ�����+��ټ��ϣ�
 * couTodoNowLeaveProp2Ask
 * ***/

HtmlUntil.couTodoNowLeaveProp2Ask = function(data){

	var buf = new StringBuffer();

	buf.append('<div class="leave-info-box">                                                                                 ');
	buf.append('    <div class="stu-boxTop leave-info-box-top">                                                              ');
	buf.append('        <div class="stu-photo"><img src="../../resource/img/test/student_03.png"></div>                         ');
	buf.append('        <div class="stu-info">                                                                               ');
	buf.append('            <h4>������(2016�����3��)</h4>                                                                   ');
	buf.append('            <p>�绰����:1350012345</p>                                                                       ');
	buf.append('            <p>������ϵ��:�ž�1350012345 ����1350012345</p>                                                  ');
	buf.append('        </div>                                                                                               ');
	buf.append('        <div class="clear"></div>                                                                            ');
	buf.append('        <div class="leave-info-box-top-note">�����</div>                                                    ');
	buf.append('    </div>                                                                                                   ');
	buf.append('    <div class="leave-info-box-bottom">                                                                      ');
	buf.append('        <div class="item-tab-prop-ask-list-detail">                                                          ');
	buf.append('            <b>���ʱ��:2015-06-12 15:30~2015-06-13 16:30 ��<span class="color-light-blue">1.2</span>��</b>  ');
	buf.append('            <p>���Ŀ��:����</p>                                                                             ');
	buf.append('            <p>Ŀ�ĵ�:�ɶ���-��ţ��</p>                                                                      ');
	buf.append('            <p class="leave-infor-reason">���岻���,ҪȥҽԺ���һ��,һ��˵Ҫ���ڸ���</p>                   ');
	buf.append('            <div class="leave-info-box-pic">                                                                 ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('            </div>                                                                                           ');
	buf.append('            <div class="item-tab-prop-ask-list-detail-status-tag">��У</div>                                 ');
	buf.append('            <div class="item-tab-prop-ask-list-detail-reason-tag">����</div>                                 ');
	buf.append('        </div>                                                                                               ');
	buf.append('        <div class="item-tab-prop-ask-list-extend">                                                          ');
	buf.append('            <b>���ʱ��:2015-06-12 15:30~2015-06-13 16:30 ��<span class="color-light-blue">1.2</span>��</b>  ');
	buf.append('            <p class="leave-infor-reason">���岻���,ҪȥҽԺ���һ��,һ��˵Ҫ���ڸ���</p>                   ');
	buf.append('            <div class="leave-info-box-pic">                                                                 ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('            </div>                                                                                           ');
	buf.append('        </div>                                                                                               ');
	buf.append('    </div>                                                                                                   ');
	buf.append('<div class="container-fluid confirm-div">                      ');
	buf.append('	<div class="row popup-btn-div">                            ');
	buf.append('		<span class="btn bg-color-gray btn-info btn-darkBlue"> ͬ��</span>');
	buf.append('		<span class="btn bg-primary btn-danger btn-darkRed"> �ܾ�</span>      ');
	buf.append('	</div>                                                     ');
	buf.append('</div>                                                         ');
	buf.append('</div>                                                                                                       ');


	return buf.toString();
};

/*******
 *  ��������� ֮  �����¼
 * couTodoNowLeaveProp2Audit
 * ***/

HtmlUntil.couTodoNowLeaveProp2Audit = function(data){

	var buf = new StringBuffer();

	buf.append('<div class="prop-table-div">                                        ');
	buf.append('	<table>                                                         ');
	buf.append('		<tr>                                                        ');
	buf.append('			<td class="prop-table-div-title">�����</td>            ');
	buf.append('			<td class="prop-table-div-info">�ύ�������</td>       ');
	buf.append('			<td class="prop-table-div-time">2015-09-02 15:30</td>   ');
	buf.append('		</tr>                                                       ');
	buf.append('	</table>                                                        ');
	buf.append('</div>                                                              ');

	return buf.toString();
};



/*发通知 */

HtmlUntil.couLeave4Supply  = function(data){
	
	var buf = new StringBuffer();
	
	buf.append('  <div class="div-compensatory-leave">                                                                                                              ');
	buf.append('   <div class="compensatory-leave-select-students">                                                                                                 ');
	buf.append('    <ul class="ul-row padding-no">                                                                                                                  ');
	buf.append('     <li class="padding-md "> <img src="../../resource/img/test/student_03.png" alt="..." />                                                         ');
	buf.append('      <div class="div-center-p div-clear">                                                                                                          ');
	buf.append('        张三                                                                                                                                        ');
	buf.append('      </div> </li>                                                                                                                                  ');
	buf.append('     <li id="compensatory-leave-add-student" class="padding-md cursor-p compensatory-leave-add-student"> <img src="../../resource/img/base/add_icon.png" />  ');
	buf.append('      <div class="compensatory-leave-add-student-label">                                                                                            ');
	buf.append('       选择学生                                                                                                                                     ');
	buf.append('      </div> </li>                                                                                                                                  ');
	buf.append('     <div class="clear"></div>                                                                                                                      ');
	buf.append('    </ul>                                                                                                                                           ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-select-time">                                                                                                     ');
	buf.append('    <input type="text" class="form-control float-left" style="width:48%" placeholder="选择开始时间" />                                              ');
	buf.append('    <input type="text" class="form-control float-right" style="width:48%" placeholder="选择结束时间" />                                             ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-select-type">                                                                                                     ');
	buf.append('     请选择请假类型:                                                                                                                                ');
	buf.append('    <input type="checkbox" />事假                                                                                                                   ');
	buf.append('    <input type="checkbox" />病假                                                                                                                   ');
	buf.append('    <input type="checkbox" />周末                                                                                                                   ');
	buf.append('    <input type="checkbox" />节假日                                                                                                                 ');
	buf.append('    <input type="checkbox" />公事                                                                                                                   ');
	buf.append('    <input type="checkbox" />其他                                                                                                                   ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-input-reason">                                                                                                    ');
	buf.append('    <textarea class="form-control" placeholder="请输入请假原因"></textarea>                                                                         ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-upload-certificate">                                                                                              ');
	buf.append('    <div class="row form-popup-sm">                                                                                                                 ');
	buf.append('     <div class="col-xs-12">                                                                                                                        ');
	buf.append('      <input type="file" id="cou-conduct-affairas-edit-form-uploadfile" class="block-hide" />                                                       ');
	buf.append('      <span class="btn btn-default"> 上传证明文件</span> (图片问png jpg 格式）                                                                      ');
	buf.append('     </div>                                                                                                                                         ');
	buf.append('    </div>                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="container-fluid confirm-div">                                                                                                        ');
	buf.append('    <div class="row popup-btn-div">                                                                                                                 ');
	buf.append('     <span class="btn btn-abj-primary btn-sub"> 保存</span>                                                                                              ');
	buf.append('    </div>                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('  </div> 																																			');											
		
		 
	return buf.toString();
	
};
HtmlUntil.init2couWork4Now = function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	buf.append('<div style="min-height: 555px;" id="cou-work-affairas">');
	buf.append('        <div id="cou-work-affairas-search"></div>');
	buf.append('			<hr style="margin: 1px;" />');
	buf.append('        <div class="header" id="cou-work-affairas-header"></div>');
	buf.append('        <div id="cou-work-affairs-tab-situation" class="item-tab item-tab-situation">');
	buf.append('            <div class="content">');
	buf.append('                <table id="cou-work-affairs-tab-situation-table"></table>');
	buf.append('            </div>');
	buf.append('        </div>');
	buf.append('		<div id="cou-work-affairs-tab-count" class="item-tab item-tab-count">');
	buf.append('            <div id="cou-work-affairs-tab-count-header"></div>');
	buf.append('			<div id="cou-work-affairs-tab-count-tab-class" class="item-tab-son item-tab-son-class"></div>');
	buf.append('			<div id="cou-work-affairs-tab-count-tab-study" class="item-tab-son item-tab-son-study"> </div>');
	buf.append('        </div>');
	buf.append('</div>');
	
	$this.html(buf.toString());
};

/*****
 * 根据data 拼接list
 * ***/
HtmlUntil.couWorkCountClass=function(data){
    var buf = new StringBuffer();

    for(var i =0 ;i<2;i++){
		buf.append('<div class="class-situation-box margin-center display-table">');
		buf.append('	<p class="class-situation-box-title"><span>05软件2班</span>(42人,男生40,女生22)</p>');
		buf.append('	<div>');
		buf.append('		<div class="executive-situation">');
		buf.append('			<h6 class="class-situation-subtitle">执行情况</h6>');
		buf.append('			<table>');
		buf.append('				<tbody>');
		buf.append('					<tr><td>80%</td><td>89%</td><td>92%</td></tr>');
		buf.append('					<tr><td>签到率</td><td>按时返校率</td><td>通知阅读率</td></tr>');
		buf.append('				</tbody>');
		buf.append('			</table>');
		buf.append('		</div>');
		buf.append('		<div class="honor-situation">');
		buf.append('			<h6 class="class-situation-subtitle">荣誉情况</h6>');
		buf.append('			<table>');
		buf.append('				<tbody>');
		buf.append('					<tr><td>2个</td><td>2个</td></tr>');
		buf.append('					<tr><td>班级荣誉</td><td>个人荣誉</td></tr>');
		buf.append('				</tbody>');
		buf.append('			</table>');
		buf.append('		</div>');
		buf.append('		<div class="conduct-situation">');
		buf.append('			<h6 class="class-situation-subtitle">操行情况</h6>');
		buf.append('			<div class="conduct-situation-tables">');
		buf.append('				<table class="float-left">');
		buf.append('					<tbody>');
		buf.append('						<tr><td>平均操行</td><td>46分</td></tr>');
		buf.append('						<tr><td>(较上周)</td><td>上升4分</td></tr>');
		buf.append('					</tbody>');
		buf.append('				</table>');
		buf.append('				<table class="float-right">');
		buf.append('					<tbody>');
		buf.append('						<tr><td>优秀</td><td>增加4人</td></tr>');
		buf.append('						<tr><td>不合格</td><td>减少4人</td></tr>');
		buf.append('					</tbody>');
		buf.append('				</table>');
		buf.append('				<div class="clear"></div>');
		buf.append('			</div>');
		buf.append('		</div>');
		buf.append('		<div class="clear"></div>');
		buf.append('	</div>');
		buf.append('</div>');
    }
    return buf.toString();
};


HtmlUntil.couWorkStudentInit = function(data){
	var buf = new StringBuffer();
	
	buf.append(' <div class="study-situation">                                                                                                       ');
	buf.append('     <p class="class-situation-box-title"><span>05软件2班</span>(42人,男生40,女生22)</p>                                             ');
	buf.append('     <div class="class-situation-chars">                                                                                             ');
	buf.append('         <div id="class-situation-char-attendance-trend" class="class-situation-box-left"></div>                                     ');
	buf.append('         <div class="class-situation-box-right">                                                                                     ');
	buf.append('             <div id="class-situation-char-attendance-count"></div>                                                                  ');
	buf.append('             <div id="class-situation-char-attendance-distribute"></div>                                                             ');
	buf.append('         </div>                                                                                                                      ');
	buf.append('         <div class="clear"></div>                                                                                                   ');
	buf.append('         <div class="study-situation-student-rank-label">学生排行</div>                                                              ');
	buf.append('     </div>                                                                                                                          ');
	buf.append('     <div id="study-situation-student-rank" class="study-situation-student-rank">                                                                                         ');
	buf.append('         <div id="study-situation-student-rank-to-left" class="div-left-div study-situation-student-rank-to-left"><i class="glyphicon glyphicon-menu-left"></i></div>     ');
	buf.append('         <div id="study-situation-student-rank-box" class="study-situation-student-rank-box"></div>                                                                           ');
	buf.append('         <div id="study-situation-student-rank-to-right" class="div-right-div study-situation-student-rank-to-right"><i class="glyphicon glyphicon-menu-right"></i></div>  ');
	buf.append('     </div>                                                                                                                          ');
	buf.append(' </div>                                                                                                                              ');          
		
	return buf.toString();
};

HtmlUntil.couWorkStudentRank = function(data) {
	
        var buf = new StringBuffer();
        for(var i =0 ;i<5;i++){
			buf.append('<div class="student-rank-info">                            ');
			buf.append(' <div class="student-rank-info-photo">                     ');
			buf.append('  <img src="../../resource/img/test/student_03.png" />                      ');
			buf.append(' </div>                                                    ');
			buf.append(' <div class="student-rank-info-detail">                    ');
			buf.append('  <h5>张强</h5>                                            ');
			buf.append('  <p>累计8次</p>                                           ');
			buf.append('  <br />                                                   ');
			buf.append('  <p>缺<span class="stu-box-mid-delay-time">4</span></p>   ');
			buf.append('  <p>迟<span class="stu-box-mid-delay-time">4</span></p>   ');
			buf.append('  <p>退<span class="stu-box-mid-delay-time">4</span></p>   ');
			buf.append('  <p>假<span class="stu-box-mid-delay-time">4</span></p>   ');
			buf.append('  <div class="clear"></div>                                ');
			buf.append(' </div>                                                    ');
			buf.append(' <div class="clear"></div>                                 ');
			buf.append('</div>                                                     ');   
        }
    return buf.toString();
};

HtmlUntil.couWorkSituation4Detail = function(data){

	var buf = new StringBuffer();

/*	buf.append('<div class="container-fluid bg-color-gray-white">');*/
	buf.append('	<table id="cou-work-situation-detail" style="margin-top:20px;border-top: 1px solid #ddd">');
	buf.append('	</table>');
/*	buf.append('</div>');*/

	return buf.toString();
};

HtmlUntil.init2couStuCount4Tas = function(id){
	var $this = $("#"+id);
 	var buf = new StringBuffer();
	
	buf.append('  <div style=" " id="cou-stucount-tas">     ' );
	buf.append('   <div id="cou-stucount-tas-header">                                                      ' );
	buf.append('   </div>                                                                                  ' );
	buf.append('   <div id="cou-stucount-tas-tab-main">                                                    ' );
	buf.append('    <div class="container width-full">                                                                ' );
	buf.append('     <div class="row">                                                                     ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4special"></div>                             ' );
	buf.append('      </div>                                                                               ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4political"></div>                           ' );
	buf.append('      </div>                                                                               ' );
	buf.append('     </div>                                                                                ' );
	buf.append('     <div class="row">                                                                     ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4minority"></div>                            ' );
	buf.append('      </div>                                                                               ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4geographical"></div>                        ' );
	buf.append('      </div>                                                                               ' );
	buf.append('     </div>                                                                                ' );
	buf.append('     <div class="row">                                                                     ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4like"></div>                                ' );
	buf.append('      </div>                                                                               ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4skill"></div>                               ' );
	buf.append('      </div>                                                                               ' );
	buf.append('     </div>                                                                                ' );
	buf.append('    </div>                                                                                 ' );
	buf.append('   </div>                                                                                  ' );
	buf.append('  </div>																					');						
	
	$this.html(buf.toString());
};

HtmlUntil.init2couNotice4Affair  = function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="min-height: 555px;" id="cou-notice-affairs">                  ');
	buf.append('		 <div class="cou-notice-affairs-tab" id="cou-notice-affairs-tab-parent-info">                   ');
	buf.append('			<div class="header" id="cou-notice-affairs-header">                                         ');
	buf.append('			</div>                                                                                      ');
	buf.append('			<div id="cou-notice-affairs-tab-received" class="item-tab item-tab-received ">              ');
	buf.append('				<div id="cou-notice-affairs-tab-received-search"></div>                                 ');
	buf.append('				<div style="margin-top: -20px;">                                                        ');
	buf.append('					<hr>                                                                                ');
	buf.append('				</div>                                                                                  ');
	buf.append('				<div class="content" style="margin-top:-20px;">                                                                   ');
	buf.append('					<div id="cou-notice-affairs-tab-received-list"></div>                               ');
	buf.append('				</div>                                                                                  ');
	buf.append('			</div>                                                                                      ');
	buf.append('                                                                                                        ');
	buf.append('			<div id="cou-notice-affairs-tab-send" class="item-tab item-tab-send">                       ');
	buf.append('				<div id="cou-notice-affairs-tab-send-search"></div>                                     ');
	buf.append('				<div style="margin-top: -20px;">                                                        ');
	buf.append('					<hr>                                                                                ');
	buf.append('				</div>                                                                                  ');
	buf.append('				<div class="content" style="margin-top:-20px">                                                                   ');
	buf.append('					<div id="cou-notice-affairs-tab-send-list"></div>                                   ');
	buf.append('				</div>                                                                                  ');
	buf.append('			</div>                                                                                      ');
	buf.append('		</div>                                                                                          ');
	buf.append('		<div class="cou-notice-affairs-tab div-top-sm" id="cou-notice-affairs-tab-parent-detail"></div> ');
	buf.append('</div>																									');
	
	$this.html(buf.toString());
};


/*****
 * 根据data 拼接list
 *  我收到的通知
 * ***/
HtmlUntil.couNoticeAffairs4Received = function(data){

	var buf = new StringBuffer();
         
	for(var i =0 ;i<data.length;i++){
		var obj = data[i];
		buf.append('<div class="item-table-row item-table-row-point" nid="'+obj.id+'">');
		buf.append('    <p class="item-table-row-title div-left-div">'+obj.title+'</p>');
		buf.append('    <p class="activity-badge item-table-row-type div-left-div">'+obj.type+'</p>');
		buf.append('    <p class="item-table-row-basic-info div-right-div">'+obj.teacher+' '+obj.time+'</p>');
		buf.append('    <div class="clear"></div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
};


 /*****
 * 根据data 拼接list
 * 我发送的通知
 * ***/
HtmlUntil.couNoticeAffairs4Send = function(data){

	var buf = new StringBuffer();
         
	for(var i =0 ;i<data.length;i++){
		var obj=data[i];
		buf.append('<div class="item-table-row item-table-row-point">');
		buf.append('    <p class="item-table-row-title div-left-div">'+obj.title+'</p>');
		buf.append('    <p class="activity-badge item-table-row-type div-left-div">'+obj.type+'</p>');
		buf.append('    <p class="item-table-row-basic-info div-right-div">已读<span class="fount-color-blue">2</span>/80</p>');
		buf.append('    <div class="clear"></div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
};


/* **
 *跳转单个文章
 * 
 * *** */

HtmlUntil.couNoticeAffairs4Article = function(data){

	var buf = new StringBuffer();
    
    buf.append("<div class='acticel-goback'>&lt; 返回</div>")
	buf.append('<div class="article-box"> ');
	buf.append(' <div class="article-box-header"> ');
	buf.append('  <h4>'+data.title+'</h4> ');
	buf.append('  <div class="article-box-header-basic-info">');
	buf.append(		data.info    ); 
	buf.append('   <span class="div-right-div activity-badge tags">'+data.type+'</span> ');
	buf.append('  </div> ');
	buf.append(' </div> ');
	buf.append(' <div class="article-box-content"> ');
	buf.append( data.content);
	buf.append('  <div class="article-box-content-pic-box"> ');
	buf.append('   <img src="'+data.pic[0].url+'" /> ');
	buf.append('   <img src="'+data.pic[1].url+'" /> ');
	buf.append('   <div class="clear"></div> ');
	buf.append('  </div> ');
	buf.append(' </div> ');
	buf.append(' <div class="article-box-footer"> ');
	buf.append('  <p class="div-left-div">转发(123)</p> ');
	buf.append('  <p class="div-left-div">总阅读(1352)</p> ');
	buf.append('  <p class="div-right-div">删除</p> ');
	buf.append('  <p class="div-right-div">转发</p> ');
	buf.append(' </div> ');
	buf.append('</div> ');
	
	buf.append('<div class="bg-color-f6f7f7" style="height: 300px;">                                                                                                      ');
	buf.append('	<div class="unreader-header">                                                                                                                       ');
	buf.append('			<ul class="ul-row div-center-ul article-tab-item">                                                                                          ');
	buf.append('				<li class="bg-color-gray-dull active-white" value="list">未读列表</li>                                                                                            ');
	buf.append('				<li class="bg-color-gray-dull" value="distribution">未读分布</li>                                                                                            ');
	buf.append('			</ul>                                                                                                                                       ');
	buf.append('	</div>                                                                                                                                              ');
	buf.append('	<div id="unreader-tab-list" class="item-tab-unreader item-tab-unreader-list"  style="margin-left: 7px;">');
	buf.append('	</div>                                                                                                                                              ');
	buf.append('	<div id="unreader-tab-distribution" class="item-tab-unreader item-tab-distribution" value="distribution">                                                                 ');
	buf.append('		                                                                                                                                                ');
	buf.append('		<div class="content">                                                                                                                           ');
	buf.append('			<div id="unreader-tab-distribution">                                                                                                   ');
	buf.append('			</div>                                                                                                                                      ');
	buf.append('		</div>                                                                                                                                          ');
	buf.append('	 </div>                                                                                                                                             ');
	buf.append('</div>                                                                                                                                                  ');           
	
	return buf.toString();	
 
};

/* **
 *展示未读列表
 * 
 * *** */

HtmlUntil.couNoticeAffairs4ArticleNoList = function(data){

	var buf = new StringBuffer();

	buf.append('<ul class="ul-row padding-no" >');
	for(var i =0 ;i<10 ;i++){
		buf.append('<li class="padding-sm"><img src="'+data[i].rImage+'" alt="..."> <div class="div-center-p div-clear"> '+data[i].name +'</div> </li>    ');
	}
	buf.append('</ul> ');
	return buf.toString();
}


/*发通知 */

HtmlUntil.couNotice4Send  = function(data){
	
	var buf = new StringBuffer();
	
	buf.append('  <div class="container-fluid">                                                                                                                                                                                                                                                                                                                                                                                     ');
	buf.append('   <div class="row form-popup-sm">                                                                                                                                                                                                                                                                                                                                                                                  ');
	buf.append('    <div class="col-xs-12">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('     <input class="form-control" placeholder="请输入通知标题" />                                                                                                                                                                                                                                                                                                                                                    ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('   <div class="row form-popup-sm">                                                                                                                                                                                                                                                                                                                                                                                  ');
	buf.append('    <div class="col-xs-12">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('     <input class="form-control cou-notice-prop-stu" placeholder="请点击选择通知对象" />                                                                                                                                                                                                                                                                                                                                                ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('   <div class="row form-popup-sm">                                                                                                                                                                                                                                                                                                                                                                                  ');
	buf.append('    <div class="col-xs-12">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('     <div id="cou-notice-text"></div>                                                                                                                                                                                                                                                                                                                                                                               ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('   <div class="row form-popup-sm bg-color-gray " style="padding-top: 10px;padding-bottom: 10px;">                                                                                                                                                                                                                                                                                                                   ');
	buf.append('    <div class="col-xs-12 row">                                                                                                                                                                                                                                                                                                                                                                                     ');
	buf.append('     <div class="col-xs-4">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('      <select class="form-control"> <option>通知类型</option> </select>                                                                                                                                                                                                                                                                                                                                             ');
	buf.append('     </div>                                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('     <div class="col-xs-8 padding-no font-size-12 margin-top-5">                                                                                                                                                                                                                                                                                                                                                    ');
	buf.append('      <p> <span class="font-color-blue">管理</span> <input type="radio" /> <span class="font-color-dark"> 短信提醒</span> <span class="font-color-gray"> (剩余短信</span> <span class="font-color-red"> 642</span> <span class="font-color-gray"> 条,</span> <span class="font-color-blue"> 购买短信</span> <span class="font-color-gray">)</span> <span class="font-color-blue">上传附件</span> </p>               ');
	buf.append('     </div>                                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('   <div class="row form-popup-sm bg-color-gray" style="margin-top: 0px; padding-top: 10px; padding-bottom: 10px;">                                                                                                                                                                                                                                                                                                  ');
	buf.append('    <div class="col-xs-3">                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('     <img src="../../resource/img/test/student_03.png" />                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('   <div class="row form-popup-sm">                                                                                                                                                                                                                                                                                                                                                                                  ');
	buf.append('    <div class="col-xs-3 ">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('      &nbsp;                                                                                                                                                                                                                                                                                                                                                                                                        ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('    <div class="col-xs-7 row" style="padding-bottom: 20px;">                                                                                                                                                                                                                                                                                                                                                        ');
	buf.append('     <div class="col-xs-6">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('      <span class="btn btn-primary btn-block cou-notice-prop-preview">预览</span>                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('     </div>                                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('     <div class="col-xs-6">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('      <span class="btn btn-primary btn-block">发送</span>                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('     </div>                                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('    <div class="col-xs-2 ">                                                                                                                                                                                                                                                                                                                                                                                         ');
	buf.append('      &nbsp;                                                                                                                                                                                                                                                                                                                                                                                                        ');
	buf.append('    </div>                                                                                                                                                                                                                                                                                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                                                                                                                                                                                                                                                                                           ');
	buf.append('  </div>																																																																																																			');									
			 
	return buf.toString();
	
	
};




HtmlUntil.init2couTalk4Affair = function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="min-height: 555px;" id="cou-talk-affairas"> '  );
	buf.append('		<div class="header" id="cou-talk-affairas-header">                            '  );
	buf.append('		</div>                                                                        '  );
	buf.append('		<div id="cou-talk-affairas-search">                                           '  );
	buf.append('		</div>                                                                        '  );
	buf.append('		<div id="cou-talk-affairs-tab-detail" class="item-tab item-tab-detail">       '  );
	buf.append('			<div class="content">                                                     '  );
	buf.append('				<table id="table-status"></table>                                     '  );
	buf.append('			</div>                                                                    '  );
	buf.append('		</div>                                                                        '  );
	buf.append('		<div id="cou-talk-affairs-tab-stu" class="item-tab item-tab-stu">             '  );
	buf.append('			<div style="margin-top: -20px;"> <hr></div>                               '  );
	buf.append('			<div id="cou-talk-affairs-tab-stu-list"  ></div>                          '  );
	buf.append('		</div>                                                                        '  );
	buf.append('</div>																					');
		
	$this.html(buf.toString());
};



/*****
 * 根据ID 拼接list
 * ***/
HtmlUntil.couTalkAffairs4StuList = function(id,data){
	
	var buf = new StringBuffer();
	for(var i = 0;i<6;i++){
		var obj=data[i];
		buf.append('<div class="stu-box" id="'+obj.id+'">');
		buf.append('    <div class="stu-boxTop">');
		buf.append('        <div class="stu-photo"><img src="'+obj.rImage+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'(2005级软件3班)</h4>');
		buf.append('            <p>累计谈心:<span>5</span>次<a>重点关注</a></p>');
		buf.append('            <p>最近访谈:2016-03-28</p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		buf.append('        <p>失恋了,情绪低落,学习成绩下降,生活不愉快等等</p>');
		buf.append('    </div>');
		buf.append('</div>');
	}
	$("#"+id).html(buf.toString());
};

HtmlUntil.couTalkAffairs4Detail = function(param,data){
	
	var buf = new StringBuffer();
	
	buf.append('    <div class="popup-page-box">');
	buf.append('        <div class="stu-boxTop">');
	buf.append('            <div class="stu-photo stu-photo-sm"><img src="'+data[param].rImage+'"></div>');
	buf.append('            <div class="stu-info">');
	buf.append('                <h4>'+data[param].name+'(2005级软件3班)</h4>');
	buf.append('                <p>累计谈心:<span>5</span>次<a>重点关注</a></p>');
	buf.append('            </div>');
	buf.append('            <div class="clear"></div>');
	buf.append('        </div>');
	buf.append('    </div>');
	buf.append('    <div class="popup-page-box-detail-content">');
	buf.append('        <div class="title">');
	buf.append('            <h4>情感纠葛</h4>');
	buf.append('            <P>时间:2015-11-23</P>');
	buf.append('            <p>地点:S-105</p>');
	buf.append('            <P>持续关注</P>');
	buf.append('        </div>');
	buf.append('        <div class="reason">');
	buf.append('            <p>1.20日晚上 驺同学因为情感纠葛问题,与建筑学院大二一男生产生矛盾,最终导致同行的同学被建筑学院男生殴打.</p>');
	buf.append('            <p>2.通过值班领导的调查,把打人者全部揪出.</p>');
	buf.append('            <p>3.告诫驺同学不能再伺机报复,等待学校领导的处罚通知.</p>');
	buf.append('            <p>4.做其他工作,让驺同学不要再纠结过去的感情,重新开始新的生活.</p>');
	buf.append('            <p>5.告诉驺同学要明确自己到学校的目的.</p>');
	buf.append('        </div>');
	buf.append('    </div>');
	
	return buf.toString();
};

HtmlUntil.couTalkAffairs4Edit = function(data){

	var buf = new StringBuffer();
	
	buf.append('<div class="container-fluid bg-color-gray-white">');
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-12">');
	buf.append('			<input class="form-control" placeholder="请输入谈心主题"/>');
	buf.append('		</div>');
	buf.append('	</div>');
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-10">');
	buf.append('			<input class="form-control stu-talk-detail-select" placeholder="点击选择学生"/>');
	buf.append('		</div>');
	buf.append('		<div class="col-xs-2 popup-page-p-div">');
	buf.append('			<a >已谈3次</a>');
	buf.append('		</div>');
	buf.append('	</div>');
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-12">');
	buf.append('			<input class="form-control" placeholder="请输入谈心地点"/>');
	buf.append('		</div>');
	buf.append('	</div>');
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-12">');
	buf.append('			<input class="form-control" placeholder="请输入谈心时间"/>');
	buf.append('		</div>');
	buf.append('	</div>');
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-12">');
	buf.append('			<select class="form-control" >');
	buf.append('				<option> 选择关注等级 </option>');
	buf.append('			</select>');
	buf.append('		</div>');
	buf.append('	</div>'); 	
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-12">');
	buf.append('			<textarea class="form-control" placeholder="请输入谈心内容">请输入谈心内容 </textarea>');
	buf.append('		</div>');
	buf.append('	</div>');
	buf.append('	<div class="row form-popup-md">');
	buf.append('		<div class="col-xs-12 popup-page-btn-div ">');
	buf.append('			<span class="btn center-block btn-abj-primary " style="width:116px" >保存</span>');
	buf.append('		</div>');
	buf.append('	</div>');
	buf.append('</div>');
	
	return buf.toString();
};
 

HtmlUntil.init2couGeneral4Tas = function(id){

  	var $this = $("#"+id);
 	var buf = new StringBuffer();

     buf.append('   <div style="min-height:553px" id="cou-general-tas">');
     buf.append('   <div id="cou-general-tas-search-btn"><p><i class="glyphicon glyphicon-filter"></i>筛选</p></div>');
     buf.append('   <div class="header nav-tabs" id="cou-general-tas-header"></div>');
     buf.append('   <div id="cou-cou-general-tas-search">');
     buf.append('   <p>特殊情况:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <p>政治面貌:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <p>民族/班干部:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <p>操行情况:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <span class="form-control btn btn-abj-primary">确定</span>');
     buf.append('   </div>');
     buf.append('   <table id="cou-general-tas-tab-main">');
     buf.append('   </table>');
     buf.append('   </div>');

    	$this.html(buf.toString());
};
HtmlUntil.couGeneralTasModalStu= function(data) {

    var buf = new StringBuffer();

     buf.append('   <div id="cou-general-tas-modal-stu-tab-header" class="cou-self-affairs-header cou-general-tas-modal-header">');
     buf.append('   <div class="cou-self-affairs-header-photo"><img src="'+data.rImage+'"></div>');
     buf.append('   <div class="cou-self-affairs-header-detail">');
     buf.append('   <p><span class="cou-self-affairs-header-detail-name">'+data.name+'(2015091021)</span><span>'+data.sex+'</span><span>21岁</span><span>'+data.nation+'</span></p>');
     buf.append('   <p><span>'+data.class+'</span><span>宿舍:'+data.dormNo+'</span></p>');
     buf.append('   <p style="font-size:12px"><span class="border-span-label">贫困生</span><span class="border-span-label">孤残学生</span><span class="border-span-label">烈士子女</span></p>');
     buf.append('   </div>');
     buf.append('   </div>');
     buf.append('   <div id="cou-general-tas-modal-stu-tab-info" class="cou-self-affairs-tab-info cou-general-tas-modal-info"> ');
     buf.append('   <div id="cou-self-affairs-tab-info-tab-self" class="item-tab-son item-tab-son-self cou-self-affairs-tab-item"> ');
     buf.append('   <div class="cou-self-affairs-tab-info-content cou-general-tas-modal-info-content">  ');
     buf.append('   <p>院系:计算机学院</p> ');
     buf.append('   <p>出生年月:1995年5月25日</p> ');
     buf.append('   <p>政治面貌:预备党员</p> ');
     buf.append('   <p>职务:学生会主席</p>   ');
     buf.append('   <p>邮箱:12345@qq.com</p>   ');
     buf.append('   <p>微信:12345</p>   ');
     buf.append('   </div>  ');
     buf.append('   <div class="cou-self-affairs-tab-info-content cou-general-tas-modal-info-content">  ');
     buf.append('   <p>学号:5123123132</p>    ');
     buf.append('   <p>身份证号:510123467889</p>       ');
     buf.append('   <p>手机号:1331234567</p>          ');
     buf.append('   <p>高考考号:10010014</p>  ');
     buf.append('   <p>QQ号码:12345</p>   ');
     buf.append('   <p>兴趣爱好:听歌</p>     ');
     buf.append('   </div>             ');
     buf.append('   </div>      ');
     buf.append('   </div>      ');
    
    return buf.toString();
};

HtmlUntil.couGeneralTasModalFamily= function(data) {

    var buf = new StringBuffer();
    
    buf.append('    <div id="cou-general-tas-modal-family-tab">');
    buf.append('    <div id="cou-general-tas-modal-family-tab-header" class="cou-general-tas-modal-family-tab-header">');
    buf.append('    <p>家庭住址:'+data.add+'</p>');
    buf.append('    <p>经济情况:贫困</p>');
    buf.append('    </div>');
    buf.append('    <div id="cou-general-tas-modal-family-tab-info" class="cou-general-tas-modal-family-tab-info">');
    buf.append('    <div class="cou-general-tas-modal-family-tab-family">');
    buf.append('    <p>姓名:'+data.fa+'(父子)</p>');
    buf.append('    <p>联系电话:13555555555</p>');
    buf.append('    <p>工作单位:四川省人民政府</p>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-family-tab-family">');
    buf.append('    <p>姓名:'+data.ma+'(母子)</p>');
    buf.append('    <p>联系电话:13555555555</p>');
    buf.append('    <p>工作单位:四川省人民政府</p>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-family-tab-family">');
    buf.append('    <p>姓名:'+data.bro+'(兄弟)</p>');
    buf.append('    <p>联系电话:13555555555</p>');
    buf.append('    <p>工作单位:四川省人民政府</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="clear"></div>');
    buf.append('    </div>');


    return buf.toString();
};

HtmlUntil.couGeneralTasModalSchool= function(data) {

    var buf = new StringBuffer();

    buf.append('    <div id="cou-general-tas-modal-school-tab-info" class="cou-general-tas-modal-school-tab-info">');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>请假情况</p><p>请假15次,2次超期</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <table>');
    buf.append('    <tr>');
    buf.append('    <td>事假<span>1</span></td>');
    buf.append('    <td>病假<span>2</span></td>');
    buf.append('    <td>周末<span>1</span></td>');
    buf.append('    </tr>');
    buf.append('    <tr>');
    buf.append('    <td>公干<span>1</span></td>');
    buf.append('    <td>节假日<span>1</span></td>');
    buf.append('    <td>其他<span>1</span></td>');
    buf.append('    </tr>');
    buf.append('    </table>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>缺勤情况</p><p>请假8次,处分15分</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <table>');
    buf.append('    <tr>');
    buf.append('    <td>早操<span>3</span></td>');
    buf.append('    <td>早自习<span>1</span></td>');
    buf.append('    <td>上课<span>2</span></td>');
    buf.append('    </tr>');
    buf.append('    <tr>');
    buf.append('    <td>晚自习<span>1</span></td>');
    buf.append('    <td>晚寝<span>1</span></td>');
    buf.append('    <td></td>');
    buf.append('    </tr>');
    buf.append('    </table>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>操行情况</p><p>操行75分,优秀</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <p>加分操行:<span>5</span>次,共加<span>20</span>分</p>');
    buf.append('    <p>减分操行:1次,共减2分</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>签到情况</p><p>签到率86%</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <p>签到<span>56</span>次,未签到<span>32</span>次</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>宿舍情况</p><p>平均分78分</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content appearance-content-dorm">');
    buf.append('    <table>');
    buf.append('    <tr>');
    buf.append('    <td>优秀<span>1</span></td>');
    buf.append('    <td>良好<span>2</span></td>');
    buf.append('    <td>夜不归宿<span>3</span></td>');
    buf.append('    </tr>');
    buf.append('    </table>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>谈心情况</p><p>共3次</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <p>纳入实现--持续关注--状态稳定</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="clear"></div>');

    return buf.toString();
};


 /*****
 * 模块初始化页面
 * 根据ID 拼接即可
 * ***/ 
HtmlUntil.init2couTodo4Now= function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="height: 553px;" id="cou-todo-now">                                                             ' );
	buf.append('	<div class="header" id="cou-todo-now-header">                                                          ' );
	buf.append('	</div>                                                                                                 ' );
	buf.append('	<div id="cou-todo-now-tab-leave" class="item-tab item-tab-leave">                                      ' );
	buf.append('		<div id="cou-todo-now-tab-leave-header"></div>                                                     ' );
	buf.append('		<div class="content div-top-sm">                                                                   ' );
	buf.append('			<div id="cou-todo-now-tab-leave-tab-overdue" class="item-tab-son item-tab-son-overdue"></div>  ' );
	buf.append('			<div id="cou-todo-now-tab-leave-tab-report"  class="item-tab-son item-tab-son-report"></div>   ' );
	buf.append('			<div id="cou-todo-now-tab-leave-tab-ask" 	 class="item-tab-son item-tab-son-ask"></div>      ' );
	buf.append('			<div id="cou-todo-now-tab-leave-tab-extend"  class="item-tab-son item-tab-son-extend"></div>   ' );
	buf.append('		</div>                                                                                             ' );
	buf.append('	</div>                                                                                                 ' );
	buf.append('	<div id="cou-todo-now-tab-notice" class="item-tab item-tab-notice div-top-sm"> </div>                  ' );
	buf.append('	<div id="cou-todo-now-tab-conduct" class="item-tab item-tab-conduct div-top-sm"> </div>                ' );
	buf.append('</div>																										');

	$this.html(buf.toString());
};



/*****
 * 根据data 拼接list
 * 超期
 * ***/
HtmlUntil.couTodoNowLeave4Overdue= function(data){

	var buf = new StringBuffer();
	
	for(var i =0 ;i<data.length;i++){
		var obj = data[i];
		
		var mylocation ="";
		
		buf.append('<div class="stu-box stu-box-md" >' );
		buf.append('    <div class="stu-boxTop stu-boxTop-md"  sid="'+obj.id+'">');
		buf.append('        <div class="stu-photo stu-photo-md"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>');
		buf.append('            <p>手机号码:'+obj.tel+'</p>');
		buf.append('            <p>假期截止:'+obj.sdate+'</p>');
		buf.append('            <p class="stu-box-mid-delay-time">超期时长:'+obj.offday+'</p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		
		if(obj.location.extend.length > 0){
			mylocation = obj.location.extend[(obj.location.extend.length-1)].location;
		}else{
			mylocation = obj.location.ask;
		}
		
		buf.append('    <p>最近位置:'+mylocation+'</p>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-md-footer">');
		buf.append('        <button class="btn  btn-abj-primary stu-box-md-footer-btn">销假</button>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
}

/*****
 * 根据data 拼接list
 * 销假
 * ***/
HtmlUntil.couTodoNowLeave4Report= function(data){

	var buf = new StringBuffer();
	
	for(var i =0 ;i<data.length;i++){
		
		var obj = data[i];
		
		buf.append('<div class="stu-box stu-box-md">');
		buf.append('    <div class="stu-boxTop stu-boxTop-md" sid="'+obj.id+'">');
		buf.append('        <div class="stu-photo stu-photo-md"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>');
		buf.append('            <p>起始时间:'+obj.edate+' 20:16</p>');
		buf.append('            <p>截止时间:'+obj.sdate+'22:16</p>');
		buf.append('            <p>请假天数:<span class="stu-box-mid-delay-time">'+obj.offday+'</span><span style="padding-left:15px">在校</span></p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		buf.append('    <p>请假结束了</p>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-md-footer">');
		buf.append('        <button class="btn  btn-abj-danger stu-box-md-footer-btn">拒绝</button>');
		buf.append('        <button class="btn  btn-abj-primary stu-box-md-footer-btn">同意</button>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
}

/*****
 * 根据data 拼接list
 * 请假
 * ***/
HtmlUntil.couTodoNowLeave4Ask= function(data){

	var buf = new StringBuffer();
	
	for(var i =0 ;i<data.length;i++){
		
		var obj = data[i];
		
		buf.append('<div class="stu-box stu-box-md">');
		buf.append('    <div class="stu-boxTop stu-boxTop-md" sid="'+obj.id+'">');
		buf.append('        <div class="stu-photo stu-photo-md"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>');
		buf.append('            <p>起始时间:'+obj.edate+' 20:16</p>');
		buf.append('            <p>截止时间:'+obj.sdate+'22:16</p>');
		buf.append('            <p>请假天数:<span class="stu-box-mid-delay-time">'+obj.offday+'</span><span style="padding-left:15px">在校</span></p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		buf.append('    <p>'+obj.reason.ask+'</p>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-md-footer">');
		buf.append('        <button class="btn  btn-abj-danger stu-box-md-footer-btn">拒绝</button>');
		buf.append('        <button class="btn  btn-abj-primary stu-box-md-footer-btn">同意</button>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
}

/*****
 * 根据data 拼接list
 * 续假
 * ***/
HtmlUntil.couTodoNowLeave4Extend= function(data){

	var buf = new StringBuffer();
	
	for(var i =0 ;i<data.length;i++){
		
		var obj = data[i];
		
		buf.append('<div class="stu-box stu-box-md" >');
		buf.append('    <div class="stu-boxTop stu-boxTop-md" sid="'+obj.id+'">');
		buf.append('        <div class="stu-photo stu-photo-md"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>');
		buf.append('            <p>续假起始:'+obj.edate+' 20:16</p>');
		buf.append('            <p>续假截止:'+obj.sdate+'22:16</p>');
		buf.append('            <p>续假天数:<span class="stu-box-mid-delay-time">'+obj.offday+'</span><span style="padding-left:15px">在校</span></p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		buf.append('    <p>'+obj.reason.extend[0].reason+'</p>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-md-footer">');
		buf.append('        <button class="btn  btn-abj-danger stu-box-md-footer-btn">拒绝</button>');
		buf.append('        <button class="btn  btn-abj-primary stu-box-md-footer-btn">同意</button>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
 
	return buf.toString();	
 
}




/*****
 * 根据data 拼接list
 * 操行认定
 * ***/
HtmlUntil.couTodoNowConduct= function(data){

	var buf = new StringBuffer();
         
	for(var i =0 ;i< 5 ;i++){
		var obj = data[i];
		
		buf.append('<div class="stu-box">');
		buf.append('    <div class="stu-boxTop stu-boxTop-sm">');
		buf.append('        <div class="stu-photo"><img src="'+obj.mpic+'"></div>');
		buf.append('        <div class="stu-info">');
		buf.append('            <h4>'+obj.creator+'('+obj.cname+')</h4>');
		buf.append('            <p>事件名称:'+obj.aname+'</p>');
		buf.append('            <p>事件时间:'+obj.time+'<a>个人成长</a></p>');
		buf.append('        </div>');
		buf.append('        <div class="clear"></div>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-bottom">');
		buf.append('    <p>'+obj.notes+'</p>');
		buf.append('    </div>');
		buf.append('    <div class="stu-box-md-footer">');
		buf.append('        <button class="btn  btn-abj-danger stu-box-md-footer-btn">不通过</button>');
		buf.append('        <button class="btn  btn-abj-primary stu-box-md-footer-btn">通过</button>');
		buf.append('    </div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
}

/*****
 * 根据data 拼接list
 * 未读通知
 * ***/
HtmlUntil.couTodoNowNotice= function(data){

	var buf = new StringBuffer();
         
	for(var i =0 ;i< data.length;i++){
		var obj = data[i];
		buf.append('<div class="item-table-row item-table-row-point"  nid="'+obj.id+'">');
		buf.append('    <p class="item-table-row-title div-left-div">'+obj.title+'</p>');
		buf.append('    <p class="activity-badge item-table-row-type div-left-div">'+obj.type+'</p>');
		buf.append('    <p class="item-table-row-basic-info div-right-div">'+obj.teacher+obj.time+'</p>');
		buf.append('    <div class="clear"></div>');
		buf.append('</div>');
	}	
	return buf.toString();	
 
}
/*******
 * 转领导
 * ******* */
HtmlUntil.popup4Leave4Leader = function(data,success){
	var buf = new StringBuffer();
	var $this = $("#prop-page-modal");
	
	buf.append('<div class="container-fluid confirm-div"> ');
	buf.append('       <div class="row popup-page-div div-top-sm popup-4-text"> ');
	buf.append('        <textarea class="form-control" placeholder=""></textarea>');
	buf.append('       </div> ');
	buf.append('       	<div class="row">');
	buf.append('       		<div class="col-xs-4" style="padding-left:0"><span class="popup-page-div">转领导审批（非必填）:</span></div>');
	buf.append('       		<div class="col-xs-8" style="padding-left: 0">');
	buf.append('       			<ul class="ul-row ul-top" style="margin-left:-3px;margin-top:-2px;">');
	buf.append('	       			<li> <label> <input type="checkbox">&nbsp;&nbsp;李大</label></li>');
	buf.append('	       			<li> <label> <input type="checkbox">&nbsp;&nbsp;李大</label></li> ');
	buf.append('       			</ul>');
	buf.append('       		</div>');
	buf.append('       </div>');
	buf.append('       <div class="row popup-btn-div"> ');
	buf.append('        <span class="btn btn-abj-primary btn-sub"> 确定</span> ');
	buf.append('        <span class="btn btn-abj-default btn-cancel"> 取消</span> ');
	buf.append('       </div> ');
	buf.append('</div>');

	var obj = {title:"请销假审批",body:buf.toString()};
	HtmlUntilBase.popup4Page(obj);

	var checkValue = $this.find("input[checkbox]:checkbox").val();
	var params ={text:$this.find("textarea.text-value").val(),leader:"李丹丹"};

	$this.find("span.btn-sub").on("click",function(){ success(param)});
	$this.find("span.btn-cancel").on("click",function(){ $this.modal(hide);});

}

/*******
 *  请销假详情 之 销假
 * prop2report
 * ***/

HtmlUntil.couTodoNowLeaveProp2Report = function(data){

	var buf = new StringBuffer();

	buf.append('<div class="item-tab-prop-report-list">                        ');
	buf.append('	<div class="div-left-div ">                                 ');
	buf.append('		<b>销假位置：四川省-射洪县-磨西镇</b>                   ');
	buf.append('	</div>                                                     ');
	buf.append('	<div class="div-right-div">                                ');
	buf.append('		2016-06-12 14:20                                       ');
	buf.append('	</div>                                                     ');
	buf.append('	<div class="clear"></div>                                  ');
	buf.append('	<div class="prop-tab-box-leave-pic div-top-sm">                       ');
	buf.append('		<img src="../../resource/img/base/map.png">  ');
	buf.append('	</div>                                                     ');
	buf.append('</div>                                                         ');
	buf.append('<div class="container-fluid confirm-div">                      ');
	buf.append('	<div class="row popup-btn-div">                            ');
	buf.append('		<span class="btn btn-abj-primary "> 同意</span>');
	buf.append('		<span class="btn btn-abj-danger "> 拒绝</span>      ');
	buf.append('	</div>                                                     ');
	buf.append('</div>                                                         ');

	return buf.toString();
};


/*******
 *  请销假详情 之  请假信息（请假+续假集合）
 * couTodoNowLeaveProp2Ask
 * ***/

HtmlUntil.couTodoNowLeaveProp2Ask = function(data){

	var buf = new StringBuffer();
	var obj = data;

	buf.append('<div class="leave-info-box">                                                                                 ');
	buf.append('    <div class="stu-boxTop leave-info-box-top">                                                              ');
	buf.append('        <div class="stu-photo"><img src="'+obj.mpic+'"></div>                         ');
	buf.append('        <div class="stu-info">                                                                               ');
	buf.append('            <h4>'+obj.name+'('+obj.cname+')</h4>                                                                   ');
	buf.append('            <p>电话号码:'+obj.tel+'</p>                                                                       ');
	buf.append('            <p>紧急联系人:'+obj.pname+'&nbsp;&nbsp;'+obj.ptel+'</p>                                                  ');
	buf.append('        </div>                                                                                               ');
	buf.append('        <div class="clear"></div>                                                                            ');
	buf.append('        <div class="leave-info-box-top-note">已销假</div>                                                    ');
	buf.append('    </div>                                                                                                   ');
	buf.append('    <div class="leave-info-box-bottom">                                                                      ');
	buf.append('        <div class="item-tab-prop-ask-list-detail">                                                          ');
	buf.append('            <b>请假时间:2015-06-12 15:30~2015-06-13 16:30 共<span class="color-light-blue">1.2</span>天</b>  ');
	buf.append('            <p>请假目的:看病</p>                                                                             ');
	buf.append('            <p>目的地:成都市-金牛区</p>                                                                      ');
	buf.append('            <p class="leave-infor-reason">身体不舒服,要去医院检查一下,一生说要定期复查</p>                   ');
	buf.append('            <div class="leave-info-box-pic">                                                                 ');
	
	for(var i =0 ;i<obj.pic.ask.length;i++){
		buf.append('                <img src="'+obj.pic.ask[i].url+'">                                              ');
	}
	
	buf.append('            </div>                                                                                           ');
	buf.append('            <div class="item-tab-prop-ask-list-detail-status-tag">离校</div>                                 ');
	buf.append('            <div class="item-tab-prop-ask-list-detail-reason-tag">病假</div>                                 ');
	buf.append('        </div>                                                                                               ');
	
	if(obj.pic.extend.length > 0){
			
		buf.append('        <div class="item-tab-prop-ask-list-extend">                                                          ');
		buf.append('            <b>续假时间:2015-06-12 15:30~2015-06-13 16:30 共<span class="color-light-blue">1.2</span>天</b>  ');
		buf.append('            <p class="leave-infor-reason">身体不舒服,要去医院检查一下,一生说要定期复查</p>                   ');
		buf.append('            <div class="leave-info-box-pic">                                                                 ');
		for(var i =0 ;i<obj.pic.ask.length;i++){
			buf.append('                <img src="'+obj.pic.extend[0].url+'">                                              ');
		}
		buf.append('            </div>                                                                                           ');
		buf.append('        </div>                                                                                               ');
		buf.append('    </div>                                                                                                   ');
		
	}

	buf.append('<div class="container-fluid confirm-div">                      ');
	buf.append('	<div class="row popup-btn-div">                            ');
	buf.append('		<span class="btn btn-abj-primary"> 同意</span>');
	buf.append('		<span class="btn btn-abj-danger"> 拒绝</span>      ');
	buf.append('	</div>                                                     ');
	buf.append('</div>                                                         ');
	buf.append('</div>                                                                                                       ');


	return buf.toString();
}


/*******
 *  请销假详情 之  审批记录
 * couTodoNowLeaveProp2Audit
 * ***/

HtmlUntil.couTodoNowLeaveProp2Audit = function(data){

	var buf = new StringBuffer();

	buf.append('<div class="prop-table-div">                                        ');
	buf.append('	<table>                                                         ');
	buf.append('		<tr>                                                        ');
	buf.append('			<td class="prop-table-div-title">李克勤</td>            ');
	buf.append('			<td class="prop-table-div-info">提交请假申请</td>       ');
	buf.append('			<td class="prop-table-div-time">2015-09-02 15:30</td>   ');
	buf.append('		</tr>                                                       ');
	buf.append('	</table>                                                        ');
	buf.append('</div>                                                              ');

	return buf.toString();
}

/*============================未读通知========================================*/

 /*****
 * 根据data 拼接list
 * 我发送的通知
 * ***/
HtmlUntil.couTodoNowNotice4Article = function(data){

	var buf = new StringBuffer();
	var obj = data;

	buf.append('<div class="artice-reports-preview-box">');
	buf.append('    <div class="article-box-header">');
	buf.append('        <h4>'+obj.title+'</h4>');
	buf.append('        <div class="article-box-header-basic-info artice-reports-preview-box-header">');
	buf.append('            <div class="div-left-div"><p style="color:#999">'+obj.info+'</p></div>');
	buf.append('            <div class="div-left-div">');
	buf.append('                <p class="activity-badge receive-reports-type">'+obj.type+'</p>');
	buf.append('            </div>');
	buf.append('            <div class="clear"></div>');
	buf.append('        </div>');
	buf.append('    </div>');
	buf.append('    <div class="article-box-content">');
	buf.append('        <p>');
	buf.append('            '+obj.content+'');
	buf.append('        </p>');
	buf.append('        <div class="artice-reports-preview-box-content-pic-box">');
	for(var i =0 ;i<obj.pic.length ;i++){
		buf.append('            <img src="'+obj.pic[i].url+'">');
	}
	buf.append('            <div class="clear"></div>');
	buf.append('        </div>');
	buf.append('    </div>');
	buf.append('</div>');

	return buf.toString();

};
 /***************续假*******************/
 HtmlUntil.couTodoNowLeaveProp2Extend = function(data){

 var buf = new StringBuffer();
 buf.append('        <div class="item-tab-prop-ask-list-extend">                                                          ');
 buf.append('            <b>续假时间:2015-06-12 15:30~2015-06-13 16:30 共<span class="color-light-blue">1.2</span>天</b>  ');
 buf.append('            <p class="leave-infor-reason">身体不舒服,要去医院检查一下,一生说要定期复查</p>                   ');
 buf.append('            <div class="leave-info-box-pic">                                                                 ');
 buf.append('                <img src="http://www.gsw88.com/file/upload/201507/01/23-23-47-60-1084.jpg">                                              ');
 buf.append('            </div>                                                                                           ');
 buf.append('        </div>                                                                                               ');
	 buf.append('<div class="container-fluid confirm-div">                      ');
	 buf.append('	<div class="row popup-btn-div">                            ');
	 buf.append('		<span class="btn btn-abj-primary "> 同意</span>');
	 buf.append('		<span class="btn btn-abj-danger "> 拒绝</span>      ');
	 buf.append('	</div>                                                     ');
	 buf.append('</div>                                                         ');
	 return buf.toString();

 };

/*******************操行认定***********************/
HtmlUntil.popup4Conduct4Confirm = function(data){

	var buf = new StringBuffer();

	buf.append('	<div class="conduct-confirm-selects">');
	buf.append('		<select class="form-control">');
	buf.append('			<option>操行分类</option>');
	buf.append('		</select>');
	buf.append('		<select class="form-control">');
	buf.append('			<option>二级分类</option>');
	buf.append('		</select>');
	buf.append('		<input type="input" class="form-control" placeholder="输入分值">');
	buf.append('	</div>');
	buf.append('	<div class="container-fluid confirm-div">');
	buf.append('		<div class="row popup-btn-div conduct-confirm-btn-div">');
	buf.append('			<span class="btn btn-abj-primary btn-sub"> 保存</span>');
	buf.append('			<span class="btn btn-abj-default btn-cancel">取消</span>');
	buf.append('		</div>');
	buf.append('	</div>');
	
	return buf.toString();

};