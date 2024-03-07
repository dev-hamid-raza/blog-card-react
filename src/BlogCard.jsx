import React from 'react'
import './BlogCard.css'

export default function BlogCard(props) {
    return (
        <div className='blog-card'>
                <div className="image-box">
                    <img src={props.image} alt="" />
                </div>
                <div className="tag">
                    <p>{props.tag}</p>
                </div>
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <div className="details">
                    <p>{props.details}</p>
                </div>
                <div className="bar"></div>
                <div className="author">
                    <h3>{props.author}</h3>
                </div>
        </div>
    )
}
