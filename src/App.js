import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product';
import CategoryMenu from './components/CategoryMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery';
import ContactForm from './components/ContactForm';
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

	const goTop = () => {
		$('html, body').animate({scrollTop : 0},200);
		return false;
	}

	const goBottom = () => {
		$('html, body').animate({scrollTop : $(document).height()},200);
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
	const [show, setShow] = useState(false);
	const [product, setProduct] = useState({});
	const [contactFormConfig, setContactFormConfig] = useState({});

	const showContactForm = (e, product, contactFormConfig) => {
		e.preventDefault()
		setShow(true)
		setProduct(product)
		setContactFormConfig(contactFormConfig)
	}
	const hideContactForm = () => {
		setShow(false)
	}
	
	//Category menu
	const [showMenu, setShowMenu] = useState(false);
	const showCategoryMenu = (e) => {
		e.preventDefault()
		setShowMenu(true)
	}
	const hideCategoryMenu = () => {
		setShowMenu(false)
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
	const hidePagesTab = () => {
		setShowPagesTab(false)
	}
	
	//Customers Talk
	const [showCustomersTalk, setShowCustomersTalk] = useState(false);
	const handleShowCustomersTalk = (e) => {
		e.preventDefault()
		setShowCustomersTalk(true)
	}
	const hideCustomersTalk = () => {
		setShowCustomersTalk(false)
	}
	
	//Product Read More
	const [showProductReadMore, setShowProductReadMore] = useState(false);
	const handleProductReadMore = (e, product) => {
		e.preventDefault()
		setShowProductReadMore(true)
		setProduct(product)
	}
	const hideProductReadMore = () => {
		setShowProductReadMore(false)
	}


	return (originalData && (
		<Router basename={process.env.PUBLIC_URL}>
			<div id="wrapper">
				<Routes>
					<Route path="/" element={ <Product data={originalData} showContactForm={showContactForm} handleProductReadMore={handleProductReadMore} callbackActivedMenuItem={handleActivedMenuItem} /> } exact > 
						<Route path="/:page/" element={ <Product data={originalData} showContactForm={showContactForm} handleProductReadMore={handleProductReadMore} callbackActivedMenuItem={handleActivedMenuItem} /> } />
					</Route>

					<Route path="/category/:categoryName/" element={ <Product data={originalData} showContactForm={showContactForm} handleProductReadMore={handleProductReadMore} callbackActivedMenuItem={handleActivedMenuItem} exact /> } >
						<Route path="/category/:categoryName/:page/" element={ <Product data={originalData} showContactForm={showContactForm} handleProductReadMore={handleProductReadMore} callbackActivedMenuItem={handleActivedMenuItem} /> } />
					</Route>

					<Route path="*" element={ <PageNotFound showCopyright={handleShowCopyright} /> } />
			    </Routes>



				{/* Menu */}
				<CategoryMenu categoryList={categories} handleClose={hideCategoryMenu} isShow={showMenu} activedItem={activedMenuItem} />

				{/* Contact form */}
				<ContactForm siteInfo={originalData.siteInfo} handleClose={hideContactForm} isShow={show} product={product} contactFormConfig={contactFormConfig} />	

				{/* Pages tab */}
				<PagesTab handleClose={hidePagesTab} isShowPagesTab={showPagesTab} pagesTab={originalData.pagesTab} contactFormConfig={originalData.contactFormConfig} />	

				{/* Customers talk */}
				<CustomersTalk customersTalkList={originalData.customersTalk} handleClose={hideCustomersTalk} isShow={showCustomersTalk}  />	

				{/* Product Read More */}
				<ProductReadMore handleClose={hideProductReadMore} isShow={showProductReadMore} product={product} />	


				
				{/* Home-ontop */}
				<a href={`${process.env.PUBLIC_URL}/`} id="home-ontop" title='Trang chủ' alt='Trang chủ'><i className="fa fa-home"></i></a>	

				{/* Menu-ontop */}
				<i className="fas fa-bars" id="menu-ontop" onClick={(e) => showCategoryMenu(e)} title='Nhóm sản phẩm' alt='Nhóm sản phẩm'></i>
				
				{/* Pages-ontop */}
				<i className="far fa-window-restore" id="pages-ontop" onClick={(e) => handleShowPagesTab(e)} title='Về chúng tôi/ Dịch vụ/ Liên hệ/...' alt='Về chúng tôi/ Dịch vụ/ Liên hệ/...'></i>
				
				{/* Customers talk-ontop */}
				<i className="far fa-comment-dots" id="customers-talk-ontop" onClick={(e) => handleShowCustomersTalk(e)} title='Danh sách khách hàng đã mua' alt='Danh sách khách hàng đã mua'></i>
				
				{/* Goto top button */}
				<i className="fa fa-arrow-up" id="toTop" onClick={goTop} title='Lên đầu trang' alt='Lên đầu trang'></i>
				
				{/* Goto bottom button */}
				<i className="fa fa-arrow-down" id="toBottom" title='Xuống cuối trang' alt='Xuống cuối trang' onClick={goBottom}></i>				 

				{/* Copyright */}
				{showCopyright && (<div className="copyright">&copy; All rights reserved.</div>)}		

			</div>
		</Router>
	));
}

export default App;
