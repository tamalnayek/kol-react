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
    increment() {
        let { totalCount } = this.state;
        totalCount += 1;
        this.setState({ totalCount })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">Action Box : <span className="badge badge-warning">{totalCount}</span> </div>
                <div className="card-body">
                    <Action value={1} onAction={e => this.increment()} />
                    <Action value={10} onAction={e => this.increment()} />
                    <Action value={-1} onAction={e => this.increment()} />
                    <Action value={-10} onAction={e => this.increment()} />
                    <Action value={100} onAction={e => this.increment()} />
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