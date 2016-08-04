/******
 * 常用工具类
 * 0.IP 地址
 * 1. StringBuffer 
 * 3. StringHelp  工具类
 * 4. 页面执行方法
 * ****************/

if (typeof BaseUntil == "undefined") {
	BaseUntil = new Object();
};

BaseUntil.url4workSpace  = 'http://mobile.aibanji.com:52045/WebSpace/';
BaseUntil.url4fileServel = 'http://statics.aibanji.com:8080/fileServer';
BaseUntil.url4IDF 		= 'http://mobile.aibanji.com:52045/WebSpace/';

/****************StringBuffer 工具***********************/
function StringBuffer() {
	this.content = new Array;
}
StringBuffer.prototype.append = function(str) {
	this.content.push(str);
}
StringBuffer.prototype.prepend = function(str) {
	this.content.unshift(str);
}
StringBuffer.prototype.toString = function() {
	return this.content.join("");
}

/****************StringHelp 工具类***********/
if (typeof StringHelper == "undefined") {
	StringHelper = new Object();
};
 
StringHelper.HasText = function(str) {
	if (typeof(str) == "undefined") return false;
	if (str == null) return false;
	if (str == 'null') return false;
	if (str == 'undefined') return false;

	if (typeof(str) == 'string')
		str = str.replace(/(^\s*)|(\s*$)/g, '');
	if (str === '') return false;
	return true;
};

 
StringHelper.HasLength = function(str) {
	return (str !== null && str.length() > 0);
};

/*
 *返回字符串的字节数
 */
StringHelper.GetBytesLength = function(str) {
	return str.replace(/[^\x00-\xff]/gi, "--").length;
};

/**
 * 检测str字符串是是否包含有subStr字符串
 * @param str
 * @param subStr
 * @return true:包含   false:未包含
 */
StringHelper.Contains = function(str, subStr) {
	return str.indexOf(subStr) == -1 ? false : true;
};

/**
 * 判断str字符串表达式是否是以subStr字符串开始，如果是则返回true，如果不是则返回false
 * @param str:字符串表达式
 * @param subStr:子字符串
 * return : true，是以subStr开始; false，不是以subStr开始
 */
StringHelper.StartsWith = function(str, subStr) {
	return str.indexOf(subStr) == 0 ? true : false;
};

/**
 * 去除左右两边的空格
 */
StringHelper.Trim = function(str) {
	if(StringHelper.HasText(str))  str =str.replace(/(^\s*)|(\s*$)/g, '');
	return str;
} 

/**
 * 判断是否是JSON 对象
 */
StringHelper.IsJson = function(str) {
	var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length; 
	return isjson;
} 


BaseUntil.pageInit =function(pageInfo){
	try{ eval(pageInfo.init());}catch(e){ console.log(e)};
	/*try{ eval(pageInfo.control());}catch(e){ }
	try{ eval(pageInfo.destroy());}catch(e){ }*/
};


if(typeof HtmlUntil == "undefined"){
		HtmlUntil =  new Object();
}


// main4New
if(typeof mainPage == "undefined"){
		mainPage =  new Object();
}

mainPage.M4now	   = {};//当前
mainPage.M4tas 	   = {};//师生
mainPage.M4affairs = {};//事务
mainPage.M4manager = {};//管理

var pageInfoList4now 	 = [];//当前模块中的所有页面
var pageInfoList4tas = [];//事务模块中的所有页面
var pageInfoList4affairs = [];//事务模块中的所有页面
var pageInfoList4manager = [];//管理模块中的所有页面
var layout = {};//工作区间

layout.id4Center2affairs = "layout-center-workspace";
layout.id4Center2now 	 = "layout-center-workspace";
layout.id4Center2manager = "layout-center-workspace";
layout.id4Center2tas     = "layout-center-workspace";



 
