// make function to get css rule from stylesheet
function getCssRules (ruleName) {
    let stylesheets = document.styleSheets[0];
    let stylesheetsRules = document.styleSheets[0].cssRules;
    

    // console.log(typeof stylesheetsRules[5].selectorText);
    for (let i = 0; i < stylesheetsRules.length; i++) {
        if (stylesheetsRules[i].selectorText === ruleName) {
            console.log(stylesheetsRules[i]);
            return stylesheetsRules[i];
        }
    };
};


// generate button
let createModal = document.querySelector(".moderate");

// modal box
let modalBox = document.querySelector(".modal");

// modal box :: before
let modalBoxCover = getCssRules("body::before");


// generate button function
createModal.addEventListener("click" , function () {
    // change the visibility of modal box
    modalBox.style.setProperty("visibility" , "visible");
    // change the visibility of the layout layer
    modalBoxCover.style.setProperty("visibility" , "visible");
});

// exit from modal
let exitButton = document.querySelector(".exit");

exitButton.addEventListener("click" , function () {
    // change the visibility of modal box
    modalBox.style.setProperty("visibility" , "hidden");
    // change the visibility of the layout layer
    modalBoxCover.style.setProperty("visibility" , "hidden");
});