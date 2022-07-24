// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

let i=0
let pet = new Dog(dogs[i])
let isWaiting = false
function render(pet){
    document.getElementById("profile-container").innerHTML = pet.getDogHtml()
    }
render(pet)

//if(!isWaiting){       
document.getElementById("heart-btn").addEventListener("click", function(){
    document.getElementById("attitude container").innerHTML = getLikeHtml();
    renderNextDog()     
    isWaiting = true 
    })
//}

//if(!isWaiting){      
document.getElementById("cross-btn").addEventListener("click", function(){
    document.getElementById("attitude container").innerHTML = getNopeHtml();
    renderNextDog()     
    isWaiting = true   
    })
//}

function renderNextDog(){
  if(!isWaiting){ 
    i++
    pet = new Dog(dogs[i])
    if(Object.keys(pet).length != 0 ){
        setTimeout(function(){
        render(pet)
        isWaiting = false}, 1000)
    } else {
        i=0
        setTimeout(function(){
        pet = new Dog(dogs[i])
        render(pet)
        isWaiting = false}, 1000)
    }  
  }  
}

function getLikeHtml() { 
    return `<img class = "attitude-img" src = "./images/badge-like.png">`
    }
    
function getNopeHtml(){
        return `<img class = "attitude-img" src = "./images/badge-nope.png">`
    }