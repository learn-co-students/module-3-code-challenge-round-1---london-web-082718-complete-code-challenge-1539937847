document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  
  const imageContainer = document.querySelector('#image_content')
  const imageEl = document.querySelector('#image')
  const imageName = document.querySelector('#name')
  
  // const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  // const likeURL = `https://randopic.herokuapp.com/likes/`

  // const commentsURL = `https://randopic.herokuapp.com/comments/`

  function appendImage (image) {
    const imageItem = renderImage(image)
    imageContainer.appendChild(imageItem)
  }
  
  function renderImage () {
    imageEl.src = `${image.url}`
    imageName.innerText = `${image.name}`
 
  }

})

API.getImage()
   .then(imageData => {
     image = imageData
    appendimage(imageData)
   })