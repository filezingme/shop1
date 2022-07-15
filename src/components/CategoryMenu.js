import React from 'react'

function CategoryMenu({categoryList}) {

    return (categoryList && (
        <ul id="menu"> 
            <li><a href={process.env.PUBLIC_URL}><b>Trang chủ</b></a></li>
            {categoryList.map((category, index) => (
                <React.Fragment key={index}>
                    <li><a href={process.env.PUBLIC_URL + `/category/${category.name.toLowerCase()}`}>{category.name} ({category.count})</a></li>
                </React.Fragment>
            ))}
        </ul>
    ))
}

export default CategoryMenu