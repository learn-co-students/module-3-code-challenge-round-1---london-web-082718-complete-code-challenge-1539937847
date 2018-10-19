document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 1164

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const container = document.querySelector('.container')
  const imageCard = document.querySelector('#image_card')
  const commentInput = document.querySelector('#comment_input').value
  const likeBTN = document.querySelector('#like_button').value
  const likes = document.querySelector('#likes')

  

  // .then(character => character.forEach(character => addCharacter(character)))
  imageEl = document.createElement('div')

  fetch(imageURL)
  .then(resp => resp.json())
  // .then(images => console.log(images))
 
   .then(images => renderImages(images))
   
  // .then(images => images.forEach(image => renderImage(image)))
  

  function renderImages(images) {
    // for (const comment of comments)
    for (const image in images)
    imageEl.innerHTML = `
  

  <div class="container">
  <div class="row" id="image_content">
    <div class="card col-md-4"></div>
    <div id="image_card" class="card col-md-4">
      <img src="${images.url}" id="image" data-id='${images.id}'/>
      <h4 id="name">${images.name}</h4>
      <span>Likes:
        <span id="likes">${images.like_count}</span>
      </span>
      <button id="${images.id}="like_button">Like</button>
      <form id="comment_form">
        <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
        <input id="${images.id}" type="submit" value="Submit"/>
      </form>
      <ul id="comments">
      
        <li>${images.comments.content}</li>
      </ul>
    </div>
    <div class="card col-md-4"></div>
  </div>
</div>`

imageCard.appendChild(imageEl)



  }

//  commentInput.addEventListener('submit', (e) => {
//    e.id = 
//   fetch('https://randopic.herokuapp.com/images'), {
//     'method': 'PATCH',
//     'headers': {'Content-Type': 'application/json'},
//     'body': JSON.stringify ({'Comments': newComment})
//   }

//   .then(resp => resp.json())
//   // .then(updatedToy => {
//   //   document.getElementById(`${updatedToy.id}`).remove()
//   //   createToy(updatedToy)
// })

document.addEventListener('click', (e) => {
  // console.log(e)})
  if (e.target == likeBTN) {
    
    const id = e.target.id
     const currentLikes = document.querySelector(likes.innerText)
     const addLike = parseInt(currentLikes) +1
     console.log(currentLikes)
    like(id, parseInt(currentLikes) +1 )
   }
})
const like = (id, addLike) => {
  fetch(`https://randopic.herokuapp.com/images/${id}`, {
    'method': 'PATCH',
    'headers': {'Content-Type': 'application/json'},
    'body': JSON.stringify ({'likes': addLike})
  }
     .then(resp => resp.json())
      .then(updatedLikes => {
    document.getElementById(`${updatedLikes.id}`).remove()
    RenderImage(updatedLikes)
  




}
))
}})


  




