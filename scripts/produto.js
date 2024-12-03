document.getElementById("dropdownButton").addEventListener("click", function() {
    document.getElementById("dropdownContent").classList.toggle("show");
});

document.querySelectorAll(".dropdown-content a").forEach(function(element) {
    element.addEventListener("click", function() {
        document.getElementById("dropdownButton").innerHTML = this.innerHTML + " &#x25BC;";
        document.getElementById("dropdownContent").classList.remove("show");
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}