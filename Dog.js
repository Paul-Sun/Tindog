// Create the Dog class here
export default class Dog{
    constructor (data){
        Object.assign(this, data)
    }
   
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return ` <div id = "attitude container">
                </div>
                <img class = "profile-img" src = "./${avatar}">
                <div class="bottom-left-text">
                    <h2>${name}, ${age}</h2>
                    <p>${bio}</p>
                </div>`
    }
    setLikeStatus(status){
        return this.hasBeenLiked = status
    }
    setSwipeStatus(status){
        return this.hasBeenSwiped = status
    }
}
