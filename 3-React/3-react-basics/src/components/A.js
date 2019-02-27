import React, { Component } from 'react';
import B from './B'
import ColorContext from './ColorContext';

class A extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <span className="badge badge-dark">A Component </span> :  {this.props.color}
                    <ColorContext.Provider value={this.props.color}>
                        <B />
                    </ColorContext.Provider>
                </div>
            </div>
        );
    }
}

export default A;