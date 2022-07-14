import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Product from './components/Product';
import Contact from './components/Contact';
import CategoryMenu from './components/CategoryMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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


	return (
		<Router>
			<div id="wrapper">
				<Routes>
					<Route path="/" element={ <Product data={originalData} categoryMenuComponent={<CategoryMenu categoryList={categories} />} /> } exact />
					<Route path="/xtcbanhang.com/" element={ <Product data={originalData} /> } exact />

					<Route path="/category/:categoryName" element={ <Product data={originalData} /> } />
					<Route path="/xtcbanhang.com/category/:categoryName" element={ <Product data={originalData} /> } />
			    </Routes>

				{/* Contact form */}
				<Contact siteInfo={originalData.siteInfo} /> 

				{/* Copyright */}
				<div className="copyright">&copy; All rights reserved.</div>
				
				{/* Goto top button */}
				<i className="fa fa-arrow-up" id="toTop"></i>

			</div>
		</Router>
	);
}

export default App;
