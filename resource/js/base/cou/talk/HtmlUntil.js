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