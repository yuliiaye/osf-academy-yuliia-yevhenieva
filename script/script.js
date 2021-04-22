//php_value display_errors 1

// When the user clicks on div, open the popup
function popup() {
    let popup = document.getElementById("myPopup");
    let wrapper = document.getElementById("modal-wrapper");
    let header = document.getElementById("container");
    header.classList.toggle("underPopup");
    wrapper.classList.toggle("darken");
    popup.classList.toggle("show");
}

function makeVisible() {
    let password = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute('type', type);
}

let slider = document.getElementById("slider");
let paginationDefault = document.getElementById("paginationDefault");
let paginationCentral = document.getElementById("paginationCentral");
let paginationRight = document.getElementById("paginationRight");

function sliderDefault() {
    paginationCentral.classList.remove("active");
    paginationRight.classList.remove("active");
    paginationDefault.classList.add("active");
    slider.classList.remove("central", "right");
}
function sliderCentral() {
    paginationDefault.classList.remove("active");
    paginationRight.classList.remove("active");
    paginationCentral.classList.add("active");
    slider.classList.remove("right");
    slider.classList.add("central");
}
function sliderRight() {
    paginationDefault.classList.remove("active");
    paginationCentral.classList.remove("active");
    paginationRight.classList.add("active");
    slider.classList.remove("central");
    slider.classList.add("right");
}