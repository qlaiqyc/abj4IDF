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


