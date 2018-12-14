import React, { useState, useEffect }   from 'react';
import { Link } from 'react-router-dom'

const PhotoLink = (props) => (
  <Link to={`/${props.photo.id}`}>
    <img src={props.photo.thumbnailUrl} />
  </Link>
)

const PhotoList = (props) => {
  const [photos, setPhotos] = useState([])

const fetchPhotos = async () => {
 const response = await fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
    method: 'get',
  })
  const json = await response.json()
  setPhotos(json)
}

  useEffect(() => {
    fetchPhotos()
  }, [])
  
  if (!photos.length) {
    return <h1>Loading...</h1>
  } else {
    return (
      <React.Fragment>
        <h1>photo list</h1>
          {photos.map(photo =>
          <PhotoLink photo={photo} />
        )}
      </React.Fragment>
    )
  }
}


export default PhotoList;
