import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.css';

class Review extends Component {

    renderStars(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(<i style={{ color: 'red' }} className="fa fa-star" key={i}></i>)
        }
        return arr;
    }

    render() {
        let { value: review } = this.props;
        return (
            <div className="alert alert-info">
                {this.renderStars(review.stars)} &mdash; <span className="badge badge-dark">{review.author}</span>
                <hr />
                <p>{review.body}</p>
            </div>
        );
    }
}

export default Review;