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

//popup function 

var audio = new Audio("./asset/btnSFX.wav");

function openPopup() {
 
    document.getElementById("mainpop").style.display = "block";
    audio.play();
    
  }
  
  function closePopup() {
    document.getElementById("mainpop").style.display = "none";
    audio.play();
  }

