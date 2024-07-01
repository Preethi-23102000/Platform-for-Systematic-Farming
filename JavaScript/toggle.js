let id ;
function PopupOpen(el) { // to open the popup
    //document.getElementById("popup-1").classList.toggle("active");
    id = "popup_"+el ;
    document.getElementById("popup1").classList.toggle("active") ;
    
}

function PopupClose() { // to close the opened popup
    id = "popup_"+el ;

    document.getElementById(id).classList.toggle("active");
    
}