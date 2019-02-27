import React, { Component } from 'react';
import ColorContex from './ColorContext';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <span className="badge badge-dark">C Component</span>
                        <ColorContext.Consumer>
                            {value => value}
                        </ColorContext.Consumer>
                    </div>
                </div>
            </div>
        );
    }
}

export default C;