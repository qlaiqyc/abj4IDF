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
