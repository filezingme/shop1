import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product';
import CategoryMenu from './components/CategoryMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery';
import ContactForm from './components/ContactForm';
import PageNotFound from './components/PageNotFound';

function App() {

	const [originalData, setOriginalData] = useState({})

	const [categories, setCategories] = useState([])


	useEffect(() => {
		
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
						var obj = {
							name: category, 
							count: data.products.filter(x => x.category === category).length
						};
						array.push(obj);
					});

					setCategories(array)
				}
			}
		}

		fetchData();

	}, [])

	const goTop = () => {
		$('html, body').animate({scrollTop : 0},100);
		return false;
	}

	const goBottom = () => {
		$('html, body').animate({scrollTop : $(document).height()},100);
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

	
	const [showMenu, setShowMenu] = useState(false);

	const showCategoryMenu = (e) => {
		e.preventDefault()
		setShowMenu(true)
	}
	const hideCategoryMenu = () => {
		setShowMenu(false)
	}
	
	const [showCopyright, setShowCopyright] = useState(true);
	const handleShowCopyright = (showCopyright) => {
		setShowCopyright(showCopyright)
	}


	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div id="wrapper">
				<Routes>
					<Route path="/" element={ <Product data={originalData} showContactForm={showContactForm} /> } exact />
					<Route path="/category/:categoryName" element={ <Product data={originalData} showContactForm={showContactForm} /> } />
					<Route path="*" element={ <PageNotFound showCopyright={handleShowCopyright} /> } />
			    </Routes>

				{/* Menu */}
				<CategoryMenu categoryList={categories} handleClose={hideCategoryMenu} isShow={showMenu} />

				{/* Contact form */}
				<ContactForm siteInfo={originalData.siteInfo} handleClose={hideContactForm} isShow={show} product={product} contactFormConfig={contactFormConfig} />				 

				{/* Copyright */}
				{showCopyright && (<div className="copyright">&copy; All rights reserved.</div>)}				

				<a href="/#" className="menu-toggle menu-ontop" onClick={(e) => showCategoryMenu(e)}><span></span></a>
				
				{/* Goto top button */}
				<i className="fa fa-arrow-up" id="toTop" onClick={goTop}></i>
				<i className="fa fa-arrow-down" id="toBottom" onClick={goBottom}></i>

			</div>
		</Router>
	);
}

export default App;
