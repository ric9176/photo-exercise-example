import React, { useState, useEffect } from 'react';

const Photo= (props) => {
  const [photo, setPhoto] = useState({})

  useEffect(() => {
    const photoId = props.match.params.id
  
    fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`, {
      method: 'get',
    })
    .then(response => response.json())
    .then(photo => {
      setPhoto(photo)
    })
  }, [])
  
  console.log(photo)
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

