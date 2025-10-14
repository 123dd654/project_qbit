import React from 'react';
import Image from 'next/image';

const ImageComponent = ({ src, alt }) => {
  return (
    <div className='img_menu'>
        <Image 
          src={src} 
          alt={alt} 
          width={375} 
          height={240}
          quality={75}
          priority
        /> 
    </div>
  )
}

export default ImageComponent;
