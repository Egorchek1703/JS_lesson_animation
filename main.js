let startAnimationBtn = document.querySelector('.start-animation')
let reverseAnimationBtn = document.querySelector('.reverse-animation')
let place = document.querySelector('.place')
let object = document.querySelector('.object')
let positionObject = 0
let interval

function moveObject(){

    interval = setInterval(changePosition, 20)
    

    function changePosition(){
        if(positionObject < 180){
            positionObject++
            object.style.top = positionObject + 'px'
            object.style.left = positionObject + 'px'
        }
        else{
            clearInterval(interval)
        }
    }
    
}

function moveReverseObject(){

    interval = setInterval(changeReversePosition, 20)
    

    function changeReversePosition(){
        if(positionObject > 0){
            positionObject--
            object.style.top = positionObject + 'px'
            object.style.left = positionObject + 'px'
        }
        else{
            clearInterval(interval)
        }
    }
    
}

startAnimationBtn.addEventListener('click', moveObject)    
reverseAnimationBtn.addEventListener('click', moveReverseObject)    
    
