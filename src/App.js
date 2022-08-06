import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product';
import CategoryMenu from './components/CategoryMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery';
import OrderForm from './components/OrderForm';
import PagesTab from './components/PagesTab';
import PageNotFound from './components/PageNotFound';
import ProductReadMore from './components/ProductReadMore';
import CustomersTalk from './components/CustomersTalk';

function App() {

	const [originalData, setOriginalData] = useState(null)

	const [categories, setCategories] = useState([])


	useEffect(() => {

		fetchData();

		//$('html, body').animate({scrollTop : 0},1000);

	}, [])
	
		
	async function fetchData() {
		const { data } = await axios.get(process.env.PUBLIC_URL+'/data.json')
		//set page title
		document.title = data.siteInfo.pageTitle
		
		//set data
		setOriginalData(data)

		//set category list
		if(data.products) {
			//get list of unique categories
			const uniqueCategories = Array.from(new Set(data.products.map(a => a.category)));

			if(uniqueCategories) {
				let array = []
				uniqueCategories.forEach((category) => {
					array.push({
						name: category, 
						count: data.products.filter(x => x.category === category).length
					});
				});

				setCategories(array)
			}
		}
	}

	const handleGoTop = () => {
		$('html, body').animate({scrollTop : 0},50);
		return false;
	}

	const handleGoBottom = () => {
		$('html, body').animate({scrollTop : $(document).height()},50);
		return false;
	}

	$(window).on('scroll', function(){

		//show goTop button
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
		
		//show goBottom button
		if (($(window).scrollTop() + $(window).height()) === $(document).height()) {
			$('#toBottom').fadeOut();
		} else {
			$('#toBottom').fadeIn();
		}
	});

	
	//Contact form
	const [showOrderForm, setShowOrderForm] = useState(false);
	const [product, setProduct] = useState({});
	const handleShowOrderForm = (e, product) => {
		e.preventDefault()
		setShowOrderForm(true)
		setProduct(product)
	}
	const handleCloseOrderForm = () => {
		setShowOrderForm(false)
	}
	
	//Category menu
	const [showCategoryMenu, setShowCategoryMenu] = useState(false);
	const handleShowCategoryMenu = (e) => {
		e.preventDefault()
		setShowCategoryMenu(true)
	}
	const handleCloseCategoryMenu = () => {
		setShowCategoryMenu(false)
	}
	const [activedMenuItem, setActivedMenuItem] = useState('');
	const handleActivedMenuItem = (categoryName) => {
		setActivedMenuItem(categoryName)
	}
	
	//Copyright
	const [showCopyright, setShowCopyright] = useState(true);
	const handleShowCopyright = (showCopyright) => {
		setShowCopyright(showCopyright)
	}
	
	//Pages tab
	const [showPagesTab, setShowPagesTab] = useState(false);
	const handleShowPagesTab = (e) => {
		e.preventDefault()
		setShowPagesTab(true)
	}
	const handleClosePagesTab = () => {
		setShowPagesTab(false)
	}
	
	//Customers Talk
	const [showCustomersTalk, setShowCustomersTalk] = useState(false);
	const handleShowCustomersTalk = (e) => {
		e.preventDefault()
		setShowCustomersTalk(true)
	}
	const handleCloseCustomersTalk = () => {
		setShowCustomersTalk(false)
	}
	const [showLightGalleryAboveModal, setShowLightGalleryAboveModal] = useState(false);
	const handleShowLightGalleryAboveModal = (value) => {
		setShowLightGalleryAboveModal(value)
	}
	
	//Product Read More
	const [showProductReadMore, setShowProductReadMore] = useState(false);
	const handleShowProductReadMore = (e, product, isClicked = true) => {		
		setShowProductReadMore(true)
		setProduct(product)

		if (isClicked) {
			if (window.history.replaceState) {
				let url = `/product/${handleConvertToUrlFriendly(product.title)}-${product.id}/`
				
				//ngăn không cho trình duyệt lưu trữ lịch sử với mỗi thay đổi
				window.history.replaceState(null, product.title, url)

				//cho trình duyệt lưu trữ lịch sử với mỗi thay đổi
				//window.history.pushState({}, null, url);
			}
		}
	}
	const handleCloseProductReadMore = () => {
		setShowProductReadMore(false)
	}

	//Convert string to Url Friendly
    const handleConvertToUrlFriendly = (strInput) => {
        return strInput.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .replace(/[^a-z0-9_]+/gi, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase();
    }   
    
	//Currency Format, ex: 450000 > 450,000
    function handleCurrencyFormat(num) {
		if (!isNaN(num))
        	return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		else
			return ''
    }    


	return (originalData && (
		<Router basename={process.env.PUBLIC_URL}>
			<div id="wrapper">
				<Routes>
					<Route path="/" element={ <Product 
						data={originalData} 
						handleShowOrderForm={handleShowOrderForm} 
						handleShowProductReadMore={handleShowProductReadMore} 
						handleActivedMenuItem={handleActivedMenuItem} 
						handleConvertToUrlFriendly={handleConvertToUrlFriendly}
						handleCurrencyFormat={handleCurrencyFormat} /> 
						} exact > 
							<Route path=":page/" element={ <Product 
								data={originalData} 
								handleShowOrderForm={handleShowOrderForm} 
								handleShowProductReadMore={handleShowProductReadMore} 
								handleActivedMenuItem={handleActivedMenuItem} 
								handleConvertToUrlFriendly={handleConvertToUrlFriendly}
								handleCurrencyFormat={handleCurrencyFormat} /> 
							} exact />
					</Route>

					<Route path="/:categoryName/:page/" element={ <Product 
						data={originalData} 
						handleShowOrderForm={handleShowOrderForm} 
						handleShowProductReadMore={handleShowProductReadMore} 
						handleActivedMenuItem={handleActivedMenuItem} 
						handleConvertToUrlFriendly={handleConvertToUrlFriendly}
						handleCurrencyFormat={handleCurrencyFormat} /> 
					} exact />

					<Route path="/product/:productName-:productId/" element={ <Product 
						data={originalData} 
						handleShowOrderForm={handleShowOrderForm} 
						handleShowProductReadMore={handleShowProductReadMore} 
						handleActivedMenuItem={handleActivedMenuItem} 
						handleConvertToUrlFriendly={handleConvertToUrlFriendly}
						handleCurrencyFormat={handleCurrencyFormat} /> 
					} exact />

					<Route path="*" element={ <PageNotFound 
						handleShowCopyright={handleShowCopyright} /> 
					} />
			    </Routes>



				{/* Menu */}
				<CategoryMenu categoryList={categories} handleClose={handleCloseCategoryMenu} isShow={showCategoryMenu} activedItem={activedMenuItem} handleConvertToUrlFriendly={handleConvertToUrlFriendly} />

				{/* Contact form */}
				<OrderForm originalData={originalData} handleClose={handleCloseOrderForm} isShow={showOrderForm} product={product} handleCurrencyFormat={handleCurrencyFormat} />	

				{/* Pages tab */}
				<PagesTab handleClose={handleClosePagesTab} isShow={showPagesTab} pagesTab={originalData.pagesTab} mailConfig={originalData.mailConfig} />	

				{/* Customers talk */}
				<CustomersTalk customersTalkList={originalData.customersTalk} handleClose={handleCloseCustomersTalk} isShow={showCustomersTalk}  handleShowLightGalleryAboveModal={handleShowLightGalleryAboveModal} showLightGalleryAboveModal={showLightGalleryAboveModal} />	

				{/* Product Read More */}
				<ProductReadMore handleClose={handleCloseProductReadMore} isShow={showProductReadMore} product={product} handleConvertToUrlFriendly={handleConvertToUrlFriendly} handleCurrencyFormat={handleCurrencyFormat} handleShowOrderForm={handleShowOrderForm} />	


				
				{/* Home-ontop */}
				<a href={`${process.env.PUBLIC_URL}/`} id="home-ontop" title='Trang chủ' alt='Trang chủ'><i className="fa fa-home"></i></a>	

				{/* Menu-ontop */}
				<i className="fas fa-bars" id="menu-ontop" onClick={(e) => handleShowCategoryMenu(e)} title='Nhóm sản phẩm' alt='Nhóm sản phẩm'></i>
				
				{/* Pages-ontop */}
				<i className="far fa-window-restore" id="pages-ontop" onClick={(e) => handleShowPagesTab(e)} title='Về chúng tôi/ Dịch vụ/ Liên hệ/...' alt='Về chúng tôi/ Dịch vụ/ Liên hệ/...'></i>
				
				{/* Customers talk-ontop */}
				<i className="far fa-comment-dots" id="customers-talk-ontop" onClick={(e) => handleShowCustomersTalk(e)} title='Danh sách khách hàng đã mua' alt='Danh sách khách hàng đã mua'></i>
				
				{/* Goto top button */}
				<i className="fa fa-arrow-up" id="toTop" onClick={handleGoTop} title='Lên đầu trang' alt='Lên đầu trang'></i>
				
				{/* Goto bottom button */}
				<i className="fa fa-arrow-down" id="toBottom" title='Xuống cuối trang' alt='Xuống cuối trang' onClick={handleGoBottom}></i>	

			</div>			 

			{/* Copyright */}
			{showCopyright && (<div className="copyright">&copy; All rights reserved.</div>)}		
			
		</Router>
	));
}

export default App;
