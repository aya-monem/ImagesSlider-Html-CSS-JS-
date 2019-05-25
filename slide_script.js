var slides =document.getElementsByClassName("slide");
 var indicators = document.getElementsByClassName("indicator");
 var img_width = slides[0].clientWidth;
    // first case (loadin page)
      //  for (var i = 0 ; i < slides.length ; i ++){
        //    slides[i].style.left = img_width * i + "px";
       // }
       
  // next button function 
 var image_index = 0 ;
 document.getElementById("rightArr").addEventListener("click", function(){
    image_index ++ ;    
    if(image_index == slides.length){
            image_index = 0;
        }
        show_image(image_index);
 });

  // previous button function 
 document.getElementById("leftArr").addEventListener("click", function(){
    image_index -- ;    
    if(image_index < 0){
            image_index = slides.length-1 ;
        }
        show_image(image_index);
});

// declaration of function that show image
 function show_image(n){
   // changing the image
    [].forEach.call(slides,function(ele){
        ele.style.display = "none";
    });
    slides[n].style.display = "block";
    slides[n].style.left = 0 + "px";


    // part of indicators in the bottom
    [].forEach.call(indicators,function(ele){
        ele.className = ele.className.replace(" active", "");;
    });
    indicators[n].className += " active";
 }