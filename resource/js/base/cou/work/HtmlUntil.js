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
