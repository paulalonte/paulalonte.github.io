(function() {
    console.log("overlay js ready");
	var triggerBttn = document.getElementById( '0_1' ),
        
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };
    
    console.log("btn: " + triggerBttn);
    
    function toggleOverlay(){
        console.log("toggle overlay");
        var box = $(this).attr("class");
        var id = $(this).attr("id");
        
        console.log("ID: " + id);
        if(box == 'box'){
            console.log("box cliked");
            
            $('.image-pop-up').attr('src', 'images/works/work-images/image4.jpg');
            $('.title-pop-up').html('This is my New TITLE');
            $('.desc-pop-up').html('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.');
        }
        
        if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
    }
    
    $('.box').click(toggleOverlay);
    $('.overlay-close').click(toggleOverlay);
})();