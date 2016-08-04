var pageInfo ={};
pageInfo.init = function() {

    var pageObj = new Object;//
    
    var  serach4GeneralId = "cou-general-tas-header";
    pageObj.init4main = function(){
        var table4GeneralId   = "cou-general-tas-tab-main";
        var $table4General    = $("#"+table4GeneralId);
        var  datalist       = [];
        $table4General.bootstrapTable({
            pagination:true,
            columns: [
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name" ,    },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"性别"		,field:"sex",},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,	 field:"class",  	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"政治面貌"	,field:"politic" , 	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"民族"	,field:"nation",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"职务"	,field:"duty" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"特殊情况"	,field:"special",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"请假"	,	 field:"leave" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"缺勤"	,	 field:"absence" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"宿舍情况"	,field:"dormScore" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"谈心状态"	,field:"talk",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操行"	,	 field:"conduct" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"签到率"	,	 field:"sign" ,  },
            ]
        });
        var callback = function(data){
            $table4General.bootstrapTable("load",data);
        };
        GeneralRequest.getStu(callback);

        $("#cou-general-tas-tab-main").delegate("tbody tr","click",function(){
            var index = $(this).attr("data-index");
            var buf = new StringBuffer();
            buf.append('<div class="item-tab-prop item-tab-prop-stu" id="cou-general-tas-modal-stu"> </div>');
            buf.append('<div class="item-tab-prop item-tab-prop-family" 	  id="cou-general-tas-modal-family"> </div>');
            buf.append('<div class="item-tab-prop item-tab-prop-school"  id="cou-general-tas-modal-school"> </div>');
            
            
            var callback = function(data){
                var datus=data[index];
                var obj = {title:[{name:"学生档案",value:"stu"},{name:"家庭信息",value:"family"},{name:"在校表现",value:"school"}],body:buf.toString(),width:"542px"};
                var callbackobj = {};
                callbackobj.init4prop2stu = function(){
                    $("#cou-general-tas-modal-stu").html(HtmlUntil.couGeneralTasModalStu(datus));
                };
                callbackobj.init4prop2family = function(){
                    $("#cou-general-tas-modal-family").html(HtmlUntil.couGeneralTasModalFamily(datus));
                };
                callbackobj.init4prop2school = function(){
                    $("#cou-general-tas-modal-school").html(HtmlUntil.couGeneralTasModalSchool(datus));
                };

                HtmlUntilBase.popup4PageList(obj,callbackobj);
            };
            GeneralRequest.getGeneral4Id(callback)
        })

    };

    pageObj.init4pub = function(){
        HtmlUntil.init2couGeneral4Tas(layout.id4Center2tas);
        var headSelect 	 = [[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"姓名/学号",value:"todo"},{name:"张鑫",value:"todo"}]];
        HtmlUntilBase.from4Select(serach4GeneralId,headSelect);
        
        pageObj.init4main();
    };
 	pageObj.init4pub();
    $("#cou-general-tas-search-btn").on("click",function(){
        $("#cou-cou-general-tas-search").slideToggle(300);
    })
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4tas.push({id:"cou-general-tas",obj:pageInfo});