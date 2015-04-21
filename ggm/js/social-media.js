$(document).ready(function(){
    
    function initSocialMedia(){
        //twitter follow api
        window.twttr = (function (d, s, id) {
          var t, js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src= "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);
          return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
        }(document, "script", "twitter-wjs"));	

        //Fb like and share api
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=333686478692&version=v2.3";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

    initSocialMedia();
});