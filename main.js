var icon = document.getElementById("icon");
icon.onclick = function() {
    if(document.body.classList.toggle("dark-theme")){
        icon.src="images/sun.png";;
    }else{
        icon.src="images/moon.png"
    }
}