//Semua script disimpan disini
//11/5/24


//ini buat gambar
//aku nak pinjam elemen nya, boleh tidak?
var elements = document.getElementsByClassName("kolom");

var i;

for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "70%";
}


//mobile navbar

function myFunction() {
    var x = document.getElementById("links");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
            else {
                x.style.display = "block";
            }
}


//responsive ui for mobile
//katanya ini untuk viewport
if(document.documentElement.clientWidth < 900) { 
    window.location = "mobile/index.html"
}
//untuk layar katanya
if(screen.width < 900) {
    window.location = "mobile/index.html"
}

