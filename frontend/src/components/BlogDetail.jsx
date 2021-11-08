import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = (props) => {
	const [blog, setBlog] = useState({});

	useEffect(() => {
		const slug = props.match.params.id;

		const fetchData = async () => {
			try {
				const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
				setBlog(res.data);
			}
			catch (err) {

			}
		};
		fetchData();
	}, [props.match.params.id]);

	const createBlog = () => {
		return {__html: blog.content};
	};
	return (
		<div className="container mt-3">
			<hi className="display-2 ">{blog.title}</hi>
			<h2 className="text-muted mt-3 text-capitalize">Category: <Link to={`/category/${blog.category}`}>{blog.category}</Link></h2>
			<h4>{blog.created}</h4>
			<div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()}></div>
			<hr/>
			<p className="lead md-5"><Link to="/blog/" className="font-weight-bold">Back to Blogs</Link></p>
		</div>
	);
};

export default BlogDetail;