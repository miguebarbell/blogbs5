import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [featuredBlog, setFeaturedBlog] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
				setFeaturedBlog(res.data[0]);
			}
			catch (err) {
			}
		};
		fetchData();
	}, []);


	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
				setBlogs(res.data);
			}
			catch (err) {
			}
		};
		fetchBlogs();
	}, []);

	const getBlogs = () => {
		let list = [];
		let result = [];
		blogs.map(blogPost => {
			return list.push(
				<div className="mt-3 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-success">{blogPost.category}</strong>
						<h3 className="mb-0">{blogPost.title}</h3>
						<div className="mb-1 text-muted">{blogPost.created}</div>
						<p className="mb-auto">{blogPost.excerpt}</p>
						<Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
					</div>
					<div className="col-auto d-none d-lg-block">
						<img src={blogPost.thumbnail} alt={blogPost.title} style={{width:'200px', height:'250px', objectFit:'cover'}}/>
					</div>
				</div>
			);
		});
		for (let i = 0; i < list.length; i+= 2) {
			result.push(
				<div key={i} className="row mb-2">
					<div className="col-md-6">{list[i]}</div>
					<div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
				</div>
			);
		}
		return result;
	};

	return (

		<div className="container mt-3">
			<div className="nav-scroller py-10 mb-2">
				<nav className="nav d-flex jutify-content-between">
					<Link className="p-2 text-muted text-capitalize" to="/category/business/">business</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/diy/">diy</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/fashion/">fashion</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/finance/">finance</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/fitness/">fitness</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/food/">food</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/gaming/">gaming</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/news/">news</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/science/">Science</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/style/">Style</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/travel/">Travel</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/world/">World</Link>
				</nav>
			</div>
			<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div className="col-md-6">
				<div className="h-100 p-5 text-white bg-dark rounded-3">
					<h2>{featuredBlog.title}</h2>
					<p>{featuredBlog.excerpt}</p>
					<Link to={`/blog/${featuredBlog.slug}`} className="btn btn-outline-light" type="button">Continue Reading</Link>
				</div>
			</div>
			</div>
			{getBlogs()}
		</div>
	);
};

export default Blog;