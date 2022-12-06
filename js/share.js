
            var loader = document.getElementById("preloader");

            Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
                get: function () {
                    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
                }
            });

            $('body').on('click touchstart', function () {
                const videoElement = document.getElementById('preloader');
                if (videoElement.playing) {
                    // video is already playing so do nothing
                 

            window.addEventListener("load", function() {
                console.log(loader);
                setTimeout(() => {  loader.style.display = "none"; }, 500);
                
            });

            $.get("https://semperag.github.io/nav.html", function(data){
            $("#menu").on('click',function(){
                document.getElementById("topnav-right").classList.toggle('active');
            });

            });
            
            $(window).resize(function(){

                if(window.innerWidth < 851) {
                    $.get("https://semperag.github.io/nav.html", function(data){
                    $("#topnav-right").removeClass('active');
                    });
                }
            });