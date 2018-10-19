class API {
    static init () {
      let imageId = 1167
      this.imageURL = `https://randopic.herokuapp.com/images/${imageId}`
      this.likeURL = `https://randopic.herokuapp.com/likes/`
      this.commentsURL = `https://randopic.herokuapp.com/comments/`
    }

    static getImage() {
        return fetch(this.imageURL)
          .then(resp => resp.json())
      }
  
    static getComments() {
      return fetch(this.commentsURL)
        .then(resp => resp.json())
    }
  
    static getComment (id) {
      return fetch(`${this.commentsURL}/${id}`)
        .then(resp => resp.json())
    }
  
    static createComment (content) {
      return fetch(this.commentsURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: content
        })
      }).then(resp => resp.json())
      .then(renderComment)
    }
  
    static deleteComment (id) {
      return fetch(`${this.commentsURL}/${id}`, {
        method: 'DELETE'
      })
    }
  
    static increaseLikes (id, increasedLike) {
      return fetch(`${this.likeURL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'like_count': increasedLike })
      }).then(resp => resp.json())
    }
  
    static editComment (comment) {
      return fetch(`${this.commentsURL}/${quote.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
      }).then(resp => resp.json())
    }
  }
  
  API.init()