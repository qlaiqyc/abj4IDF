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





