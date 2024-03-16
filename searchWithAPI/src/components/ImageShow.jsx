import React from 'react'

function ImageShow({image}) {
  return (
    <>
      <div>
        <img src={`${image.urls.small}`} alt={image.alt_description}  className='w-full m-5 h-full object-cover'/>
      </div>
    </>
  )
}

export default ImageShow