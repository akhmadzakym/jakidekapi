//aku nak pinjam elemen nya, boleh tidak?                    //                   //
var elements = document.getElementsByClassName("kolom");     // Untuk grid gambar //
                                                             //                   //
//ini gatau apaan yang diatas. 
//DEKLARASI TITIT EH MAAF MAKSUDNYA VARIABLE 'LOOP'
//stres gw anj beneran
//harus pake javascript
//kesel
var i;

for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "70%";
}

//if you understand indonesian, you'll get it. and by the way, congrats! for finding this easter egg...

//Alright. Continue.

if(document.documentElement.clientWidth > 900) { //katanya ini untuk viewport  
    window.location = "mobile/index.html"                                       //                                           //
}                                                                               //                                           //
                                                                                // Biar responsif, gw berikan JS ini untuk   //
if(screen.width > 900) { //untuk layar katanya                                  // ganti ke tampilan mobile secara otomatis. //
    window.location = "mobile/index.html"                                       //                                           //
}                                                                               //                                           //
