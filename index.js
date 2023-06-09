import { postsData } from './data.js'

console.log(postsData)

let postData = {}


document.addEventListener('click', function(e){
    
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
})

function handleLikeClick(postId){ 
    const targetOldagramPost = postData.filter(function(post){
        return post.uuid === postId
    })[0]


    if (targetOldagramPost.isLiked){
        targetOldagramPost.likes--
        
    }
    else{
        targetOldagramPost.likes++ 
    }

    targetOldagramPost.isLiked = !targetOldagramPost.isLiked
    render()
}



function getFeedHtml(){
    
    let feedHtml = ``

        postData.forEach(function(post){

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
                <i data-like="${post.uuid}" class="fa-solid fa-heart fa-xl ${likeIconClass}"></i>
                <i class="fa-regular fa-comment fa-xl"></i>
                <i class="fa-regular fa-paper-plane fa-xl"></i>
            </div>
            <div id="like-count" class="bold-text"> ${post.likes} likes</div>
            <p class="comments">
                <span class="username bold-text">${post.username}</span>${post.comment}  
            </p>
        </div>`

   })
   return feedHtml 
   
}


function render(){
    document.getElementById('section-el').innerHTML = getFeedHtml()
    localStorage.setItem("posts", JSON.stringify(postData))
}
    
if(localStorage.getItem("posts")){
    postData = JSON.parse(localStorage.getItem("posts")) 
}
else{
    postData = postsData  
}

render()


















    

                


