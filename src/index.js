// document.addEventListener('DOMContentLoaded', () => {
//   console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
const imageContainer = document.getElementById('image_card')
const formEl = document.getElementById('comment_form')
const inputEl = document.getElementById('comment_input') 
const listEL = document.getElementById('comments') 
let commentId = 0


let imageId = 1165

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

const likeURL = `https://randopic.herokuapp.com/likes/`

const commentsURL = `https://randopic.herokuapp.com/comments/`


const getImage = () => 
  fetch(imageURL)
      .then(resp => resp.json())

const updateImageLikes = (data) => 
        fetch('https://randopic.herokuapp.com/likes', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({
              image_id: 1165,
              like_count: data
            })  
            }).then(resp => resp.json())

const updateImageComments = (data) => 
        fetch('https://randopic.herokuapp.com/comments', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({
              image_id: 1165,
              content: data
            })
            }).then(resp => resp.json())           


const renderImage = image => {  
  const divEl = document.createElement('div')
  divEl.innerHTML = `
    <img src=${image.url} id="image" data-id=${image.id}/>
    <h4 id="name">${image.name}</h4>
    <span>Likes:
      <span id="likes">${image.like_count}</span>
    </span>
    <button id="like_button" data-id=${image.id}>Like</button>
  `
  imageContainer.append(divEl)

} 

getImage() 
      .then(renderImage)   


document.addEventListener('click', (e) => {
  // conditionally render the like number
  if (e.target.id === "like_button") {
      let likeNum = e.target.previousElementSibling.lastElementChild
      likeNum.innerText = parseInt(likeNum.innerText) + 1
      updateImageLikes(parseInt(likeNum.innerText))
  }

})

document.addEventListener('submit', (e) => {
  // conditionally render the like number
  event.preventDefault()
  console.log("test")
  if (e.target.id === "comment_form") {
    const commentEl = document.createElement('li')
    commentEl.innerText = inputEl.value
    listEL.append(commentEl)
    updateImageComments(commentEl)  
  }
  
})



