const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let sectionEl = document.getElementById("section-el")


    for (let i = 0; i < posts.length; i++){

       sectionEl.innerHTML += 
       `<div class="post">
                <div class="post-header">
                        <img class="img-header" src="${posts[i].avatar}">
                        <div class="header-info">
                            <div class="user-full-name"><span class="bold-text">${posts[i].name}</span></div>
                            <div class="user-location">${posts[i].location}</div>
                        </div>
                    </div>

                    <img class="post-img" src="${posts[i].post}">
                    
                    <div class="social-media">
                        <button id="click-me"><img class="icons" src="images/icon-heart.png"></button>
                        <img class="icons" src="images/icon-comment.png">
                        <img class="icons" src="images/icon-dm.png">
                    </div>
                    <div id="like-count" class="bold-text"> ${posts[i].likes} likes</div>
                    <p class="comments">
                        <span class="username bold-text">${posts[i].username}</span>${posts[i].comment}  
                    </p>
        </div>`

      
}












    

                


