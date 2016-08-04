var pageInfo =  {};

/****
 * 这个是整个js入口函数 init
 * ***/
pageInfo.init = function(){

	var pageObj 			  = new Object;//
	var list4received		  = "cou-notice-affairs-tab-received-list";
	var list4received2search  = "cou-notice-affairs-tab-received-search";
	var list4send 	  		  = "cou-notice-affairs-tab-send-list";
	var list4send2search 	  = "cou-notice-affairs-tab-send-search";
	var tabdetail			  = "cou-notice-affairs-tab-parent-detail";//
	var tabinfo			  	  = "cou-notice-affairs-tab-parent-info";


	pageObj.init4received = function(){

		var headSelect = [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"全部等级",value:"A"},{name:"全部等级",value:"todo"}],[{name:"学生姓名",value:"todo"},{name:"清芳",value:"todo"}]];
		var $this 	 = $("#"+list4received);
		var $articel   = $("#cou-notice-affairs-tab-parent-detail");
		var tabid4list = "unreader-tab-list";
		var tabid4distribution = "unreader-tab-distribution";

		var callback=function(data){
			$this.html(HtmlUntil.couNoticeAffairs4Received(data));
		};
		NoticeRequest.getNotice4Cid({cid:"1001"},callback);


		HtmlUntilBase.from4Select(list4received2search,headSelect);

		var $tabdatail 			  = $("#"+tabdetail);
		var $tabinfo 			  = $("#"+tabinfo);



		var  pagesObjSon ={};

		pagesObjSon.init4list = function(){
			var $this = $("#"+tabid4list);
			var callback=function(data){
				$this.html(HtmlUntil.couNoticeAffairs4ArticleNoList(data));
			};
			NoticeRequest.getStu4Photo(callback);
		};

		pagesObjSon.init4distribution = function(){
			var  option = {title:{text:""},xAxis:[{data:["05软件1班","05软件2班","05软件3班","05软件4班","05软件5班","05软件6班"]}],series:[{name:"no-title",data:[95,90,91,85,75,90],barWidth:65,itemStyle:{normal:{color:"#71c3f3"}}}]};
			BasePlug.echarBar(tabid4distribution,option,"","280px");
		};



		$this.delegate("div.item-table-row","click",function(){
			$this.closest("div.cou-notice-affairs-tab").hide();
			var nid = $(this).attr("nid");
			var callback=function(data){
				$tabdatail.html(HtmlUntil.couNoticeAffairs4Article(data));
				$articel.find("ul.article-tab-item li:first").trigger("click");
				$articel.find("li.bg-color-gray-dull").on("click",function(){
					$("#cou-notice-affairs-tab-parent-detail li.bg-color-gray-dull").removeClass("active-white");
					$(this).addClass("active-white");
				});
			};
			NoticeRequest.getNotice4Id({id:nid},callback);
			$tabdatail.show();
			//绑定函数
			$articel.delegate("ul.article-tab-item li","click",function(){
				var value = $(this).attr("value");
				$articel.find("div.item-tab-unreader").hide();
				eval("pagesObjSon.init4"+value+"()");
				$articel.find("div.item-tab-unreader-"+value).show();

			});


			$tabdatail.delegate("div.acticel-goback","click",function(){
				$tabdatail.hide();
				$tabinfo.show();
			});

		});
	};



	pageObj.init4send = function(){
		var headSelect	= [[{name:"本学期",value:"todo"},{name:"本学期",value:"todo"}],[{name:"全部班级",value:"todo"},{name:"05软件2班",value:"todo"}],[{name:"全部等级",value:"A"},{name:"全部等级",value:"todo"}],[{name:"学生姓名",value:"todo"},{name:"清芳",value:"todo"}]];
		var $this 		= $("#"+list4send);
		var $articel   = $("#cou-notice-affairs-tab-parent-detail");
		var tabid4list = "unreader-tab-list";
		var tabid4distribution = "unreader-tab-distribution";


		var callback = function(data){
			$this.html(HtmlUntil.couNoticeAffairs4Send(data));
		};

		NoticeRequest.getNotice4Cid({cid:"1002"},callback);

		HtmlUntilBase.from4Select(list4send2search,headSelect);
		
		var $tabdatail 			  = $("#"+tabdetail);
		var $tabinfo 			  = $("#"+tabinfo);
		$tabdatail.hide();
		
		var  pagesObjSon ={};

		pagesObjSon.init4list = function(){
			var $this = $("#"+tabid4list);
			var callback=function(data){
				$this.html(HtmlUntil.couNoticeAffairs4ArticleNoList(data));
			};
			NoticeRequest.getStu4Photo(callback);
		};

		pagesObjSon.init4distribution = function(){
			var  option = {title:{text:""},xAxis:[{data:["05软件1班","05软件2班","05软件3班","05软件4班","05软件5班","05软件6班"]}],series:[{name:"no-title",data:[95,90,91,85,75,90],barWidth:65,itemStyle:{normal:{color:"#71c3f3"}}}]};
			BasePlug.echarBar(tabid4distribution,option,"","280px");
		};

		$this.delegate("div.item-table-row","click",function(){			
			$this.closest("div.cou-notice-affairs-tab").hide();
			var nid = $(this).attr("nid");
			
			var callback=function(data){
				$tabdatail.html(HtmlUntil.couNoticeAffairs4Article(data));
			};
			NoticeRequest.getNotice4Id({id:nid},callback);
			$tabdatail.show();
			//绑定函数
			$articel.delegate("ul.article-tab-item li","click",function(){
				var value = $(this).attr("value");
				$articel.find("div.item-tab-unreader").hide();
				eval("pagesObjSon.init4"+value+"()");
				$articel.find("div.item-tab-unreader-"+value).show();

			});

			$articel.find("ul.article-tab-item li:first").trigger("click");
			$articel.find("li.bg-color-gray-dull").on("click",function(){
				$("#cou-notice-affairs-tab-parent-detail li.bg-color-gray-dull").removeClass("active-white");
				$(this).addClass("active-white");
			});
			$tabdatail.find("div.acticel-goback").on("click",function(){
				$tabdatail.hide();
				$tabinfo.show();
			});

		});

	};

	pageObj.initpub = function(){
		HtmlUntil.init2couNotice4Affair(layout.id4Center2affairs);
		var headNav    =  [{name:"我收到的",value:"received"},{name:"我发送的",value:"send"}];

		HtmlUntilBase.plug4HaderNav("cou-notice-affairs-header",headNav,pageObj);
	};
	pageObj.initpub();
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4affairs.push({id:"cou-notice-affairs",obj:pageInfo});
	
	
		
