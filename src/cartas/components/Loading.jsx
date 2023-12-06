import { SwishSpinner } from "react-spinners-kit"

export const Loading = () => {

  return (

    <div className="container">
        <div className="row row-cols-md-2 row-cols-lg-4 justify-content-center mb-5">
            <div className="col mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>

            <div className="col mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>
            <div className="col mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>
    
            <div className="col mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>
    
            <div className="col-2 mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>
    
            <div className="col mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>
    
            <div className="col mt-2 mb-2">
                <SwishSpinner
                size={180}
                color="#686769"
                />
            </div>
        </div>
    </div>

  )
}
