import React from 'react'
import ImageShow from './ImageShow'

function ImageList({ images }) {

  const renderImages = images.map((image, index)=>{
    return <ImageShow image={image} key={index}/>
  })

  return (
    <>
    <div className='m-5'>
      Images List : {images.length}
    </div>
    <div>
      {renderImages}
    </div>
    </>
  )
}

export default ImageList