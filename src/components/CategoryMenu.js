import React from 'react'

function CategoryMenu({categoryList}) {

    return (categoryList && (
        <div className='menuX'>
            <i className="fa fa-angle-right"></i> <a href={process.env.PUBLIC_URL} className="home"><b>Trang chủ</b></a><br/> 
            {categoryList.map((category, index) => (
                <React.Fragment key={index}>
                    <i className="fa fa-angle-right"></i> <a href={process.env.PUBLIC_URL + `/category/${category.name.toLowerCase()}`}>{category.name} ({category.count})</a><br/>
                </React.Fragment>
            ))}
        </div>
    ))
}

export default CategoryMenu