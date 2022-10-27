window.addEventListener("scroll", function(){
    var nav = document.querySelector("#menu");
    var header = document.querySelector("#cabecera");
    nav.classList.toggle("menu2", window.scrollY>0);
    header.classList.toggle("cabecera2", window.scrollY>0);

    if (window.scrollY>0){
        document.getElementById("logo").src = "img/logo.png"
    }else{
        document.getElementById("logo").src = "img/logo.png" 
    }



    
})
