import React from 'react'
import { Pagination } from 'react-bootstrap'


function Paginate({page, pages, maxPageDisplay=5, category=null, handleConvertToUrlFriendly}) { 


    let url = category ?  `${process.env.PUBLIC_URL}/${handleConvertToUrlFriendly(category)}/` : `${process.env.PUBLIC_URL}/`


    return (!isNaN(page) && pages && (
        <Pagination>

            {/* First */}
            {pages !== 1 && page !== 1 ? (
                <Pagination.First href={`${url}1/`} title='Trang đầu' alt='Trang đầu'><i className="fas fa-angle-double-left"></i></Pagination.First>
            ) : (
                <Pagination.First disabled><i className="fas fa-angle-double-left"></i></Pagination.First>
            )}


            {/* Prev */}
            {page > 1 ? (
                <Pagination.Prev href={`${url}${page-1}/`} title='Trang trước' alt='Trang trước'><i className="fas fa-angle-left"></i></Pagination.Prev>
            ) : (
                <Pagination.Prev disabled><i className="fas fa-angle-left"></i></Pagination.Prev>
            )}
            
            
            {/* Pages */}
            {[...Array(pages).keys()].map((x) => (page === x+1 ? (

                <Pagination.Item key={x+1} active href={`${url}${x+1}/`} title={`Trang ${x+1}`} alt={`Trang ${x+1}`}>{x+1}</Pagination.Item>
            
                ) : x+1 > page && x+1 <= page + maxPageDisplay ? (
                
                    <React.Fragment key={x+1}>

                        <Pagination.Item href={`${url}${x+1}/`} title={`Trang ${x+1}`} alt={`Trang ${x+1}`}>{x+1}</Pagination.Item>  

                        {x+1 === page + maxPageDisplay && x+1 < pages && (
                            <Pagination.Ellipsis href={`${url}${page+(maxPageDisplay+1)}/`} title={`Trang ${page+(maxPageDisplay+1)}`} alt={`Trang ${page+(maxPageDisplay+1)}`} />
                        )}            

                    </React.Fragment> 

                ) : x+1 < page && x+1 >= page - maxPageDisplay && (
                    
                    <React.Fragment key={x+1} >

                        {x+1 === page - maxPageDisplay && x+1 > 1 && (
                            <Pagination.Ellipsis href={`${url}${page-(maxPageDisplay+1)}/`} title={`Trang ${page-(maxPageDisplay+1)}`} alt={`Trang ${page-(maxPageDisplay+1)}`} />
                        )}

                        <Pagination.Item href={`${url}${x+1}/`} title={`Trang ${x+1}`} alt={`Trang ${x+1}`}>{x+1}</Pagination.Item>
                        
                    </React.Fragment>   

                )
            ))}


            {/* Next */}
            {page < pages ? (
                <Pagination.Next href={`${url}${page+1}/`} title='Trang sau' alt='Trang sau'><i className="fas fa-angle-right"></i></Pagination.Next>
            ) : (
                <Pagination.Next disabled><i className="fas fa-angle-right"></i></Pagination.Next>
            )}


            {/* Last */}
            {pages !== page ? (
                <Pagination.Last href={`${url}${pages}/`} title='Trang cuối' alt='Trang cuối'><i className="fas fa-angle-double-right"></i></Pagination.Last>
            ) : (
                <Pagination.Last disabled><i className="fas fa-angle-double-right"></i></Pagination.Last>
            )}

        </Pagination>
    ))
}

export default Paginate