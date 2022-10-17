import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import PT from "prop-types";

import {
  LightgalleryProvider,
  LightgalleryItem
} from "react-lightgallery";

import "lightgallery.js/dist/css/lightgallery.css"; //https://codesandbox.io/examples/package/react-lightgallery > https://codesandbox.io/s/mo45kpo92j

import parser from 'html-react-parser';
import Paginate from './Paginate';

// import $ from 'jquery';
// import { Helmet } from 'react-helmet';



const PhotoItem = ({ image, thumb, title, group }) => (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img className='p-d-photo' src={thumb} style={{ width: "100%" }} loading="lazy" alt={title} title={title} />
    </LightgalleryItem>
);

PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired
};


function Product({ data, onShowOrderForm, onShowProductReadMore, onActivedMenuItem,  onConvertToUrlFriendly, onCurrencyFormat }) {
    
	const [dataObj, setDataObj] = useState(null)
    const charNumLimitedInDesc = 100
    const {categoryName, productName, productId, page=1} = useParams()


    useEffect(() => {
        if(!dataObj) {

            console.log('Product component', {categoryName: categoryName, productName: productName, productId: productId, page: page})

            const obj = {}

            //paginateConfig
            if(data.paginateConfig){
                obj.itemsPerPage = data.paginateConfig.itemsPerPage
                obj.maxPageDisplay = data.paginateConfig.maxPageDisplay
            }
            
            //product list
            let list = data.products
            if(categoryName) {
                list = list.filter(product => onConvertToUrlFriendly(product.category) === onConvertToUrlFriendly(categoryName))

                //auto callback CategoryName
                ;(() => onActivedMenuItem(categoryName))()
            }

            //product detail > callback > show ProductReadMore
            if(productName && productId) {
                let productDetails = data.products.filter(product => 
                    onConvertToUrlFriendly(product.title) === onConvertToUrlFriendly(productName) && 
                    product.id === parseInt(productId)
                )[0]

                productDetails.priceToUser = getPrice(productDetails.priceInfo.price, productDetails.priceInfo.percentagePriceIncrease, data.siteInfo.percentagePriceIncreaseAppliesToAllProducts)
                
                //auto callback product details
                onShowProductReadMore(null, productDetails, false)
            }


            //productList with paging
            const listPaging = list.slice((parseInt(page) - 1) * obj.itemsPerPage, parseInt(page) * obj.itemsPerPage)
            obj.productList = listPaging

            //total pages
            obj.totalPages = Math.ceil(list.length/obj.itemsPerPage)

            //site info
            obj.siteInfo = data.siteInfo

            setDataObj(obj)
        }
	}, [categoryName, page])


    function getPrice(price, percentagePriceIncrease, percentagePriceIncreaseAppliesToAllProducts) {

        //tính giá & phần trăm tăng nếu tồn tại cột % trên sản phẩm
        //cột % [percentagePriceIncrease] chấp nhận cả số âm và số 0
        if (percentagePriceIncrease !== null && percentagePriceIncrease !== undefined)
        {            
            const priceResult = price + (percentagePriceIncrease/100*price)
            return priceResult
        }

        //tính giá & phần trăm tăng nếu tồn tại cột % trên toàn cục 
        //cột % [percentagePriceIncreaseAppliesToAllProducts] chấp nhận cả số âm và số 0
        else if (percentagePriceIncreaseAppliesToAllProducts !== null && percentagePriceIncreaseAppliesToAllProducts !== undefined)
        {
            const priceResult = price + (percentagePriceIncreaseAppliesToAllProducts/100*price)
            return priceResult
        }

        //trả về chỉ giá sản phẩm nếu không tồn tại cột % trên sản phẩm và cột % trên toàn cục
        else
        {
            return price
        }
    }

    const validShowReadMore = (input, limit) => 
    {
        if(input !== null && input !== undefined && input.length > limit)
            return true  
        return false;
    }

    const showReadMore = (product, limit, dots, percentagePriceIncreaseAppliesToAllProducts) => 
    {
        //format the Desc
        let description = updateDescByOtherPriceInPercentage(product, percentagePriceIncreaseAppliesToAllProducts)
        
        if(validShowReadMore(description, limit))
        {
            description = description.substring(0,limit)
            var lastIndexOfSpace = description.lastIndexOf(" ")
            description = description.substr(0, lastIndexOfSpace) + dots
        }    
        return parser(description);
    }

    const updateDescByOtherPriceInPercentage = (product, percentagePriceIncreaseAppliesToAllProducts) => 
    {
        let description = product.description
        if(description !== null && description !== undefined) 
        {
                let prices = description.match(/\d+(?:\.\d+)?/g)
                if(prices)
                {
                    prices.forEach(function(price) 
                    {
                        //get price
                        let iPrice = Number(price)
                        if(iPrice > 10000){                        
                            let percentagePriceIncrease = getPrice(iPrice, product.priceInfo.percentagePriceIncrease, percentagePriceIncreaseAppliesToAllProducts)
                            description = description.replace(price, onCurrencyFormat(percentagePriceIncrease))

                            //add more property 'DescByOtherPriceInPercentage' to object
                            product.DescByOtherPriceInPercentage = description
                        }
                    });
                }
        }

        return description
    } 


    return (dataObj && (<>
        {/* product list */}
        {dataObj.productList.map((product) => {
            
            //create new fields of product object
            product.priceToUser = getPrice(product.priceInfo.price, product.priceInfo.percentagePriceIncrease, dataObj.siteInfo.percentagePriceIncreaseAppliesToAllProducts)
            product.productFirstThumbnailUrl = process.env.PUBLIC_URL + `/assets/images/product/thumbnail/${(product.images[0])}`

            return (
                <section key={product.id}>
                    <header>
                        <h1 className='home-product-title' 
                            onClick={(e) => {
                                onShowProductReadMore(e, product)
                            }}
                        >
                            <span className='p-d-title'>{product.title}</span>
                        </h1>
                    </header>
                    <div className="content">
                        <section>
                            <header>
                                <h2>
                                    Giá: <span className="price">{onCurrencyFormat(product.priceToUser)}</span>
                                </h2>
                                <h3>
                                    <i>Mã: <strong>{product.id}</strong></i><br/>
                                    <i>Nhóm: <a className='p-d-category' href={process.env.PUBLIC_URL + `/${onConvertToUrlFriendly(product.category)}/1/`}>
                                            {product.category}
                                    </a></i><br/><br/>
                                </h3>
                                
                                {product.description && (<div>
                                    <i className="fas fa-quote-left fa-2x fa-pull-left"></i>
                                    <p className='excerpt' onClick={(e) => onShowProductReadMore(e, product)}>
                                        {showReadMore(product, charNumLimitedInDesc, ' ...', dataObj.siteInfo.percentagePriceIncreaseAppliesToAllProducts)}                                    
                                        {validShowReadMore(product.description, charNumLimitedInDesc) && (
                                            <i className='read-more'>Xem thêm</i>
                                        )}                                    
                                    </p>
                                </div>
                                )}

                                <h2 className='h2buy'><a href="/#" className="buy" onClick={(e) => onShowOrderForm(e, product)}>Đặt mua</a></h2>
                            </header>
                            <div className="content">
                                <input type="hidden" id="price" value={onCurrencyFormat(product.priceInfo.price)} />
                                <input type="hidden" id="percentagePriceIncrease" value={product.priceInfo.percentagePriceIncrease} />
                                <input type="hidden" id="percentagePriceIncreaseAppliesToAllProducts" value={dataObj.siteInfo.percentagePriceIncreaseAppliesToAllProducts} />
                                
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
            )
        })}

        {/* pagination-box1 */}
        <div className="pagination-box1">
            <Paginate page={parseInt(page)} pages={dataObj.totalPages} maxPageDisplay={dataObj.maxPageDisplay} category={categoryName} onConvertToUrlFriendly={onConvertToUrlFriendly} />
        </div>

        {/* pagination-box2 */}
        <section>
            <div className='content'>
                <div className="pagination-box2">
                    <Paginate page={parseInt(page)} pages={dataObj.totalPages} maxPageDisplay={dataObj.maxPageDisplay} category={categoryName} onConvertToUrlFriendly={onConvertToUrlFriendly} />
                </div>
            </div>
        </section>
    </>))
}

export default Product