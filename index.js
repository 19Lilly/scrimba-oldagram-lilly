
//import { posts } from './data.js'

const storedData = localStorage.getItem('posts')

let posts = ''
if(storedData){
    posts = JSON.parse(storedData)
} 
else {
    posts = require('./data.js')
}

document.addEventListener('click', function(e){
    
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
})

function handleLikeClick(postId){ 
    const targetOldagramPost = posts.filter(function(post){
        return post.uuid === postId
    })[0]


    if (targetOldagramPost.isLiked){
        targetOldagramPost.likes--
        
    }
    else{
        targetOldagramPost.likes++ 
        
    }

    targetOldagramPost.isLiked = !targetOldagramPost.isLiked
    updateLocalStorage(posts)
    render()
}


function getFeedHtml(){
    
    let feedHtml = ``

        posts.forEach(function(post){

        let likeIconClass = ''
        
        if (post.isLiked){
            likeIconClass = 'liked'
        }


        feedHtml +=     
        `<div class="post">
        <div class="post-header">
                <img class="img-header" src="${post.avatar}">
                <div class="header-info">
                    <div class="user-full-name"><span class="bold-text">${post.name}</span></div>
                    <div class="user-location">${post.location}</div>
                </div>
            </div>

            <img class="post-img" src="${post.post}">
            
            <div class="social-media">
                <i data-like="${post.uuid}" class="fa-solid fa-heart fa-lg ${likeIconClass}"></i>
                <i class="fa-regular fa-comment fa-lg"></i>
                <i class="fa-regular fa-paper-plane fa-lg"></i>
            </div>
            <div id="like-count" class="bold-text"> ${post.likes} likes</div>
            <p class="comments">
                <span class="username bold-text">${post.username}</span>${post.comment}  
            </p>
        </div>`

   })
   return feedHtml 
   
}

function updateLocalStorage(posts){
    localStorage.setItem('posts', JSON.stringify(posts))
}

function render(){
    document.getElementById('section-el').innerHTML = getFeedHtml()
}
render()


















    

                


