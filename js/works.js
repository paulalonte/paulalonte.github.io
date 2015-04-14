$(document).ready(function(){
    
    console.log("ready work js");
        
//	var	overlay = document.querySelector( 'div.overlay' ),
//		closeBttn = overlay.querySelector( 'button.overlay-close' );
//		transEndEventNames = {
//			'WebkitTransition': 'webkitTransitionEnd',
//			'MozTransition': 'transitionend',
//			'OTransition': 'oTransitionEnd',
//			'msTransition': 'MSTransitionEnd',
//			'transition': 'transitionend'
//		},
//		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
//		support = { transitions : Modernizr.csstransitions };
    
    
    
    var aryRowVO = [];
    
    function loadJSON(){
                    
        $.getJSON('data/work.json', function(data) {

            var aryData = data.aryData;
            
            for(var i = 0; i < aryData.length; i++){
                var rowVO = {};
                rowVO.aryCol = [];

                for(var k = 0; k < aryData[i].aryCol.length; k++){
                    var objCol = {};
                    
                    objCol.id = aryData[i].aryCol[k].id;
                    objCol.title = aryData[i].aryCol[k].title;
                    objCol.desc = aryData[i].aryCol[k].desc;
                    objCol.imageSrc = aryData[i].aryCol[k].imageSrc;
                    objCol.overlayTitle = aryData[i].aryCol[k].overlayTitle;
                    objCol.url = aryData[i].aryCol[k].url;
                    objCol.type = aryData[i].aryCol[k].type;
                    
                    rowVO.aryCol.push(objCol);
                }                    

                aryRowVO.push(rowVO);
            }

            //on success load JSON call -> Setup Display and Setup Item Click
            setupDisplay(aryRowVO);
            thumbItemClickSetup();
        });
    }
    
    loadJSON();
    
    function setupDisplay(aryRowVO){
        var aryRowVO = aryRowVO;
        var aryRow = [];

        for(var i = 0; i < aryRowVO.length; i++){
            aryRow.push($('<div class="row"></div>').appendTo(".work-container"));

            for(var k = 0; k < aryRowVO[i].aryCol.length; k++){
                
                var col = $('<div class="col-md-4 col-xs-12 work-items"><div id=' + aryRowVO[i].aryCol[k].id + ' class="box" style="background-image:url(' + aryRowVO[i].aryCol[k].imageSrc + '); background-repeat:no-repeat; background-position:center; visibility:hidden"><div id="overlay"><span id="overlay-hover">' + aryRowVO[i].aryCol[k].overlayTitle + '</span></div></div></div>');
                col.appendTo(aryRow[i]);
            }                    
        } 
        
        console.log("SETUP DISPLAY");
        
        itemClickSetup(aryRowVO);
    }
    
    
    function itemClickSetup(val){
        var aryRowVO = val;
        
        $('.box').click(function(){
            var id = $(this).attr("id");
            
            for(var i = 0; i < aryRowVO.length; i++){
                
                for(var k = 0; k < aryRowVO[i].aryCol.length; k++){
                    if(id == aryRowVO[i].aryCol[k].id){
                        var title = aryRowVO[i].aryCol[k].title;
                        var desc = aryRowVO[i].aryCol[k].desc;
                        var image = aryRowVO[i].aryCol[k].imageSrc;
                        var type = aryRowVO[i].aryCol[k].type;
                        //url not used yet (in case)
                        var url = aryRowVO[i].aryCol[k].url;
                        
                        console.log("title: " + title);
                        console.log("desc: " + desc);
                        console.log("image: " + image);
                        console.log("url link: " + url);
                        console.log("type: " + type);

                        $('.image-pop-up').attr('src', image);
                        $('.title-pop-up').html(title);
                        $('.desc-pop-up').html(desc);
                        $('.url-link').attr('href', url);
                        $('.app-type').html(type);
                        break;
                    }
                }
            }
            
            $('#projectDetailModal').modal('show');
        });
    }
    
        
    
    function toggleOverlay(){
        
        var toggleElement = $(this).attr("class");
        console.log("toggleElement: " + toggleElement);
        
        if(toggleElement == 'box fadeIn'){
            var id = $(this).attr("id");
//            var aryId = id.split("_");
//            var indexRow = aryId[0];
//            var indexCol = aryId[1];
            
            for(var i = 0; i < aryRowVO.length; i++){
                
                for(var p = 0; i < aryRowVO[i].aryCol.length; p++){
                    if(id == aryRowVO[i].aryCol[p].id){
                        
                        console.log("ID: " + id);
                        
//                        var title = aryRowVO[i].aryCol[p].title;
//                        var desc = aryRowVO[i].aryCol[p].desc;
//                        var image = aryRowVO[i].aryCol[p].imageSrc;
//                        var type = aryRowVO[i].aryCol[p].type;
//                        //url not used yet (in case)
//                        var url = aryRowVO[i].aryCol[p].url;
//
//                        $('.image-pop-up').attr('src', image);
//                        $('.title-pop-up').html(title);
//                        $('.desc-pop-up').html(desc);
//                        $('.url-link').attr('href', url);
//                        $('.app-type').html(type);
                        
                        break;
                    }
                }
            }

                        
            
            /*
            console.log("title: " + title);
            console.log("desc: " + desc);
            console.log("image: " + image);
            console.log("url link: " + url);
            console.log("type: " + type);
            */
            
            //hide scrollbar in browser (disable) enable on close
            //$('body').css({"overflow":"hidden"});
            
        }else if(toggleElement == "overlay-close"){
            
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
                //$('body').css({"overflow":"auto"});
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
    
    
    function thumbItemClickSetup(){
//        $('.box').click(toggleOverlay);
//        $('.overlay-close').click(toggleOverlay);
    }
});








