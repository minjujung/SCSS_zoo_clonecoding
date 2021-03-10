let toggleNavStatus = false;
let closeBtnStatus = false;

let toggleNav = function() {
    let getMenu = document.querySelector(".dropbtn");
    let getMenuText = document.querySelector(".dropbtn .dropdown-content");

    if(toggleNavStatus === false && closeBtnStatus === false) {
        getMenuText.style.visibility = "visible"
        let dropDown = getMenuText.length;
        for(let i = 0; i < dropDown; i++) {
            getMenuText[i].style.opacity = "1";
        }

        toggleNavStatus = true;
         
    }
    else if(toggleNavStatus === true && closeBtnStatus === true) {
        
        let dropDown = getMenuText.length;
        for(let i = 0; i < dropDown; i++) {
            getMenuText[i].style.opacity = "0";
        }

        getMenuText.style.visibility = "hidden"

        toggleNavStatus = false;
        closeBtnStatus = false;
    }
}

let closeBtn = function() {
    if(closeBtnStatus === false) {
        closeBtnStatus = true;
    } 
}