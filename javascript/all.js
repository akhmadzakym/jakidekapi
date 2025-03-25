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

// THREE.JS SIDE
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x121212);
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera,renderer.domElement);

// Stars
function star(){
    const geo3 = new THREE.BoxGeometry(0.25,0.25,0.25);
    const mat3 = new THREE.MeshBasicMaterial({color: 0xffffff});
    const bintang = new THREE.Mesh(geo3,mat3);

    const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    bintang.position.set(x,y,z);
    scene.add(bintang);
}

Array(500).fill().forEach(star);

camera.position.set(0,20,30);
controls.update();

controls.autoRotate = true;


function animate() {
    controls.update();
    renderer.render( scene, camera );

    }
