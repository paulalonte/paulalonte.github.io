$(document).ready(function(){
    
    console.log("ready work js");    
    
    var aryProjects = [];
    
    function loadJSON(){
                    
        $.getJSON('data/work.json', function(data) {
            
            $.each(data.aryData, function(key, item){
                                
                var objCol = {};
                objCol.id = item.id;
                objCol.title = item.title;
                objCol.desc = item.desc;
                objCol.imageSrc = item.imageSrc;
                objCol.overlayTitle = item.overlayTitle;
                objCol.url = item.url;
                objCol.type = item.type;    
                
                aryProjects.push(objCol);    
            });

            //on success load JSON call -> Setup Display and Setup Item Click
            setupDisplay(aryProjects);
        });
    }
    
    loadJSON();
    
    function setupDisplay(aryProjects){
        var aryProjects = aryProjects;
        
        var rowDiv = $('<div class="row"></div>').appendTo(".work-container");
        
        for(var i = 0; i < aryProjects.length; i++){
    
            var col = $('<div class="col-md-4 col-sm-6 col-xs-12 work-items"><div id=' + aryProjects[i].id + ' class="box" style="background-image:url(' + aryProjects[i].imageSrc + '); background-repeat:no-repeat; background-position:center; visibility:hidden"><div id="overlay"><span id="overlay-hover">' + aryProjects[i].overlayTitle + '</span></div></div></div>');
            col.appendTo(rowDiv);
                                
        } 
        
        itemClickSetup(aryProjects);
    }
    
    
    function itemClickSetup(val){
        var aryProjects = val;
        
        $('.box').click(function(){
            var id = $(this).attr("id");
            
            for(var i = 0; i < aryProjects.length; i++){
                
                if(id == aryProjects[i].id){
                    var title = aryProjects[i].title;
                    var desc = aryProjects[i].desc;
                    var image = aryProjects[i].imageSrc;
                    var type = aryProjects[i].type;
                    //url not used yet (in case)
                    var url = aryProjects[i].url;

                    $('.image-pop-up').attr('src', image);
                    $('.title-pop-up').html(title);
                    $('.desc-pop-up').html(desc);
                    $('.url-link').attr('href', url);
                    $('.app-type').html(type);
                    
                    break;
                }
            }
            
            $('#projectDetailModal').modal('show');
        });
    }
    
});

