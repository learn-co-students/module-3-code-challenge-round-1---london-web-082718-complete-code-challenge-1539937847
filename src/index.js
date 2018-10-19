 
  let imageId = 1169 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const containerDiv = document.querySelector('.container')

  const commentForm = document.querySelector('#comment_form')

  const commentInput = document.querySelector('#comment_input')

  const commentCont = document.getElementById('#comments')

  const renderPic = function(pic){
    const rowDiv = document.createElement('div');
        rowDiv.className = "row";
        rowDiv.id = "image-content";
        rowDiv.innerHTML = `
        <div class="card col-md-4"></div>
        <div id="image_card" class="card col-md-4">
            <img src="${pic.url}" id="image" data-id=""/>
            <h4 id="name">${pic.name}</h4>
            <span>Likes:
              <span id="like-count">${pic.like_count}</span>
            </span>
            <button id="${pic.id}" class="like_button">Like</button>
            <form id="comment_form">
              <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
              <input class="comment_submit" type="submit" value="Submit"/>
            </form>
      
            <ul id="comments">
              ${renderComments(pic.comments)}
            </ul>
       
        </div>
        <div class="card col-md-4"></div>
        `
    containerDiv.appendChild(rowDiv);
    }
    
    const renderComment = function(comment){
      const commentLi = document.createElement('li');
       commentLi.innerHTML = comment.content;
       console.log(commentLi)
      //  commentCont.appendChild(commentLi); 
     }
    
    const renderComments = function(commentsArray){
      commentsArray.forEach(renderComment)
    };

    API.getPics().then(renderPic);

    document.addEventListener('click', event => {
      if (event.target.className === 'like_button'){
      const currentLikes = document.querySelector('#like-count')
      const increasedLike = parseInt(currentLikes.innerText) + 1
      API.increaseLikes(increasedLike).then(currentLikes.innerText = increasedLike)
      }})

    document.addEventListener('submit', event => {
      if (event.target.className === 'comment_submit')
      event.preventDefault();
      let commentText = commentInput.value;
      API.createComment(commentText).then(event.target.reset())
  })