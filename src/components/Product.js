import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

function Product({ products, siteInfo }) {

	const [productArray, setProductArray] = useState([])

	const [categories, setCategories] = useState([])

    const {categoryName} = useParams()

    useEffect(() => {

        if(categoryName) {
            const filteredProduct = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase())
            setProductArray(filteredProduct)
        }
        else {
            setProductArray(products)
        }

        //get list of unique categories
        const uniqueCategories = Array.from(new Set(products.map(a => a.category)));
        setCategories(uniqueCategories)

	}, [categoryName, products])

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (<>
        {productArray.map((product) => (
            <section key={product.id}>
                <header>
                    <h1>{product.title}</h1>
                </header>
                <div className="content">
                    <section>
                        <header>
                            <h2>Giá: <span className="price">{currencyFormat(product.priceInfo.price)}</span></h2>
                            <h3>
                                Mã sp: <strong>{product.id}</strong><br/>
                                Nhóm: <a href={process.env.PUBLIC_URL + `/category/${product.category.toLowerCase()}`}>{product.category}</a><br/><br/>
                            </h3>
                            
                            <p>{product.description}</p>

                            <div className='menu'>
                                <i className="fa fa-angle-right"></i> <a href={process.env.PUBLIC_URL} className="home"><b>Trang chủ</b></a><br/>   

                                {categories.map((category, index) => (
                                    <React.Fragment key={index}>
                                        <i className="fa fa-angle-right"></i> <a href={process.env.PUBLIC_URL + `/category/${category.toLowerCase()}`}>{category}</a><br/>
                                    </React.Fragment>
                                ))} 
                                
                            </div>
                            <h2><a href="#" className="buy">{siteInfo.buyBtnText}</a></h2>
                        </header>
                        <div className="content">
                            <div className={`gallery lightgallery`}>
                                {product.images.map((image, index) => (
                                    <a key={index} data-src={process.env.PUBLIC_URL + `/assets/images/product/${image}`}>
                                        <img src={process.env.PUBLIC_URL + `/assets/images/product/thumbnail/${image}`} alt={product.title} title={product.title} loading="lazy" />
                                    </a>										
                                ))}										
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        ))}    
    </>    
    )
}

export default Product