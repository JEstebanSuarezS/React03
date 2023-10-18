import React, { useState, useEffect} from 'react'
import image from '../public/1.jpg'
import image1 from '../public/2.jpg'
import image2 from '../public/3.jpg'

const Content = () =>{
    const images = [image, image1, image2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); 

      return () => clearInterval(interval);
    }, []);
    return (
        <>
            <img className="h-[25em] w-fit" src={images[currentImageIndex]} alt=""/>
        </>
    )
}

export default Content
