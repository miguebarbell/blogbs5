import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="px-4 pt-5 my-5 text-center border-bottom">
			<h1 className="display-4 fw-bold">Welcome to the Blog</h1>
			<div className="col-lg-6 mx-auto">
				<p className="lead mb-4">This is an example of a blog built with a Django backend and a Reactjs frontend, and for simplicity of the styling, the last bootstrap.</p>
				<p className="lead mb-4">Also, I populated the categories with post from other sources, so the work in every post isn't mine.</p>
				<p className="lead mb-4">Enjoy it!.</p>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
					<Link to="/blog"><button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Go to the Blog</button></Link>
					<a href="https://www.migue.pro"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Go to migue.pro</button></a>
				</div>
			</div>
			<div className="overflow-hidden" style={{maxHeight: "30vh"}}>
				<div className="container px-5">
					<img src="https://www.befunky.com/images/wp/wp-2017-10-Blog-Header-Image-1.jpg?auto=webp&format=jpg&width=950" className="img-fluid border rounded-3 shadow-lg mb-4" alt="blog picture" width="700" height="500" loading="lazy"/>
				</div>
			</div>
		</div>
	)};

export default Home
