import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

	const [siteInfo, setSiteInfo] = useState({})
	const [products, setProducts] = useState([])


	useEffect(() => {
		
		async function fetchData() {
			const { data } = await axios.get(process.env.PUBLIC_URL+'/data.json')
			setSiteInfo(data.siteInfo)
			setProducts(data.products)

			//set page title
			document.title = data.siteInfo.pageTitle
		}

		fetchData();

	}, [])


	return (
		<Router>
			<div id="wrapper">
				<Routes>
					<Route path="/" element={ <Product products={products} siteInfo={siteInfo} /> } exact />
					<Route path="/xtcbanhang.com/" element={ <Product products={products} siteInfo={siteInfo} /> } exact />

					<Route path="/category/:categoryName" element={ <Product products={products} siteInfo={siteInfo} /> } />
					<Route path="/xtcbanhang.com/category/:categoryName" element={ <Product products={products} siteInfo={siteInfo} /> } />
			    </Routes>

				{/* Contact form */}
				<Contact siteInfo={siteInfo} /> 

				{/* Copyright */}
				<div className="copyright">&copy; All rights reserved.</div>
				
				{/* Goto top button */}
				<i id="toTop"></i>

			</div>
		</Router>
	);
}

export default App;
