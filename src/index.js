document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  imageId = 1168 // Enter the id from the fetched image here

  imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  likeURL = `https://randopic.herokuapp.com/likes/`

  commentsURL = `https://randopic.herokuapp.com/comments/`
})
let imageNotFromServer
const likeButt = document.querySelector('#like_button')
const likeDisplay = document.querySelector('#likes')

//  get Image

const imageCard = document.getElementById('image_card')

function renderImage (image) {
  const imageItem = document.createElement('div')
  imageItem.classList.add('image_card')
  imageItem.innerHTML = `
    <img src="${image.url}" id="image" data-id="${image.id}"/>
      <h4 id="name">${image.name}</h4>
      <span>Likes:
        <span id="likes">${image.like_count}</span>
      </span>
      <button id="like_button">Like</button>
      <form id="comment_form">
        <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
        <input type="submit" value="Submit"/>
      </form>
    <ul id="comments">
    <li> ${image.comments.content} </li>
    </ul>
  `

   // Like function

  likeButt.addEventListener('click', () => {
    image.like_count++
    likeDisplay.innerText = `${image.like_count}`
    API.likeImage(image.like_count)
  })

  return imageItem
}

function appendImage (image) {
  const imageItem = renderImage(image)
  imageCard.appendChild(imageItem)
}


API.getImage() 
  .then(imageFromServer => {
    imageNotFromServer = imageFromServer
    appendImage(imageFromServer)
  })


