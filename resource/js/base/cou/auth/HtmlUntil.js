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