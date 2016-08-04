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



