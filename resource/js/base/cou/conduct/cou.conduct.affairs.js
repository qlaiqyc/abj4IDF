var pageInfo = {};
/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){

    var  pageObj = new Object;//

    pageObj.init4notes = function(){
        var  serach4NodesId = "cou-conduct-affairas-search-notes";
        var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"15商务英语",value:"todo"}],[{name:"全部操行分类",value:"todo"},{name:"德育素质",value:"todo"}]];
        HtmlUntilBase.from4Select(serach4NodesId,headSelect);
        
        var table4NotesId   = "table-notes";
        var $table4Notes    = $("#"+table4NotesId);
        var tableRow4Notes  = {};
        
        
        $table4Notes.bootstrapTable({
            pagination:true,
            columns: [
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"名称"		,field:"aname" ,    },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"人数"		,field:"number",},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"班级"	,	 field:"cname",  	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操行分类"	,field:"type" , 	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"二级分类"	,field:"subtype",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"创建者"	,field:"creator" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"记录时间"	,field:"time",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"备注"	,	 field:"notes" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"附件"	,	 field:"file" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"   	,field:"" ,      formatter:tabelFormatterOP }
            ],
          	onClickRow: function (row) {
    			tableRow4Notes = row;
  			},
        });

        function tabelFormatterOP(value, row, index) {
            var update = '<a   title="修改" href="#" ><i class="conduct-affiars-edit glyphicon  glyphicon-pencil"></i></a>';
            var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';

            return [( update+del )].join('');
        }
        
        var callback = function(data){
        	$table4Notes.bootstrapTable("load",data);
        };
        
        CounductRequest.getList4Cid("",callback);
        
        $table4Notes.delegate("i.conduct-affiars-edit","click",function(){
        	 
			var obj = {title:"操行详情",body:HtmlUntil.couConductAffairs4Edit(tableRow4Notes),width:"541px"};
			HtmlUntilBase.popup4Page(obj);
			//由于prop page中有 table 需要重新 初始化
			var tableidEdit = 'cou-conduct-affairas-edit-form-table';
			var $tableEdit  = $("#"+tableidEdit);
			
			$tableEdit.bootstrapTable({
              
	            columns: [
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"		,field:"code" ,    },
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name",},
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"加减分"	,field:"score",  	},
	                {sortable: true, valign:"middle" ,align: 'center'  ,title:"操作"	,	 field:"",  formatter:tabelFormatterOP},
	          	]
       		 });
			
			var tabledate = [];
			for(var i =0 ;i<3 ;i++){
				var obj = new Object;
				obj.code = "10086";
				obj.name = "张大" ;
				obj.score = "20";
				
				tabledate.push(obj);
			}
			function tabelFormatterOP(value, row, index) {
				var del    = '<a   title="删除" href="#" ><i class="glyphicon glyphicon-trash"></i></a>';

				return del;
			}
			$tableEdit.bootstrapTable("load",tabledate);
			
			$("body").find("div.cou-counduct-prop-addstu").on("click",function(){
				var obj = {title:"选择学生"};
				 HtmlUntilBase.popup4StudentScore(obj,"");
			});
			$("span.btn").on("click",function(){
				$("#cou-conduct-affairas-edit-form-uploadfile").click();
			})
        });
    };

    pageObj.init4top = function(){
        var  serach4TopId = "cou-conduct-affairas-search-top";
        var headSelect 	 = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"15商务英语",value:"todo"}]];
        HtmlUntilBase.from4Select(serach4TopId,headSelect);

        var table4TopId   = "table-top";
        var $table4Top    = $("#"+table4TopId);
        var  datalist       = [];

        $table4Top.bootstrapTable({
            pagination:true,
            detailView:true,
            columns: [
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"学号"		,field:"No" ,    },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"姓名"		,field:"name",},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"宿舍"	    ,field:"room",  	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"名次"	    ,field:"rank" , 	},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"加分次数"	,field:"addCount",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"减分次数"	,field:"subCount",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"总加分"	,field:"addScore" ,  },
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"总减分"	,field:"subScore",		},
                {sortable: true, valign:"middle" ,align: 'center'  ,title:"累计总分"	,field:"score" ,  }
            ],
            onExpandRow:  function(index, row, $detail) {
				tableDetail4OnExpandRow(index, row, $detail);
			}
        });

         
		var callback = function(data){
	        $table4Top.bootstrapTable("load",data);
		};
        CounductRequest.getList2Count4Cid("",callback);

		//打开子表
		function tableDetail4OnExpandRow  (index, row, $detail){
			
			var tableidDetailSon = "table-detail-son-"+index;
			var $tableDetailSon  = $($detail.html('<div class="table-son"><table id="'+tableidDetailSon+'"></table></div>').find('table'));
			var tableDetailSonRow;
		
			$tableDetailSon.bootstrapTable({
				uniqueId: "id",
				columns: [	
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"操行分类"	,filed:"ctype",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"二级分类"	,filed:"twolevel",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"分数"	,    filed:"core",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"记录时间"	,filed:"retime",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"记录着",	     filed:"rename",},
					{sortable: true, valign:"middle" ,align: 'center'  ,title:"描述",		 filed:"detail",},	 
					],
				onClickRow: function(row, index) { 
					 tableDetailSonRow = row;
				}
			});
			var tablelistson = [];
			for(var i =0; i<2;i++){
				var obj = new Object;
				 obj.ctype     = "a";
				 obj.twolevel  = "2";
				 obj.core      = "9";
				 obj.retime    = "2019-10-20";
				 obj.rename    = "李丹丹";
				 obj.detail    = "大厦是的";
				tablelistson.push(obj);
			}
			
			$tableDetailSon.bootstrapTable("load",tablelistson);	
		};
		
    };
    
    pageObj.initpub = function(){
    	HtmlUntil.init2couConduct4Affair(layout.id4Center2affairs);
        var headNav    =  [{name:"操行纪录",value:"notes"},{name:"操行排行",value:"top"}];

        HtmlUntilBase.plug4HaderNav("cou-conduct-affairas-header",headNav,pageObj);
    };
    pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-counduct-affairs",obj:pageInfo});
	
	
		
