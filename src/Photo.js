import React, { useState, useEffect } from 'react';

const Photo = (props) => {
  const [photo, setPhoto] = useState({})

  const fetchPhoto = async () => {
    const photoId = props.match.params.id
    const response = await fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`, {
      method: 'get',
    })
    const json = await response.json()
    setPhoto(json)
  }

  useEffect(() => {
    fetchPhoto()
  }, [])
  
  if (!photo.id) {
    return <h1>'Loading...'</h1>
  } else {
    return (
      <React.Fragment>
        <h1>photo {photo.id}</h1>
        <img src={photo.thumbnailUrl} />
     </React.Fragment>
    )
  }
}

export default Photo

