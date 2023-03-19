const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false,
        uuid: '337be4e5-45d9-430e-b661-e9526bb461ef'
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
        uuid: '6bd98d66-7891-4e50-a522-66bd6de6569c'
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false,
        uuid:'8f315418-e8f8-4d41-8619-9add6ebf4ca8'
    }
]



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
    console.log(targetOldagramPost.likes)
    render()
}



function getFeedHtml(){
    let feedHtml = ``
    
    posts.forEach(function(post){
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
                <img data-like="${post.uuid}"class="icons" src="images/icon-heart.png">
                <img class="icons" src="images/icon-comment.png">
                <img class="icons" src="images/icon-dm.png">
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
}


render()












    

                


