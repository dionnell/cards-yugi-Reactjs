import { useState } from "react"


export const Pagination = ({postPerPage, TotalPost, paginate, currentPage, setcurrentPage}) => {

    const pageMunbers = []
    
    const [pageNumberLimit, setpageNumberLimit] = useState(10);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    for( let i = 1; i <= Math.ceil(TotalPost / postPerPage); i++ ) {
        pageMunbers.push(i)
    }

    
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

  let pageIncrementBtn = null;
  if (pageMunbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="page-item"> <button className="page-link" onClick={handleNextbtn}> &hellip; </button> </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="page-item" > <button className="page-link" onClick={handlePrevbtn}> &hellip; </button> </li>;
  }

  return (

    <>
        <nav>
            <ul className="pagination justify-content-center">
                <button
                    onClick={handlePrevbtn}
                    className="page-link"
                    disabled={currentPage == pageMunbers[0] ? true : false}
                >
                    Prev
                </button>
                {pageDecrementBtn}

                {pageMunbers.map(number => (
                    (number < maxPageNumberLimit + 1 && number > minPageNumberLimit)?
                    <li key={number} className={currentPage == number ? "page-item active" : null } >
                        <a onClick={ () => paginate(number) } href="#" className="page-link">
                            {number}
                        </a>
                    </li>: <li></li>
                ))}

                {pageIncrementBtn}

                <button
                    onClick={handleNextbtn}
                    className="page-link"
                    disabled={currentPage == pageMunbers[pageMunbers.length - 1] ? true : false}
                >
                    Next
                </button>
            </ul>
        </nav>
    </>
  )
}