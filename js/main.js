$(document).ready(function() {
    
    function startPreloader(){
        var loader = new PxLoader(); 
        $('body').addClass('stop-scrolling');
        

        //50 images
        for(var i=0; i < 50; i++) { 
            var pxImage = new PxLoaderImage("images/works/work-images/image" + (i + 1) + ".jpg"); 
            loader.add(pxImage); 
        } 

        // callback that runs every time an image loads 
        loader.addProgressListener(function(e) { 
            var percent = (e.completedCount / e.totalCount) * 100;
            console.log(percent);
            $('.progress-bar').css('width', percent + '%');
        }); 

        loader.addCompletionListener(function(e) { 
            $('body').removeClass('stop-scrolling');

            init();
            setTimeout(animateSlide1Elements, 200);
            $('.progress').css('display', 'none');
        }); 

        loader.start(); 
    }

    startPreloader();
    
        
    //on nav click when used for mobile (using icon bar)
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });

    //----------------SHOW HIDE NAV WHEN SCROLLING-------------//
    //animate elements when scrolling and highlight nav current section
    var isMainNavShow = false;
    var sections = $('.section')
    var nav = $('nav');
    var nav_height = nav.outerHeight();

    //init animate logo , caption and button
    function animateSlide1Elements(){
        $('.main-logo').addClass("fadeIn");
        $('.main-caption').addClass("fadeIn");
        $('.btn-explore').addClass("fadeIn");
    }

    function init(){
        $('#mainNav').css({"top":"-200px"});
    }

    $(window).scroll(function (){
        if(window.pageYOffset > 550){
            if(!isMainNavShow){
                TweenMax.to(mainNav, 0.8, {top:"0px", visibility:"visible"});
                isMainNavShow = true;
            }
        }else if(window.pageYOffset <= 300){
            if(isMainNavShow){
                TweenMax.to(mainNav, 0.8, {top:"-200px"});
                isMainNavShow = false;
            }
        }

        showElement();

        //highlight link when scrolling 
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height - 50;
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                //$(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    function showElement(element){

        //show about me text
        $(".about-me-desc").each(function(){
            var aboutText = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (aboutText < topOfWindow + 400) {
                $(this).addClass("fadeIn");
            }
        });

        //show image icons second slide
        $(".img-icon").each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
            }
        });

        //show quote
        $(".quote").each(function(){
            var quotePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (quotePos < topOfWindow + 500) {
                $(this).addClass("fadeIn");
            }
        });

        //show quote
        $('.contact-title').each(function(){
            var contactTitlePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (contactTitlePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
            }
        });

        //show thumb item
        $('.box').each(function(){
            var boxPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (boxPos < topOfWindow + 400) {
                $(this).addClass("fadeIn");
            }
        });
    }


    //------------SCROLL ANIMATION FOR NAV----------//
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({scrollTop: (target.offset().top - 80)}, 1000);
                return false;
            }
        }
    });


    /*HIGHLIGHT NAV FUNCTIONS*/
    var aryNav = $('.btnNav');
    $(aryNav[0]).addClass("active");

    function removeActive(){
        for(i=0; i < aryNav.length;i++){
            $(aryNav[i]).removeClass("active");
        }
    }

    $('.btnNav').click(function (){
        removeActive();
        $(this).addClass("active");
    });

    $('.btnExplore').click(function (){
        removeActive();
        $(aryNav[1]).addClass("active");

    });

    var navbarBrand = $('.navbar-brand');
    $(navbarBrand).click(function(){
        removeActive();
        $(aryNav[0]).addClass("active");
    });

    /*END OF HIGHLIGHT NAV FUNCTIONS*/
    
 });
//end of ready function
