import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="alert alert-danger">
                Total Actions :  {value}<hr />
            </div>
        );
    }
}

export default TotalCountDisplay;