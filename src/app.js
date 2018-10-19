class API {
    static init () {
      this.baseUrl = 'https://randopic.herokuapp.com'
      this.pic_id = 1169
    }
  
    static getPics() {
      return fetch(`${this.baseUrl}/images/${this.pic_id}`)
        .then(resp => resp.json())
    }

    static increaseLikes (increasedLike) {
         return fetch(`${this.baseUrl}/likes/`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
              'image_id': this.pic_id,
              'like_count': increasedLike})
        }).then(resp => resp.json())
      }

    static createComment (commentText) {
      // 'POST'
      return fetch(`${this.baseUrl}/comment/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            'image_id': this.pic_id,
          'comments': {'content': commentText},
        })
      }).then(resp => resp.json())
      .then(renderComment)
    }
  
  }
  
  API.init()