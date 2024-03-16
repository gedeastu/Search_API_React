import React from 'react'
import ImageShow from './ImageShow'

function ImageList({ 
  images, 
  //term 
}) {

  const renderImages = images.map((image, index)=>{
    return <ImageShow image={image} key={index}/>
  })

  return (
    <>
    <div className='m-5'>
      Images List : {images.length}
    </div>
    <div className='columns-3 gap-y-5'>
      {/* {images != renderImages ? (renderImages) : <p className='text-black text-2xl'>No result</p>} */}
      {renderImages}
    </div>
    </>
  )
}

export default ImageList