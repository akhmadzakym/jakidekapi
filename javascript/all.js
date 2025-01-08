//aku nak pinjam elemen nya, boleh tidak?                    //                   //
var elements = document.getElementsByClassName("kolom");     // Untuk grid gambar //
                                                             //                   //
//ini gatau apaan yang diatas. 
//stres gw anj beneran
//harus pake javascript
//kesel
var i;

for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "70%";
}

//if you understand indonesian, you'll get it. and by the way, congrats! for finding this easter egg...

//Alright. Continue.

if(document.documentElement.clientWidth < 900) { //katanya ini untuk viewport  
    window.location = "mobile/index.html"                                       //                                           //
}                                                                               //                                           //
                                                                                // Biar responsif, gw berikan JS ini untuk   //
if(screen.width < 900) { //untuk layar katanya                                  // ganti ke tampilan mobile secara otomatis. //
    window.location = "mobile/index.html"                                       //                                           //
}                                                                               // it's a bad practice                       //

//untuk modal image

var modal  = document.getElementById("myModal");

var img = document.getElementsByClassName("myImg");
var modalImg  = document.getElementById("img");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display = "none";
}