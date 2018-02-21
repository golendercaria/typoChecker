(function($){


	
	$.fn.typoChecker = function () {
	
		var typoCheckerThis = this;
	
		//add panel for displaying all information
		this.addTypoCheckerPanel = function(){
			$("body").append( '<div class="typoChecker" style="position:absolute; top:0px; right:0px; width:400px; height:100%; background:black; color:white; z-index:99999999;"></div>' );
		}

		//function to add content into panel
		this.setContentToTypoCheckerPanel = function(type, text, size){
			$(".typoChecker").append('<div class="text">Balise type : ' +  type + "<br/>" + text + '</div><div class="size">' + $(this).css("font-size") + '</div><hr/>');
		}
		

		//attach panel
		this.addTypoCheckerPanel();
		
		//engine = mose move
		
		$("body *").not("script, style").hover(function(el){
			
			/*console.log( this );
			console.log( $(this).children() );*/
			
			//clear
			$(".typoChecker").html("");
			
			//traitement this
			var text = $(this).clone().children().remove().end().text().trim();
			if( text != "" ){
				typoCheckerThis.setContentToTypoCheckerPanel($(this).get(0).nodeName, text, $(this).css("font-size") );
			}
			
			//traitement child
			$(this).children().each(function(k,v){
				var text = $(v).clone().children().remove().end().text().trim();
				typoCheckerThis.setContentToTypoCheckerPanel($(v).get(0).nodeName, text, $(v).css("font-size") );
			});

		});
		
		console.log("typoChecker");

	}
	
	
	$(document).ready(function() {
		
		//loading plugin
		$.fn.typoChecker();
		
	});
	

})(jQuery);


