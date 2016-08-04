HtmlUntil.init2couLeave4Affair  = function(id){
	var $this = $("#"+id);
	var buf = new StringBuffer();
	
	buf.append('<div style="min-height: 555px;" id="cou-leave-affairas">                                                    ' );
	buf.append('			<div class="header" id="cou-leave-affairas-header">                                                        ' );
	buf.append('			</div>                                                                                                     ' );
	buf.append('			<div id="cou-leave-affairs-tab-manage" class="item-tab item-tab-manage">                                   ' );
	buf.append('				<div id="cou-leave-affairas-search-manage"> </div>                                                     ' );
	buf.append('				<div class="content">                                                                                  ' );
	buf.append('					<table id="table-status"></table>                                                                  ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('			</div>                                                                                                     ' );
	buf.append('			<div id="cou-leave-affairs-tab-count" class="item-tab item-tab-count">                                     ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-header"></div>                                                    ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-tab-class" 		  class="item-tab-son item-tab-son-class">     ' );
	buf.append('					<div id="cou-leave-affairas-search-count-class"> </div>                                            ' );
	buf.append('					<div class="content">                                                                              ' );
	buf.append('						<div id="cou-leave-affairs-tab-count-tab-char-class"></div>                                    ' );
	buf.append('					</div>                                                                                             ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-tab-type" class="item-tab-son item-tab-son-type">                 ' );
	buf.append('					<div id="cou-leave-affairas-search-count-type"> </div>                                             ' );
	buf.append('					<div class="content">                                                                              ' );
	buf.append('						<div id="cou-leave-affairs-tab-count-tab-char-type" ></div>                                    ' );
	buf.append('					</div>                                                                                             ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('				<div id="cou-leave-affairs-tab-count-tab-goal" class="item-tab-son item-tab-son-goal">                 ' );
	buf.append('					 <div id="cou-leave-affairas-search-count-goal"> </div>                                            ' );
	buf.append('					 <div class="content">                                                                             ' );
	buf.append('					 	<div id="cou-leave-affairs-tab-count-tab-char-goal" ></div>                                    ' );
	buf.append('					 </div>                                                                                            ' );
	buf.append('				</div>                                                                                                 ' );
	buf.append('			</div>                                                                                                     ' );
	buf.append('</div>																													');
	
	$this.html(buf.toString());
};






/*******
 *  ��������� ֮  �����Ϣ�����+��ټ��ϣ�
 * couTodoNowLeaveProp2Ask
 * ***/

HtmlUntil.couTodoNowLeaveProp2Ask = function(data){

	var buf = new StringBuffer();

	buf.append('<div class="leave-info-box">                                                                                 ');
	buf.append('    <div class="stu-boxTop leave-info-box-top">                                                              ');
	buf.append('        <div class="stu-photo"><img src="../../resource/img/test/student_03.png"></div>                         ');
	buf.append('        <div class="stu-info">                                                                               ');
	buf.append('            <h4>������(2016�����3��)</h4>                                                                   ');
	buf.append('            <p>�绰����:1350012345</p>                                                                       ');
	buf.append('            <p>������ϵ��:�ž�1350012345 ����1350012345</p>                                                  ');
	buf.append('        </div>                                                                                               ');
	buf.append('        <div class="clear"></div>                                                                            ');
	buf.append('        <div class="leave-info-box-top-note">�����</div>                                                    ');
	buf.append('    </div>                                                                                                   ');
	buf.append('    <div class="leave-info-box-bottom">                                                                      ');
	buf.append('        <div class="item-tab-prop-ask-list-detail">                                                          ');
	buf.append('            <b>���ʱ��:2015-06-12 15:30~2015-06-13 16:30 ��<span class="color-light-blue">1.2</span>��</b>  ');
	buf.append('            <p>���Ŀ��:����</p>                                                                             ');
	buf.append('            <p>Ŀ�ĵ�:�ɶ���-��ţ��</p>                                                                      ');
	buf.append('            <p class="leave-infor-reason">���岻���,ҪȥҽԺ���һ��,һ��˵Ҫ���ڸ���</p>                   ');
	buf.append('            <div class="leave-info-box-pic">                                                                 ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('            </div>                                                                                           ');
	buf.append('            <div class="item-tab-prop-ask-list-detail-status-tag">��У</div>                                 ');
	buf.append('            <div class="item-tab-prop-ask-list-detail-reason-tag">����</div>                                 ');
	buf.append('        </div>                                                                                               ');
	buf.append('        <div class="item-tab-prop-ask-list-extend">                                                          ');
	buf.append('            <b>���ʱ��:2015-06-12 15:30~2015-06-13 16:30 ��<span class="color-light-blue">1.2</span>��</b>  ');
	buf.append('            <p class="leave-infor-reason">���岻���,ҪȥҽԺ���һ��,һ��˵Ҫ���ڸ���</p>                   ');
	buf.append('            <div class="leave-info-box-pic">                                                                 ');
	buf.append('                <img src="../../resource/img/test/student_03.png">                                              ');
	buf.append('            </div>                                                                                           ');
	buf.append('        </div>                                                                                               ');
	buf.append('    </div>                                                                                                   ');
	buf.append('<div class="container-fluid confirm-div">                      ');
	buf.append('	<div class="row popup-btn-div">                            ');
	buf.append('		<span class="btn bg-color-gray btn-info btn-darkBlue"> ͬ��</span>');
	buf.append('		<span class="btn bg-primary btn-danger btn-darkRed"> �ܾ�</span>      ');
	buf.append('	</div>                                                     ');
	buf.append('</div>                                                         ');
	buf.append('</div>                                                                                                       ');


	return buf.toString();
};

/*******
 *  ��������� ֮  �����¼
 * couTodoNowLeaveProp2Audit
 * ***/

HtmlUntil.couTodoNowLeaveProp2Audit = function(data){

	var buf = new StringBuffer();

	buf.append('<div class="prop-table-div">                                        ');
	buf.append('	<table>                                                         ');
	buf.append('		<tr>                                                        ');
	buf.append('			<td class="prop-table-div-title">�����</td>            ');
	buf.append('			<td class="prop-table-div-info">�ύ�������</td>       ');
	buf.append('			<td class="prop-table-div-time">2015-09-02 15:30</td>   ');
	buf.append('		</tr>                                                       ');
	buf.append('	</table>                                                        ');
	buf.append('</div>                                                              ');

	return buf.toString();
};



/*发通知 */

HtmlUntil.couLeave4Supply  = function(data){
	
	var buf = new StringBuffer();
	
	buf.append('  <div class="div-compensatory-leave">                                                                                                              ');
	buf.append('   <div class="compensatory-leave-select-students">                                                                                                 ');
	buf.append('    <ul class="ul-row padding-no">                                                                                                                  ');
	buf.append('     <li class="padding-md "> <img src="../../resource/img/test/student_03.png" alt="..." />                                                         ');
	buf.append('      <div class="div-center-p div-clear">                                                                                                          ');
	buf.append('        张三                                                                                                                                        ');
	buf.append('      </div> </li>                                                                                                                                  ');
	buf.append('     <li id="compensatory-leave-add-student" class="padding-md cursor-p compensatory-leave-add-student"> <img src="../../resource/img/base/add_icon.png" />  ');
	buf.append('      <div class="compensatory-leave-add-student-label">                                                                                            ');
	buf.append('       选择学生                                                                                                                                     ');
	buf.append('      </div> </li>                                                                                                                                  ');
	buf.append('     <div class="clear"></div>                                                                                                                      ');
	buf.append('    </ul>                                                                                                                                           ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-select-time">                                                                                                     ');
	buf.append('    <input type="text" class="form-control float-left" style="width:48%" placeholder="选择开始时间" />                                              ');
	buf.append('    <input type="text" class="form-control float-right" style="width:48%" placeholder="选择结束时间" />                                             ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-select-type">                                                                                                     ');
	buf.append('     请选择请假类型:                                                                                                                                ');
	buf.append('    <input type="checkbox" />事假                                                                                                                   ');
	buf.append('    <input type="checkbox" />病假                                                                                                                   ');
	buf.append('    <input type="checkbox" />周末                                                                                                                   ');
	buf.append('    <input type="checkbox" />节假日                                                                                                                 ');
	buf.append('    <input type="checkbox" />公事                                                                                                                   ');
	buf.append('    <input type="checkbox" />其他                                                                                                                   ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-input-reason">                                                                                                    ');
	buf.append('    <textarea class="form-control" placeholder="请输入请假原因"></textarea>                                                                         ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="compensatory-leave-upload-certificate">                                                                                              ');
	buf.append('    <div class="row form-popup-sm">                                                                                                                 ');
	buf.append('     <div class="col-xs-12">                                                                                                                        ');
	buf.append('      <input type="file" id="cou-conduct-affairas-edit-form-uploadfile" class="block-hide" />                                                       ');
	buf.append('      <span class="btn btn-default"> 上传证明文件</span> (图片问png jpg 格式）                                                                      ');
	buf.append('     </div>                                                                                                                                         ');
	buf.append('    </div>                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('   <div class="container-fluid confirm-div">                                                                                                        ');
	buf.append('    <div class="row popup-btn-div">                                                                                                                 ');
	buf.append('     <span class="btn btn-abj-primary btn-sub"> 保存</span>                                                                                              ');
	buf.append('    </div>                                                                                                                                          ');
	buf.append('   </div>                                                                                                                                           ');
	buf.append('  </div> 																																			');											
		
		 
	return buf.toString();
	
};