import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let { children } = this.props;
        return children.map((child, idx) => {
            return (
                <div className="list-group-item">
                    {child}
                </div>
            )
        })
    }
    render() {
        return (
            <div >
                <div style={{ padding: '10px', margin: '5px' }} className="bg bg-info">
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

export default Box;