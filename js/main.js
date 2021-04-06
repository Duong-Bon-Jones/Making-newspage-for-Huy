const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

// Nav
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// ! Sidenav
function openNav() {
    // if (window.innerWidth >= 1024) {
    //     document.getElementById("mySidenav").style.width = "250px";
    //     document.getElementById("main").style.marginLeft = "250px";
    // }
    /* Set the width of the side navigation to 250px */
    document.getElementById("mySidenav").style.width = "250px";

    /* Set the width of the side navigation to 0 */
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    // if (window.innerWidth >= 1024) {
    //     document.getElementById("mySidenav").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    // }
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}

// ! Accordion
var acc = document.getElementsByClassName("toggler");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
        var panel = this.parentElement.previousElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// ! Tabs
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    // tablinks[0].click();
}

// input.onfocus = function () {
//     datalist.style.display = "block";
// };

// for (let option of datalist.options) {
//     option.onclick = function () {
//         input.value = this.value;
//         datalist.style.display = "none";
//     };
// }

// datalist.style.width = input.offsetWidth + "px";
// datalist.style.left = input.offsetLeft + "px";
// datalist.style.top = input.offsetTop + input.offsetHeight + "px";

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// acc[0].click();
