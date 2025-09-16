let smallCursor = document.querySelector('.smallCursor');
let shadowCursor = document.querySelector('.shadowCursor');

let mouseX = 0;
let mouseY = 0;
let animationId = null;
let timer = null;

document.addEventListener('mousemove', function(eventObj){
    mouseX = eventObj.clientX
    mouseY = eventObj.clientY

    smallCursor.style.left = mouseX + "px"
    smallCursor.style.top = mouseY + "px"

    if(!animationId){
        animateShadowCursor();
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
        cancelAnimationFrame(animationId)
    }, 2000);

})

function animateShadowCursor(){
    let currentX = parseFloat(shadowCursor.style.left) || 0 //clientX
    let currentY = parseFloat(shadowCursor.style.top) || 0 //clientY

    let distanceX = mouseX - currentX;
    let distanceY = mouseY - currentY;

    shadowCursor.style.left = currentX + distanceX*0.08 + "px"
    shadowCursor.style.top = currentY + distanceY*0.08 + "px"

    animationId = requestAnimationFrame(animateShadowCursor)
}