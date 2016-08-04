 

HtmlUntil.init2couGeneral4Tas = function(id){

  	var $this = $("#"+id);
 	var buf = new StringBuffer();

     buf.append('   <div style="min-height:553px" id="cou-general-tas">');
     buf.append('   <div id="cou-general-tas-search-btn"><p><i class="glyphicon glyphicon-filter"></i>筛选</p></div>');
     buf.append('   <div class="header nav-tabs" id="cou-general-tas-header"></div>');
     buf.append('   <div id="cou-cou-general-tas-search">');
     buf.append('   <p>特殊情况:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <p>政治面貌:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <p>民族/班干部:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <p>操行情况:</p><select class="form-control"><option>全部</option></select>');
     buf.append('   <span class="form-control btn btn-abj-primary">确定</span>');
     buf.append('   </div>');
     buf.append('   <table id="cou-general-tas-tab-main">');
     buf.append('   </table>');
     buf.append('   </div>');

    	$this.html(buf.toString());
};
HtmlUntil.couGeneralTasModalStu= function(data) {

    var buf = new StringBuffer();

     buf.append('   <div id="cou-general-tas-modal-stu-tab-header" class="cou-self-affairs-header cou-general-tas-modal-header">');
     buf.append('   <div class="cou-self-affairs-header-photo"><img src="'+data.rImage+'"></div>');
     buf.append('   <div class="cou-self-affairs-header-detail">');
     buf.append('   <p><span class="cou-self-affairs-header-detail-name">'+data.name+'(2015091021)</span><span>'+data.sex+'</span><span>21岁</span><span>'+data.nation+'</span></p>');
     buf.append('   <p><span>'+data.class+'</span><span>宿舍:'+data.dormNo+'</span></p>');
     buf.append('   <p style="font-size:12px"><span class="border-span-label">贫困生</span><span class="border-span-label">孤残学生</span><span class="border-span-label">烈士子女</span></p>');
     buf.append('   </div>');
     buf.append('   </div>');
     buf.append('   <div id="cou-general-tas-modal-stu-tab-info" class="cou-self-affairs-tab-info cou-general-tas-modal-info"> ');
     buf.append('   <div id="cou-self-affairs-tab-info-tab-self" class="item-tab-son item-tab-son-self cou-self-affairs-tab-item"> ');
     buf.append('   <div class="cou-self-affairs-tab-info-content cou-general-tas-modal-info-content">  ');
     buf.append('   <p>院系:计算机学院</p> ');
     buf.append('   <p>出生年月:1995年5月25日</p> ');
     buf.append('   <p>政治面貌:预备党员</p> ');
     buf.append('   <p>职务:学生会主席</p>   ');
     buf.append('   <p>邮箱:12345@qq.com</p>   ');
     buf.append('   <p>微信:12345</p>   ');
     buf.append('   </div>  ');
     buf.append('   <div class="cou-self-affairs-tab-info-content cou-general-tas-modal-info-content">  ');
     buf.append('   <p>学号:5123123132</p>    ');
     buf.append('   <p>身份证号:510123467889</p>       ');
     buf.append('   <p>手机号:1331234567</p>          ');
     buf.append('   <p>高考考号:10010014</p>  ');
     buf.append('   <p>QQ号码:12345</p>   ');
     buf.append('   <p>兴趣爱好:听歌</p>     ');
     buf.append('   </div>             ');
     buf.append('   </div>      ');
     buf.append('   </div>      ');
    
    return buf.toString();
};

HtmlUntil.couGeneralTasModalFamily= function(data) {

    var buf = new StringBuffer();
    
    buf.append('    <div id="cou-general-tas-modal-family-tab">');
    buf.append('    <div id="cou-general-tas-modal-family-tab-header" class="cou-general-tas-modal-family-tab-header">');
    buf.append('    <p>家庭住址:'+data.add+'</p>');
    buf.append('    <p>经济情况:贫困</p>');
    buf.append('    </div>');
    buf.append('    <div id="cou-general-tas-modal-family-tab-info" class="cou-general-tas-modal-family-tab-info">');
    buf.append('    <div class="cou-general-tas-modal-family-tab-family">');
    buf.append('    <p>姓名:'+data.fa+'(父子)</p>');
    buf.append('    <p>联系电话:13555555555</p>');
    buf.append('    <p>工作单位:四川省人民政府</p>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-family-tab-family">');
    buf.append('    <p>姓名:'+data.ma+'(母子)</p>');
    buf.append('    <p>联系电话:13555555555</p>');
    buf.append('    <p>工作单位:四川省人民政府</p>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-family-tab-family">');
    buf.append('    <p>姓名:'+data.bro+'(兄弟)</p>');
    buf.append('    <p>联系电话:13555555555</p>');
    buf.append('    <p>工作单位:四川省人民政府</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="clear"></div>');
    buf.append('    </div>');


    return buf.toString();
};

HtmlUntil.couGeneralTasModalSchool= function(data) {

    var buf = new StringBuffer();

    buf.append('    <div id="cou-general-tas-modal-school-tab-info" class="cou-general-tas-modal-school-tab-info">');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>请假情况</p><p>请假15次,2次超期</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <table>');
    buf.append('    <tr>');
    buf.append('    <td>事假<span>1</span></td>');
    buf.append('    <td>病假<span>2</span></td>');
    buf.append('    <td>周末<span>1</span></td>');
    buf.append('    </tr>');
    buf.append('    <tr>');
    buf.append('    <td>公干<span>1</span></td>');
    buf.append('    <td>节假日<span>1</span></td>');
    buf.append('    <td>其他<span>1</span></td>');
    buf.append('    </tr>');
    buf.append('    </table>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>缺勤情况</p><p>请假8次,处分15分</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <table>');
    buf.append('    <tr>');
    buf.append('    <td>早操<span>3</span></td>');
    buf.append('    <td>早自习<span>1</span></td>');
    buf.append('    <td>上课<span>2</span></td>');
    buf.append('    </tr>');
    buf.append('    <tr>');
    buf.append('    <td>晚自习<span>1</span></td>');
    buf.append('    <td>晚寝<span>1</span></td>');
    buf.append('    <td></td>');
    buf.append('    </tr>');
    buf.append('    </table>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>操行情况</p><p>操行75分,优秀</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <p>加分操行:<span>5</span>次,共加<span>20</span>分</p>');
    buf.append('    <p>减分操行:1次,共减2分</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>签到情况</p><p>签到率86%</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <p>签到<span>56</span>次,未签到<span>32</span>次</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>宿舍情况</p><p>平均分78分</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content appearance-content-dorm">');
    buf.append('    <table>');
    buf.append('    <tr>');
    buf.append('    <td>优秀<span>1</span></td>');
    buf.append('    <td>良好<span>2</span></td>');
    buf.append('    <td>夜不归宿<span>3</span></td>');
    buf.append('    </tr>');
    buf.append('    </table>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="cou-general-tas-modal-school-tab-appearance">');
    buf.append('    <div class="appearance-title">');
    buf.append('    <p>谈心情况</p><p>共3次</p>');
    buf.append('    </div>');
    buf.append('    <div class="appearance-content">');
    buf.append('    <p>纳入实现--持续关注--状态稳定</p>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    </div>');
    buf.append('    <div class="clear"></div>');

    return buf.toString();
};

