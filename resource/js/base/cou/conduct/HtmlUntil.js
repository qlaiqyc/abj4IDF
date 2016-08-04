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