import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Home</Link>
				<Link className="navbar-brand" exact to="/blog">Blog / Categories</Link>
				<a className="navbar-brand" href="https://www.migue.pro">miguepro</a>
			</div>
		</nav>

	);
};

export default Navbar;