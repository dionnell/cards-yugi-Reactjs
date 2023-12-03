

export const Pagination = ({postPerPage, TotalPost, paginate}) => {

    const pageMunbers = []

    for( let i = 1; i <= Math.ceil(TotalPost / postPerPage); i++ ) {
        pageMunbers.push(i)
    }

  return (

    <>
    <nav>
        <ul className="pagination">
            {pageMunbers.map(number => (
                <li key={number} className="page-item" >
                    <a onClick={ () => paginate(number) } href="#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    </>
  )
}

