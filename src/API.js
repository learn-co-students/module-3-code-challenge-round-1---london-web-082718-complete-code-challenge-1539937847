class API {

  static init () {
    this.imageId = 134
    this.imageURL = `https://randopic.herokuapp.com/images/${this.imageId}`
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
        image_id: this.imageId,
        like_count: like_count
      })
    })
  }

  static sendComment(text) {
    return fetch(this.commentsURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image_id: this.imageId,
        content: text
      })
    })

  }

}

API.init()
