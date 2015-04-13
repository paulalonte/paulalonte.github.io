$(document).ready(function(){
    
    console.log("ready work js");
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
                    
                    rowVO.aryCol.push(objCol);
                }                    

                aryRowVO.push(rowVO);
            }

            //on success load JSON call -> Setup Display and Setup Item Click
            setupDisplay(aryRowVO);
            thumbItemClickSetup(aryRowVO);
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
    }

    function thumbItemClickSetup(aryRowVO){
        var aryRowVO = aryRowVO;

        $('.box').click(function(){
            var id = $(this).attr("id");

            var aryId = id.split("_");
            var indexRow = aryId[0];
            var indexCol = aryId[1];

            var title = aryRowVO[indexRow].aryCol[indexCol].title;
            var image = aryRowVO[indexRow].aryCol[indexCol].imageSrc;

            //console.log("id: " + id);
            //console.log("TITLE: " + title);
            //console.log("TITLE: " + image);
            //openLightbox(aryRowVO, indexRow, indexCol);
        });
    }
    
    function openLightbox(aryRowVO, indexRow, indexCol){
        var aryRowVO = aryRowVO;
        var indexRow = indexRow;
        var indexCol = indexCol;
        
        $.magnificPopup.open({
            items: {
                  src: '<div class="popup-block"><img src="' + aryRowVO[indexRow].aryCol[indexCol].imageSrc +'" alt="image" max-width="400" max-height="400" width="auto" height="auto" style="border:1px; border-style:solid; border-width:4px; border-color:#cccccc"/><h4>' + aryRowVO[indexRow].aryCol[indexCol].title + '</h4><p>' + aryRowVO[indexRow].aryCol[indexCol].desc + ' <a href=' + aryRowVO[indexRow].aryCol[indexCol].url + ' target="_blank">view project</a></p></div>'
            },
            type: 'inline',
            showCloseBtn: false,
            mainClass: 'mfp-fade',
            removalDelay: 300
        });

    }

    //createDummyData();
});
