import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

function Product({ data, categoryMenuComponent }) {

	const [productList, setProductList] = useState([])

    const {categoryName} = useParams()

    useEffect(() => {

        if(data.products) {

            if(categoryName) {
                const filteredProductList = data.products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase())
                setProductList(filteredProductList)
            }
            else {
                setProductList(data.products)
            }
        }

	}, [categoryName, data])

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (productList && (
        productList.map((product) => (
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
                            
                            <div className='menu-wrapper'>
                                <a href="#menu" className="menu-toggle"><span></span></a>
                            </div>

                            <div dangerouslySetInnerHTML={ {__html: categoryMenuComponent} } />

                            <h2><a href="#" className="buy">{data.siteInfo.buyBtnText}</a></h2>
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
        ))
    ))
}

export default Product