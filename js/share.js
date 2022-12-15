
            var loader = document.getElementById("preloader");   

            window.addEventListener("load", function() {
                console.log(loader);
                setTimeout(() => {  loader.style.display = "none"; }, 500);
            });//

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