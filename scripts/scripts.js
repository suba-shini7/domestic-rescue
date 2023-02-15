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
