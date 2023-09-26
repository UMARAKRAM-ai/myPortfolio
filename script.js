

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);
}

// menu icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


function change(){
    var Img = document.getElementById("home");
    Img.style.backgroundImage="url(images/education.jpg)"
}

function change2(){
    var Img = document.getElementById("home");
    Img.style.backgroundImage="url(images/bg.jpg)"
}


// For about Image Slide Showw
var images = [
    "images/nubelson-fernandes-jKL2PvKN8Q0-unsplash.jpg",
    "images/port3.jpg", 
    "images/port3.jpg",
    "images/port4.jpg",
    "images/port5.jpg",
    "images/port6.jpg"
  ];
  
  var currentImageIndex = 0;
  function changeImage() {
    var slideshowImage = document.getElementById("slideshow");
    slideshowImage.src = images[currentImageIndex];
    
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  setInterval(changeImage, 1900); 
  