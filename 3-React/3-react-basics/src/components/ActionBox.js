import React, { Component } from 'react';
import Action from './Action';
import TotalCountDisplay from './TotalCountDisplay';



class ActionBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalCount: 0
        }
    }
    increment(e) {
        let { totalCount } = this.state;
        totalCount += e.mul;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [1, -2, 3, -4, 5, 6, , 7, 10, -1, -2, -3, -4]
        return numbers.map((n,idx) => <Action key={idx} value={n} onAction={e => this.increment(e)} />)
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">Action Box : <span className="badge badge-warning">{totalCount}</span> </div>
                <div className="card-body">
                    {/* 
                    <Action value={1} onAction={e => this.increment(e)} />
                    <Action value={10} onAction={e => this.increment(e)} /> 
                    */}
                    {this.renderActions()}
                    <div style={{ clear: "both" }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;