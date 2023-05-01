	$out = "";
	$turl = 'js/controlpanel/';

	$str  = '<div id="control-panel">';
	$str += ' 	<div id="control-panel-main">';
	$str += ' 		<a id="control-close" href="#"></a>';
	$str += '		<div id="control-inner">';
	$str += '			<div class="clear"></div>';
	$str += '				<form name="frmpanel" class="controlform" method="post">';
	$str += '					 <label>Skins</label>';	
	$str += '					 <div class="available-styles">';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/blue.jpg" alt="blue" title="blue"/></label></div>';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/green.jpg" alt="green" title="green"/></label></div>';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/grey.jpg" alt="grey" title="grey"/></label></div>';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/orange.jpg" alt="orange" title="orange"/></label></div>';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/yellow.jpg" alt="yellow" title="yellow"/></label></div>';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/violet.jpg" alt="violet" title="violet"/></label></div>';
	$str += '					 	<div class="default-header"><label><img src="'+$turl+'images/skins/pink.jpg" alt="pink" title="pink"/></label></div>';
	$str += '					 </div>'; 
	$str += '					 <div class="clear"></div>';	
	$str += '				</form>'; 
	$str += '				<div class="clear"></div>';	
	$str += '		</div>';
	$str += '	</div>';	
	$str += '</div>';

jQuery(document).ready(function($){
	$("body").after($str);
	
	var $control_panel = $('#control-panel'),
	$control_close = $('#control-close');

	//CONTROL PANEL....
	if ( $.cookie('cookie_open') == 1 ) { 
		$control_panel.animate( { left: -122 } );
		$control_close.addClass('control-open');
	}
	
	//SKIN...
	if($.cookie('cookie_skin') != null) {
		var sk = $.cookie('cookie_skin');
		$('#color_skin_css').attr('href', 'skins/'+sk+'/'+sk+'.css');
		$('.available-styles img[title="'+sk+'"]').addClass('selected');
	}
	else {
		$('.available-styles img[title="pink"]').addClass('selected');
	}
	
	//PANEL ANIMATION...
	$control_close.click(function(){
		if ( $(this).hasClass('control-open') ) {
			$control_panel.animate( { left: 0 } );
			$(this).removeClass('control-open');
			$.cookie('cookie_open', 0, { path: '/' });
		} else {
			$control_panel.animate( { left: -122 } );
			$(this).addClass('control-open');
			$.cookie('cookie_open', 1, { path: '/' });
		}
		return false;
	});
	
	//SKIN CLICK EVENT...
	$('.available-styles .default-header img').click(function(){
		$('.available-styles').find('img').removeClass('selected');
		var style = $(this).attr('title');
		$('#color_skin_css').attr('href', 'skins/'+style+'/'+style+'.css');		
		$(this).addClass('selected');
		$.cookie('cookie_skin', style, { path: '/' } );
	});
});	