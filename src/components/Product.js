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
	const [siteInfo, setSiteInfo] = useState({})

    const {categoryName} = useParams()


    useEffect(() => {
        if(data.products) {

            if(categoryName) {
                const filteredProductList = data.products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase())
                setProductList(filteredProductList)
            }
            else {
                setProductList(data.products)
                setSiteInfo(data.siteInfo)
            }
        }
	}, [categoryName, data])
    

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    

    function getPrice(product, siteInfo) {

        const priceInfo = product.priceInfo

        //tính giá & phần trăm tăng nếu tồn tại cột % trên sản phẩm
        //cột % [percentagePriceIncrease] chấp nhận cả số âm và số 0
        if (product.priceInfo.percentagePriceIncrease !== null && product.priceInfo.percentagePriceIncrease !== undefined)
        {            
            const priceResult = priceInfo.price + (priceInfo.percentagePriceIncrease/100*priceInfo.price)
            return currencyFormat(priceResult)
        }
        //tính giá & phần trăm tăng nếu tồn tại cột % trên toàn cục 
        //cột % [percentagePriceIncreaseAppliesToAllProducts] chấp nhận cả số âm và số 0
        else if (siteInfo.percentagePriceIncreaseAppliesToAllProducts !== null && siteInfo.percentagePriceIncreaseAppliesToAllProducts !== undefined)
        {
            const priceResult = priceInfo.price + (siteInfo.percentagePriceIncreaseAppliesToAllProducts/100*priceInfo.price)
            return currencyFormat(priceResult)
        }
        //trả về chỉ giá sản phẩm nếu không tồn tại cột % trên sản phẩm và cột % trên toàn cục
        else
        {
            return currencyFormat(priceInfo.price)
        }
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
                            <h2>Giá: <span className="price">{getPrice(product, siteInfo)}</span></h2>
                            <h3>
                                Mã sp: <strong>{product.id}</strong><br/>
                                Nhóm: <a href={process.env.PUBLIC_URL + `/category/${product.category.toLowerCase()}`}>{product.category}</a><br/><br/>
                            </h3>
                            
                            {product.description && (<>
                                
                                <div>
                                    <i className="fas fa-quote-left fa-2x fa-pull-left"></i>
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