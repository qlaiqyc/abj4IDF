var pageInfo = {};

pageInfo.init = function(){
    var pageObj 			  = new Object;//
    
    pageObj.init4cname=function(){
    	var $list=$("#cou-auth-manager-class-list");
    	  
        var callback=function(data){
          
            $list.html(HtmlUntil.couAuthManagerClassList(data));
        };
        AuthRequest.getClassList(callback);
        
        $("#cou-auth-manager-class-list").delegate(".cou-auth-manager-class-div","click",function(){
            var $this=$(this);
            if($this.find("i").hasClass("glyphicon-menu-right")){
                $this.find("i").removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");
            }else{
                $this.find("i").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");
            }
            $(this).next(".cou-auth-manager-stu-list").toggle();
        });

        $list.delegate("ul.cou-auth-manager-stu-list li","click",function(){
            $("ul.cou-auth-manager-stu-list li").removeClass("cou-auth-manager-stu-list-select");
            $(this).addClass("cou-auth-manager-stu-list-select");
            var $main = $("#cou-auth-manager-tab-main");
            $main.html(HtmlUntil.couAuthManagerTabMain(""));
        });
    };
    
    pageObj.init4pub = function(){
    	HtmlUntil.init2couAuth4Manager(layout.id4Center2manager);
    	
    	 pageObj.init4cname();
    };
    
    pageObj.init4pub();
 
};
//BaseUntil.pageInit(pageInfo);
pageInfoList4manager.push({id:"cou-auth-manager",obj:pageInfo});
