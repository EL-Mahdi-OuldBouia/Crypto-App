import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

const News = ({ title, seeMore, image }) => {
    return (
        <div className="news">
            <h3 >Latest Crypto News</h3>
            <img src={image} alt="" width='100px' height='62px' />
            <h4 style={{ margin: '0.5rem', textAlign: "center" }}>{title}</h4>
            <Link to={`${seeMore}`}>See More</Link>
        </div>
    )
}

export default News;