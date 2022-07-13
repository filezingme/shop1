import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

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


	function currencyFormat(num) {
		return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}


	return (
		<div id="wrapper">

			{products.map((product) => (
				<section key={product.id}>
					<header>
						<h1>{product.title}</h1>
					</header>
					<div className="content">
							<section>
								<header>
									<h2>Giá: <span className="price">{currencyFormat(product.priceInfo.price)}</span></h2>
									<h3>Mã sp: <strong>{product.id}</strong><br/>Nhóm: <a href={process.env.PUBLIC_URL + "#"}>{product.category}</a></h3>
									<p>{product.description}</p>
									<h2><a href className="buy">Đặt mua</a></h2>
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

			<section id="contact">
				<header>
					<h2>Liên hệ</h2>
					<h3>Điện Thoại: {siteInfo.phone}</h3>
					<p>Email: {siteInfo.email}</p>
				</header>
				<div className="content">

					<div dangerouslySetInnerHTML={ {__html: siteInfo.description} } />

					<form>
						<div className="fields">
							<div className="field half">
								<input type="text" name="name" id="name" placeholder="Tên" />
							</div>
							<div className="field half">
								<input type="email" name="email" id="email" placeholder="Email" />
							</div>
							<div className="field">
								<textarea name="message" id="message" placeholder="Thông tin liên hệ" rows="7"></textarea>
							</div>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Gửi" className="button primary" /></li>
						</ul>
					</form>
				</div>
				<footer>
					<ul className="items">
						<li>
							<ul className="icons">
								<li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
								<li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-github"><span className="label">GitHub</span></a></li>
								<li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-codepen"><span className="label">Codepen</span></a></li>
							</ul>
						</li>
					</ul>
				</footer>
			</section>

				{/* Copyright */}
			<div className="copyright">&copy; All rights reserved.</div>
			
			<i id="toTop"></i>

		</div>
	);
}

export default App;
