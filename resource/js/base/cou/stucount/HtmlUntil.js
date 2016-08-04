HtmlUntil.init2couStuCount4Tas = function(id){
	var $this = $("#"+id);
 	var buf = new StringBuffer();
	
	buf.append('  <div style=" " id="cou-stucount-tas">     ' );
	buf.append('   <div id="cou-stucount-tas-header">                                                      ' );
	buf.append('   </div>                                                                                  ' );
	buf.append('   <div id="cou-stucount-tas-tab-main">                                                    ' );
	buf.append('    <div class="container width-full">                                                                ' );
	buf.append('     <div class="row">                                                                     ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4special"></div>                             ' );
	buf.append('      </div>                                                                               ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4political"></div>                           ' );
	buf.append('      </div>                                                                               ' );
	buf.append('     </div>                                                                                ' );
	buf.append('     <div class="row">                                                                     ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4minority"></div>                            ' );
	buf.append('      </div>                                                                               ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4geographical"></div>                        ' );
	buf.append('      </div>                                                                               ' );
	buf.append('     </div>                                                                                ' );
	buf.append('     <div class="row">                                                                     ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4like"></div>                                ' );
	buf.append('      </div>                                                                               ' );
	buf.append('      <div class="col-xs-6">                                                               ' );
	buf.append('       <div id="cou-stucount-tas-tab-main-char4skill"></div>                               ' );
	buf.append('      </div>                                                                               ' );
	buf.append('     </div>                                                                                ' );
	buf.append('    </div>                                                                                 ' );
	buf.append('   </div>                                                                                  ' );
	buf.append('  </div>																					');						
	
	$this.html(buf.toString());
};
