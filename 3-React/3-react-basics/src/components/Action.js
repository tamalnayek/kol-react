import React, { Component } from 'react';
import './Action.css';

class Action extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        let { count } = this.state;
        count += 1;
        this.setState({ count });
        let { onAction } = this.props;
        let { value } = this.props;
        if (onAction)
            onAction({ mul: value * count });
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = value < 0 ? 'btn btn-warning' : 'btn btn-success'
        return (
            <div className="action">
                <div className="card">
                    <div className="card-body">
                        <button onClick={e => this.increment()} className={className}>{value}</button>
                        &nbsp;&mdash;&nbsp;
                        <span className="badge badge-dark">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Action;