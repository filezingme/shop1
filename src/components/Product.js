import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
// import {Helmet} from "react-helmet";
import PT from "prop-types";
import {
  LightgalleryProvider,
  LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css"; //https://codesandbox.io/examples/package/react-lightgallery > https://codesandbox.io/s/mo45kpo92j


const PhotoItem = ({ image, thumb, title, group }) => (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={thumb} style={{ width: "100%" }} loading="lazy" alt={title} title={title} />
    </LightgalleryItem>
);

PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired
};


function Product({ data, showContactForm }) {

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


    return (<>{productList && (
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
                            
                            {product.description && (<>
                                
                                <div>
                                    <i class="fas fa-quote-left fa-2x fa-pull-left"></i>
                                    <i>{product.description}</i>
                                </div>
                            </>)}

                            <h2 className='h2buy'><a href="/#" className="buy" onClick={(e) => showContactForm(e, product, data.contactFormConfig)}>{data.siteInfo.buyBtnText}</a></h2>
                        </header>
                        <div className="content">
                            <div className={`gallery`}>
                                <LightgalleryProvider>
                                    {product.images.map((image, index) => (
                                        <PhotoItem key={index} 
                                            image={process.env.PUBLIC_URL + `/assets/images/product/${image}`}
                                            thumb={process.env.PUBLIC_URL + `/assets/images/product/thumbnail/${image}`} 
                                            title={product.title}
                                            group={product.id.toString()} 
                                        />									
                                    ))}		                                    
                                </LightgalleryProvider>								
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        ))
        )//productList &&
    }
    </>)//return
}

export default Product