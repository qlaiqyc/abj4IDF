var pageInfo = {};

pageInfo.init = function() {
    var pageObj    = new Object;//
	var id4main    = "cou-class-manage";

   pageObj.init4main = function(){
   	    var $title     = $("#"+"cou-class-manager-tab-stu-title");
    	var $cname     = $("#"+"cou-class-manager-tab-cname-body");
   		var $info      = $("#"+"cou-class-manager-tab-stu-body-table-info");
   		var $thisTable = $("#"+"cou-class-manager-tab-stu-table");
   		var id4help    = "cou-class-manager-tab-stu-title-right";
   		var id4class   = "cou-class-manager-tab-cname-title";
	   	var tableFun   = {};
	   	
	    tableFun.tabelFormatterOP = function (value, row, index) {
	
	        var update = '<a   title="修改" href="#" ><i class="glyphicon  glyphicon-pencil"></i></a>';
	        var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';
	        var refresh    = '<a   title="刷新" href="#" ><i class="glyphicon glyphicon-repeat"></i></a>';
	        var lock    = '<a   title="锁定" href="#" ><i class="glyphicon glyphicon-lock"></i></a>';
	        return [( update+del+refresh+lock )].join('');
	    };
	
	    tableFun.tableFormatterCommissioner = function(value, row, index){ 
	    	var utype = [{name:"班长",value:""},{name:"学习委员",value:""},{name:"劳动委员",value:""}];
	    	
	    	var buf = new StringBuffer();
	    	
	    	buf.append('<select class="form-control">');
	    	buf.append('	<option >-选择班委-</option> ');
	    	
	    	for(var i =0 ;i<utype.length ;i++){
	    		
	    		if(utype[i].name == value){
	    			 buf.append('<option selected>'+utype[i].name+'</option>')
	    		}else{
	    			buf.append('<option>'+utype[i].name+'</option>');
	    		}
	    	}
	    	
	    	buf.append('</select>');
	    	
	        return [buf.toString()].join("");
	    };
	    tableFun.tableFormatterMark=function(value, row, index){
	    	//ption><option>贫困学生</option><option>孤残学生</option><option>烈士子女</option>
	        var mark="<input class='form-control  cou-class-select-tag'  placeholder='点击标注'>";
	        return mark;
	    };
	    
	    tableFun.tableFormatterAssistant=function(value, row, index){
	    	var buf = new StringBuffer();
	    	
	    	if(value == 1){
	    		buf.append('<div class="cou-class-manager-tab-stu-add-commisioner" style="height: 30px;"></div>');
	    	}
	    	
	        return buf.toString();
	    };
	    
	    var callback = function(data){
	    	$cname.html(HtmlUntil.couClassTabCname4Manage(data));
	    	
	    	$cname.find("div.cou-class-manager-tab-cname-list :first").trigger("click");
	    	
	    };
	    
	    UserRequest.getClass("",callback);
	    
	    $info.html(HtmlUntil.couClassTab4Info4Manager(""));
	
	    $thisTable.bootstrapTable({
	        pagination:true,
	        columns: [
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:"设置班助",    		field:"assistant"  ,formatter:tableFun.tableFormatterAssistant   },
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 班委",   		field:"commissioner",formatter:tableFun.tableFormatterCommissioner},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 重点标记",   	field:"mark",formatter:tableFun.tableFormatterMark},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 学号",   		field:"No"},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 姓名", 			field:"name" 	},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 性别",   		field:"sex"  	},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 宿舍",			field:"drom"	},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 个人手机",	 	field:"tel" },
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 家长电话",	 	field:"parentsTel"},
	            {sortable: true, valign:"middle" ,align: 'center'  ,title:" 功能操作",formatter: tableFun.tabelFormatterOP}
	
	        ]
	    });
	  
	    var $Classs    = $("#"+id4class)
	    
	    $Classs.find("a.cou-class-addclass").on("click",function(){
	        var obj = {title:"添加班级",body:HtmlUntil.couClassAdd4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	
	    $title.find("li#cou-class-manager-tab-stu-model-add-btn").on("click",function(){
	        var obj = {title:"添加学生",body:HtmlUntil.couClassTabStuModelAdd4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	    
	    $("#"+id4help).on("click",function(){
	        var obj = {title:"协同管理辅导员（基础数学2016-01班）",body:HtmlUntil.couClassHelp4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	    
	    
	    $title.find("li#cou-class-manager-tab-stu-model-import4photo-btn").on("click",function(){
	        var obj = {title:"导入学生头像",body:HtmlUntil.couClassTabStuModelImport4Photo4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-add-select-file-btn","click",function(){
	        $("input[id=cou-class-manager-tab-stu-model-add-select-file]").click();
	    });
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-add-select-file","change",function(){
	        $("#cou-class-manager-tab-stu-model-add-select-file-cover").val($(this).val());
	    });
	    $("#"+id4main).delegate("div.cou-class-manager-tab-stu-model-add-photo-delete","click",function(){
	        if(confirm("确认删除么?"))   $(this).closest(".cou-class-manager-tab-stu-model-add-photo").remove();
	    });
	    /*****导入学生弹出框*****/
	    $title.find("li#cou-class-manager-tab-stu-model-import4stu-btn").on("click",function(){
	        var obj = {title:"添加学生",body:HtmlUntil.couClassTabStuModelImport4Stu4Manage(""),width:"541px"};
	        HtmlUntilBase.popup4Page(obj);
	    });
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-import4stu-select-file-btn","click",function(){
	        $("input[id=cou-class-manager-tab-stu-model-import4stu-select-file]").click();
	    });
	    $("#"+id4main).delegate("#cou-class-manager-tab-stu-model-import4stu-select-file","change",function(){
	        $("#cou-class-manager-tab-stu-model-import4stu-select-file-cover").val($(this).val());
	    });
		
		$("#"+id4main).delegate("input.cou-class-select-tag","click",function(){
			 var obj ={title:"重点标注",body:HtmlUntil.couClass4propType4Manager(""),width:"400px"};
			 HtmlUntilBase.popup4Page(obj);
		});
		
	   $cname.delegate("div.cou-class-manager-tab-cname-list","click",function(){
	   		var cid = $(this).attr("cid");
	   		var callback = function(data){
	   		 	$thisTable.bootstrapTable("load",data);
	  		};
	   		UserRequest.getStu4Cid({cid:cid},callback); 
	   		
	   		 $cname.find("div.cou-class-manager-tab-cname-list").removeClass('bg-color-gray').find("input").removeClass('bg-color-gray').addClass('bg-color-white');
	   		$(this).addClass("bg-color-gray").find("input").addClass('bg-color-gray').removeClass('bg-color-white');
	   		
	   }).delegate("div.cou-class-manager-tab-cname-list","mouseover",function(){
		   $("a.cou-class-manager-tab-cname-set-btn").addClass("display-none");
		   $(this).children("a.cou-class-manager-tab-cname-set-btn").removeClass("display-none");
	   }).delegate("div.cou-class-manager-tab-cname-list","mouseout",function(){
		   $("a.cou-class-manager-tab-cname-set-btn").addClass("display-none");
	   });


	   $cname.delegate("a.cou-class-manager-tab-cname-set-btn","click",function(){
		   $(this).next().slideToggle();
	   });


	   $cname.delegate("a.cou-class-manager-tab-cname-reset","click",function(){
		   $(this).closest("div.cou-class-manager-tab-cname-set-detail").hide();
	   		var obj = {title:"修改班级",body:HtmlUntil.couClassAdd4Manage(""),width:"541px"};
	       	HtmlUntilBase.popup4Page(obj);
	   });
	 	
	   $cname.delegate("a.cou-class-manager-tab-cname-set-delete","click",function() {
	        var $this=$(this).closest("div.cou-class-manager-tab-cname-list");
	        if(confirm("确定删除么?")){
	            $this.remove();
	        }
	    });
	    
	    $thisTable.delegate("tbody tr td:first-child","click",function(){
	        if($(this).hasClass("ou-class-manager-tab-stu-add-commisioner")){
	            $(this).removeClass("ou-class-manager-tab-stu-add-commisioner");
	        }else{
	            $(this).addClass("ou-class-manager-tab-stu-add-commisioner");
	        }
	    });
		
		$thisTable.delegate("i.glyphicon-pencil","click",function(){
			var obj = {title:"修改学生信息",body:HtmlUntil.couClassTabStuModelModify4Manage(""),width:"600px"};
	        HtmlUntilBase.popup4Page(obj);
		});
		
		 
   };
   
   pageObj.init4pub = function(){
   		HtmlUntil.init2couClass4Manager(layout.id4Center2manager);
   		
   		pageObj.init4main();
   };
	pageObj.init4pub();
};
 //BaseUntil.pageInit(pageInfo);
pageInfoList4manager.push({id:"cou-class-manager",obj:pageInfo})


