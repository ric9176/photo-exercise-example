import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
    method: 'get',
  })
  .then(response => response.json())
  .then(photos => {
    this.setState({ photos })
  })

  }

  render() {
    let photos
    if (this.state.photos.length) {
      photos = this.state.photos.map(photo =>
        <Link to={`/${photo.id}`}><img src={photo.thumbnailUrl}></img></Link>
      )
    } else {
      photos = 'loading...'
    }

    return (
      <React.Fragment>
        <h1>photo list</h1>
        {photos}
      </React.Fragment>
    )
  }
}

export default PhotoList;
