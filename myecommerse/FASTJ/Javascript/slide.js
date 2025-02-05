// access the images
let slideImages = document.querySelectorAll('.dsimg');

// access the next btn / prev btn
let nxtBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
// access indicators
let dots = document.querySelectorAll('.dot');

let counter = 0;
// code for next btn
nxtBtn.addEventListener('click', nextSlide);
function nextSlide(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length -1 ){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicator();
    
}
// code for prev btn
prevBtn.addEventListener('click', prevSlide);
function prevSlide(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if( counter == 0 ){
        counter = slideImages.length-1;
    }
    
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicator();
}
// autoplay
function autoSliding(){
deletinterval = setInterval(timer, 2000)
    function timer(){
    nextSlide();
    indicator();
    }
}
autoSliding();
// stop autoplay
const container = document.querySelector('.slide-container')

    container.addEventListener('mouseover', function(){
        clearInterval(deletinterval);
    });
// resume autoplay 

container.addEventListener('mouseout', autoSliding)
    
//  add remove active class from indicator
function indicator(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active','');
    }
    dots[counter].className += ' active';
}

function switchimage(currentimage){
    currentimage.classList.add('active');
    let imageId = currentimage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId === counter){
        return;

    }else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicator();
}
