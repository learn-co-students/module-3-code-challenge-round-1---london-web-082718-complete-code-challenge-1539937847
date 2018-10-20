let imageNotFromServ
const likeButt = document.getElementById('like_button')
const likeDisplay = document.getElementById('likes')
const commentsList = document.getElementById('comments')
const imageCard = document.getElementById('image_card')
const image = document.getElementById('image')

function like() {
  likes = parseInt(likeDisplay.innerText)
  likes++
  API.likeImage(likes)
  likeDisplay.innerText = `${likes}`
}

function renderImage(imageData){
  console.log(imageData.comments)
  image.src = imageData.url
}

function addComments(comm) {
  const listItem = document.createElement('li')
  listItem.innerText = comm
  commentsList.append(listItem)
}


function appendImage (image) {
  const imageItem = renderImage(image)
}

const commentForm = document.getElementById('comment_form')
commentForm.addEventListener('submit', event => {
  event.preventDefault()
  const commentInput = document.getElementById('comment_input')
  addComments(commentInput.value)
  API.sendComment(commentInput.value)
})


API.getImage()
.then(imageFromServer => {
  imageNotFromServer = imageFromServer
  appendImage(imageFromServer)
  likeDisplay.innerText = imageFromServer.like_count
  imageFromServer.comments.forEach(comm => {
    addComments(comm.content)
  })
})


