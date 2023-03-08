var slideimg=['./asset/sldimg1.jpg' , './asset/sldimg2.jpg' ,'./asset/sldimg3.jpg','./asset/sldimg4.jpg','./asset/sldimg5.jpg'];
var index=0;
var duration=5000;

function imgslide(){
    document.getElementById("slide").src=slideimg[index];
    index++;

    if(index==slideimg.length){index=0}
    setTimeout("imgslide()",duration);
}
imgslide();



var popimg=['./asset/popimg1.jfif' ,'./asset/popimg2.jpg' ,'./asset/popimg3.jpg','./asset/popimg4.jpg','./asset/popimg5.jpg'];
var index=0;
var duration=5000;

function imgpop(){
    document.getElementById("pop").src=popimg[index];
    index++;

    if(index==popimg.length){index=0}
    setTimeout("imgpop()",duration);
}
imgpop();


// Popup form function

// var modal = document.getElementById("mainpop");
// var btn = document.getElementById("Savebtn");
// var span = document.getElementsById("Close");
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   console.log(modal)
//   modal.style.display = "block";
//   console.log(modal)
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var audio = new Audio("./asset/btnSFX.wav");

function openPopup() {
 
    document.getElementById("mainpop").style.display = "block";
    audio.play();
    
  }
  
  function closePopup() {
    document.getElementById("mainpop").style.display = "none";
    audio.play();
    
  }