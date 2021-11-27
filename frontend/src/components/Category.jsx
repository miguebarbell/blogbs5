import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = (props) => {
    const [blogs, setBlogs] = useState([])
    const [currentCategory, setCurrentCategory] = useState('');
    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(category)

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
                setBlogs(res.data);
            }
            catch (err) {

            }
        };
        fetchData();
    }, [props.match.params.id])

    const getCategoryBlogs = () => {
        let list = []
        let result = []
        blogs.map(blogPost => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success text-capitalize">{blogPost.category}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.created}</div>
                        <p className="mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={blogPost.thumbnail} alt={blogPost.title} style={{width:'200px', height:'250px', borderRadius:'10px', objectFit:'cover'}}/>
                    </div>
                </div>
            )
        })

        for (let i = 0; i < list.length; i+= 2) {
            result.push(
                <div key={i} className="row mb-2">
                    <div className="col-md-6">{list[i]}</div>
                    <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
                </div>
            );
        }
        return result;
    }

    return (
        <div className="container mt-3">
            <h3 className="display-4 text-capitalize">{currentCategory} Category</h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted text-capitalize" to="/category/business/">business</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/diy/">diy</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/fashion/">fashion</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/finance/">finance</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/fitness/">fitness</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/food/">food</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/gaming/">gaming</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/news/">news</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/science/">Science</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/sports/">Sports</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/style/">Style</Link>
					<Link className="p-2 text-muted text-capitalize" to="/category/travel/">Travel</Link>
                    <Link className="p-2 text-muted text-capitalize" to="/category/world/">World</Link>
                </nav>
            </div>
            {getCategoryBlogs()}
        </div>
    )
}

export default Category