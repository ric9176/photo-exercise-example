import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const PhotoLink = (props) => (
  <Link to={`/${props.photo.id}`}>
    <img src={props.photo.thumbnailUrl} />
  </Link>
)

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
    let pageContent
    if (this.state.photos.length) {
      pageContent = this.state.photos.map(photo =>
        <PhotoLink photo={photo} />
      )
    } else {
      pageContent = 'loading...'
    }

    return (
      <React.Fragment>
        <h1>photo list</h1>
        {pageContent}
      </React.Fragment>
    )
  }
}

export default PhotoList;
