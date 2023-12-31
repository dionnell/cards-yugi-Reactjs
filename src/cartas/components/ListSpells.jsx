import { YugiCard } from "./YugiCard";
import { useFetchCards } from "../hook/useFetchCards";
import { useState } from "react";
import { Pagination }  from './temp'
import { Loading } from "./Loading";


export const ListSpells = ({category}) => {
  
  /*category = `type=Spell Card` */

  const {images, isLoading} = useFetchCards(category);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(100)

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = images.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (

    <>
   
      <div className="container" >
        {
        isLoading && (<Loading/>)
        }
        <div className="row  rows-cols-1 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center ">
            { 
                currentPost.map( image => ( 
                  <YugiCard 
                    key={image.id}
                    {...image}
                  />
                  
                ) )
            }
        </div>
      </div>
      <br />
      <Pagination 
        postPerPage={postPerPage} 
        TotalPost={images.length} 
        paginate={paginate}
        currentPage={currentPage}
        setcurrentPage={setCurrentPage} />
      <br />

    </>
  )
}
