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