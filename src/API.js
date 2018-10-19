class API {

  static init () {
    let imageId = 1168 
    this.imageURL = `https://randopic.herokuapp.com/images/${imageId}`
    this.likeURL = 'https://randopic.herokuapp.com/likes/'
    this.commentsURL = 'https://randopic.herokuapp.com/comments/'
  }

  static getImage () {
    return fetch(`${this.imageURL}`)
      .then(resp => resp.json())
  }

  static likeImage (like_count) {             
    return fetch(`${this.likeURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image_id: 1168,
        like_count: like_count
      })
    })
  }

}

API.init()