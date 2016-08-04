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