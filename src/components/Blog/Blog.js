import React from 'react';
import Nav from '../Home/Nav/Nav';
import './Blog.css'

const Blog = () => {
    return (
        <div className="bgMain text-center" style={{ color: '#fff', height: '100vh' }}>
            <Nav/>
            <div className="blog-content">
                <h1>Blog coming soon...</h1>
            </div>
        </div>
    );
};

export default Blog;