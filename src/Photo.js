import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Photo extends Component {
  constructor() {
    super()
    this.state = {
      photo: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
    const photoId = this.props.match.params.id
    fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`, {
    method: 'get',
  })
  .then(response => response.json())
  .then(photo => {
    console.log(photo)
    this.setState({ photo })
  })

  }

  render() {
    const url = this.state.photo.thumbnailUrl
    let photo
    if (this.state.photo !== {}) {
      photo =  <img src={url}></img>
    } else {
      photo = 'loading...'
    }

    return (
      <React.Fragment>
        <h1>photo {this.state.photo.id}</h1>
        {photo}
      </React.Fragment>
    )
  }
}

export default Photo;
