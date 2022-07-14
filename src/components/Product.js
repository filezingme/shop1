import React from 'react'

function Product({ products, siteInfo }) {

    //console.log(process.env.PUBLIC_URL)

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (<>
        {products.map((product) => (
            <section key={product.id}>
                <header>
                    <h1>{product.title}</h1>
                </header>
                <div className="content">
                    <section>
                        <header>
                            <h2>Giá: <span className="price">{currencyFormat(product.priceInfo.price)}</span></h2>
                            <h3>Mã sp: <strong>{product.id}</strong><br/>
                                Nhóm: <a href={`category/${product.category}`}>{product.category}</a></h3>
                            <p>{product.description}</p>
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