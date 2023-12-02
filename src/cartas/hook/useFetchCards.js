import { useEffect, useState } from "react";
import { GetCards } from "../helper/GetCards";

export const useFetchCards = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await GetCards(category);
        setImages(newImages);
        setIsLoading(false);
      }
    
      useEffect( () =>{
        getImages();
      }, [] )
      
  
    return {
        images,
        isLoading
    };

}